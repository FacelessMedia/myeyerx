const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ── Config ──────────────────────────────────────────────────────────────────
const envPath = path.join(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  line = line.trim();
  if (line && !line.startsWith('#')) {
    const [key, ...valueParts] = line.split('=');
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const USERNAME = envVars.DATAFORSEO_USERNAME;
const PASSWORD = envVars.DATAFORSEO_PASSWORD;
const AUTH = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

const OUTPUT_DIR = path.join(__dirname, 'output', 'competitor-research');
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const SERVED_STATES = [
  'Alabama','Arizona','Arkansas','California','Connecticut','Delaware',
  'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','Ohio','Oklahoma','Oregon',
  'Pennsylvania','Rhode Island','South Carolina','Tennessee','Texas',
  'Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const OUR_DOMAINS = ['myeyerx.net', 'www.myeyerx.net', 'myeyerx.com', 'www.myeyerx.com'];

// Exemption-only queries (4 original + 3 new)
function getExemptionQueries(state) {
  return [
    // Original exemption queries (already cached)
    `${state} window tint medical exemption`,
    `${state} tint exemption`,
    `medical tint exemption ${state}`,
    `${state} window tint waiver`,
    // NEW tighter queries
    `${state} tint exemption online`,
    `${state} medical window tint prescription`,
    `${state} window tint medical waiver`,
  ];
}

// ── Helpers ─────────────────────────────────────────────────────────────────
function apiPost(endpoint, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const options = {
      hostname: 'api.dataforseo.com',
      path: endpoint,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${AUTH}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', (chunk) => { responseData += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(responseData)); }
        catch (e) { reject(new Error(`Parse error: ${responseData.substring(0, 300)}`)); }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function fetchUrl(url, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    const timer = setTimeout(() => { reject(new Error('Timeout')); }, timeout);
    const req = lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        clearTimeout(timer);
        const redirectUrl = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        fetchUrl(redirectUrl, timeout).then(resolve).catch(reject);
        return;
      }
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => { clearTimeout(timer); resolve(body); });
    });
    req.on('error', (e) => { clearTimeout(timer); reject(e); });
  });
}

function saveJson(filename, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), JSON.stringify(data, null, 2));
}

function loadJson(filename) {
  const p = path.join(OUTPUT_DIR, filename);
  if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf8'));
  return null;
}

function analyzeHtml(html, url) {
  const cleanHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  const textOnly = cleanHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(/\s+/).filter(w => w.length > 1);
  const h1s = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h2s = (html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h3s = (html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaTitle = titleMatch ? titleMatch[1].trim() : '';
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i)
    || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  const metaDescription = descMatch ? descMatch[1].trim() : '';
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  const schemaTypes = [];
  for (const match of jsonLdMatches) {
    try {
      const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      const parsed = JSON.parse(content);
      if (parsed['@type']) schemaTypes.push(parsed['@type']);
      if (Array.isArray(parsed['@graph'])) parsed['@graph'].forEach(item => { if (item['@type']) schemaTypes.push(item['@type']); });
    } catch (e) {}
  }
  const internalLinks = (html.match(/<a[^>]*href=["'][^"']*["']/gi) || [])
    .filter(a => { const m = a.match(/href=["']([^"']*)/i); if (!m) return false; const h = m[1]; return h.startsWith('/') || h.includes(new URL(url).hostname); }).length;
  const externalLinks = (html.match(/<a[^>]*href=["']https?:\/\/[^"']*["']/gi) || [])
    .filter(a => { const m = a.match(/href=["']([^"']*)/i); if (!m) return false; try { return new URL(m[1]).hostname !== new URL(url).hostname; } catch { return false; } }).length;
  const images = (html.match(/<img[^>]*>/gi) || []).length;
  const hasFaqSection = /faq|frequently\s+asked/i.test(html);
  const hasFaqSchema = schemaTypes.some(t => /FAQ/i.test(typeof t === 'string' ? t : JSON.stringify(t)));
  const hasAuthor = /author|written\s+by|reviewed\s+by|medically\s+reviewed/i.test(html);
  const ctaButtons = (html.match(/<(button|a)[^>]*class[^>]*(btn|cta|get-started|apply|book|order|buy|start)[^>]*>/gi) || []).length;
  const hasForms = /<form/i.test(html);
  const hasPhone = /\(\d{3}\)\s*\d{3}[-.]\d{4}|\d{3}[-.]\d{3}[-.]\d{4}/g.test(textOnly);
  const hasLastUpdated = /(?:last\s+)?(?:updated|modified|reviewed)\s*:?\s*(\w+\s+\d{1,2},?\s+\d{4})/i.test(textOnly);
  const priceMatch = textOnly.match(/\$\d+(?:\.\d{2})?/g);
  const prices = priceMatch ? [...new Set(priceMatch)] : [];
  // Detect if it's an exemption SERVICE page (sells the exemption, like MyEyeRx does)
  const isExemptionService = /(?:get\s+your|order|apply\s+(?:now|online)|start\s+your|purchase|buy|telehealth|telemedicine|online\s+(?:consultation|evaluation|assessment))/i.test(textOnly)
    && /(?:exemption|waiver|prescription|medical\s+tint)/i.test(textOnly);
  // Detect if it's a government/DMV page
  const isGovPage = /\.gov(?:\/|$)/i.test(url);
  // Detect if it's informational only (no service)
  const isInfoOnly = !isExemptionService && !isGovPage;

  return {
    url, metaTitle, metaTitleLength: metaTitle.length, metaDescription, metaDescriptionLength: metaDescription.length,
    wordCount: words.length, h1s, h1Count: h1s.length, h2s, h2Count: h2s.length, h3s, h3Count: h3s.length,
    schemaTypes: schemaTypes.flat(), internalLinks, externalLinks, images,
    hasFaqSection, hasFaqSchema, hasAuthor, ctaButtons, hasForms, hasPhone, hasLastUpdated, prices,
    isExemptionService, isGovPage, isInfoOnly,
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 1: Run new exemption queries + re-filter existing
// ══════════════════════════════════════════════════════════════════════════════
async function phase1() {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 1: New Exemption Queries + Re-filter');
  console.log('='.repeat(70) + '\n');

  const oldSerp = loadJson('serp-results.json') || {};
  let exemptionSerp = loadJson('serp-results-exemption.json') || {};
  let newCalls = 0;

  for (const state of SERVED_STATES) {
    if (!exemptionSerp[state]) exemptionSerp[state] = {};
    const queries = getExemptionQueries(state);

    for (const query of queries) {
      // Check if we already have this result (from cache or previous run)
      if (exemptionSerp[state][query]) continue;

      // Check if it exists in old SERP data (for the 4 original exemption queries)
      if (oldSerp[state] && oldSerp[state][query]) {
        exemptionSerp[state][query] = oldSerp[state][query];
        continue;
      }

      // Need to fetch from API (only the 3 new queries)
      newCalls++;
      process.stdout.write(`  [${newCalls}] ${state} — "${query}" ... `);

      try {
        const resp = await apiPost('/v3/serp/google/organic/live/advanced', [{
          keyword: query,
          location_code: 2840,
          language_code: 'en',
          depth: 10,
        }]);

        const items = resp.tasks?.[0]?.result?.[0]?.items || [];
        const organicResults = items
          .filter(i => i.type === 'organic')
          .slice(0, 5)
          .map(i => ({
            position: i.rank_group,
            url: i.url,
            domain: i.domain,
            title: i.title,
            description: i.description,
            breadcrumb: i.breadcrumb,
          }));

        exemptionSerp[state][query] = {
          query, timestamp: new Date().toISOString(),
          totalResults: resp.tasks?.[0]?.result?.[0]?.items_count || 0,
          top5: organicResults,
        };
        console.log(`${organicResults.length} results`);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        exemptionSerp[state][query] = { query, error: err.message, timestamp: new Date().toISOString() };
      }

      if (newCalls % 10 === 0) saveJson('serp-results-exemption.json', exemptionSerp);
      await sleep(600);
    }
  }

  saveJson('serp-results-exemption.json', exemptionSerp);
  console.log(`\nPhase 1 complete: ${newCalls} new API calls. ${SERVED_STATES.length * 7} total exemption queries.`);
  return exemptionSerp;
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 2: Build exemption-only competitor rankings
// ══════════════════════════════════════════════════════════════════════════════
function phase2BuildRankings(exemptionSerp) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 2: Build Exemption-Only Competitor Rankings');
  console.log('='.repeat(70) + '\n');

  const stateCompetitors = {};
  const allDomains = new Set();
  const directServiceCompetitors = new Set(); // domains that offer exemption services like MyEyeRx

  for (const state of SERVED_STATES) {
    const domainScores = {};
    const queryResults = exemptionSerp[state] || {};
    const queryCount = Object.keys(queryResults).length;

    for (const [query, data] of Object.entries(queryResults)) {
      if (!data.top5) continue;
      for (const result of data.top5) {
        const domain = result.domain?.replace(/^www\./, '');
        if (!domain || OUR_DOMAINS.includes(result.domain)) continue;
        // Skip reddit and facebook — they're UGC, not real competitors
        if (['reddit.com', 'facebook.com', 'youtube.com', 'twitter.com', 'x.com', 'quora.com', 'tiktok.com'].includes(domain)) continue;
        if (!domainScores[domain]) {
          domainScores[domain] = { domain, appearances: 0, totalPosition: 0, urls: new Set(), titles: new Set(), queries: new Set() };
        }
        domainScores[domain].appearances++;
        domainScores[domain].totalPosition += result.position;
        domainScores[domain].urls.add(result.url);
        domainScores[domain].titles.add(result.title);
        domainScores[domain].queries.add(query);
      }
    }

    const ranked = Object.values(domainScores)
      .map(d => ({
        ...d,
        avgPosition: d.totalPosition / d.appearances,
        urls: [...d.urls],
        titles: [...d.titles],
        queries: [...d.queries],
        queryCount,
      }))
      .sort((a, b) => b.appearances - a.appearances || a.avgPosition - b.avgPosition)
      .slice(0, 5);

    stateCompetitors[state] = ranked;
    ranked.forEach(r => allDomains.add(r.domain));
  }

  saveJson('state-competitors-exemption.json', stateCompetitors);
  console.log(`Found ${allDomains.size} unique exemption competitor domains (excluding UGC sites)`);
  return { stateCompetitors, allDomains };
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 3: Pull keywords for new domains
// ══════════════════════════════════════════════════════════════════════════════
async function phase3Keywords(allDomains) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 3: Competitor Keyword Extraction');
  console.log('='.repeat(70) + '\n');

  let domainKeywords = loadJson('domain-keywords.json') || {};
  let calls = 0;

  for (const domain of allDomains) {
    if (domainKeywords[domain]) {
      console.log(`  [cached] ${domain}`);
      continue;
    }

    calls++;
    process.stdout.write(`  [${calls}] Pulling keywords for ${domain} ... `);

    try {
      const resp = await apiPost('/v3/dataforseo_labs/google/ranked_keywords/live', [{
        target: domain,
        location_code: 2840,
        language_code: 'en',
        limit: 500,
        item_types: ['organic'],
        filters: [
          ['keyword_data.keyword', 'like', '%exemption%'],
          'or',
          ['keyword_data.keyword', 'like', '%waiver%'],
          'or',
          ['keyword_data.keyword', 'like', '%medical%tint%'],
          'or',
          ['keyword_data.keyword', 'like', '%tint%exemption%'],
          'or',
          ['keyword_data.keyword', 'like', '%tint%prescription%'],
        ],
      }]);

      const items = resp.tasks?.[0]?.result?.[0]?.items || [];
      const keywords = items.map(i => ({
        keyword: i.keyword_data?.keyword,
        searchVolume: i.keyword_data?.keyword_info?.search_volume || 0,
        cpc: i.keyword_data?.keyword_info?.cpc || 0,
        competition: i.keyword_data?.keyword_info?.competition || 0,
        position: i.ranked_serp_element?.serp_item?.rank_group,
        url: i.ranked_serp_element?.serp_item?.url,
      }));

      domainKeywords[domain] = {
        domain,
        totalKeywords: resp.tasks?.[0]?.result?.[0]?.total_count || 0,
        filteredKeywords: keywords.length,
        keywords,
        timestamp: new Date().toISOString(),
      };

      console.log(`${keywords.length} exemption/waiver keywords (${resp.tasks?.[0]?.result?.[0]?.total_count || 0} total)`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      domainKeywords[domain] = { domain, error: err.message, keywords: [] };
    }

    if (calls % 5 === 0) saveJson('domain-keywords-exemption.json', domainKeywords);
    await sleep(800);
  }

  saveJson('domain-keywords-exemption.json', domainKeywords);
  console.log(`\nPhase 3 complete: ${calls} new API calls`);
  return domainKeywords;
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 4: Page content analysis for new URLs
// ══════════════════════════════════════════════════════════════════════════════
async function phase4PageAnalysis(stateCompetitors) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 4: Page Content Analysis');
  console.log('='.repeat(70) + '\n');

  let pageAnalysis = loadJson('page-analysis.json') || {};
  const urlsToAnalyze = new Set();

  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      comp.urls.forEach(url => {
        if (!pageAnalysis[url]) urlsToAnalyze.add(url);
      });
    }
  }

  console.log(`${urlsToAnalyze.size} new competitor pages to analyze\n`);
  let analyzed = 0;

  for (const url of urlsToAnalyze) {
    analyzed++;
    process.stdout.write(`  [${analyzed}/${urlsToAnalyze.size}] ${url.substring(0, 80)}... `);

    try {
      const html = await fetchUrl(url);
      pageAnalysis[url] = analyzeHtml(html, url);
      console.log(`${pageAnalysis[url].wordCount} words, ${pageAnalysis[url].h2Count} H2s`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      pageAnalysis[url] = { url, error: err.message, wordCount: 0 };
    }

    if (analyzed % 10 === 0) saveJson('page-analysis.json', pageAnalysis);
    await sleep(500);
  }

  saveJson('page-analysis.json', pageAnalysis);
  console.log(`\nPhase 4 complete: ${analyzed} new pages analyzed`);
  return pageAnalysis;
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 5: Generate Exemption-Focused Reports
// ══════════════════════════════════════════════════════════════════════════════
function phase5Reports(stateCompetitors, domainKeywords, pageAnalysis) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 5: Exemption-Focused Report Generation');
  console.log('='.repeat(70) + '\n');

  generateExemptionCsv(stateCompetitors, domainKeywords);
  generateExemptionReport(stateCompetitors, domainKeywords, pageAnalysis);
  console.log('Phase 5 complete');
}

function generateExemptionCsv(stateCompetitors, domainKeywords) {
  const rows = ['Domain,Keyword,Search Volume,Position,URL,CPC,Competition'];
  const seenDomains = new Set();

  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      seenDomains.add(comp.domain);
    }
  }

  for (const domain of seenDomains) {
    const data = domainKeywords[domain];
    if (!data?.keywords) continue;
    for (const kw of data.keywords) {
      rows.push([
        `"${domain}"`,
        `"${(kw.keyword || '').replace(/"/g, '""')}"`,
        kw.searchVolume || 0,
        kw.position || '',
        `"${kw.url || ''}"`,
        kw.cpc || 0,
        kw.competition || 0,
      ].join(','));
    }
  }

  const filepath = path.join(OUTPUT_DIR, 'exemption-keywords-master.csv');
  fs.writeFileSync(filepath, rows.join('\n'));
  console.log(`  ✅ Exemption Keywords CSV: ${rows.length - 1} rows`);
}

function generateExemptionReport(stateCompetitors, domainKeywords, pageAnalysis) {
  const lines = [];
  lines.push('# Exemption-Focused Competitive Analysis Report');
  lines.push(`\n*Generated: ${new Date().toISOString()}*`);
  lines.push('*Filtered to exemption/waiver/medical queries only (law queries excluded)*\n');
  lines.push('---\n');

  // ── Identify direct service competitors ──
  const allDomains = new Set();
  const domainStateCount = {};
  const domainType = {}; // gov, service, info

  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      allDomains.add(comp.domain);
      domainStateCount[comp.domain] = (domainStateCount[comp.domain] || 0) + 1;
      // Classify domain type
      if (!domainType[comp.domain]) {
        const pa = comp.urls.map(u => pageAnalysis[u]).find(p => p && p.wordCount > 0);
        if (comp.domain.endsWith('.gov')) domainType[comp.domain] = 'gov';
        else if (pa?.isExemptionService) domainType[comp.domain] = 'service';
        else domainType[comp.domain] = 'info';
      }
    }
  }

  // Separate into categories
  const serviceCompetitors = Object.entries(domainStateCount)
    .filter(([d]) => domainType[d] === 'service')
    .sort((a, b) => b[1] - a[1]);
  const govSites = Object.entries(domainStateCount)
    .filter(([d]) => domainType[d] === 'gov')
    .sort((a, b) => b[1] - a[1]);
  const infoSites = Object.entries(domainStateCount)
    .filter(([d]) => domainType[d] !== 'gov' && domainType[d] !== 'service')
    .sort((a, b) => b[1] - a[1]);

  // ── Executive Summary ──
  lines.push('## Executive Summary\n');
  lines.push(`- **${SERVED_STATES.length} states** analyzed with **7 exemption-specific queries** each (294 total)`);
  lines.push(`- **${allDomains.size} unique competitor domains** (UGC sites like Reddit/Facebook excluded)`);
  lines.push(`- **Direct service competitors** (sell exemptions like MyEyeRx): ${serviceCompetitors.length}`);
  lines.push(`- **Government/DMV sites**: ${govSites.length}`);
  lines.push(`- **Informational/content sites**: ${infoSites.length}\n`);

  // ── DIRECT SERVICE COMPETITORS (most important section) ──
  lines.push('---\n');
  lines.push('## Direct Service Competitors (Sell Exemptions)\n');
  lines.push('These are the domains that directly compete with MyEyeRx by offering online tint exemption services.\n');

  if (serviceCompetitors.length > 0) {
    lines.push('| Domain | States Present | Exemption KWs | Total Domain KWs |');
    lines.push('|--------|---------------|--------------|-----------------|');
    for (const [domain, count] of serviceCompetitors) {
      const kwData = domainKeywords[domain];
      lines.push(`| **${domain}** | ${count}/${SERVED_STATES.length} | ${kwData?.filteredKeywords || 0} | ${kwData?.totalKeywords || 0} |`);
    }
  }

  // Detailed analysis of each service competitor
  for (const [domain] of serviceCompetitors) {
    const statesPresent = SERVED_STATES.filter(s =>
      (stateCompetitors[s] || []).some(c => c.domain === domain)
    );
    const topUrls = new Set();
    for (const s of statesPresent) {
      const comp = stateCompetitors[s].find(c => c.domain === domain);
      if (comp) comp.urls.forEach(u => topUrls.add(u));
    }
    
    lines.push(`\n### ${domain}\n`);
    lines.push(`- **States served**: ${statesPresent.join(', ')}`);
    
    for (const url of [...topUrls].slice(0, 3)) {
      const pa = pageAnalysis[url];
      if (pa && pa.wordCount > 50) {
        lines.push(`- **Page**: \`${url}\``);
        lines.push(`  - Words: **${pa.wordCount}** | H2s: ${pa.h2Count} | Images: ${pa.images} | Internal links: ${pa.internalLinks}`);
        lines.push(`  - FAQ: ${pa.hasFaqSection ? '✅' : '❌'} | Author: ${pa.hasAuthor ? '✅' : '❌'} | Schema: ${(pa.schemaTypes || []).join(', ') || 'none'}`);
        lines.push(`  - Prices mentioned: ${(pa.prices || []).join(', ') || 'none'}`);
      }
    }

    // Their top exemption keywords
    const kwData = domainKeywords[domain];
    if (kwData?.keywords?.length > 0) {
      const topKws = kwData.keywords
        .filter(k => k.searchVolume > 0)
        .sort((a, b) => b.searchVolume - a.searchVolume)
        .slice(0, 10);
      if (topKws.length > 0) {
        lines.push(`\n**Top exemption keywords:**\n`);
        lines.push('| Keyword | Search Vol | Position |');
        lines.push('|---------|-----------|----------|');
        for (const kw of topKws) {
          lines.push(`| ${kw.keyword} | ${kw.searchVolume} | ${kw.position || 'N/A'} |`);
        }
      }
    }
  }

  // ── Government/DMV sites ──
  lines.push('\n---\n');
  lines.push('## Government/DMV Sites in Exemption SERPs\n');
  lines.push('These are the official state pages that often rank #1 for exemption queries. They represent the "authority ceiling" — hard to outrank on their own state queries but valuable for link-building and content references.\n');
  
  if (govSites.length > 0) {
    lines.push('| Domain | States | Notes |');
    lines.push('|--------|--------|-------|');
    for (const [domain, count] of govSites.slice(0, 25)) {
      lines.push(`| ${domain} | ${count} | Official state resource |`);
    }
  }

  // ── Informational competitors ──
  lines.push('\n---\n');
  lines.push('## Informational/Content Competitors\n');
  lines.push('These rank for exemption queries with informational content but don\'t sell exemption services.\n');

  const topInfoSites = infoSites.slice(0, 20);
  if (topInfoSites.length > 0) {
    lines.push('| Domain | States Present | Type |');
    lines.push('|--------|---------------|------|');
    for (const [domain, count] of topInfoSites) {
      lines.push(`| **${domain}** | ${count}/${SERVED_STATES.length} | Content/Info |`);
    }
  }

  // ── Content Benchmarks (exemption pages ONLY) ──
  lines.push('\n---\n');
  lines.push('## Exemption Page Content Benchmarks\n');
  lines.push('Based ONLY on pages ranking for exemption/waiver queries (law pages excluded).\n');

  // Collect only exemption competitor page analysis
  const exemptionPages = [];
  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      for (const url of comp.urls) {
        const pa = pageAnalysis[url];
        if (pa && pa.wordCount > 100 && !exemptionPages.find(p => p.url === url)) {
          exemptionPages.push(pa);
        }
      }
    }
  }

  if (exemptionPages.length > 0) {
    const sorted = [...exemptionPages].sort((a, b) => a.wordCount - b.wordCount);
    const avgWc = Math.round(exemptionPages.reduce((s, p) => s + p.wordCount, 0) / exemptionPages.length);
    const medianWc = sorted[Math.floor(sorted.length / 2)]?.wordCount || 0;
    const p25Wc = sorted[Math.floor(sorted.length * 0.25)]?.wordCount || 0;
    const p75Wc = sorted[Math.floor(sorted.length * 0.75)]?.wordCount || 0;
    const maxWc = Math.max(...exemptionPages.map(p => p.wordCount));
    const minWc = Math.min(...exemptionPages.map(p => p.wordCount));

    lines.push(`### Word Count (${exemptionPages.length} exemption pages analyzed)\n`);
    lines.push('| Metric | Value | Implication for MyEyeRx |');
    lines.push('|--------|-------|------------------------|');
    lines.push(`| **Average** | **${avgWc} words** | Minimum target for state pages |`);
    lines.push(`| Median | ${medianWc} words | Beat this to outperform 50% |`);
    lines.push(`| 25th %ile | ${p25Wc} words | Low bar — many thin pages |`);
    lines.push(`| **75th %ile** | **${p75Wc} words** | **Target for competitive edge** |`);
    lines.push(`| Max | ${maxWc} words | Top-end comprehensive content |`);
    lines.push(`| Min | ${minWc} words | Thinnest ranking page |`);

    const withFaq = exemptionPages.filter(p => p.hasFaqSection).length;
    const withFaqSchema = exemptionPages.filter(p => p.hasFaqSchema).length;
    const withAuthor = exemptionPages.filter(p => p.hasAuthor).length;
    const withSchema = exemptionPages.filter(p => (p.schemaTypes || []).length > 0).length;
    const withForms = exemptionPages.filter(p => p.hasForms).length;
    const withPhone = exemptionPages.filter(p => p.hasPhone).length;
    const withPrices = exemptionPages.filter(p => (p.prices || []).length > 0).length;
    const withLastUpdated = exemptionPages.filter(p => p.hasLastUpdated).length;

    lines.push(`\n### On-Page Feature Adoption (Exemption Pages Only)\n`);
    lines.push('| Feature | Count | % | MyEyeRx Status |');
    lines.push('|---------|-------|---|----------------|');
    lines.push(`| FAQ Section | ${withFaq} | ${pct(withFaq, exemptionPages.length)} | ✅ Has it |`);
    lines.push(`| FAQ Schema | ${withFaqSchema} | ${pct(withFaqSchema, exemptionPages.length)} | ✅ Has it (ahead of competitors) |`);
    lines.push(`| Any Schema | ${withSchema} | ${pct(withSchema, exemptionPages.length)} | ✅ MedicalWebPage + FAQPage + HowTo |`);
    lines.push(`| Author Byline | ${withAuthor} | ${pct(withAuthor, exemptionPages.length)} | ✅ Dr. Borowiec + Tory Dewberry |`);
    lines.push(`| Contact Form | ${withForms} | ${pct(withForms, exemptionPages.length)} | ❌ (uses checkout flow instead) |`);
    lines.push(`| Phone Number | ${withPhone} | ${pct(withPhone, exemptionPages.length)} | ✅ In footer |`);
    lines.push(`| Pricing Shown | ${withPrices} | ${pct(withPrices, exemptionPages.length)} | ✅ On state pages |`);
    lines.push(`| Last Updated | ${withLastUpdated} | ${pct(withLastUpdated, exemptionPages.length)} | ✅ Added |`);

    const avgH2 = (exemptionPages.reduce((s, p) => s + (p.h2Count || 0), 0) / exemptionPages.length).toFixed(1);
    const avgH3 = (exemptionPages.reduce((s, p) => s + (p.h3Count || 0), 0) / exemptionPages.length).toFixed(1);
    const avgInt = Math.round(exemptionPages.reduce((s, p) => s + (p.internalLinks || 0), 0) / exemptionPages.length);
    const avgExt = Math.round(exemptionPages.reduce((s, p) => s + (p.externalLinks || 0), 0) / exemptionPages.length);
    const avgImg = Math.round(exemptionPages.reduce((s, p) => s + (p.images || 0), 0) / exemptionPages.length);

    lines.push(`\n### Page Structure Averages\n`);
    lines.push('| Metric | Competitor Avg | MyEyeRx Target |');
    lines.push('|--------|---------------|----------------|');
    lines.push(`| H2 Headings | ${avgH2} | ${Math.max(Math.ceil(parseFloat(avgH2)), 5)}+ |`);
    lines.push(`| H3 Headings | ${avgH3} | ${Math.max(Math.ceil(parseFloat(avgH3)), 3)}+ |`);
    lines.push(`| Internal Links | ${avgInt} | ${Math.max(avgInt, 15)}+ |`);
    lines.push(`| External Links | ${avgExt} | ${Math.max(avgExt, 3)}+ (DMV, legal sources) |`);
    lines.push(`| Images | ${avgImg} | ${Math.max(avgImg, 3)}+ (process diagrams, infographics) |`);
  }

  // ── Keyword Gap ──
  lines.push('\n---\n');
  lines.push('## Top Exemption Keyword Opportunities\n');
  lines.push('Keywords filtered to exemption/waiver/medical tint terms only.\n');

  const allKws = {};
  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      const kwData = domainKeywords[comp.domain];
      if (!kwData?.keywords) continue;
      for (const kw of kwData.keywords) {
        if (!kw.keyword) continue;
        const key = kw.keyword.toLowerCase();
        if (!allKws[key]) allKws[key] = { keyword: kw.keyword, searchVolume: kw.searchVolume, cpc: kw.cpc, rankedBy: [] };
        if (!allKws[key].rankedBy.find(r => r.domain === comp.domain)) {
          allKws[key].rankedBy.push({ domain: comp.domain, position: kw.position });
        }
      }
    }
  }

  const topKws = Object.values(allKws)
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, 50);

  if (topKws.length > 0) {
    lines.push('| # | Keyword | Search Vol | CPC | # Competitors | Top Competitor | Pos |');
    lines.push('|---|---------|-----------|-----|--------------|----------------|-----|');
    for (let i = 0; i < topKws.length; i++) {
      const kw = topKws[i];
      const best = kw.rankedBy.sort((a, b) => (a.position || 999) - (b.position || 999))[0];
      lines.push(`| ${i + 1} | ${kw.keyword} | ${kw.searchVolume} | $${(kw.cpc || 0).toFixed(2)} | ${kw.rankedBy.length} | ${best?.domain || ''} | ${best?.position || ''} |`);
    }
  }

  // ── Per-State Summary ──
  lines.push('\n---\n');
  lines.push('## Per-State Top Exemption Competitors\n');

  for (const state of SERVED_STATES) {
    const comps = stateCompetitors[state] || [];
    if (comps.length === 0) continue;

    lines.push(`### ${state}\n`);
    lines.push('| # | Domain | Appearances | Avg Pos | Type | Top URL |');
    lines.push('|---|--------|------------|---------|------|---------|');
    for (let i = 0; i < Math.min(comps.length, 5); i++) {
      const c = comps[i];
      const type = domainType[c.domain] || 'info';
      const shortUrl = (c.urls[0] || '').substring(0, 60);
      lines.push(`| ${i + 1} | **${c.domain}** | ${c.appearances}/${c.queryCount} | ${c.avgPosition.toFixed(1)} | ${type} | ${shortUrl}${c.urls[0]?.length > 60 ? '...' : ''} |`);
    }

    // Brief content analysis
    for (const comp of comps.slice(0, 2)) {
      const pa = pageAnalysis[comp.urls[0]];
      if (pa && pa.wordCount > 100) {
        lines.push(`- **${comp.domain}**: ${pa.wordCount} words, ${pa.h2Count} H2s, ${pa.images} images${pa.hasFaqSection ? ', FAQ ✅' : ''}${pa.hasAuthor ? ', Author ✅' : ''}${pa.isExemptionService ? ', **SELLS EXEMPTIONS**' : ''}`);
      }
    }
    lines.push('');
  }

  const filepath = path.join(OUTPUT_DIR, 'exemption-competitors-report.md');
  fs.writeFileSync(filepath, lines.join('\n'));
  console.log(`  ✅ Exemption report → ${filepath}`);
}

function pct(count, total) {
  return Math.round(count / total * 100) + '%';
}

// ══════════════════════════════════════════════════════════════════════════════
// Main
// ══════════════════════════════════════════════════════════════════════════════
async function main() {
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║  MyEyeRx Exemption-Focused Competitor Re-Analysis               ║');
  console.log('║  42 States × 7 Exemption Queries (law queries excluded)         ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝\n');

  try {
    const exemptionSerp = await phase1();
    const { stateCompetitors, allDomains } = phase2BuildRankings(exemptionSerp);
    const domainKeywords = await phase3Keywords(allDomains);
    const pageAnalysis = await phase4PageAnalysis(stateCompetitors);
    phase5Reports(stateCompetitors, domainKeywords, pageAnalysis);

    console.log('\n╔══════════════════════════════════════════════════════════════════╗');
    console.log('║  ✅ EXEMPTION RE-ANALYSIS COMPLETE                              ║');
    console.log('╚══════════════════════════════════════════════════════════════════╝');
  } catch (err) {
    console.error('\n❌ Fatal error:', err.message);
    console.error(err.stack);
  }
}

main();

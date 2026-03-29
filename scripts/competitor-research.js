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
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// ── Served States ───────────────────────────────────────────────────────────
const SERVED_STATES = [
  'Alabama','Arizona','Arkansas','California','Connecticut','Delaware',
  'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','Ohio','Oklahoma','Oregon',
  'Pennsylvania','Rhode Island','South Carolina','Tennessee','Texas',
  'Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

// ── Query templates per state ───────────────────────────────────────────────
function getQueries(state) {
  return [
    `${state} window tint medical exemption`,
    `${state} tint exemption`,
    `${state} window tint law`,
    `medical tint exemption ${state}`,
    `${state} window tint waiver`,
  ];
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

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
      // Follow redirects
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

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 1: SERP Research
// ══════════════════════════════════════════════════════════════════════════════
async function phase1SerpResearch() {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 1: SERP Research — 42 states × 5 queries');
  console.log('='.repeat(70) + '\n');

  // Check for existing results to allow resume
  let results = loadJson('serp-results.json') || {};
  let totalCalls = 0;
  let skipped = 0;

  for (const state of SERVED_STATES) {
    if (!results[state]) results[state] = {};
    const queries = getQueries(state);

    for (const query of queries) {
      if (results[state][query]) {
        skipped++;
        continue;
      }

      totalCalls++;
      process.stdout.write(`  [${totalCalls}] ${state} — "${query}" ... `);

      try {
        const resp = await apiPost('/v3/serp/google/organic/live/advanced', [{
          keyword: query,
          location_code: 2840, // US
          language_code: 'en',
          depth: 10,
        }]);

        const items = resp.tasks?.[0]?.result?.[0]?.items || [];
        const organicResults = items
          .filter(i => i.type === 'organic')
          .slice(0, 5) // grab top 5 organic
          .map(i => ({
            position: i.rank_group,
            url: i.url,
            domain: i.domain,
            title: i.title,
            description: i.description,
            breadcrumb: i.breadcrumb,
          }));

        results[state][query] = {
          query,
          timestamp: new Date().toISOString(),
          totalResults: resp.tasks?.[0]?.result?.[0]?.items_count || 0,
          top5: organicResults,
        };

        console.log(`${organicResults.length} results`);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        results[state][query] = { query, error: err.message, timestamp: new Date().toISOString() };
      }

      // Save incrementally every 10 calls
      if (totalCalls % 10 === 0) {
        saveJson('serp-results.json', results);
      }

      await sleep(600); // rate limit
    }
  }

  saveJson('serp-results.json', results);
  console.log(`\nPhase 1 complete: ${totalCalls} API calls made, ${skipped} skipped (cached)`);
  return results;
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 2: Extract top 3 competitors per state + their keywords
// ══════════════════════════════════════════════════════════════════════════════
async function phase2CompetitorKeywords(serpResults) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 2: Competitor Keyword Extraction');
  console.log('='.repeat(70) + '\n');

  // Build per-state competitor ranking
  const stateCompetitors = {};
  const allDomains = new Set();
  const OUR_DOMAINS = ['myeyerx.net', 'www.myeyerx.net', 'myeyerx.com', 'www.myeyerx.com'];

  for (const state of SERVED_STATES) {
    const domainScores = {};
    const queryResults = serpResults[state] || {};

    for (const [query, data] of Object.entries(queryResults)) {
      if (!data.top5) continue;
      for (const result of data.top5) {
        const domain = result.domain?.replace(/^www\./, '');
        if (!domain || OUR_DOMAINS.includes(result.domain)) continue;
        if (!domainScores[domain]) {
          domainScores[domain] = { domain, appearances: 0, totalPosition: 0, urls: new Set(), titles: new Set() };
        }
        domainScores[domain].appearances++;
        domainScores[domain].totalPosition += result.position;
        domainScores[domain].urls.add(result.url);
        domainScores[domain].titles.add(result.title);
      }
    }

    // Rank by appearances (desc), then avg position (asc)
    const ranked = Object.values(domainScores)
      .map(d => ({
        ...d,
        avgPosition: d.totalPosition / d.appearances,
        urls: [...d.urls],
        titles: [...d.titles],
      }))
      .sort((a, b) => b.appearances - a.appearances || a.avgPosition - b.avgPosition)
      .slice(0, 3);

    stateCompetitors[state] = ranked;
    ranked.forEach(r => allDomains.add(r.domain));
  }

  saveJson('state-competitors.json', stateCompetitors);
  console.log(`Found ${allDomains.size} unique competitor domains across all states`);

  // Pull ranked keywords for each unique competitor domain
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
          ['keyword_data.keyword', 'like', '%tint%'],
          'or',
          ['keyword_data.keyword', 'like', '%exemption%'],
          'or',
          ['keyword_data.keyword', 'like', '%window%'],
          'or',
          ['keyword_data.keyword', 'like', '%medical%'],
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

      console.log(`${keywords.length} tint/exemption keywords (${resp.tasks?.[0]?.result?.[0]?.total_count || 0} total)`);
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      domainKeywords[domain] = { domain, error: err.message, keywords: [] };
    }

    if (calls % 5 === 0) saveJson('domain-keywords.json', domainKeywords);
    await sleep(800);
  }

  saveJson('domain-keywords.json', domainKeywords);
  console.log(`\nPhase 2 complete: ${calls} API calls, ${allDomains.size} domains processed`);
  return { stateCompetitors, domainKeywords };
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 3: Page Content Analysis
// ══════════════════════════════════════════════════════════════════════════════
async function phase3PageAnalysis(stateCompetitors) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 3: Page Content Analysis');
  console.log('='.repeat(70) + '\n');

  // Collect unique URLs to analyze
  const urlsToAnalyze = new Set();
  for (const state of SERVED_STATES) {
    const competitors = stateCompetitors[state] || [];
    for (const comp of competitors) {
      comp.urls.forEach(url => urlsToAnalyze.add(url));
    }
  }

  console.log(`${urlsToAnalyze.size} unique competitor pages to analyze\n`);

  let pageAnalysis = loadJson('page-analysis.json') || {};
  let analyzed = 0;
  let errors = 0;

  for (const url of urlsToAnalyze) {
    if (pageAnalysis[url]) continue;

    analyzed++;
    process.stdout.write(`  [${analyzed}/${urlsToAnalyze.size}] ${url.substring(0, 80)}... `);

    try {
      const html = await fetchUrl(url);
      const analysis = analyzeHtml(html, url);
      pageAnalysis[url] = analysis;
      console.log(`${analysis.wordCount} words, ${analysis.h2Count} H2s`);
    } catch (err) {
      errors++;
      console.log(`ERROR: ${err.message}`);
      pageAnalysis[url] = { url, error: err.message, wordCount: 0 };
    }

    if (analyzed % 10 === 0) saveJson('page-analysis.json', pageAnalysis);
    await sleep(500);
  }

  saveJson('page-analysis.json', pageAnalysis);
  console.log(`\nPhase 3 complete: ${analyzed} pages analyzed, ${errors} errors`);
  return pageAnalysis;
}

function analyzeHtml(html, url) {
  // Strip scripts and styles for text extraction
  const cleanHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

  // Extract text content
  const textOnly = cleanHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = textOnly.split(/\s+/).filter(w => w.length > 1);

  // Extract headings
  const h1s = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h2s = (html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h3s = (html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());

  // Meta info
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaTitle = titleMatch ? titleMatch[1].trim() : '';
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i)
    || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["']/i);
  const metaDescription = descMatch ? descMatch[1].trim() : '';

  // Schema/JSON-LD
  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  const schemaTypes = [];
  for (const match of jsonLdMatches) {
    try {
      const content = match.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      const parsed = JSON.parse(content);
      if (parsed['@type']) schemaTypes.push(parsed['@type']);
      if (Array.isArray(parsed['@graph'])) {
        parsed['@graph'].forEach(item => { if (item['@type']) schemaTypes.push(item['@type']); });
      }
    } catch (e) { /* ignore parse errors */ }
  }

  // Links
  const internalLinks = (html.match(/<a[^>]*href=["'][^"']*["']/gi) || [])
    .filter(a => {
      const hrefMatch = a.match(/href=["']([^"']*)/i);
      if (!hrefMatch) return false;
      const href = hrefMatch[1];
      return href.startsWith('/') || href.includes(new URL(url).hostname);
    }).length;

  const externalLinks = (html.match(/<a[^>]*href=["']https?:\/\/[^"']*["']/gi) || [])
    .filter(a => {
      const hrefMatch = a.match(/href=["']([^"']*)/i);
      if (!hrefMatch) return false;
      try { return new URL(hrefMatch[1]).hostname !== new URL(url).hostname; }
      catch { return false; }
    }).length;

  // Images
  const images = (html.match(/<img[^>]*>/gi) || []).length;

  // FAQs detection
  const hasFaqSection = /faq|frequently\s+asked/i.test(html);
  const hasFaqSchema = schemaTypes.some(t => /FAQ/i.test(typeof t === 'string' ? t : JSON.stringify(t)));

  // Author/reviewer
  const hasAuthor = /author|written\s+by|reviewed\s+by|medically\s+reviewed/i.test(html);

  // CTAs
  const ctaButtons = (html.match(/<(button|a)[^>]*class[^>]*(btn|cta|get-started|apply|book|order|buy|start)[^>]*>/gi) || []).length;
  const hasForms = /<form/i.test(html);
  const hasPhone = /\(\d{3}\)\s*\d{3}[-.]\d{4}|\d{3}[-.]\d{3}[-.]\d{4}/g.test(textOnly);

  // Last updated
  const lastUpdatedMatch = textOnly.match(/(?:last\s+)?(?:updated|modified|reviewed)\s*:?\s*(\w+\s+\d{1,2},?\s+\d{4})/i);
  const hasLastUpdated = !!lastUpdatedMatch;

  // Price mention
  const priceMatch = textOnly.match(/\$\d+(?:\.\d{2})?/g);
  const prices = priceMatch ? [...new Set(priceMatch)] : [];

  return {
    url,
    metaTitle,
    metaTitleLength: metaTitle.length,
    metaDescription,
    metaDescriptionLength: metaDescription.length,
    wordCount: words.length,
    h1s,
    h1Count: h1s.length,
    h2s,
    h2Count: h2s.length,
    h3s,
    h3Count: h3s.length,
    schemaTypes: schemaTypes.flat(),
    internalLinks,
    externalLinks,
    images,
    hasFaqSection,
    hasFaqSchema,
    hasAuthor,
    ctaButtons,
    hasForms,
    hasPhone,
    hasLastUpdated,
    prices,
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// PHASE 4: Report Generation
// ══════════════════════════════════════════════════════════════════════════════
function phase4GenerateReports(serpResults, stateCompetitors, domainKeywords, pageAnalysis) {
  console.log('\n' + '='.repeat(70));
  console.log('PHASE 4: Report Generation');
  console.log('='.repeat(70) + '\n');

  generateMasterCsv(serpResults, stateCompetitors, pageAnalysis);
  generateKeywordCsv(domainKeywords);
  generateMarkdownReport(stateCompetitors, domainKeywords, pageAnalysis);

  console.log('Phase 4 complete — all reports generated');
}

function generateMasterCsv(serpResults, stateCompetitors, pageAnalysis) {
  const rows = ['State,Query,Position,Competitor Domain,Competitor URL,Title,Word Count,H1 Count,H2 Count,H3 Count,Schema Types,Has FAQ,Has FAQ Schema,Has Author,CTA Buttons,Has Form,Has Phone,Internal Links,External Links,Images,Has Last Updated,Prices,Meta Title Length,Meta Desc Length'];

  for (const state of SERVED_STATES) {
    const queries = serpResults[state] || {};
    for (const [query, data] of Object.entries(queries)) {
      if (!data.top5) continue;
      for (const result of data.top5.slice(0, 3)) {
        const pa = pageAnalysis[result.url] || {};
        rows.push([
          `"${state}"`,
          `"${query}"`,
          result.position,
          `"${result.domain}"`,
          `"${result.url}"`,
          `"${(result.title || '').replace(/"/g, '""')}"`,
          pa.wordCount || 0,
          pa.h1Count || 0,
          pa.h2Count || 0,
          pa.h3Count || 0,
          `"${(pa.schemaTypes || []).join('; ')}"`,
          pa.hasFaqSection ? 'Y' : 'N',
          pa.hasFaqSchema ? 'Y' : 'N',
          pa.hasAuthor ? 'Y' : 'N',
          pa.ctaButtons || 0,
          pa.hasForms ? 'Y' : 'N',
          pa.hasPhone ? 'Y' : 'N',
          pa.internalLinks || 0,
          pa.externalLinks || 0,
          pa.images || 0,
          pa.hasLastUpdated ? 'Y' : 'N',
          `"${(pa.prices || []).join('; ')}"`,
          pa.metaTitleLength || 0,
          pa.metaDescriptionLength || 0,
        ].join(','));
      }
    }
  }

  const filepath = path.join(OUTPUT_DIR, 'keyword-research-master.csv');
  fs.writeFileSync(filepath, rows.join('\n'));
  console.log(`  ✅ Master CSV: ${filepath} (${rows.length - 1} rows)`);
}

function generateKeywordCsv(domainKeywords) {
  const rows = ['Domain,Keyword,Search Volume,Position,URL,CPC,Competition'];

  for (const [domain, data] of Object.entries(domainKeywords)) {
    if (!data.keywords) continue;
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

  const filepath = path.join(OUTPUT_DIR, 'competitor-keywords-master.csv');
  fs.writeFileSync(filepath, rows.join('\n'));
  console.log(`  ✅ Keywords CSV: ${filepath} (${rows.length - 1} rows)`);
}

function generateMarkdownReport(stateCompetitors, domainKeywords, pageAnalysis) {
  const lines = [];
  lines.push('# Competitive Keyword Research & Content Analysis Report');
  lines.push(`\n*Generated: ${new Date().toISOString()}*\n`);
  lines.push('---\n');

  // ── Executive Summary ──
  lines.push('## Executive Summary\n');

  // Count unique domains across all states
  const allDomains = new Set();
  const domainStateCount = {};
  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      allDomains.add(comp.domain);
      if (!domainStateCount[comp.domain]) domainStateCount[comp.domain] = 0;
      domainStateCount[comp.domain]++;
    }
  }

  // Top competitors by state presence
  const topNational = Object.entries(domainStateCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  lines.push(`- **${SERVED_STATES.length} states** analyzed with 5 keyword variations each`);
  lines.push(`- **${allDomains.size} unique competitor domains** found in top 3 positions`);
  lines.push(`- **Top national competitors** (appear in most states):\n`);

  lines.push('| Rank | Domain | States Appeared In | Tint/Exemption KWs |');
  lines.push('|------|--------|-------------------|-------------------|');
  for (let i = 0; i < topNational.length; i++) {
    const [domain, count] = topNational[i];
    const kwCount = domainKeywords[domain]?.filteredKeywords || 0;
    lines.push(`| ${i + 1} | ${domain} | ${count}/${SERVED_STATES.length} | ${kwCount} |`);
  }

  // ── Content Analysis Patterns ──
  lines.push('\n---\n');
  lines.push('## Content Analysis Patterns\n');

  // Aggregate page analysis stats
  const allPages = Object.values(pageAnalysis).filter(p => p.wordCount > 0);
  if (allPages.length > 0) {
    const avgWordCount = Math.round(allPages.reduce((s, p) => s + p.wordCount, 0) / allPages.length);
    const maxWordCount = Math.max(...allPages.map(p => p.wordCount));
    const minWordCount = Math.min(...allPages.map(p => p.wordCount));
    const medianWordCount = allPages.sort((a, b) => a.wordCount - b.wordCount)[Math.floor(allPages.length / 2)]?.wordCount || 0;
    const withFaq = allPages.filter(p => p.hasFaqSection).length;
    const withFaqSchema = allPages.filter(p => p.hasFaqSchema).length;
    const withAuthor = allPages.filter(p => p.hasAuthor).length;
    const withForms = allPages.filter(p => p.hasForms).length;
    const withPhone = allPages.filter(p => p.hasPhone).length;
    const withLastUpdated = allPages.filter(p => p.hasLastUpdated).length;
    const avgH2 = Math.round(allPages.reduce((s, p) => s + (p.h2Count || 0), 0) / allPages.length * 10) / 10;
    const avgIntLinks = Math.round(allPages.reduce((s, p) => s + (p.internalLinks || 0), 0) / allPages.length);
    const avgExtLinks = Math.round(allPages.reduce((s, p) => s + (p.externalLinks || 0), 0) / allPages.length);
    const avgImages = Math.round(allPages.reduce((s, p) => s + (p.images || 0), 0) / allPages.length);

    lines.push(`### Word Count Distribution (${allPages.length} pages analyzed)\n`);
    lines.push(`| Metric | Value |`);
    lines.push(`|--------|-------|`);
    lines.push(`| Average | ${avgWordCount} words |`);
    lines.push(`| Median | ${medianWordCount} words |`);
    lines.push(`| Min | ${minWordCount} words |`);
    lines.push(`| Max | ${maxWordCount} words |`);

    lines.push(`\n### On-Page Feature Adoption\n`);
    lines.push(`| Feature | Count | % of Pages |`);
    lines.push(`|---------|-------|-----------|`);
    lines.push(`| FAQ Section | ${withFaq} | ${Math.round(withFaq / allPages.length * 100)}% |`);
    lines.push(`| FAQ Schema | ${withFaqSchema} | ${Math.round(withFaqSchema / allPages.length * 100)}% |`);
    lines.push(`| Author/Reviewer Byline | ${withAuthor} | ${Math.round(withAuthor / allPages.length * 100)}% |`);
    lines.push(`| Contact Form | ${withForms} | ${Math.round(withForms / allPages.length * 100)}% |`);
    lines.push(`| Phone Number | ${withPhone} | ${Math.round(withPhone / allPages.length * 100)}% |`);
    lines.push(`| Last Updated Date | ${withLastUpdated} | ${Math.round(withLastUpdated / allPages.length * 100)}% |`);

    lines.push(`\n### Average Page Metrics\n`);
    lines.push(`| Metric | Average |`);
    lines.push(`|--------|---------|`);
    lines.push(`| H2 Headings | ${avgH2} |`);
    lines.push(`| Internal Links | ${avgIntLinks} |`);
    lines.push(`| External Links | ${avgExtLinks} |`);
    lines.push(`| Images | ${avgImages} |`);
  }

  // ── Per-State Breakdown ──
  lines.push('\n---\n');
  lines.push('## Per-State Competitor Breakdown\n');

  for (const state of SERVED_STATES) {
    const competitors = stateCompetitors[state] || [];
    if (competitors.length === 0) continue;

    lines.push(`### ${state}\n`);
    lines.push('| # | Domain | Appearances | Avg Position | Key URL |');
    lines.push('|---|--------|-------------|-------------|---------|');

    for (let i = 0; i < competitors.length; i++) {
      const c = competitors[i];
      const mainUrl = c.urls[0] || '';
      lines.push(`| ${i + 1} | ${c.domain} | ${c.appearances}/5 | ${c.avgPosition.toFixed(1)} | ${mainUrl.substring(0, 60)} |`);
    }

    // Show content analysis for their pages
    for (const comp of competitors) {
      for (const url of comp.urls.slice(0, 1)) {
        const pa = pageAnalysis[url];
        if (pa && pa.wordCount > 0) {
          lines.push(`\n**${comp.domain}** — \`${url}\``);
          lines.push(`- Words: **${pa.wordCount}** | H2s: ${pa.h2Count} | Images: ${pa.images} | Internal links: ${pa.internalLinks}`);
          lines.push(`- FAQ: ${pa.hasFaqSection ? '✅' : '❌'} | Author: ${pa.hasAuthor ? '✅' : '❌'} | Schema: ${pa.schemaTypes?.join(', ') || 'none'}`);
          lines.push(`- Prices mentioned: ${pa.prices?.join(', ') || 'none'}`);
        }
      }
    }
    lines.push('');
  }

  // ── Keyword Gap Analysis ──
  lines.push('\n---\n');
  lines.push('## Keyword Opportunities (Competitors Rank, MyEyeRx May Not)\n');

  // Aggregate all competitor keywords, sorted by search volume
  const allKeywords = {};
  for (const [domain, data] of Object.entries(domainKeywords)) {
    if (!data.keywords) continue;
    for (const kw of data.keywords) {
      if (!kw.keyword) continue;
      const key = kw.keyword.toLowerCase();
      if (!allKeywords[key]) {
        allKeywords[key] = { keyword: kw.keyword, searchVolume: kw.searchVolume, cpc: kw.cpc, rankedBy: [] };
      }
      allKeywords[key].rankedBy.push({ domain, position: kw.position });
    }
  }

  const topKeywords = Object.values(allKeywords)
    .sort((a, b) => b.searchVolume - a.searchVolume)
    .slice(0, 100);

  lines.push('### Top 100 Keywords by Search Volume\n');
  lines.push('| Keyword | Search Vol | CPC | # Competitors Ranking | Top Competitor | Their Pos |');
  lines.push('|---------|-----------|-----|----------------------|----------------|----------|');
  for (const kw of topKeywords) {
    const best = kw.rankedBy.sort((a, b) => (a.position || 999) - (b.position || 999))[0];
    lines.push(`| ${kw.keyword} | ${kw.searchVolume} | $${kw.cpc?.toFixed(2) || '0.00'} | ${kw.rankedBy.length} | ${best?.domain || ''} | ${best?.position || ''} |`);
  }

  // ── Actionable Recommendations ──
  lines.push('\n---\n');
  lines.push('## Actionable Recommendations\n');
  lines.push('Based on the competitor analysis, here are the key takeaways:\n');
  lines.push('1. **Content Length**: Compare your state pages against the competitor average word count above');
  lines.push('2. **FAQ Sections**: If competitors have FAQ sections, ensure yours are at least as comprehensive');
  lines.push('3. **Schema Markup**: Match or exceed competitor schema — especially FAQPage and HowTo');
  lines.push('4. **Author Bylines**: E-E-A-T signals matter — ensure every page has author/reviewer attribution');
  lines.push('5. **Internal Linking**: Match competitor internal link density to improve topical authority');
  lines.push('6. **Keyword Gaps**: Review the keyword opportunities table for terms to target');
  lines.push('7. **Pricing Transparency**: Note which competitors show prices — transparency can improve CTR');
  lines.push('8. **Freshness Signals**: Add "Last Updated" dates if competitors have them');

  const filepath = path.join(OUTPUT_DIR, 'competitor-analysis-report.md');
  fs.writeFileSync(filepath, lines.join('\n'));
  console.log(`  ✅ Markdown report: ${filepath}`);
}

// ══════════════════════════════════════════════════════════════════════════════
// Main
// ══════════════════════════════════════════════════════════════════════════════
async function main() {
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║  MyEyeRx Competitive Keyword Research & Content Analysis        ║');
  console.log('║  42 Served States × 5 Keyword Variations                        ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
  console.log(`\nUsing DataForSEO credentials for: ${USERNAME}`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  try {
    // Phase 1: SERP Research
    const serpResults = await phase1SerpResearch();

    // Phase 2: Competitor Keywords
    const { stateCompetitors, domainKeywords } = await phase2CompetitorKeywords(serpResults);

    // Phase 3: Page Content Analysis
    const pageAnalysis = await phase3PageAnalysis(stateCompetitors);

    // Phase 4: Report Generation
    phase4GenerateReports(serpResults, stateCompetitors, domainKeywords, pageAnalysis);

    console.log('\n╔══════════════════════════════════════════════════════════════════╗');
    console.log('║  ✅ ALL PHASES COMPLETE                                         ║');
    console.log('╚══════════════════════════════════════════════════════════════════╝');
    console.log(`\nOutput files in: ${OUTPUT_DIR}/`);
    console.log('  - serp-results.json          (raw SERP data)');
    console.log('  - state-competitors.json     (top 3 per state)');
    console.log('  - domain-keywords.json       (competitor keywords)');
    console.log('  - page-analysis.json         (page content analysis)');
    console.log('  - keyword-research-master.csv');
    console.log('  - competitor-keywords-master.csv');
    console.log('  - competitor-analysis-report.md');
  } catch (err) {
    console.error('\n❌ Fatal error:', err.message);
    console.error(err.stack);
  }
}

main();

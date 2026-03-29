// Standalone report generator — reads cached JSON from Phase 1-3 and generates CSVs + markdown
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'output', 'competitor-research');

const SERVED_STATES = [
  'Alabama','Arizona','Arkansas','California','Connecticut','Delaware',
  'Florida','Georgia','Idaho','Illinois','Indiana','Iowa','Kansas',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','Ohio','Oklahoma','Oregon',
  'Pennsylvania','Rhode Island','South Carolina','Tennessee','Texas',
  'Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

function loadJson(filename) {
  const p = path.join(OUTPUT_DIR, filename);
  if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf8'));
  console.error(`Missing: ${p}`);
  return null;
}

const serpResults = loadJson('serp-results.json');
const stateCompetitors = loadJson('state-competitors.json');
const domainKeywords = loadJson('domain-keywords.json');
const pageAnalysis = loadJson('page-analysis.json');

if (!serpResults || !stateCompetitors || !domainKeywords || !pageAnalysis) {
  console.error('Missing required data files. Run competitor-research.js first.');
  process.exit(1);
}

// ── Master CSV ──────────────────────────────────────────────────────────────
function generateMasterCsv() {
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
  console.log(`✅ Master CSV: ${rows.length - 1} rows → ${filepath}`);
}

// ── Keywords CSV ────────────────────────────────────────────────────────────
function generateKeywordCsv() {
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
  console.log(`✅ Keywords CSV: ${rows.length - 1} rows → ${filepath}`);
}

// ── Markdown Report ─────────────────────────────────────────────────────────
function generateMarkdownReport() {
  const lines = [];
  lines.push('# Competitive Keyword Research & Content Analysis Report');
  lines.push(`\n*Generated: ${new Date().toISOString()}*\n`);
  lines.push('---\n');

  // Executive Summary
  lines.push('## Executive Summary\n');

  const allDomains = new Set();
  const domainStateCount = {};
  for (const state of SERVED_STATES) {
    for (const comp of (stateCompetitors[state] || [])) {
      allDomains.add(comp.domain);
      if (!domainStateCount[comp.domain]) domainStateCount[comp.domain] = 0;
      domainStateCount[comp.domain]++;
    }
  }

  const topNational = Object.entries(domainStateCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);

  lines.push(`- **${SERVED_STATES.length} states** analyzed with 5 keyword variations each (210 total SERP queries)`);
  lines.push(`- **${allDomains.size} unique competitor domains** found in top 3 positions`);
  lines.push(`- **Top national competitors** (appear in most states):\n`);

  lines.push('| Rank | Domain | States Appeared In | Tint/Exemption KWs | Total Domain KWs |');
  lines.push('|------|--------|-------------------|-------------------|-----------------|');
  for (let i = 0; i < topNational.length; i++) {
    const [domain, count] = topNational[i];
    const kwData = domainKeywords[domain];
    const kwCount = kwData?.filteredKeywords || 0;
    const totalKw = kwData?.totalKeywords || 0;
    lines.push(`| ${i + 1} | **${domain}** | ${count}/${SERVED_STATES.length} | ${kwCount} | ${totalKw} |`);
  }

  // Content Analysis Patterns
  lines.push('\n---\n');
  lines.push('## Content Analysis Patterns\n');

  const allPages = Object.values(pageAnalysis).filter(p => p.wordCount > 100);
  if (allPages.length > 0) {
    const sorted = [...allPages].sort((a, b) => a.wordCount - b.wordCount);
    const avgWordCount = Math.round(allPages.reduce((s, p) => s + p.wordCount, 0) / allPages.length);
    const maxWordCount = Math.max(...allPages.map(p => p.wordCount));
    const minWordCount = Math.min(...allPages.map(p => p.wordCount));
    const medianWordCount = sorted[Math.floor(sorted.length / 2)]?.wordCount || 0;
    const p75WordCount = sorted[Math.floor(sorted.length * 0.75)]?.wordCount || 0;
    const p25WordCount = sorted[Math.floor(sorted.length * 0.25)]?.wordCount || 0;

    const withFaq = allPages.filter(p => p.hasFaqSection).length;
    const withFaqSchema = allPages.filter(p => p.hasFaqSchema).length;
    const withAuthor = allPages.filter(p => p.hasAuthor).length;
    const withForms = allPages.filter(p => p.hasForms).length;
    const withPhone = allPages.filter(p => p.hasPhone).length;
    const withLastUpdated = allPages.filter(p => p.hasLastUpdated).length;
    const withSchema = allPages.filter(p => (p.schemaTypes || []).length > 0).length;
    const avgH2 = (allPages.reduce((s, p) => s + (p.h2Count || 0), 0) / allPages.length).toFixed(1);
    const avgH3 = (allPages.reduce((s, p) => s + (p.h3Count || 0), 0) / allPages.length).toFixed(1);
    const avgIntLinks = Math.round(allPages.reduce((s, p) => s + (p.internalLinks || 0), 0) / allPages.length);
    const avgExtLinks = Math.round(allPages.reduce((s, p) => s + (p.externalLinks || 0), 0) / allPages.length);
    const avgImages = Math.round(allPages.reduce((s, p) => s + (p.images || 0), 0) / allPages.length);

    lines.push(`### Word Count Distribution (${allPages.length} pages with >100 words)\n`);
    lines.push(`| Metric | Value |`);
    lines.push(`|--------|-------|`);
    lines.push(`| **Average** | **${avgWordCount} words** |`);
    lines.push(`| Median | ${medianWordCount} words |`);
    lines.push(`| 25th Percentile | ${p25WordCount} words |`);
    lines.push(`| 75th Percentile | ${p75WordCount} words |`);
    lines.push(`| Min | ${minWordCount} words |`);
    lines.push(`| Max | ${maxWordCount} words |`);

    lines.push(`\n### On-Page Feature Adoption\n`);
    lines.push(`| Feature | Count | % of Pages | MyEyeRx Has It? |`);
    lines.push(`|---------|-------|-----------|-----------------|`);
    lines.push(`| FAQ Section | ${withFaq} | ${Math.round(withFaq / allPages.length * 100)}% | ✅ Yes |`);
    lines.push(`| FAQ Schema (JSON-LD) | ${withFaqSchema} | ${Math.round(withFaqSchema / allPages.length * 100)}% | ✅ Yes |`);
    lines.push(`| Any Schema Markup | ${withSchema} | ${Math.round(withSchema / allPages.length * 100)}% | ✅ Yes |`);
    lines.push(`| Author/Reviewer Byline | ${withAuthor} | ${Math.round(withAuthor / allPages.length * 100)}% | ✅ Yes (added) |`);
    lines.push(`| Contact Form | ${withForms} | ${Math.round(withForms / allPages.length * 100)}% | ❌ No (uses checkout flow) |`);
    lines.push(`| Phone Number | ${withPhone} | ${Math.round(withPhone / allPages.length * 100)}% | ✅ Yes (footer) |`);
    lines.push(`| Last Updated Date | ${withLastUpdated} | ${Math.round(withLastUpdated / allPages.length * 100)}% | ✅ Yes (added) |`);

    lines.push(`\n### Average Page Structure Metrics\n`);
    lines.push(`| Metric | Competitor Avg | Recommendation for MyEyeRx |`);
    lines.push(`|--------|---------------|---------------------------|`);
    lines.push(`| H2 Headings | ${avgH2} | Match or exceed |`);
    lines.push(`| H3 Headings | ${avgH3} | Match or exceed |`);
    lines.push(`| Internal Links | ${avgIntLinks} | Critical for topical authority |`);
    lines.push(`| External Links | ${avgExtLinks} | Add DMV/authority links |`);
    lines.push(`| Images | ${avgImages} | Add infographics, process images |`);
  }

  // Schema breakdown
  lines.push('\n### Schema Types Used by Competitors\n');
  const schemaCounts = {};
  for (const pa of allPages) {
    for (const t of (pa.schemaTypes || [])) {
      const type = typeof t === 'string' ? t : JSON.stringify(t);
      schemaCounts[type] = (schemaCounts[type] || 0) + 1;
    }
  }
  const schemaList = Object.entries(schemaCounts).sort((a, b) => b[1] - a[1]).slice(0, 20);
  if (schemaList.length > 0) {
    lines.push('| Schema Type | Pages Using It |');
    lines.push('|-------------|---------------|');
    for (const [type, count] of schemaList) {
      lines.push(`| ${type} | ${count} |`);
    }
  }

  // Per-State Breakdown
  lines.push('\n---\n');
  lines.push('## Per-State Competitor Breakdown\n');

  for (const state of SERVED_STATES) {
    const competitors = stateCompetitors[state] || [];
    if (competitors.length === 0) continue;

    lines.push(`### ${state}\n`);
    lines.push('| # | Domain | Appearances (out of 5 queries) | Avg Position | Top URL |');
    lines.push('|---|--------|-------------------------------|-------------|---------|');

    for (let i = 0; i < competitors.length; i++) {
      const c = competitors[i];
      const mainUrl = c.urls[0] || '';
      const shortUrl = mainUrl.length > 70 ? mainUrl.substring(0, 67) + '...' : mainUrl;
      lines.push(`| ${i + 1} | **${c.domain}** | ${c.appearances}/5 | ${c.avgPosition.toFixed(1)} | ${shortUrl} |`);
    }

    // Content analysis for top competitor pages
    let hasDetail = false;
    for (const comp of competitors) {
      for (const url of comp.urls.slice(0, 1)) {
        const pa = pageAnalysis[url];
        if (pa && pa.wordCount > 100) {
          if (!hasDetail) {
            lines.push('\n**Content Analysis:**\n');
            hasDetail = true;
          }
          lines.push(`- **${comp.domain}** — ${pa.wordCount} words | ${pa.h2Count} H2s | ${pa.images} images | ${pa.internalLinks} internal links`);
          const features = [];
          if (pa.hasFaqSection) features.push('FAQ ✅');
          if (pa.hasAuthor) features.push('Author ✅');
          if (pa.hasForms) features.push('Form ✅');
          if ((pa.schemaTypes || []).length > 0) features.push(`Schema: ${pa.schemaTypes.join(', ')}`);
          if (pa.prices.length > 0) features.push(`Prices: ${pa.prices.join(', ')}`);
          if (features.length > 0) lines.push(`  - ${features.join(' | ')}`);
        }
      }
    }
    lines.push('');
  }

  // Keyword Opportunities
  lines.push('\n---\n');
  lines.push('## Top Keyword Opportunities\n');
  lines.push('Keywords that competitors rank for (filtered to tint/exemption/window/medical terms).\n');

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
  lines.push('| # | Keyword | Search Vol | CPC | # Competitors | Top Competitor | Their Pos |');
  lines.push('|---|---------|-----------|-----|--------------|----------------|----------|');
  for (let i = 0; i < topKeywords.length; i++) {
    const kw = topKeywords[i];
    const best = kw.rankedBy.sort((a, b) => (a.position || 999) - (b.position || 999))[0];
    lines.push(`| ${i + 1} | ${kw.keyword} | ${kw.searchVolume} | $${(kw.cpc || 0).toFixed(2)} | ${kw.rankedBy.length} | ${best?.domain || ''} | ${best?.position || ''} |`);
  }

  // Actionable Recommendations
  lines.push('\n---\n');
  lines.push('## Actionable Recommendations\n');

  if (allPages.length > 0) {
    const avgWc = Math.round(allPages.reduce((s, p) => s + p.wordCount, 0) / allPages.length);
    const p75Wc = [...allPages].sort((a, b) => a.wordCount - b.wordCount)[Math.floor(allPages.length * 0.75)]?.wordCount || 0;

    lines.push(`### 1. Content Length Target`);
    lines.push(`- Competitor average: **${avgWc} words**, 75th percentile: **${p75Wc} words**`);
    lines.push(`- **Recommendation:** Target ${Math.max(p75Wc, 1500)}+ words per state page to be in the top quartile\n`);
  }

  lines.push(`### 2. On-Page Features to Match/Beat`);
  lines.push(`- Add FAQ sections to every state page (if not already present)`);
  lines.push(`- Ensure FAQ schema markup on all pages with FAQ content`);
  lines.push(`- Add author/reviewer bylines with linked credentials (DONE)`);
  lines.push(`- Include "Last Updated" dates for freshness signals (DONE)`);
  lines.push(`- Add process infographics and relevant images\n`);

  lines.push(`### 3. Schema Markup`);
  lines.push(`- Maintain MedicalWebPage, FAQPage, HowTo, BreadcrumbList (DONE)`);
  lines.push(`- Consider adding MedicalCondition schema to condition pages`);
  lines.push(`- Ensure Organization schema with social links is complete (DONE)\n`);

  lines.push(`### 4. Internal Linking Strategy`);
  lines.push(`- Each state page should link to: conditions hub, tint law page for that state, and 3-5 other state pages`);
  lines.push(`- Condition pages should link back to relevant state pages`);
  lines.push(`- Create a strong hub-and-spoke structure for topical authority\n`);

  lines.push(`### 5. Keyword Gap Priorities`);
  lines.push(`- Review the top 100 keywords table above`);
  lines.push(`- Prioritize high search volume keywords where MyEyeRx has existing but weak positions`);
  lines.push(`- Create dedicated content for high-volume keywords MyEyeRx doesn't target yet\n`);

  lines.push(`### 6. Competitor Weaknesses to Exploit`);
  lines.push(`- Many competitor pages lack E-E-A-T signals (no author, no credentials)`);
  lines.push(`- Few competitors have comprehensive schema markup`);
  lines.push(`- Most competitor pages are informational only — no telehealth service integration`);
  lines.push(`- MyEyeRx's unique advantage: actual physician evaluation service + strong trust signals\n`);

  const filepath = path.join(OUTPUT_DIR, 'competitor-analysis-report.md');
  fs.writeFileSync(filepath, lines.join('\n'));
  console.log(`✅ Markdown report → ${filepath}`);
}

// ── Run ─────────────────────────────────────────────────────────────────────
console.log('Generating reports from cached data...\n');

// Quick stats
const pageCount = Object.keys(pageAnalysis).length;
const analyzedPages = Object.values(pageAnalysis).filter(p => p.wordCount > 0).length;
const errorPages = Object.values(pageAnalysis).filter(p => p.error).length;
console.log(`Pages in cache: ${pageCount} (${analyzedPages} analyzed, ${errorPages} errors)\n`);

generateMasterCsv();
generateKeywordCsv();
generateMarkdownReport();

console.log('\n✅ All reports generated in:', OUTPUT_DIR);

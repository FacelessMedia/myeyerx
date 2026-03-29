const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env.local
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

const OUTPUT_DIR = path.join(__dirname, 'output');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

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
        try {
          resolve(JSON.parse(responseData));
        } catch (e) {
          reject(new Error(`Failed to parse response: ${responseData.substring(0, 500)}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function getHistoricalRankOverview() {
  console.log('\n=== 1. Historical Rank Overview (Oct 2020 - Mar 2026) ===\n');

  const result = await apiPost('/v3/dataforseo_labs/google/historical_rank_overview/live', [
    {
      target: 'myeyerx.net',
      location_code: 2840,
      language_code: 'en',
      date_from: '2020-10-01',
      date_to: '2026-03-28',
    }
  ]);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'historical_rank_overview.json'),
    JSON.stringify(result, null, 2)
  );

  if (result.tasks && result.tasks[0] && result.tasks[0].result) {
    const items = result.tasks[0].result[0]?.items || [];
    console.log(`Got ${items.length} monthly data points\n`);

    // Print summary table
    console.log('Month      | Top10 KWs | Top20 KWs | Top100 KWs | Est. Traffic | New | Lost');
    console.log('-----------|-----------|-----------|------------|-------------|-----|-----');

    const csvRows = ['Month,Pos1,Pos2-3,Pos4-10,Pos11-20,Pos21-30,Pos31-40,Pos41-50,Pos51-100,TotalKWs,ETV,NewKWs,LostKWs,UpKWs,DownKWs'];

    items.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });

    for (const item of items) {
      const m = item.metrics?.organic || {};
      const month = `${item.year}-${String(item.month).padStart(2, '0')}`;
      const top10 = (m.pos_1 || 0) + (m.pos_2_3 || 0) + (m.pos_4_10 || 0);
      const top20 = top10 + (m.pos_11_20 || 0);
      const total = top20 + (m.pos_21_30 || 0) + (m.pos_31_40 || 0) + (m.pos_41_50 || 0) +
        (m.pos_51_60 || 0) + (m.pos_61_70 || 0) + (m.pos_71_80 || 0) + (m.pos_81_90 || 0) + (m.pos_91_100 || 0);
      const etv = Math.round(m.etv || 0);
      const newKws = m.is_new || 0;
      const lost = m.is_lost || 0;

      console.log(
        `${month}    | ${String(top10).padStart(9)} | ${String(top20).padStart(9)} | ${String(total).padStart(10)} | ${String(etv).padStart(11)} | ${String(newKws).padStart(3)} | ${String(lost).padStart(4)}`
      );

      const pos51_100 = (m.pos_51_60 || 0) + (m.pos_61_70 || 0) + (m.pos_71_80 || 0) + (m.pos_81_90 || 0) + (m.pos_91_100 || 0);
      csvRows.push(`${month},${m.pos_1||0},${m.pos_2_3||0},${m.pos_4_10||0},${m.pos_11_20||0},${m.pos_21_30||0},${m.pos_31_40||0},${m.pos_41_50||0},${pos51_100},${total},${etv},${newKws},${m.is_lost||0},${m.is_up||0},${m.is_down||0}`);
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, 'historical_rank_summary.csv'), csvRows.join('\n'));
    console.log('\nSaved to output/historical_rank_summary.csv');
  } else {
    console.log('Error or no data:', JSON.stringify(result.tasks?.[0]?.status_message || result, null, 2));
  }

  return result;
}

async function getRankedKeywords() {
  console.log('\n=== 2. Current Ranked Keywords (Top 1000) ===\n');

  const result = await apiPost('/v3/dataforseo_labs/google/ranked_keywords/live', [
    {
      target: 'myeyerx.net',
      location_code: 2840,
      language_code: 'en',
      limit: 1000,
      item_types: ['organic'],
      load_rank_absolute: true,
    }
  ]);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'ranked_keywords.json'),
    JSON.stringify(result, null, 2)
  );

  if (result.tasks && result.tasks[0] && result.tasks[0].result) {
    const res = result.tasks[0].result[0];
    console.log(`Total ranked keywords: ${res?.total_count || 0}`);
    console.log(`Items returned: ${res?.items_count || 0}\n`);

    const items = res?.items || [];
    const csvRows = ['Keyword,SearchVolume,Position,URL,Type,CPC,Competition'];

    // Show top 30
    console.log('Top 30 Ranked Keywords:');
    console.log('Pos  | Search Vol | Keyword                                          | URL');
    console.log('-----|------------|--------------------------------------------------|----');

    for (let i = 0; i < Math.min(30, items.length); i++) {
      const item = items[i];
      const kw = item.keyword_data?.keyword || '';
      const sv = item.keyword_data?.keyword_info?.search_volume || 0;
      const pos = item.ranked_serp_element?.serp_item?.rank_group || '?';
      const url = item.ranked_serp_element?.serp_item?.relative_url || '';
      const type = item.ranked_serp_element?.serp_item?.type || '';
      const cpc = item.keyword_data?.keyword_info?.cpc || 0;
      const comp = item.keyword_data?.keyword_info?.competition || 0;

      console.log(
        `${String(pos).padStart(4)} | ${String(sv).padStart(10)} | ${kw.substring(0, 48).padEnd(48)} | ${url}`
      );

      csvRows.push(`"${kw}",${sv},${pos},"${url}",${type},${cpc},${comp}`);
    }

    // Write all to CSV
    for (let i = 30; i < items.length; i++) {
      const item = items[i];
      const kw = item.keyword_data?.keyword || '';
      const sv = item.keyword_data?.keyword_info?.search_volume || 0;
      const pos = item.ranked_serp_element?.serp_item?.rank_group || '?';
      const url = item.ranked_serp_element?.serp_item?.relative_url || '';
      const type = item.ranked_serp_element?.serp_item?.type || '';
      const cpc = item.keyword_data?.keyword_info?.cpc || 0;
      const comp = item.keyword_data?.keyword_info?.competition || 0;
      csvRows.push(`"${kw}",${sv},${pos},"${url}",${type},${cpc},${comp}`);
    }

    fs.writeFileSync(path.join(OUTPUT_DIR, 'ranked_keywords.csv'), csvRows.join('\n'));
    console.log('\nSaved to output/ranked_keywords.csv');
  } else {
    console.log('Error or no data:', JSON.stringify(result.tasks?.[0]?.status_message || result, null, 2));
  }

  return result;
}

async function getDomainRankOverview() {
  console.log('\n=== 3. Domain Rank Overview (Current Snapshot) ===\n');

  const result = await apiPost('/v3/dataforseo_labs/google/domain_rank_overview/live', [
    {
      target: 'myeyerx.net',
      location_code: 2840,
      language_code: 'en',
    }
  ]);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'domain_rank_overview.json'),
    JSON.stringify(result, null, 2)
  );

  if (result.tasks && result.tasks[0] && result.tasks[0].result) {
    const items = result.tasks[0].result[0]?.items || [];
    for (const item of items) {
      const org = item.metrics?.organic || {};
      const paid = item.metrics?.paid || {};
      console.log(`Target: ${item.target}`);
      console.log(`\nOrganic Metrics:`);
      console.log(`  Position 1:     ${org.pos_1 || 0}`);
      console.log(`  Position 2-3:   ${org.pos_2_3 || 0}`);
      console.log(`  Position 4-10:  ${org.pos_4_10 || 0}`);
      console.log(`  Position 11-20: ${org.pos_11_20 || 0}`);
      console.log(`  Position 21-30: ${org.pos_21_30 || 0}`);
      console.log(`  Position 31-40: ${org.pos_31_40 || 0}`);
      console.log(`  Position 41-50: ${org.pos_41_50 || 0}`);
      console.log(`  Est. Traffic:   ${Math.round(org.etv || 0)}`);
      console.log(`  Total Keywords: ${org.count || 0}`);
      console.log(`  New Keywords:   ${org.is_new || 0}`);
      console.log(`  Lost Keywords:  ${org.is_lost || 0}`);
      console.log(`  Up Keywords:    ${org.is_up || 0}`);
      console.log(`  Down Keywords:  ${org.is_down || 0}`);
    }
  } else {
    console.log('Error or no data:', JSON.stringify(result.tasks?.[0]?.status_message || result, null, 2));
  }

  return result;
}

async function main() {
  console.log('DataForSEO Historical Analysis for myeyerx.net');
  console.log('==============================================\n');
  console.log(`Using credentials for: ${USERNAME}`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  try {
    await getHistoricalRankOverview();
    await getRankedKeywords();
    await getDomainRankOverview();
    console.log('\n\n=== DONE ===');
    console.log('All results saved to scripts/output/');
  } catch (err) {
    console.error('Error:', err.message);
    if (err.message.includes('parse')) {
      console.error('This may indicate auth issues. Check your credentials in .env.local');
    }
  }
}

main();

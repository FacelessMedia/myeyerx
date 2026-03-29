# Google Search Console Post-Deploy Tasks

**Time needed**: 30-45 minutes
**Priority**: CRITICAL — Do this within 24 hours of deployment
**When**: After Cascade commits and deploys the latest changes

---

## Step 1: Verify Site Ownership (If Not Already Done)

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. If `myeyerx.net` isn't already a property, add it:
   - Click **Add property**
   - Choose **URL prefix**: `https://myeyerx.net`
   - Verify via DNS record (recommended) or HTML file upload
3. Also add `https://www.myeyerx.net` if not already added

---

## Step 2: Submit Updated Sitemap

1. In GSC, go to **Sitemaps** (left sidebar)
2. Enter: `https://myeyerx.net/sitemap.xml`
3. Click **Submit**
4. Check status shows "Success" after a few minutes
5. Verify the sitemap includes all expected pages (~120+ URLs):
   - 50 state exemption pages
   - 50 state law pages
   - 10 condition pages
   - Blog/resource articles
   - Static pages (about, contact, conditions hub, etc.)

---

## Step 3: Request Indexing of Key Pages

Google will naturally re-crawl, but you can speed it up for your most important pages:

1. In GSC, use the **URL Inspection** tool (top search bar)
2. Enter each of these URLs and click **Request Indexing**:

### Priority Pages (do these first):
- [ ] `https://myeyerx.net/`
- [ ] `https://myeyerx.net/conditions`
- [ ] `https://myeyerx.net/window-tint-laws-by-state`
- [ ] `https://myeyerx.net/resources`
- [ ] `https://myeyerx.net/about`

### High-Traffic State Pages:
- [ ] `https://myeyerx.net/florida-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/new-york-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/texas-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/california-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/michigan-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/massachusetts-window-tint-medical-exemption`
- [ ] `https://myeyerx.net/georgia-window-tint-medical-exemption`

### New Blog Articles:
- [ ] `https://myeyerx.net/resources/complete-guide-to-window-tint-medical-exemptions`
- [ ] `https://myeyerx.net/resources/how-to-get-tint-exemption-online`
- [ ] `https://myeyerx.net/resources/states-that-allow-window-tint-exemptions`
- [ ] `https://myeyerx.net/resources/window-tint-exemption-cost`

> **Note**: Google limits indexing requests to ~10-15 per day. Do the priority pages first, then come back tomorrow for the rest.

---

## Step 4: Check for Crawl Errors

1. Go to **Pages** (left sidebar, under "Indexing")
2. Look at the **"Not indexed"** tab
3. Check for:
   - **Redirect errors** — any old URLs that aren't redirecting properly
   - **404 errors** — pages that don't exist
   - **Soft 404s** — pages Google thinks are empty
   - **Crawled but not indexed** — pages Google found but chose not to index
4. If you see issues, share them with me and I'll fix them

---

## Step 5: Check Core Web Vitals

1. Go to **Core Web Vitals** (left sidebar, under "Experience")
2. Check both Mobile and Desktop
3. All pages should be "Good" (green) since Next.js is fast
4. If any pages show issues, share the report with me

---

## Step 6: Monitor Coverage Weekly

Set a calendar reminder to check GSC every Monday for 4 weeks:

### Weekly Check (5 minutes):
1. **Performance** → Check impressions and clicks trend (should be going up)
2. **Pages** → Check for new crawl errors
3. **Core Web Vitals** → Ensure no regressions
4. **Links** → Check for new backlinks appearing

### What Good Progress Looks Like:
| Week | Expected |
|------|----------|
| Week 1 | New pages start appearing in index, impressions flat or slight increase |
| Week 2 | Blog articles indexed, slight traffic increase |
| Week 3-4 | Rankings start shifting, more impressions |
| Month 2-3 | Noticeable traffic increase if fixes are working |

---

## Step 7: Verify Structured Data

1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Test these pages:
   - [ ] `https://myeyerx.net/` — Should show Organization schema
   - [ ] `https://myeyerx.net/florida-window-tint-medical-exemption` — Should show FAQPage, HowTo, Product, MedicalWebPage
   - [ ] `https://myeyerx.net/conditions/migraines` — Should show FAQPage, MedicalWebPage
   - [ ] `https://myeyerx.net/about` — Should show AboutPage, MedicalBusiness
3. All should pass with no errors
4. If there are warnings or errors, share screenshots with me

---

## Step 8: Disavow Toxic Backlinks (If Needed)

Only do this if you see spammy backlinks in GSC → **Links** → **Top linking sites**:

1. Go to GSC → **Links** → **Top linking sites**
2. Look for obviously spammy domains (foreign spam, link farms, etc.)
3. If you find any, let me know and I'll help create a disavow file
4. Submit at [Google Disavow Tool](https://search.google.com/search-console/disavow-links)

> Only disavow truly spammy links. Do NOT disavow legitimate sites, even if they seem unrelated.

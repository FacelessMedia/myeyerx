# Verify GA4 Tracking — Step-by-Step

**Time needed**: 10 minutes
**Priority**: HIGH — Without this, we can't measure recovery

---

## Step 1: Check Real-Time Reports

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select the MyEyeRx property
3. Click **Reports** → **Realtime**
4. Open [https://myeyerx.net](https://myeyerx.net) in another tab
5. You should see yourself as an active user within 30 seconds
6. Navigate to a few pages (state page, conditions page) and confirm page views appear

## Step 2: Verify Events Are Firing

1. In GA4, go to **Admin** → **DebugView**
2. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
3. Turn it on, then visit myeyerx.net
4. You should see `page_view` events appearing in DebugView

## Step 3: Set Up Conversion Tracking

1. In GA4, go to **Admin** → **Events**
2. Click **Create event**
3. Create a custom event:
   - **Event name**: `get_started_visit`
   - **Matching conditions**: `event_name` equals `page_view` AND `page_location` contains `/get-started`
4. Save, then mark this event as a **Conversion** (toggle the switch)

This tracks every visit to the /get-started page as a conversion, so you can measure which pages drive the most leads.

## Step 4: Link GA4 to Search Console

1. In GA4, go to **Admin** → **Product links** → **Search Console links**
2. Click **Link**
3. Select the myeyerx.net Search Console property
4. Confirm

This gives you organic search data directly inside Google Analytics.

---

## Troubleshooting

**If you don't see real-time data:**
- Hard refresh myeyerx.net (Ctrl+Shift+R)
- Check that the site has been deployed (visit https://myeyerx.net and view page source — search for "G-NFRXL0YBYG")
- Disable any ad blockers temporarily

**If the measurement ID looks wrong:**
- The ID should be **G-NFRXL0YBYG** in the page source
- If it's different, let me know and I'll update the code

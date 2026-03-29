import Link from "next/link";

export function TrackMigraineTriggersContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        You can&apos;t manage what you don&apos;t measure. Tracking your migraine triggers — especially light-related ones — reveals patterns you&apos;d never notice otherwise. After a month or two of consistent tracking, you&apos;ll know exactly which situations put you at risk.
      </p>

      <h2>What to Track</h2>
      <p>Every time you get a migraine, log these details as soon as you&apos;re able:</p>
      <ul>
        <li><strong>Date and time</strong> of onset</li>
        <li><strong>Where you were</strong> — Office, car, outdoors, home</li>
        <li><strong>Lighting conditions</strong> — Fluorescent, sunlight, overcast, screen time before onset</li>
        <li><strong>Duration</strong> of the attack</li>
        <li><strong>Severity</strong> (1-10 scale)</li>
        <li><strong>Other potential triggers</strong> — Sleep quality, stress level, food/drink, weather, hormonal cycle</li>
        <li><strong>What you did</strong> — Medications taken, dark room, ice pack, etc.</li>
        <li><strong>What helped</strong> — Rate how effective each intervention was</li>
      </ul>

      <h2>Light-Specific Triggers to Watch For</h2>
      <ul>
        <li><strong>Time under fluorescent lights</strong> before onset</li>
        <li><strong>Screen time</strong> — Total hours, which devices, brightness level</li>
        <li><strong>Driving</strong> — Duration, direction (into sun?), tint status</li>
        <li><strong>Weather</strong> — Bright sunny days vs overcast, glare from snow/water</li>
        <li><strong>Transitions</strong> — Going from dark to bright environments</li>
        <li><strong>Flashing/flickering</strong> — Strobe effects, old fluorescents, construction lights</li>
      </ul>

      <h2>Best Tracking Methods</h2>

      <h3>Migraine Buddy App</h3>
      <p>
        The most comprehensive migraine tracking app. It logs triggers, symptoms, medications, weather, sleep, and more. After accumulating data, it generates reports showing your most common triggers and patterns. These reports are shareable with your doctor.
      </p>

      <h3>Simple Spreadsheet</h3>
      <p>
        If apps feel like too much, a simple spreadsheet works. Create columns for date, time, location, lighting, severity, duration, and notes. The key is consistency — track every attack, not just the bad ones.
      </p>

      <h3>Paper Journal</h3>
      <p>
        Some people prefer a small notebook kept on the nightstand. Write a quick entry after each attack. Less structured than an app, but better than not tracking at all.
      </p>

      <h2>What Patterns to Look For</h2>
      <p>After 4-8 weeks of tracking, look for:</p>
      <ul>
        <li><strong>Time patterns</strong> — Do attacks cluster at certain times of day? (Afternoon = possible screen/fluorescent accumulation)</li>
        <li><strong>Location patterns</strong> — More attacks at work vs home? (Lighting environment difference)</li>
        <li><strong>Trigger combinations</strong> — Does bright light + poor sleep + stress = guaranteed attack? This is called <Link href="/resources/migraine-trigger-stacking" className="text-amber-600 hover:underline">trigger stacking</Link></li>
        <li><strong>Seasonal patterns</strong> — Worse in summer (more sunlight) or winter (more indoor fluorescent time)?</li>
        <li><strong>Intervention effectiveness</strong> — Which treatments work best for you?</li>
      </ul>

      <h2>Using Your Data</h2>
      <p>
        Once you&apos;ve identified patterns, you can take targeted action:
      </p>
      <ul>
        <li>If fluorescent lights are a top trigger → Request <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 hover:underline">workplace accommodations</Link></li>
        <li>If driving triggers attacks → Get a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical tint exemption</Link></li>
        <li>If screens are a pattern → Optimize <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">display settings</Link></li>
        <li>If trigger stacking is the issue → Manage <Link href="/resources/migraine-trigger-stacking" className="text-amber-600 hover:underline">your trigger load</Link></li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> Trigger tracking is a self-management tool, not a replacement for medical care. Share your tracking data with your neurologist or headache specialist for the best treatment outcomes.
        </p>
      </div>
    </>
  );
}

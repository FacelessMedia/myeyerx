import Link from "next/link";

export function MigTriggerStackingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        A single trigger rarely causes a migraine on its own. It&apos;s usually a <strong>combination</strong> of triggers that pushes you over the threshold. Understanding this &quot;trigger stacking&quot; concept changes how you think about prevention — because you don&apos;t have to eliminate every trigger, just keep the total load below your threshold.
      </p>

      <h2>What Is Trigger Stacking?</h2>
      <p>
        Think of your migraine threshold as a bucket. Each trigger adds water to the bucket — poor sleep adds some, stress adds more, bright light adds more. A single trigger might not overflow the bucket. But stack three or four together and you tip over the edge into an attack.
      </p>
      <p>
        This explains why the same trigger sometimes causes an attack and sometimes doesn&apos;t. Driving in bright sunlight might be fine when you&apos;re well-rested and relaxed. But add a bad night&apos;s sleep, a stressful morning, a skipped meal, and that same drive becomes the last straw.
      </p>

      <h2>Common Trigger Categories</h2>
      <ul>
        <li><strong>Light</strong> — Sunlight, fluorescents, screens, glare</li>
        <li><strong>Sleep</strong> — Too little, too much, irregular schedule</li>
        <li><strong>Stress</strong> — Acute stress or the &quot;let-down&quot; after stress passes</li>
        <li><strong>Hormonal</strong> — Menstrual cycle, hormonal medications</li>
        <li><strong>Food/drink</strong> — Dehydration, skipped meals, alcohol, specific food triggers</li>
        <li><strong>Weather</strong> — Barometric pressure changes, heat, humidity</li>
        <li><strong>Sensory</strong> — Strong smells, loud noise, flickering lights</li>
        <li><strong>Physical</strong> — Neck tension, eye strain, overexertion</li>
      </ul>

      <h2>The Strategy: Reduce the Load</h2>
      <p>
        You can&apos;t control the weather. You can&apos;t always control your sleep. You can&apos;t eliminate stress. But you <strong>can</strong> control enough triggers to keep the bucket from overflowing on most days.
      </p>
      <p>
        Focus on the triggers you can manage:
      </p>
      <ul>
        <li><strong>Light exposure</strong> — Optimize <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">screens</Link>, <Link href="/resources/light-proof-your-home" className="text-amber-600 hover:underline">home lighting</Link>, <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link>, and <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">vehicle tint</Link></li>
        <li><strong>Hydration</strong> — Drink water consistently throughout the day</li>
        <li><strong>Meals</strong> — Don&apos;t skip meals; keep blood sugar stable</li>
        <li><strong>Sleep hygiene</strong> — Consistent bedtime, dark bedroom, no screens before bed</li>
        <li><strong>Eye strain</strong> — <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 hover:underline">20-20-20 rule</Link>, proper monitor setup</li>
      </ul>

      <h2>High-Risk Days</h2>
      <p>
        When you know multiple triggers are stacking (bad sleep + stressful day + weather change), take extra precautions with the triggers you <em>can</em> control:
      </p>
      <ul>
        <li>Wear FL-41 glasses all day, even if you don&apos;t usually</li>
        <li>Reduce screen brightness further than normal</li>
        <li>Take more frequent breaks</li>
        <li>Stay extra hydrated</li>
        <li>Avoid optional light-intensive activities (bright stores, outdoor events)</li>
      </ul>

      <h2>Tracking Trigger Stacks</h2>
      <p>
        <Link href="/resources/track-migraine-triggers" className="text-amber-600 font-semibold hover:underline">Migraine tracking</Link> is how you identify your personal trigger stacks. After logging attacks for 4-8 weeks, you&apos;ll start seeing which combinations reliably cause problems. This lets you create a personal &quot;early warning system&quot; — when you recognize a dangerous stack building, you can take preventive action before the attack hits.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. Work with your neurologist for a comprehensive migraine prevention plan.
        </p>
      </div>
    </>
  );
}

import Link from "next/link";

export function BiasLightingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Put a warm-toned LED light strip behind your TV or computer monitor. That&apos;s it. This one $15-25 change reduces eye strain more than most people expect, and for light-sensitive people, it can make the difference between a comfortable viewing session and a headache.
      </p>

      <h2>What Is Bias Lighting?</h2>
      <p>
        Bias lighting is a soft light placed behind your screen that fills the area around it with a gentle glow. It reduces the extreme contrast between a bright display and a dark room — which is one of the primary causes of eye fatigue during screen use.
      </p>
      <p>
        Without bias lighting, your pupils are constantly adjusting between the bright screen and the dark surroundings. This rapid adjustment fatigues the iris muscles and increases strain. With bias lighting, the surrounding area has a similar brightness level to the screen edges, so your pupils stay relaxed.
      </p>

      <h2>Why It Helps Light-Sensitive People</h2>
      <ul>
        <li><strong>Reduces contrast fatigue</strong> — Your eyes don&apos;t have to work as hard adjusting between screen and room</li>
        <li><strong>Allows lower screen brightness</strong> — When the room isn&apos;t pitch dark, you can turn your screen brightness down further without losing visibility</li>
        <li><strong>Reduces perceived glare</strong> — The screen doesn&apos;t feel as &quot;blinding&quot; when surrounded by ambient light</li>
        <li><strong>Prevents headaches</strong> — Less strain = fewer tension headaches from screen time</li>
      </ul>

      <h2>How to Set It Up</h2>
      <ol>
        <li><strong>Buy a USB-powered LED strip</strong> — Look for &quot;warm white&quot; (2700K-3000K) or adjustable color temperature. USB-powered strips plug right into your TV or monitor&apos;s USB port.</li>
        <li><strong>Stick it to the back of your screen</strong> — Most LED strips come with adhesive backing. Apply it around the perimeter of the back of your display, about 2-3 inches from the edge.</li>
        <li><strong>Adjust brightness</strong> — The bias light should be noticeably dimmer than the screen itself. About 10-20% of your screen&apos;s brightness is ideal.</li>
        <li><strong>Use warm tones</strong> — Avoid cool white or RGB cycling colors. Warm, steady light is what helps.</li>
      </ol>

      <h2>What to Buy</h2>
      <ul>
        <li><strong>Budget option ($10-15):</strong> Any USB LED strip light in warm white. Search &quot;USB LED strip warm white&quot; — dozens of options work fine.</li>
        <li><strong>Mid-range ($20-30):</strong> Govee or Luminoodle brand strips with adjustable brightness and color temperature.</li>
        <li><strong>Premium ($40-60):</strong> Philips Hue Play light bars or Govee DreamView — these sync with screen content, but for light sensitivity the basic warm glow is what matters most.</li>
      </ul>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Too bright</strong> — The bias light should be subtle, not a spotlight. If it&apos;s creating its own glare on the wall, turn it down.</li>
        <li><strong>Wrong color</strong> — Cool white or blue RGB defeats the purpose. Stick with warm tones.</li>
        <li><strong>Colored/cycling modes</strong> — Flashing or color-changing lights add visual stimulation, not reduce it.</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Tip:</strong> Bias lighting works great with <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">optimized display settings</Link> and <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link> for a complete screen comfort setup.
        </p>
      </div>
    </>
  );
}

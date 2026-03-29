import Link from "next/link";

export function LightProofHomeContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your home should be the one place where your eyes can fully relax. But most homes are set up for people who don&apos;t think twice about light — bright overhead fixtures, cool-white bulbs, uncovered windows. Here&apos;s a room-by-room guide to making your home actually comfortable for light sensitivity.
      </p>

      <h2>The Single Biggest Change: Your Light Bulbs</h2>
      <p>
        If you do nothing else, <strong>swap every bulb in your home to warm white LEDs rated at 2700K or lower</strong>. Color temperature is measured in Kelvin (K). Lower numbers mean warmer, more amber light. Higher numbers mean cooler, bluer light — the kind that triggers photophobia.
      </p>
      <ul>
        <li><strong>2700K or lower</strong> — Warm white. What you want.</li>
        <li><strong>3000-3500K</strong> — Neutral. Tolerable for some, still too harsh for many.</li>
        <li><strong>4000-5000K</strong> — Cool white / daylight. Avoid completely.</li>
        <li><strong>Fluorescent tubes</strong> — The worst. They flicker, they&apos;re cool-toned, and they emit spikes in the blue-green range.</li>
      </ul>
      <p>
        <Link href="/resources/best-light-bulbs-photosensitivity" className="text-amber-600 font-semibold hover:underline">Read our complete light bulb guide →</Link>
      </p>

      <h2>Install Dimmer Switches</h2>
      <p>
        Dimmer switches let you dial brightness to exactly where you need it — bright enough to function, dim enough to be comfortable. This is especially important in the kitchen and living areas where you need some light but don&apos;t need full blast.
      </p>
      <p>
        Basic dimmer switches cost $15-25 each and take about 15 minutes to install. Smart dimmer switches (compatible with Alexa/Google) cost $25-40 and let you control lights from your phone or voice.
      </p>

      <h2>Room-by-Room Guide</h2>

      <h3>Bedroom</h3>
      <ul>
        <li><strong>Blackout curtains</strong> — Non-negotiable. Total darkness for sleep and migraine recovery.</li>
        <li><strong>No overhead light</strong> — Use bedside lamps with warm bulbs and dimmer capability instead</li>
        <li><strong>Red or amber night light</strong> — For navigating at night without triggering full wakefulness</li>
      </ul>

      <h3>Living Room</h3>
      <ul>
        <li><strong>Dimmer switches</strong> on all fixtures</li>
        <li><strong>Task lighting</strong> — Table lamps pointed at what you need to see, not flooding the room</li>
        <li><strong>Bias lighting</strong> behind the TV — <Link href="/resources/bias-lighting-reduce-eye-strain" className="text-amber-600 hover:underline">reduces contrast strain</Link></li>
        <li><strong>Sheer curtains</strong> — Soften daylight without blocking it entirely</li>
      </ul>

      <h3>Kitchen</h3>
      <ul>
        <li><strong>Under-cabinet LED strips</strong> — Warm-toned, pointed at countertops. Provide task light without overhead glare.</li>
        <li><strong>Dimmer on overhead fixture</strong> — Full brightness only when cooking, dimmed the rest of the time</li>
        <li><strong>Avoid recessed can lights</strong> with cool-white bulbs — swap them to warm</li>
      </ul>

      <h3>Bathroom</h3>
      <ul>
        <li><strong>Warm bulbs</strong> — Bathrooms often have the worst bulbs. Swap to 2700K immediately.</li>
        <li><strong>Night mode</strong> — A red or amber plug-in night light for middle-of-the-night visits</li>
        <li><strong>Avoid vanity-style exposed bulbs</strong> that shine directly at eye level</li>
      </ul>

      <h3>Home Office</h3>
      <ul>
        <li><strong>Position desk</strong> so windows are to the side, not behind the monitor</li>
        <li><strong>Bias lighting</strong> behind the monitor</li>
        <li><strong>Task lamp</strong> with warm bulb instead of overhead lighting</li>
        <li><strong>Sheer curtains or window film</strong> to manage daylight glare</li>
      </ul>

      <h2>Window Treatments</h2>
      <p>
        Different rooms need different approaches:
      </p>
      <ul>
        <li><strong>Blackout curtains</strong> — Bedroom, media room, any room where you need total darkness</li>
        <li><strong>Sheer curtains</strong> — Living room, kitchen — soften daylight while maintaining a bright, livable feel</li>
        <li><strong>UV-blocking window film</strong> — Blocks up to 99% of UV while letting visible light through. Great for rooms where you want natural light without the UV damage.</li>
      </ul>
      <p>
        <Link href="/resources/blackout-curtains-window-film-guide" className="text-amber-600 font-semibold hover:underline">Read our window treatment comparison →</Link>
      </p>

      <h2>Smart Home Automation</h2>
      <p>
        Smart bulbs and routines let you automate your lighting environment. Set lights to gradually dim in the evening, create &quot;migraine mode&quot; that drops everything to minimum, or use voice commands so you never have to fumble with switches.
      </p>
      <p>
        <Link href="/resources/smart-home-lighting-light-sensitivity" className="text-amber-600 font-semibold hover:underline">Read our smart home lighting guide →</Link>
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Consult a healthcare provider for persistent or worsening light sensitivity.
        </p>
      </div>
    </>
  );
}

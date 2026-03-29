import Link from "next/link";

export function MigrainesAndLightContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Light is one of the most common migraine triggers — and during an attack, even dim light can feel unbearable. Understanding the connection between migraines and light sensitivity is the first step toward better managing both.
      </p>

      <h2>The Numbers</h2>
      <ul>
        <li><strong>39 million Americans</strong> suffer from migraines</li>
        <li><strong>80-90%</strong> of migraine sufferers experience photophobia during attacks</li>
        <li><strong>Up to 60%</strong> report light sensitivity between attacks (interictal photophobia)</li>
        <li><strong>Sunlight</strong> is reported as a trigger by roughly 30-40% of migraine patients</li>
      </ul>

      <h2>Why Light Triggers Migraines</h2>
      <p>
        The connection runs through <strong>intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> — specialized cells in the retina that detect light independently of vision. These cells connect directly to the trigeminal nerve system, which is the primary pain pathway in migraines.
      </p>
      <p>
        When light activates these cells, it can lower the threshold for a migraine attack (making you more likely to get one) or amplify pain during an existing attack. The most problematic wavelengths are in the <strong>blue-green range (480-520nm)</strong>.
      </p>

      <h2>Types of Light That Are Worst</h2>
      <ul>
        <li><strong>Fluorescent lighting</strong> — Flicker + blue-green spectral spikes. The worst indoor source.</li>
        <li><strong>Direct sunlight</strong> — Intense, broadband light that overwhelms sensitive visual systems.</li>
        <li><strong>Glare from reflective surfaces</strong> — Water, snow, wet roads, glass buildings.</li>
        <li><strong>Oncoming headlights</strong> — Especially LEDs, which are brighter and bluer than older halogen headlights.</li>
        <li><strong>Screen light</strong> — Monitors, phones, tablets — especially on white backgrounds at high brightness.</li>
      </ul>

      <h2>During an Attack</h2>
      <p>When a migraine hits, these steps minimize light exposure:</p>
      <ol>
        <li><strong>Get to a dark room</strong> — As dark as possible. <Link href="/resources/blackout-curtains-window-film-guide" className="text-amber-600 hover:underline">Blackout curtains</Link> in the bedroom are essential.</li>
        <li><strong>If you need your phone</strong> — Use the Ultra-Dim Stack: Dark Mode + Reduce White Point at max + minimum brightness. <Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 hover:underline">iPhone guide</Link> | <Link href="/resources/android-settings-light-sensitivity" className="text-amber-600 hover:underline">Android guide</Link></li>
        <li><strong>Wear FL-41 glasses</strong> — Even in a dark room, if you need any light at all, <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 lenses</Link> filter the worst wavelengths.</li>
        <li><strong>Cool compress over eyes</strong> — Blocks light while providing pain relief from cold.</li>
      </ol>

      <h2>Between Attacks: Prevention</h2>
      <p>Managing light exposure day-to-day can reduce attack frequency:</p>
      <ul>
        <li><strong>Optimize all screens</strong> — <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 hover:underline">Computer</Link>, <Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 hover:underline">phone</Link>, tablet</li>
        <li><strong>Control home lighting</strong> — <Link href="/resources/light-proof-your-home" className="text-amber-600 hover:underline">Warm bulbs, dimmers, blackout curtains</Link></li>
        <li><strong>Wear FL-41 glasses</strong> at work under fluorescent lights</li>
        <li><strong>Use polarized sunglasses</strong> outdoors — <Link href="/resources/best-sunglasses-driving-light-sensitivity" className="text-amber-600 hover:underline">Driving sunglasses guide</Link></li>
        <li><strong>Window tint your vehicle</strong> — A <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical exemption</Link> allows legally darker tint for migraine sufferers</li>
        <li><strong>Track your triggers</strong> — <Link href="/resources/track-migraine-triggers" className="text-amber-600 hover:underline">Identify patterns</Link> so you can manage exposure proactively</li>
      </ul>

      <h2>The Green Light Exception</h2>
      <p>
        Interestingly, research from Harvard Medical School found that <strong>narrow-band green light (around 520nm)</strong> is the only wavelength that doesn&apos;t worsen — and may actually reduce — migraine pain. This led to the development of green light therapy lamps. <Link href="/resources/green-light-therapy-migraines" className="text-amber-600 font-semibold hover:underline">Read about green light therapy →</Link>
      </p>

      <h2>Important: Don&apos;t Dark-Adapt</h2>
      <p>
        It&apos;s tempting to spend all your time in darkness to avoid triggering a migraine. But chronic light avoidance makes photophobia <strong>worse</strong> over time — your eyes adapt to darkness and become even more sensitive when exposed to normal light. The goal is to manage and filter light, not eliminate it entirely.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Work with your neurologist or headache specialist to develop a comprehensive migraine management plan.
        </p>
      </div>
    </>
  );
}

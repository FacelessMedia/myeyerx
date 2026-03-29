import Link from "next/link";

export function GreenLightTherapyContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Here&apos;s something counterintuitive: while most light makes migraines worse, one specific wavelength may actually help. Research from Harvard Medical School found that <strong>narrow-band green light (around 520nm)</strong> is the only color that doesn&apos;t increase migraine pain — and may actively reduce it.
      </p>

      <h2>The Research</h2>
      <p>
        In 2016, Dr. Rami Burstein at Harvard published a landmark study in the journal <em>Brain</em> showing that while blue, amber, red, and white light all intensified migraine headache pain, <strong>green light at low intensity actually reduced pain by about 20%</strong>. The researchers found that green light generates the smallest electrical signals in the retina and cortex, making it the least irritating wavelength for the migraine brain.
      </p>
      <p>
        Follow-up research at the University of Arizona confirmed these findings and showed that regular green light therapy sessions (1-2 hours daily for 10 weeks) reduced migraine frequency by an average of 60% in study participants.
      </p>

      <h2>How It Works</h2>
      <p>
        The mechanism involves the same <strong>intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> that drive light-triggered migraine pain. These cells are least sensitive to the narrow green band around 520nm. When exposed to only this wavelength, the pain-signaling pathways receive minimal activation, and competing calming pathways may be stimulated.
      </p>

      <h2>How to Try Green Light Therapy</h2>

      <h3>Dedicated Green Light Therapy Lamps</h3>
      <p>
        Purpose-built lamps emit only the narrow-band green light used in the research. They&apos;re the most effective option because they isolate the beneficial wavelength without contamination from other colors.
      </p>
      <ul>
        <li><strong>Allay Lamp</strong> — Developed by Dr. Burstein&apos;s team. The only FDA-listed green light therapy device for migraines. ~$149.</li>
        <li><strong>Generic narrow-band green LED bulbs</strong> — Available on Amazon for $10-30, but verify the wavelength is close to 520nm. Many &quot;green&quot; LEDs emit a broader spectrum that includes blue.</li>
      </ul>

      <h3>Protocol</h3>
      <ul>
        <li><strong>Duration:</strong> 1-2 hours per session</li>
        <li><strong>Frequency:</strong> Daily, ideally at the same time</li>
        <li><strong>Environment:</strong> Dark room with only the green light on — no other light sources</li>
        <li><strong>Position:</strong> Light should be visible but not pointed directly at your eyes. Place it to the side or slightly above eye level.</li>
        <li><strong>Timeline:</strong> Most studies showed benefits after 6-10 weeks of daily use</li>
      </ul>

      <h3>During an Attack</h3>
      <p>
        Some people find the green light helpful during active migraine attacks as well. If you need some light during an attack (to navigate your home, use the bathroom, take medication), green light is the least painful option. Keep a green night light in the bathroom and hallway.
      </p>

      <h2>Limitations</h2>
      <ul>
        <li>Research is still emerging — the studies are promising but relatively small</li>
        <li>It doesn&apos;t work for everyone</li>
        <li>It requires consistency — occasional use likely won&apos;t show results</li>
        <li>It&apos;s a complement to other treatments, not a replacement</li>
      </ul>

      <h2>Combining with Other Approaches</h2>
      <p>Green light therapy works best as part of a comprehensive light management strategy:</p>
      <ul>
        <li><Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 hover:underline">FL-41 glasses</Link> for filtering harmful wavelengths during the day</li>
        <li><Link href="/resources/light-proof-your-home" className="text-amber-600 hover:underline">Optimized home lighting</Link> to reduce trigger exposure</li>
        <li><Link href="/resources/track-migraine-triggers" className="text-amber-600 hover:underline">Trigger tracking</Link> to identify and manage your personal trigger stack</li>
        <li><Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">Medical window tint</Link> for driving protection</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> Green light therapy is an emerging treatment. Discuss it with your neurologist before starting, especially if you have any retinal conditions. It should complement, not replace, your existing migraine treatment plan.
        </p>
      </div>
    </>
  );
}

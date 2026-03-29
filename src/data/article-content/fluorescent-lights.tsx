import Link from "next/link";

export function FluorescentLightsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Fluorescent lights are the single most common lighting complaint among light-sensitive people. They flicker, they emit harsh blue-green wavelengths, and they&apos;re everywhere — offices, schools, hospitals, retail stores. Here&apos;s why they&apos;re problematic and what you can do about them.
      </p>

      <h2>Why Fluorescents Are the Worst</h2>

      <h3>1. Invisible Flicker</h3>
      <p>
        Fluorescent tubes operate by cycling on and off 120 times per second (60Hz AC power × 2). Your eyes can&apos;t consciously see this flicker, but your brain detects it. Research shows this subliminal flicker activates the visual cortex and can trigger headaches, eye strain, and migraine attacks in susceptible people.
      </p>
      <p>
        Older magnetic ballast fluorescents are worse (they flicker at 100-120Hz). Newer electronic ballasts operate at much higher frequencies (20,000-40,000Hz) which is generally imperceptible, but many offices still have the older type.
      </p>

      <h3>2. Blue-Green Spectral Spikes</h3>
      <p>
        Fluorescent tubes don&apos;t produce light evenly across the spectrum. They emit concentrated spikes of energy at specific wavelengths — and one of the strongest spikes falls right in the 480-520nm blue-green range that research identifies as the most triggering for photophobia.
      </p>

      <h3>3. Harsh, Flat Quality</h3>
      <p>
        Fluorescent light lacks the warmth and depth of natural light or quality LED light. It&apos;s flat, clinical, and unflattering — and for many light-sensitive people, it creates a low-level discomfort that accumulates throughout the day.
      </p>

      <h2>Solutions</h2>

      <h3>FL-41 Glasses</h3>
      <p>
        <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 font-semibold hover:underline">FL-41 tinted lenses</Link> were literally invented for fluorescent light sensitivity (the &quot;FL&quot; stands for fluorescent). They filter the specific blue-green wavelengths that fluorescents emit in excess. Indoor FL-41 glasses are light enough for all-day wear in an office.
      </p>

      <h3>Fluorescent Light Covers</h3>
      <p>
        These are translucent panels or wraps that fit over standard fluorescent tube fixtures. They filter out blue-green wavelengths and reduce the perceived harshness of the light. Brands like NaturaLux and Make Great Light offer covers specifically designed for light sensitivity.
      </p>
      <ul>
        <li><strong>Magnetic covers</strong> — Snap onto the fixture with magnets. Easy to install and remove.</li>
        <li><strong>Tube wraps</strong> — Slip directly over individual fluorescent tubes. More targeted but only work with exposed tubes.</li>
        <li><strong>Cost:</strong> $15-40 per fixture depending on type and size</li>
      </ul>

      <h3>Request Accommodation</h3>
      <p>
        If you work under fluorescent lights, you can request <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 hover:underline">workplace accommodations</Link> including having the tubes directly above your desk removed or disconnected. This is a simple, free change that makes a dramatic difference.
      </p>

      <h3>Supplement with Task Lighting</h3>
      <p>
        If you can get overhead fluorescents turned off or removed above your workspace, replace them with a desk lamp using a warm-toned (2700K) LED bulb. You get the light you need for work without the problematic wavelengths and flicker.
      </p>

      <h2>At Home</h2>
      <p>
        If your home still has fluorescent tubes (common in kitchens, garages, and utility areas), replacing them is one of the highest-impact upgrades you can make:
      </p>
      <ul>
        <li><strong>LED tube replacements</strong> — Drop-in LED tubes that fit existing fluorescent fixtures. No flicker, better color, lower energy use.</li>
        <li><strong>LED panel lights</strong> — Replace the entire fixture with a flat LED panel. Clean look, no flicker, adjustable color temperature on some models.</li>
        <li><strong>LED strip lights</strong> — Warm-toned strips under cabinets or along ceiling edges provide ambient light without the harshness of overhead fluorescents.</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. If fluorescent lights significantly impact your ability to work, consult a healthcare provider and review your <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 hover:underline">workplace accommodation options</Link>.
        </p>
      </div>
    </>
  );
}

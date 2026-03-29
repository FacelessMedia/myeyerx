import Link from "next/link";

export function DarkerTintMythContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        One of the most common misconceptions about window tint is that darker = better UV protection. It seems logical — if less light gets through, less UV gets through, right? Not exactly. Here&apos;s why VLT and UV rejection are two completely different things.
      </p>

      <h2>VLT ≠ UV Protection</h2>
      <p>
        <strong>VLT (Visible Light Transmission)</strong> measures how much visible light passes through the tint. <strong>UV rejection</strong> measures how much ultraviolet radiation is blocked. They are independent properties determined by different aspects of the film&apos;s construction.
      </p>
      <p>
        A nearly clear film (70% VLT) with quality UV-blocking technology can block 99% of UV rays. Meanwhile, a very dark dyed film (5% VLT) might only block 50-70% of UV — it just blocks visible light very effectively.
      </p>

      <h2>Why This Matters Medically</h2>
      <p>
        For conditions triggered by <strong>UV radiation</strong> — like lupus, melanoma, dermatomyositis, PMLE, and solar urticaria — UV rejection is what protects you. Getting the darkest possible tint with cheap dyed film could actually provide less UV protection than a lighter, higher-quality ceramic film.
      </p>
      <p>
        For conditions triggered by <strong>visible light</strong> — like migraines and photophobia — VLT matters more because visible light is the trigger. But even here, the type of tint affects which wavelengths are blocked.
      </p>

      <h2>What Determines UV Protection?</h2>
      <ul>
        <li><strong>Film material</strong> — Ceramic particles are the most effective UV blockers. Dye is the least effective.</li>
        <li><strong>UV-absorbing additives</strong> — Quality films include specific chemical compounds that absorb UV radiation regardless of visible tint level.</li>
        <li><strong>Film construction</strong> — Multi-layer films with dedicated UV-blocking layers outperform single-layer dyed films.</li>
      </ul>

      <h2>The Right Approach</h2>
      <ol>
        <li><strong>Choose the right film type first</strong> — <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 hover:underline">Ceramic tint</Link> for maximum UV and heat rejection</li>
        <li><strong>Then choose VLT based on your needs</strong> — How much visible light reduction you need for comfort</li>
        <li><strong>Check the spec sheet</strong> — Ask your installer for the manufacturer&apos;s data showing both VLT and UV rejection percentages</li>
      </ol>

      <h2>What to Ask Your Installer</h2>
      <ul>
        <li>&quot;What is the UV rejection percentage of this specific film?&quot; (Should be 99%+ for ceramic)</li>
        <li>&quot;Does it block both UVA and UVB?&quot; (Some films only block UVB effectively)</li>
        <li>&quot;Can I see the manufacturer&apos;s spec sheet?&quot;</li>
        <li>&quot;What is the infrared/heat rejection percentage?&quot;</li>
      </ul>
      <p>
        <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 font-semibold hover:underline">Full list of questions to ask your installer →</Link>
      </p>

      <h2>Bottom Line</h2>
      <p>
        Don&apos;t assume that going as dark as possible gives you the most protection. Choose quality film (ceramic) with documented UV rejection specs, then select the VLT that gives you the visible light reduction you need for your specific condition. <Link href="/resources/understanding-vlt-window-tint" className="text-amber-600 hover:underline">Understanding VLT</Link> and choosing the right <Link href="/resources/window-tint-types-explained" className="text-amber-600 hover:underline">tint type</Link> are both important decisions.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only. Consult with your healthcare provider about the level of UV and light protection recommended for your specific condition.
        </p>
      </div>
    </>
  );
}

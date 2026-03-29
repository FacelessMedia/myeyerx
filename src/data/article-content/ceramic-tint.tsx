import Link from "next/link";

export function CeramicTintContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you&apos;re getting window tint for medical reasons, ceramic tint is the best investment you can make. It outperforms every other type of tint in UV protection, heat rejection, and durability — and it does it without interfering with your phone, GPS, or radio.
      </p>

      <h2>What Makes Ceramic Tint Different</h2>
      <p>
        Ceramic window tint uses <strong>nano-ceramic particles</strong> embedded in the film. These particles are non-metallic and non-conductive, which means they block heat and UV radiation through a fundamentally different mechanism than dyed or metalized tints. The ceramic particles reflect and absorb infrared radiation (heat) while allowing visible light through with minimal distortion.
      </p>

      <h2>Performance Comparison</h2>
      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-amber-50">
              <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Feature</th>
              <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Dyed</th>
              <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Carbon</th>
              <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Ceramic</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white"><td className="px-4 py-2 border-b">UV Rejection</td><td className="px-4 py-2 border-b">~50%</td><td className="px-4 py-2 border-b">~80%</td><td className="px-4 py-2 border-b font-bold text-amber-600">Up to 99%</td></tr>
            <tr className="bg-gray-50"><td className="px-4 py-2 border-b">Heat Rejection</td><td className="px-4 py-2 border-b">~20%</td><td className="px-4 py-2 border-b">~40%</td><td className="px-4 py-2 border-b font-bold text-amber-600">50-80%</td></tr>
            <tr className="bg-white"><td className="px-4 py-2 border-b">Signal Interference</td><td className="px-4 py-2 border-b">None</td><td className="px-4 py-2 border-b">None</td><td className="px-4 py-2 border-b font-bold text-amber-600">None</td></tr>
            <tr className="bg-gray-50"><td className="px-4 py-2 border-b">Fade Resistance</td><td className="px-4 py-2 border-b">Poor</td><td className="px-4 py-2 border-b">Good</td><td className="px-4 py-2 border-b font-bold text-amber-600">Excellent</td></tr>
            <tr className="bg-white"><td className="px-4 py-2 border-b">Lifespan</td><td className="px-4 py-2 border-b">3-5 years</td><td className="px-4 py-2 border-b">5-10 years</td><td className="px-4 py-2 border-b font-bold text-amber-600">10+ years</td></tr>
            <tr className="bg-gray-50"><td className="px-4 py-2 border-b">Price (full car)</td><td className="px-4 py-2 border-b">$50-150</td><td className="px-4 py-2 border-b">$150-350</td><td className="px-4 py-2 border-b">$250-600+</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Why Ceramic Is Best for Medical Use</h2>

      <h3>1. Maximum UV Protection</h3>
      <p>
        Ceramic tint blocks up to <strong>99% of both UVA and UVB radiation</strong>. For conditions like lupus, melanoma, dermatomyositis, PMLE, and solar urticaria — where UV exposure triggers flares, rashes, or cancer risk — this level of protection is critical.
      </p>

      <h3>2. Superior Heat Rejection</h3>
      <p>
        Less heat in the car means less reliance on air conditioning. AC dries out the air, which worsens dry eye — one of the most common causes of photophobia. Ceramic tint can keep your car 20-30°F cooler, reducing the need for blasting cold, dry air.
      </p>

      <h3>3. Optical Clarity</h3>
      <p>
        Ceramic tint maintains excellent visibility and doesn&apos;t distort colors. This is important for safe driving, especially for people whose conditions already affect their visual comfort.
      </p>

      <h3>4. Longevity</h3>
      <p>
        Since your <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical exemption</Link> is a long-term solution, you want tint that lasts. Ceramic tint won&apos;t fade, bubble, or degrade for 10+ years. Dyed tint might need replacement in 3-5 years.
      </p>

      <h2>Top Ceramic Tint Brands</h2>
      <ul>
        <li><strong>3M Ceramic IR Series</strong> — Industry leader. Available at most professional tint shops.</li>
        <li><strong>XPEL PRIME XR Plus</strong> — Premium performance. Blocks up to 98% of infrared heat.</li>
        <li><strong>Llumar IRX</strong> — Excellent heat and UV rejection. Wide installer network.</li>
        <li><strong>SunTek CXP</strong> — Good performance at a slightly lower price point.</li>
      </ul>

      <h2>Is the Extra Cost Worth It?</h2>
      <p>
        Ceramic tint costs 2-3x more than dyed tint upfront. But consider:
      </p>
      <ul>
        <li>It lasts 2-3x longer (so cost per year is similar)</li>
        <li>Better UV protection (the whole point of medical tint)</li>
        <li>Better heat rejection (lower AC bills, less dry eye)</li>
        <li>No signal interference (important for GPS navigation)</li>
        <li>No fading to purple (maintains professional appearance)</li>
      </ul>
      <p>
        For medical use, the performance difference justifies the cost. Ask your <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 hover:underline">tint installer</Link> about ceramic options.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> Window tint performance claims should be verified with the manufacturer&apos;s specifications. Ask your installer for the specific film&apos;s data sheet showing UV rejection, infrared rejection, and VLT measurements.
        </p>
      </div>
    </>
  );
}

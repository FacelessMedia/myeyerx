import Link from "next/link";

export function UnderstandingVltContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        VLT — Visible Light Transmission — is the single most important number in window tint. It determines how dark your tint is, what&apos;s legal in your state, and how much light protection you get. Here&apos;s what it means and why it matters.
      </p>

      <h2>What VLT Means</h2>
      <p>
        VLT is the percentage of visible light that passes through your window tint. A higher number means more light gets through (lighter tint). A lower number means less light gets through (darker tint).
      </p>
      <ul>
        <li><strong>70% VLT</strong> — Very light. Barely noticeable. Blocks 30% of visible light.</li>
        <li><strong>50% VLT</strong> — Medium-light. Slight darkening. Common legal limit for front side windows.</li>
        <li><strong>35% VLT</strong> — Medium. Noticeable tint. Common legal limit in many states.</li>
        <li><strong>20% VLT</strong> — Dark. Significantly reduces light. Common for rear windows.</li>
        <li><strong>5% VLT</strong> — Very dark (&quot;limo tint&quot;). Blocks 95% of visible light. Illegal on front windows in most states without an exemption.</li>
      </ul>

      <h2>VLT and State Laws</h2>
      <p>
        Every state sets minimum VLT requirements for each window position. For example, a state might require:
      </p>
      <ul>
        <li><strong>Windshield:</strong> Non-reflective tint above the AS-1 line only</li>
        <li><strong>Front side windows:</strong> 35% VLT minimum</li>
        <li><strong>Back side windows:</strong> Any darkness</li>
        <li><strong>Rear window:</strong> Any darkness</li>
      </ul>
      <p>
        With a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical exemption</Link>, you may be allowed to go below these minimums. Some states allow any darkness with a valid exemption, while others still set minimum VLT levels even for exempt vehicles.
      </p>
      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s specific VLT requirements →</Link>
      </p>

      <h2>VLT vs UV Protection</h2>
      <p>
        This is a critical distinction that many people miss: <strong>VLT and UV protection are not the same thing.</strong>
      </p>
      <p>
        VLT measures visible light. UV protection measures ultraviolet radiation. You can have a nearly clear film (70% VLT) that blocks 99% of UV rays. Or you can have very dark tint (5% VLT) that has poor UV protection.
      </p>
      <p>
        For medical purposes — especially conditions like lupus, melanoma, and PMLE where UV exposure is the primary concern — UV rejection matters more than VLT. However, for conditions like migraines and photophobia where visible light is the trigger, VLT is the relevant metric.
      </p>
      <p>
        <Link href="/resources/darker-tint-not-more-uv-protection" className="text-amber-600 font-semibold hover:underline">Read: Why darker tint doesn&apos;t always mean more UV protection →</Link>
      </p>

      <h2>How VLT Is Measured</h2>
      <p>
        Law enforcement uses a device called a <strong>tint meter</strong> to measure VLT during traffic stops. The meter clips onto the window and measures how much light passes through. Important notes:
      </p>
      <ul>
        <li>The factory glass in your car already blocks some light (typically 70-80% VLT). When you add tint, the total VLT is the combination of glass + film.</li>
        <li>A 35% VLT film on 75% VLT glass = approximately 26% total VLT (they multiply, not add).</li>
        <li>Law enforcement measures the total VLT through the combined glass + tint, not just the film alone.</li>
      </ul>

      <h2>What VLT Do You Need?</h2>
      <p>This depends on your condition and how much light reduction you need:</p>
      <ul>
        <li><strong>Mild photophobia:</strong> 35-50% VLT on front, 20-35% on rear — noticeable comfort improvement</li>
        <li><strong>Moderate photophobia:</strong> 20-35% VLT on front, 5-20% on rear — significant light reduction</li>
        <li><strong>Severe photophobia / migraines:</strong> 5-20% VLT all around — maximum protection</li>
        <li><strong>UV-triggered conditions (lupus, melanoma):</strong> VLT matters less than UV rejection — choose <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 hover:underline">ceramic tint</Link> with 99% UV rejection at any VLT</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> Your medical exemption certificate and your state&apos;s regulations will determine the allowable VLT range. Always work within your exemption&apos;s limits.
        </p>
      </div>
    </>
  );
}

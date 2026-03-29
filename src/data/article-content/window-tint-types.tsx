import Link from "next/link";

export function WindowTintTypesContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Not all window tint is created equal. The type of tint you choose affects UV protection, heat rejection, visibility, durability, and how well it serves your medical needs. Here&apos;s a breakdown of every major type so you can make an informed choice.
      </p>

      <h2>Dyed Window Tint</h2>
      <p>
        The most basic and cheapest option. A layer of dye is applied between an adhesive layer and a protective top coat. The dye absorbs solar heat and reduces light transmission.
      </p>
      <ul>
        <li><strong>UV protection:</strong> Moderate (blocks some UV but not as effectively as other types)</li>
        <li><strong>Heat rejection:</strong> Low to moderate</li>
        <li><strong>Appearance:</strong> Matte, non-reflective finish. Darkest appearance per VLT percentage.</li>
        <li><strong>Durability:</strong> Lowest — fades to purple over 3-5 years</li>
        <li><strong>Price:</strong> $50-150 for a full car</li>
        <li><strong>Best for:</strong> Budget-conscious buyers who prioritize appearance over performance</li>
      </ul>

      <h2>Metalized Window Tint</h2>
      <p>
        Contains tiny metallic particles embedded in the film. These particles reflect light and heat away from the vehicle rather than absorbing it.
      </p>
      <ul>
        <li><strong>UV protection:</strong> Good</li>
        <li><strong>Heat rejection:</strong> Good — metallic particles reflect heat effectively</li>
        <li><strong>Appearance:</strong> Slightly shiny/reflective finish</li>
        <li><strong>Durability:</strong> Very good — resists fading well</li>
        <li><strong>Price:</strong> $100-250 for a full car</li>
        <li><strong>Drawback:</strong> Can interfere with cell phone signals, GPS, and radio reception</li>
        <li><strong>Best for:</strong> Budget heat rejection where signal interference isn&apos;t a concern</li>
      </ul>

      <h2>Carbon Window Tint</h2>
      <p>
        Uses carbon fiber particles instead of metal. Provides good heat rejection without the signal interference of metalized tint.
      </p>
      <ul>
        <li><strong>UV protection:</strong> Very good</li>
        <li><strong>Heat rejection:</strong> Good — blocks about 40% of infrared heat</li>
        <li><strong>Appearance:</strong> Matte finish with a dark, attractive look</li>
        <li><strong>Durability:</strong> Excellent — won&apos;t fade to purple</li>
        <li><strong>Price:</strong> $150-350 for a full car</li>
        <li><strong>Best for:</strong> Good all-around performance at a mid-range price</li>
      </ul>

      <h2>Ceramic Window Tint</h2>
      <p>
        The premium option. Uses nano-ceramic particles that are non-metallic and non-conductive. Ceramic tint offers the best performance across every metric.
      </p>
      <ul>
        <li><strong>UV protection:</strong> Excellent — blocks up to 99% of UV rays</li>
        <li><strong>Heat rejection:</strong> Best — blocks up to 50-80% of infrared heat</li>
        <li><strong>Appearance:</strong> Clean, non-reflective finish</li>
        <li><strong>Durability:</strong> Best — won&apos;t fade, won&apos;t bubble, won&apos;t interfere with electronics</li>
        <li><strong>Price:</strong> $250-600+ for a full car</li>
        <li><strong>Best for:</strong> Medical use, maximum UV protection, premium quality</li>
      </ul>
      <p>
        <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 font-semibold hover:underline">Read our detailed ceramic tint guide →</Link>
      </p>

      <h2>Crystalline / Clear Tint</h2>
      <p>
        3M&apos;s Crystalline series and similar products offer UV and heat rejection with minimal visible tint. The film appears nearly clear but blocks significant UV and infrared radiation.
      </p>
      <ul>
        <li><strong>UV protection:</strong> Excellent — up to 99.9%</li>
        <li><strong>Heat rejection:</strong> Very good</li>
        <li><strong>Appearance:</strong> Nearly invisible — doesn&apos;t darken the glass noticeably</li>
        <li><strong>Price:</strong> $300-500+ for a full car</li>
        <li><strong>Best for:</strong> People who want UV protection without changing window appearance, or for windshields where dark tint isn&apos;t legal</li>
      </ul>

      <h2>Which Type for Medical Use?</h2>
      <p>
        For light-sensitive people with a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 hover:underline">medical exemption</Link>, we recommend <strong>ceramic tint</strong> as the best investment:
      </p>
      <ul>
        <li>Maximum UV protection (critical for lupus, melanoma, PMLE, and other UV-triggered conditions)</li>
        <li>Best heat rejection (reduces the need for AC, which dries eyes)</li>
        <li>No signal interference</li>
        <li>Won&apos;t fade or degrade — important since your exemption is a long-term solution</li>
        <li>Available in any VLT percentage to match your exemption allowance</li>
      </ul>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Note:</strong> Always have tint installed by a reputable professional. Poor installation leads to bubbling, peeling, and gaps that compromise UV protection. <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 hover:underline">Questions to ask your tint installer →</Link>
        </p>
      </div>
    </>
  );
}

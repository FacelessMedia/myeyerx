import Link from "next/link";
import { Eye, Sun, Shield, Ruler, AlertTriangle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function UnderstandingVltContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        VLT — Visible Light Transmission — is the single most important number in window tint. It determines how dark your tint is, what&apos;s legal in your state, and how much light protection you get. Here&apos;s what it means and why it matters.
      </p>

      <BlogTLDR items={[
        "VLT = percentage of visible light that passes through. Lower number = darker tint.",
        "VLT ≠ UV protection — a clear film can block 99% UV while a dark film might not",
        "Factory glass is already 70-80% VLT; film VLT multiplies with glass (doesn't add)",
        "Law enforcement measures total VLT (glass + film combined) with a tint meter",
        "Your medical exemption + state laws determine your allowable VLT range",
      ]} />

      <h2>What VLT Means</h2>
      <div className="not-prose my-8">
        <div className="space-y-2">
          {[
            { vlt: "70%", label: "Very Light", desc: "Barely noticeable. Blocks 30% of visible light.", bar: "w-[70%]", color: "bg-yellow-200" },
            { vlt: "50%", label: "Medium-Light", desc: "Slight darkening. Common front side legal limit.", bar: "w-[50%]", color: "bg-amber-300" },
            { vlt: "35%", label: "Medium", desc: "Noticeable tint. Common legal limit in many states.", bar: "w-[35%]", color: "bg-amber-500" },
            { vlt: "20%", label: "Dark", desc: "Significantly reduces light. Common for rear windows.", bar: "w-[20%]", color: "bg-amber-700" },
            { vlt: "5%", label: "Limo Tint", desc: "Blocks 95%. Illegal on front without exemption.", bar: "w-[5%]", color: "bg-gray-900" },
          ].map((item) => (
            <div key={item.vlt} className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-gray-100">
              <span className="font-extrabold text-heading text-sm w-10 flex-shrink-0">{item.vlt}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-heading text-xs">{item.label}</span>
                  <span className="text-gray-500 text-[10px]">{item.desc}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full ${item.bar}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>VLT and State Laws</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Windshield", desc: "Non-reflective above AS-1 line only", color: "text-blue-500" },
          { label: "Front Side", desc: "35% VLT minimum (typical)", color: "text-amber-500" },
          { label: "Back Side", desc: "Any darkness (most states)", color: "text-green-500" },
          { label: "Rear Window", desc: "Any darkness (most states)", color: "text-purple-500" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <p className={`font-bold text-xs ${item.color}`}>{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
      <p>
        With a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical exemption</Link>, you may go below these minimums. <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s specific requirements →</Link>
      </p>

      <h2>VLT vs UV Protection</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5">
          <Eye className="w-6 h-6 text-amber-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">VLT = Visible Light</p>
          <p className="text-gray-700 text-xs leading-relaxed">Measures how much light you can see. Relevant for <strong>migraines and photophobia</strong> where visible light is the trigger.</p>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-5">
          <Shield className="w-6 h-6 text-purple-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">UV Rejection = Ultraviolet</p>
          <p className="text-gray-700 text-xs leading-relaxed">Measures UV radiation blocked. Relevant for <strong>lupus, melanoma, PMLE</strong> where UV exposure is the concern.</p>
        </div>
      </div>
      <BlogCallout variant="tip" title="Critical distinction">
        <p>A nearly clear film (70% VLT) can block 99% of UV. A very dark film (5% VLT) can have poor UV protection. <Link href="/resources/darker-tint-not-more-uv-protection" className="text-amber-600 font-semibold hover:underline">Darker ≠ more UV protection →</Link></p>
      </BlogCallout>

      <h2>How VLT Is Measured</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          "Factory glass already blocks some light (typically 70-80% VLT)",
          "Film VLT multiplies with glass: 35% film on 75% glass ≈ 26% total VLT",
          "Law enforcement measures total VLT (glass + film combined), not film alone",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
            <Ruler className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-xs font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <h2>What VLT Do You Need?</h2>
      <BlogComparisonTable
        columns={[{ header: "Condition" }, { header: "Front VLT" }, { header: "Rear VLT" }, { header: "Priority", highlight: true }]}
        rows={[
          ["Mild photophobia", "35-50%", "20-35%", "Comfort"],
          ["Moderate photophobia", "20-35%", "5-20%", "Significant reduction"],
          ["Severe / migraines", "5-20%", "5-20%", "Maximum protection"],
          ["UV-triggered (lupus, melanoma)", "Any VLT", "Any VLT", "99% UV rejection"],
        ]}
      />

      <BlogCTA
        heading="Find Your Perfect VLT — Get Your Exemption"
        description="A medical tint exemption lets you choose the VLT that your condition actually needs, not just what your state's standard limits allow."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Note">
        <p>Your medical exemption certificate and state regulations determine the allowable VLT range. Always work within your exemption&apos;s limits.</p>
      </BlogCallout>
    </>
  );
}

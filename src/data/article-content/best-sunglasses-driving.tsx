import Link from "next/link";
import { Glasses, CheckCircle, X, ShoppingCart, Shield, Car } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function BestSunglassesDrivingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        For light-sensitive drivers, the right sunglasses aren&apos;t a fashion choice — they&apos;re a safety tool. The wrong pair can actually make things worse. Here&apos;s what to look for and what to avoid.
      </p>

      <BlogTLDR items={[
        "Polarized lenses are non-negotiable — they selectively eliminate road glare",
        "Gray lenses are best all-around; brown/amber for overcast; rose/FL-41 for photophobia",
        "Must-haves: 100% UV, polarized, wraparound frames, anti-reflective back coating",
        "Avoid: dark non-polarized, blue/purple tints, cheap lenses without UV ratings",
        "Sunglasses + medical window tint together = comprehensive driving protection",
      ]} />

      <h2>Polarized Lenses: Non-Negotiable</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 text-center">
          <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">NON-POLARIZED</p>
          <p className="text-gray-600 text-sm">Darkens everything equally. Glare still hits your eyes. More dangerous.</p>
        </div>
        <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center">
          <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">POLARIZED</p>
          <p className="text-gray-600 text-sm">Selectively eliminates horizontal glare from roads, hoods, and cars. Better visibility <em>and</em> comfort.</p>
        </div>
      </div>

      <h2>Lens Color Guide</h2>
      <BlogComparisonTable
        columns={[
          { header: "Lens Color" },
          { header: "Best For" },
          { header: "Notes", highlight: true },
        ]}
        rows={[
          ["Gray", "All-around daytime driving", "Most neutral — no color distortion"],
          ["Brown / Amber", "Overcast & variable conditions", "Enhances contrast and depth perception"],
          ["Green", "All-day wear", "Good color balance, slight contrast boost"],
          ["Yellow / Orange", "Dawn, dusk, low-light", "Too much for bright sun — great for twilight"],
          ["Rose / FL-41", "Photophobia & migraines", "Filters 480-520nm blue-green wavelengths"],
        ]}
      />

      <h2>What to Look For</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "100% UV Protection", desc: "Both UVA and UVB. Must be on the label." },
          { label: "Polarized Lenses", desc: "Essential for driving glare reduction." },
          { label: "Wraparound / Large Frames", desc: "Block peripheral light from sides and top." },
          { label: "Anti-Reflective Back Coating", desc: "Prevents light bouncing off inside of lens." },
          { label: "Category 2-3 Darkness", desc: "Cat 4 is too dark and illegal for driving." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>What to Avoid</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          { label: "Very Dark Non-Polarized", desc: "Darkens without reducing glare — actually more dangerous." },
          { label: "Blue or Purple Tints", desc: "Can distort traffic light colors." },
          { label: "Cheap Lenses Without UV Ratings", desc: "Dark lenses without UV dilate pupils, letting in MORE UV." },
          { label: "Photochromic for Driving", desc: "Most don't darken behind windshields — glass blocks activating UV." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Recommended Brands</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { name: "Maui Jim", desc: "Superior polarization, color, and clarity. Multiple tint options.", price: "$200-350", badge: "Best Overall", badgeColor: "bg-amber-500" },
          { name: "Ray-Ban", desc: "Classic styles with quality polarized options.", price: "$150-250", badge: "Most Popular", badgeColor: "bg-blue-500" },
          { name: "Costa Del Mar", desc: "Originally for fishing — among the best polarization available.", price: "$150-300", badge: "Best Polarization", badgeColor: "bg-green-600" },
          { name: "TheraSpecs Outdoor", desc: "FL-41 tint specifically for photophobia. Polarized options.", price: "$99-150", badge: "Best for Photophobia", badgeColor: "bg-rose-500" },
          { name: "Goodr", desc: "Affordable polarized with good coverage. Budget-friendly.", price: "$25-35", badge: "Best Value", badgeColor: "bg-gray-500" },
        ].map((item) => (
          <div key={item.name} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
            <ShoppingCart className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-heading text-sm">{item.name}</span>
                <span className={`text-[10px] font-bold text-white ${item.badgeColor} px-2 py-0.5 rounded-full`}>{item.badge}</span>
              </div>
              <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
            </div>
            <span className="text-xs font-bold text-gray-500 whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>

      <h2>Sunglasses + Window Tint = Best Protection</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Complete Driving Protection</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sunglasses protect from direct and reflected light. <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">Medical window tint</Link> reduces all light entering the vehicle — including angles sunglasses can&apos;t cover (behind you, sides, rear window). Together, they provide comprehensive protection neither achieves alone.
            </p>
          </div>
        </div>
      </div>

      <BlogCTA
        heading="Sunglasses Cover Your Eyes — Tint Covers the Whole Vehicle"
        description="If you need more protection than sunglasses alone, a medical window tint exemption lets you legally darken your vehicle windows. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Safety Note">
        <p>Always ensure your sunglasses allow adequate visibility for safe driving. If you need darker protection than sunglasses can provide, a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical tint exemption</Link> may be the right solution.</p>
      </BlogCallout>
    </>
  );
}

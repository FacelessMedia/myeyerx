import Link from "next/link";
import { Shield, Thermometer, Eye, Clock, CheckCircle, ShoppingCart } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function CeramicTintContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you&apos;re getting window tint for medical reasons, ceramic tint is the best investment you can make. It outperforms every other type of tint in UV protection, heat rejection, and durability — and it does it without interfering with your phone, GPS, or radio.
      </p>

      <BlogTLDR items={[
        "Ceramic tint blocks up to 99% UV (both UVA and UVB) — dyed tint only blocks ~50%",
        "Rejects 50-80% of heat, keeping your car 20-30°F cooler (less AC = less dry eye)",
        "Lasts 10+ years without fading, bubbling, or degrading",
        "No signal interference with phone, GPS, or radio — unlike metalized tint",
        "Costs 2-3x more upfront but lasts 2-3x longer — cost per year is similar",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Shield} value="99%" label="UV rejection (UVA + UVB)" />
        <BlogStat icon={Thermometer} value="50-80%" label="Heat rejection" />
        <BlogStat icon={Clock} value="10+ yrs" label="Lifespan" />
      </BlogStatRow>

      <h2>What Makes Ceramic Tint Different</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Nano-Ceramic Particle Technology</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ceramic window tint uses <strong>non-metallic, non-conductive</strong> nano-ceramic particles that reflect and absorb infrared radiation (heat) while allowing visible light through with minimal distortion. Fundamentally different from dyed or metalized tints.
            </p>
          </div>
        </div>
      </div>

      <h2>Performance Comparison</h2>
      <BlogComparisonTable
        columns={[
          { header: "Feature" },
          { header: "Dyed" },
          { header: "Carbon" },
          { header: "Ceramic", highlight: true },
        ]}
        rows={[
          ["UV Rejection", "~50%", "~80%", "Up to 99%"],
          ["Heat Rejection", "~20%", "~40%", "50-80%"],
          ["Signal Interference", "None", "None", "None"],
          ["Fade Resistance", "Poor", "Good", "Excellent"],
          ["Lifespan", "3-5 years", "5-10 years", "10+ years"],
          ["Price (full car)", "$50-150", "$150-350", "$250-600+"],
        ]}
      />

      <h2>Why Ceramic Is Best for Medical Use</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            icon: Shield,
            title: "Maximum UV Protection",
            desc: "Blocks up to 99% of both UVA and UVB. Critical for lupus, melanoma, dermatomyositis, PMLE, and solar urticaria.",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-500",
          },
          {
            icon: Thermometer,
            title: "Superior Heat Rejection",
            desc: "Keeps car 20-30°F cooler. Less AC means less dry air, reducing dry eye — one of the most common causes of photophobia.",
            color: "bg-orange-50 border-orange-200",
            iconColor: "text-orange-500",
          },
          {
            icon: Eye,
            title: "Optical Clarity",
            desc: "Maintains excellent visibility without color distortion. Important for safe driving when conditions already affect visual comfort.",
            color: "bg-green-50 border-green-200",
            iconColor: "text-green-500",
          },
          {
            icon: Clock,
            title: "10+ Year Longevity",
            desc: "Won't fade, bubble, or degrade. Your medical exemption is long-term — your tint should be too.",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-500",
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-xl p-5 border ${item.color}`}>
            <item.icon className={`w-6 h-6 ${item.iconColor} mb-3`} />
            <p className="font-extrabold text-heading text-sm mb-1">{item.title}</p>
            <p className="text-gray-700 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Top Ceramic Tint Brands</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { name: "3M Ceramic IR Series", desc: "Industry leader. Available at most professional tint shops.", badge: "Most Widely Available", badgeColor: "bg-blue-500" },
          { name: "XPEL PRIME XR Plus", desc: "Premium performance. Blocks up to 98% of infrared heat.", badge: "Best Performance", badgeColor: "bg-amber-500" },
          { name: "Llumar IRX", desc: "Excellent heat and UV rejection. Wide installer network.", badge: "Great Network", badgeColor: "bg-green-600" },
          { name: "SunTek CXP", desc: "Good performance at a slightly lower price point.", badge: "Best Value", badgeColor: "bg-gray-500" },
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
          </div>
        ))}
      </div>

      <h2>Is the Extra Cost Worth It?</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "Lasts 2-3x longer (cost per year is similar)",
          "Better UV protection (the whole point of medical tint)",
          "Better heat rejection (lower AC, less dry eye)",
          "No signal interference (GPS, phone, radio)",
          "No fading to purple (maintains appearance)",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-xs font-semibold">{item}</p>
          </div>
        ))}
      </div>
      <p>
        For medical use, the performance difference justifies the cost. Ask your <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 font-semibold hover:underline">tint installer</Link> about ceramic options.
      </p>

      <BlogCTA
        heading="Get Your Medical Tint Exemption First"
        description="Before choosing your tint, secure your legal exemption. Our licensed providers evaluate your condition 100% online and deliver your state-specific certificate."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="tip" title="Verify performance claims">
        <p>Ask your installer for the manufacturer&apos;s data sheet showing UV rejection, infrared rejection, and VLT measurements. Don&apos;t rely on verbal claims alone.</p>
      </BlogCallout>
    </>
  );
}

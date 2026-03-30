import Link from "next/link";
import { Layers, Shield, Zap, Star, Eye, CheckCircle, DollarSign } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function WindowTintTypesContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Not all window tint is created equal. The type of tint you choose affects UV protection, heat rejection, visibility, durability, and how well it serves your medical needs. Here&apos;s a breakdown of every major type so you can make an informed choice.
      </p>

      <BlogTLDR items={[
        "5 main types: Dyed, Metalized, Carbon, Ceramic, and Crystalline/Clear",
        "For medical use, ceramic tint is the best investment — 99% UV, best heat rejection, no signal interference",
        "Crystalline/clear tint is ideal for windshields where dark tint isn't legal",
        "Price range: $50 (dyed) to $600+ (ceramic) for a full car",
        "Avoid dyed tint for medical purposes — fades to purple in 3-5 years and has poor UV rejection",
      ]} />

      <BlogComparisonTable
        columns={[{ header: "Type" }, { header: "UV Protection" }, { header: "Heat Rejection" }, { header: "Durability" }, { header: "Price (Full Car)", highlight: true }]}
        rows={[
          ["Dyed", "Moderate", "Low-Mod", "3-5 years", "$50-150"],
          ["Metalized", "Good", "Good", "Very Good", "$100-250"],
          ["Carbon", "Very Good", "Good (40% IR)", "Excellent", "$150-350"],
          ["Ceramic", "99%+ UV", "Best (50-80% IR)", "Best", "$250-600+"],
          ["Crystalline", "99.9% UV", "Very Good", "Excellent", "$300-500+"],
        ]}
      />

      <h2>Tint Types in Detail</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Layers,
            title: "Dyed Window Tint",
            color: "bg-gray-50 border-gray-200",
            iconColor: "text-gray-400",
            badge: "Budget",
            badgeColor: "bg-gray-400",
            specs: [
              { label: "UV", value: "Moderate" },
              { label: "Heat", value: "Low-Mod" },
              { label: "Durability", value: "Lowest — fades to purple" },
              { label: "Appearance", value: "Matte, non-reflective" },
            ],
            bestFor: "Budget buyers who prioritize appearance over performance",
          },
          {
            icon: Zap,
            title: "Metalized Window Tint",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-500",
            badge: "Mid-Range",
            badgeColor: "bg-blue-500",
            specs: [
              { label: "UV", value: "Good" },
              { label: "Heat", value: "Good — reflects heat" },
              { label: "Durability", value: "Very good — resists fading" },
              { label: "Drawback", value: "Interferes with cell/GPS/radio" },
            ],
            bestFor: "Budget heat rejection where signal interference isn't a concern",
          },
          {
            icon: Layers,
            title: "Carbon Window Tint",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-500",
            badge: "Good Value",
            badgeColor: "bg-purple-500",
            specs: [
              { label: "UV", value: "Very good" },
              { label: "Heat", value: "Good — blocks ~40% IR" },
              { label: "Durability", value: "Excellent — won't fade" },
              { label: "Appearance", value: "Matte, dark, attractive" },
            ],
            bestFor: "All-around performance at a mid-range price",
          },
          {
            icon: Star,
            title: "Ceramic Window Tint",
            color: "bg-amber-50 border-amber-200",
            iconColor: "text-amber-500",
            badge: "Best for Medical",
            badgeColor: "bg-amber-500",
            specs: [
              { label: "UV", value: "Excellent — up to 99%" },
              { label: "Heat", value: "Best — blocks 50-80% IR" },
              { label: "Durability", value: "Best — no fade, no bubble, no signal issues" },
              { label: "Appearance", value: "Clean, non-reflective" },
            ],
            bestFor: "Medical use, maximum UV protection, premium quality",
          },
          {
            icon: Eye,
            title: "Crystalline / Clear Tint",
            color: "bg-cyan-50 border-cyan-200",
            iconColor: "text-cyan-500",
            badge: "Nearly Invisible",
            badgeColor: "bg-cyan-500",
            specs: [
              { label: "UV", value: "Excellent — up to 99.9%" },
              { label: "Heat", value: "Very good" },
              { label: "Appearance", value: "Nearly invisible" },
            ],
            bestFor: "UV protection without changing appearance, or for windshields",
          },
        ].map((type) => (
          <div key={type.title} className={`rounded-xl p-5 border ${type.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <type.icon className={`w-5 h-5 ${type.iconColor}`} />
              <p className="font-extrabold text-heading text-sm">{type.title}</p>
              <span className={`text-[9px] font-bold text-white ${type.badgeColor} px-2 py-0.5 rounded-full uppercase tracking-wider ml-auto`}>{type.badge}</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {type.specs.map((spec) => (
                <div key={spec.label} className="bg-white rounded-lg p-2 border border-gray-100">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{spec.label}</p>
                  <p className="text-xs text-gray-700 font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600"><strong>Best for:</strong> {type.bestFor}</p>
          </div>
        ))}
      </div>

      <h2>Which Type for Medical Use?</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-4">
          <Star className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-3">We recommend ceramic tint.</h3>
            <div className="space-y-1.5">
              {[
                "Maximum UV protection — critical for lupus, melanoma, PMLE",
                "Best heat rejection — reduces AC need (which dries eyes)",
                "No signal interference",
                "Won't fade or degrade — important for a long-term exemption",
                "Available in any VLT to match your exemption allowance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">
              <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 font-semibold text-sm hover:underline">Read our detailed ceramic tint guide →</Link>
            </p>
          </div>
        </div>
      </div>

      <BlogCTA
        heading="Get Your Medical Exemption First, Then Choose Your Tint"
        description="Your exemption determines what VLT you can legally use. Get your certificate, then choose the best ceramic tint for your needs."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="tip" title="Installation matters">
        <p>Always have tint installed by a reputable professional. Poor installation leads to bubbling, peeling, and gaps that compromise UV protection. <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 font-semibold hover:underline">Questions to ask your tint installer →</Link></p>
      </BlogCallout>
    </>
  );
}

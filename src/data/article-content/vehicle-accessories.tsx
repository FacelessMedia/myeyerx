import Link from "next/link";
import { Sun, Shield, Eye, Sparkles, Settings, Car, CheckCircle, DollarSign } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function VehicleAccessoriesContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Beyond window tint and sunglasses, several vehicle accessories can make driving significantly more comfortable for light-sensitive people. Most are inexpensive and easy to install yourself.
      </p>

      <BlogTLDR items={[
        "Visor extenders block low-angle sun that factory visors can't reach ($10-30)",
        "Windshield sun strips are legal in most states without an exemption (top 5-6 inches)",
        "Dashboard mat eliminates reflected glare — simple, cheap, surprisingly effective",
        "Auto-dimming rearview mirror handles headlights behind you ($30-80 aftermarket)",
        "Complete stack: tint + sunglasses + visor extender + clean windshield + dimming mirror + dash mat",
      ]} />

      <h2>Accessories</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Sun,
            title: "Visor Extenders",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            desc: "Clip onto existing visor. Block light from angles the standard visor can't reach — especially brutal low-angle sunrise/sunset sun.",
            options: [
              { name: "Polarized", detail: "Filter glare while seeing road. Yellow or gray. $15-30.", badge: "Best" },
              { name: "Opaque", detail: "Block light completely. More blocking, less visibility. $10-20." },
              { name: "Slide-out", detail: "Extend horizontally for side window area. Low-angle side sun. $15-25." },
            ],
          },
          {
            icon: Shield,
            title: "Windshield Sun Strip",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            desc: "Tinted strip across top of windshield (\"brow band\"). Blocks overhead sun without obstructing forward view. Most states allow top 5-6 inches even without exemption.",
          },
          {
            icon: Eye,
            title: "Dashboard Anti-Reflective Mat",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            desc: "Light dashboards reflect sunlight upward into eyes and onto windshield. A dark, non-reflective mat eliminates this secondary glare source. Simple, cheap, surprisingly effective.",
          },
          {
            icon: Settings,
            title: "Auto-Dimming Rearview Mirror",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-green-400",
            desc: "Detects bright headlights behind you and automatically darkens. Much better than manually flipping the tab. $30-80 aftermarket.",
          },
          {
            icon: Sparkles,
            title: "Windshield Cleaning Kit",
            color: "bg-cyan-50 border-cyan-200",
            iconColor: "text-cyan-500",
            desc: "Clean windshield = dramatically less glare.",
            options: [
              { name: "Interior glass cleaner", detail: "Formulated for auto glass (not household)" },
              { name: "Microfiber cloths", detail: "Streak-free interior cleaning" },
              { name: "Rain repellent (Rain-X)", detail: "Water beads and rolls off" },
              { name: "Fresh wiper blades", detail: "Replace every 6-12 months" },
            ],
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-xl p-5 border ${section.color}`}>
            <div className="flex items-center gap-3 mb-2">
              <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              <p className="font-extrabold text-heading text-sm">{section.title}</p>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">{section.desc}</p>
            {section.options && (
              <div className="space-y-1.5 mt-2">
                {section.options.map((opt) => (
                  <div key={opt.name} className="flex items-start gap-2 bg-white rounded-lg p-2 border border-gray-100">
                    <span className="text-gray-300 text-xs flex-shrink-0 mt-0.5">●</span>
                    <p className="text-xs text-gray-600">
                      <strong>{opt.name}</strong> — {opt.detail}
                      {(opt as { badge?: string }).badge && <span className="ml-1 text-[9px] font-bold text-white bg-gray-1000 px-1.5 py-0.5 rounded-full">{(opt as { badge: string }).badge}</span>}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <BlogCallout variant="tip" title="Seat position tip">
        <p>Raise your seat slightly so the roof provides more overhead shade. Tilt back slightly to bring overhead light above your field of view. Ensure you can still see over the wheel and reach all controls.</p>
      </BlogCallout>

      <h2>The Complete Driving Protection Stack</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { num: "1", label: "Medical window tint", desc: "Passive, all windows", link: "/resources/complete-guide-to-window-tint-medical-exemptions" },
          { num: "2", label: "Polarized sunglasses", desc: "Active eye protection", link: "/resources/best-sunglasses-driving-light-sensitivity" },
          { num: "3", label: "Visor extender", desc: "Low-angle sun" },
          { num: "4", label: "Clean windshield", desc: "Eliminates scatter glare" },
          { num: "5", label: "Auto-dimming mirror", desc: "Headlights behind" },
          { num: "6", label: "Dashboard mat", desc: "Reflected glare" },
        ].map((item) => (
          <div key={item.num} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-extrabold mb-1">{item.num}</span>
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
            {item.link && <Link href={item.link} className="text-amber-600 text-[10px] font-semibold hover:underline mt-1 inline-block">Learn more →</Link>}
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Start with the Foundation: Medical Window Tint"
        description="Accessories help — but medical tint is the foundation of driving comfort. Get your exemption and build your protection stack from there."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Note">
        <p>All accessories should be installed safely and must not obstruct your view. Check your state&apos;s regulations regarding windshield obstructions.</p>
      </BlogCallout>
    </>
  );
}

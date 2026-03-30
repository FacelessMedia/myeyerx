import Link from "next/link";
import { Zap, Radio, Palette, Glasses, Shield, Lightbulb, Lamp, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function FluorescentLightsContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Fluorescent lights are the single most common lighting complaint among light-sensitive people. They flicker, they emit harsh blue-green wavelengths, and they&apos;re everywhere — offices, schools, hospitals, retail stores. Here&apos;s why they&apos;re problematic and what you can do about them.
      </p>

      <BlogTLDR items={[
        "Fluorescents flicker at 120Hz — invisible to your eyes but your brain detects it, triggering headaches",
        "They emit concentrated spikes in the 480-520nm blue-green range — the worst for photophobia",
        "FL-41 glasses were literally invented for fluorescent light sensitivity (\"FL\" = fluorescent)",
        "Light covers ($15-40/fixture) filter the problematic wavelengths at the source",
        "At home: replace with warm LED tubes, panels, or strip lights for immediate relief",
      ]} />

      <h2>Why Fluorescents Are the Worst</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: Zap,
            title: "Invisible Flicker",
            desc: "Tubes cycle on/off 120 times per second. Your brain detects this subliminal flicker, activating the visual cortex and triggering headaches, eye strain, and migraines.",
            detail: "Older magnetic ballasts: 100-120Hz (worst). Electronic ballasts: 20,000-40,000Hz (better but many offices still have the older type).",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
          {
            icon: Radio,
            title: "Blue-Green Spikes",
            desc: "Fluorescents emit concentrated energy spikes at specific wavelengths — one of the strongest falls right in the 480-520nm range that triggers photophobia.",
            detail: "This is the exact wavelength range that activates pain-sensing cells (ipRGCs) in your retina.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
          {
            icon: Palette,
            title: "Harsh, Flat Quality",
            desc: "Lacks the warmth and depth of natural or LED light. Flat, clinical, and unflattering — creates low-level discomfort that accumulates throughout the day.",
            detail: "Low CRI (Color Rendering Index) means colors look washed out and unnatural.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-xl p-5 border ${item.color}`}>
            <item.icon className={`w-6 h-6 ${item.iconColor} mb-3`} />
            <p className="font-extrabold text-heading text-sm mb-1">{item.title}</p>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">{item.desc}</p>
            <div className="bg-white/70 rounded-lg p-2.5">
              <p className="text-[10px] text-gray-500 leading-relaxed">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Solutions</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Glasses,
            title: "FL-41 Glasses",
            color: "bg-rose-50 border-rose-200",
            iconColor: "text-rose-500",
            content: (
              <p className="text-gray-600 text-sm leading-relaxed">
                <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 font-semibold hover:underline">FL-41 tinted lenses</Link> were literally invented for fluorescent light sensitivity (the &quot;FL&quot; stands for fluorescent). They filter the specific blue-green wavelengths that fluorescents emit in excess. Indoor FL-41 glasses are light enough for all-day wear.
              </p>
            ),
          },
          {
            icon: Shield,
            title: "Fluorescent Light Covers",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            content: (
              <div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Translucent panels or wraps that fit over fixtures, filtering blue-green wavelengths and reducing harshness. Brands: NaturaLux and Make Great Light.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { type: "Magnetic Covers", desc: "Snap onto fixture with magnets" },
                    { type: "Tube Wraps", desc: "Slip over individual tubes" },
                    { type: "Cost", desc: "$15-40 per fixture" },
                  ].map((item) => (
                    <div key={item.type} className="bg-gray-50 rounded-lg p-3 border border-blue-100 text-center">
                      <p className="font-bold text-heading text-xs">{item.type}</p>
                      <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            icon: Lightbulb,
            title: "Request Accommodation",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            content: (
              <p className="text-gray-600 text-sm leading-relaxed">
                Request <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 font-semibold hover:underline">workplace accommodations</Link> including having the tubes directly above your desk removed or disconnected. This is a simple, free change that makes a dramatic difference.
              </p>
            ),
          },
          {
            icon: Lamp,
            title: "Supplement with Task Lighting",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            content: (
              <p className="text-gray-600 text-sm leading-relaxed">
                Replace overhead fluorescents with a desk lamp using a warm-toned (2700K) LED bulb. You get the light you need for work without the problematic wavelengths and flicker.
              </p>
            ),
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-2xl p-5 border ${section.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              <h3 className="font-extrabold text-heading text-base">{section.title}</h3>
            </div>
            {section.content}
          </div>
        ))}
      </div>

      <h2>At Home Replacements</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { title: "LED Tube Replacements", desc: "Drop-in LED tubes that fit existing fluorescent fixtures. No flicker, better color, lower energy use.", badge: "Easiest Swap" },
          { title: "LED Panel Lights", desc: "Replace the entire fixture with a flat LED panel. Clean look, no flicker, adjustable color temperature.", badge: "Best Look" },
          { title: "LED Strip Lights", desc: "Warm-toned strips under cabinets or along ceiling edges for ambient light without overhead harshness.", badge: "Most Flexible" },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
            <span className="text-[10px] font-bold text-amber-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase">{item.badge}</span>
            <p className="font-bold text-heading text-sm mt-2">{item.title}</p>
            <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Fluorescents at Work — Sunlight While Driving"
        description="FL-41 glasses and light covers manage fluorescent exposure. For sunlight and glare while driving, a medical window tint exemption provides passive protection."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. If fluorescent lights significantly impact your ability to work, consult a healthcare provider and review your <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 font-semibold hover:underline">workplace accommodation options</Link>.</p>
      </BlogCallout>
    </>
  );
}

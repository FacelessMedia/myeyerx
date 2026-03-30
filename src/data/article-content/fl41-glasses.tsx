import Link from "next/link";
import { Glasses, Brain, Eye, Zap, AlertTriangle, CheckCircle, X, ShoppingCart, Star } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function Fl41GlassesContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        FL-41 tinted lenses are specifically designed for people with light sensitivity. Unlike regular sunglasses or blue light glasses, FL-41 filters the exact wavelength range — blue-green light between 480 and 520 nanometers — that research has identified as the most problematic for photophobia and migraines.
      </p>

      <BlogTLDR items={[
        "FL-41 filters the specific 480-520nm wavelength that triggers photophobia — not just \"blue light\"",
        "Studies show up to 74% reduction in migraine frequency for some patients",
        "Indoor versions (50-55% VLT) are subtle enough for office use",
        "TheraSpecs and Axon Optics are the leading brands, starting around $99",
        "Never wear dark sunglasses indoors — it makes photophobia worse over time",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Glasses} value="480-520nm" label="Targeted wavelength range" />
        <BlogStat icon={Brain} value="74%" label="Migraine reduction in studies" />
        <BlogStat icon={ShoppingCart} value="$99+" label="Starting price" />
      </BlogStatRow>

      <h2>What Makes FL-41 Different</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-rose-50 to-amber-50 p-6">
        <div className="flex items-start gap-4">
          <Glasses className="w-8 h-8 text-rose-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Not Just a Darker Lens</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              FL-41 is a specific rose-tinted filter developed at the University of Birmingham in the 1990s for fluorescent light sensitivity (the &quot;FL&quot; stands for fluorescent). It selectively blocks 480-520nm wavelengths while letting other visible light through.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>The science:</strong> <strong>Intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> are most sensitive to this blue-green range. These cells connect directly to the brain&apos;s pain processing centers and drive the pain response in photophobia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Who Benefits Most</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Brain, label: "Migraine Sufferers", desc: "Up to 74% reduction in frequency in some patients", color: "text-purple-500" },
          { icon: Eye, label: "Blepharospasm Patients", desc: "Reduces involuntary eyelid spasms triggered by light", color: "text-blue-500" },
          { icon: Zap, label: "TBI / Concussion", desc: "Helps manage post-concussion light sensitivity", color: "text-orange-500" },
          { icon: Glasses, label: "Fluorescent Light Exposure", desc: "The original use case — still one of the best", color: "text-rose-500" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-gray-100">
            <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Indoor vs Outdoor</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-rose-200 bg-white p-6">
          <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full uppercase">Indoor</span>
          <p className="font-extrabold text-heading text-base mt-2 mb-1">50-55% VLT</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lighter tint, comfortable for office work, retail environments, and any indoor fluorescent-lit space. Rose tint is subtle enough for professional settings.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-gray-700 bg-gray-900 text-white p-6">
          <span className="text-xs font-bold text-amber-400 bg-gray-700 px-2 py-0.5 rounded-full uppercase">Outdoor</span>
          <p className="font-extrabold text-base mt-2 mb-1">15-25% VLT</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Darker tint, works as functional sunglasses with FL-41 wavelength filtering. Good for overcast days and moderate brightness.
          </p>
        </div>
      </div>

      <h2>Where to Buy</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          {
            name: "TheraSpecs",
            desc: "The most well-known FL-41 brand. Indoor and outdoor versions, multiple frames, fit-over options for prescription glasses.",
            price: "Starting ~$99",
            badge: "Most Popular",
            badgeColor: "bg-amber-500",
          },
          {
            name: "Axon Optics",
            desc: "Wide frame selection with similar FL-41 technology. Popular alternative with comparable pricing.",
            price: "Starting ~$99",
            badge: "Great Alternative",
            badgeColor: "bg-blue-500",
          },
          {
            name: "Your Optometrist",
            desc: "Many can add FL-41 tint to your existing prescription lenses. Best option if you need prescription correction.",
            price: "Varies",
            badge: "Best for Rx",
            badgeColor: "bg-green-600",
          },
        ].map((item) => (
          <div key={item.name} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
            <ShoppingCart className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-heading text-sm">{item.name}</span>
                <span className={`text-[10px] font-bold text-white ${item.badgeColor} px-2 py-0.5 rounded-full`}>{item.badge}</span>
              </div>
              <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
            </div>
            <span className="text-xs font-bold text-gray-500 whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>

      <h2>FL-41 vs Blue Light Glasses</h2>
      <BlogComparisonTable
        columns={[
          { header: "Feature" },
          { header: "FL-41 Lenses" },
          { header: "Blue Light Glasses" },
        ]}
        rows={[
          ["Target Range", "480-520nm (blue-green)", "Below 450nm (broad blue)"],
          ["Designed For", "Photophobia & migraines", "General screen comfort"],
          ["Research Backing", "Multiple clinical studies", "Limited evidence"],
          ["Tint Color", "Rose / pink tint", "Yellow / clear tint"],
          ["Light Sensitivity", "★★★★★ Purpose-built", "★★☆☆☆ Indirect help"],
          ["Sleep Aid", "Moderate", "May help with sleep"],
        ]}
      />

      <h2>Important Warning: Don&apos;t Wear Sunglasses Indoors</h2>
      <BlogCallout variant="warning" title="Dark sunglasses make photophobia WORSE">
        <p>
          Wearing dark sunglasses indoors causes your eyes to adapt to the darker environment. When removed, normal indoor light feels even more painful — creating a cycle of increasing darkness dependence. <strong>FL-41 avoids this</strong> because indoor versions let plenty of light through while removing only the most problematic wavelengths.
        </p>
      </BlogCallout>

      <BlogCTA
        heading="FL-41 Manages Indoor Light — Tint Manages Driving"
        description="FL-41 glasses filter problematic wavelengths indoors. For outdoor driving, a medical window tint exemption provides passive protection against sunlight and glare."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>FL-41 glasses are a management tool, not a medical treatment. Consult your healthcare provider for a comprehensive treatment plan for your light sensitivity condition.</p>
      </BlogCallout>
    </>
  );
}

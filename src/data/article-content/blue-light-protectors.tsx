import Link from "next/link";
import { Shield, CheckCircle, X, ThumbsUp, ThumbsDown } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function BlueLightProtectorsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Physical blue light screen protectors — tempered glass or film overlays that you stick on your phone, tablet, or monitor — claim to reduce blue light exposure. Brands like Ocushield and EyeJust are popular options. But do they actually help with light sensitivity? Here&apos;s an honest assessment.
      </p>

      <BlogTLDR items={[
        "Physical screen protectors help a little, but software solutions (f.lux, Dark Mode) do more",
        "Main advantage: they work on every app, every screen, all the time — including splash screens",
        "Matte/anti-glare finish provides real, immediate glare reduction for photophobia",
        "Best as a $20-40 supplementary layer on top of proper display settings",
        "For light sensitivity specifically, FL-41 glasses outperform both screen protectors and blue light glasses",
      ]} />

      <h2>What They Do</h2>
      <p>
        Blue light screen protectors use a coating or material that absorbs or reflects a portion of the blue light spectrum emitted by your screen. Most target the 380-450nm range. They also typically offer anti-glare or matte finishes that reduce surface reflections.
      </p>

      <h2>Popular Brands</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            name: "Ocushield",
            type: "Medical-grade",
            desc: "Developed with optometrists. Blocks ~30-40% of blue light. Clear finish preserves color accuracy.",
            badge: "Top Pick",
            badgeColor: "bg-green-500",
            devices: "Phones, tablets, monitors, laptops",
          },
          {
            name: "EyeJust",
            type: "Consumer-grade",
            desc: "Similar blue light filtering with anti-microbial coating. Comparable tech to Ocushield.",
            badge: "Good Option",
            badgeColor: "bg-blue-500",
            devices: "Phones, tablets",
          },
          {
            name: "Generic Matte",
            type: "Anti-glare only",
            desc: "Don't specifically filter blue light but reduce glare and reflections — helps light sensitivity indirectly.",
            badge: "Budget Pick",
            badgeColor: "bg-gray-500",
            devices: "All devices",
          },
        ].map((brand) => (
          <div key={brand.name} className="rounded-xl border border-gray-200 bg-white p-5">
            <span className={`text-[10px] font-bold text-white ${brand.badgeColor} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{brand.badge}</span>
            <h3 className="font-extrabold text-heading text-base mt-2 mb-0.5">{brand.name}</h3>
            <p className="text-xs text-gray-400 font-semibold mb-2">{brand.type}</p>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">{brand.desc}</p>
            <p className="text-[10px] text-gray-400">{brand.devices}</p>
          </div>
        ))}
      </div>

      <h2>Do They Actually Help?</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center gap-2 mb-3">
            <ThumbsUp className="w-5 h-5 text-green-600" />
            <h3 className="font-extrabold text-heading text-sm">What They Do Well</h3>
          </div>
          <div className="space-y-2">
            {[
              "Work on every app, every screen, all the time",
              "Active during splash screens & loading screens",
              "Anti-glare/matte finish is real and immediate",
              "No battery drain or settings to remember",
              "One-time purchase, no subscription",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center gap-2 mb-3">
            <ThumbsDown className="w-5 h-5 text-red-500" />
            <h3 className="font-extrabold text-heading text-sm">Limitations</h3>
          </div>
          <div className="space-y-2">
            {[
              "Filter a fixed percentage — can't adapt to time of day",
              "Can't go warmer when you need it",
              "Can't combine with brightness reduction",
              "Software tools are more flexible and effective",
              "Don't target the most problematic 480-520nm range",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Matte vs Glossy</h2>
      <BlogComparisonTable
        columns={[
          { header: "Feature" },
          { header: "Matte (Anti-Glare)" },
          { header: "Glossy" },
        ]}
        rows={[
          ["Glare Reduction", "Excellent — diffuses reflections", "Poor — reflects overhead lights"],
          ["Screen Clarity", "Slightly reduced", "Full clarity preserved"],
          ["Color Vibrancy", "Slightly muted", "Full vibrancy"],
          ["For Photophobia", "★★★★★ Almost always better", "★★☆☆☆ Reflections are irritating"],
        ]}
      />

      <BlogCallout variant="tip" title="Our Recommendation">
        <p>Use software solutions as your primary defense — Dark Mode, Night Shift/Night Light, Reduce White Point/Extra Dim, and <Link href="/resources/best-apps-light-sensitivity" className="text-amber-600 font-semibold hover:underline">f.lux</Link>. If you want an extra layer, a matte screen protector with blue light filtering (like Ocushield) is a reasonable $20-40 investment. Just don&apos;t expect it to replace proper display settings.</p>
      </BlogCallout>

      <h2>What About Blue Light Glasses?</h2>
      <p>
        Blue light glasses and screen protectors work on the same principle. For general screen use, either works. But for light sensitivity specifically, <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 font-semibold hover:underline">FL-41 tinted glasses</Link> are significantly more effective because they target the specific 480-520nm wavelength range that triggers photophobia — not just the broader blue light spectrum.
      </p>

      <BlogCTA
        heading="Screen Protectors Help — But What About Driving?"
        description="Software and physical filters manage screen light. For uncontrollable sunlight while driving, a medical window tint exemption provides passive protection."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Screen protectors are not medical devices. Consult a healthcare provider for persistent light sensitivity.</p>
      </BlogCallout>
    </>
  );
}

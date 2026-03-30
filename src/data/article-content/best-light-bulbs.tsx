import Link from "next/link";
import { Lightbulb, AlertTriangle, Star, CheckCircle, ShoppingCart } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function BestLightBulbsContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Swapping your light bulbs is the single biggest and cheapest change most light-sensitive people can make at home. The wrong bulb can trigger headaches, eye strain, and migraine attacks. The right one makes a room feel instantly more comfortable. Here&apos;s everything you need to know.
      </p>

      <BlogTLDR items={[
        "Buy 2700K or lower for every room — the single most important number on the box",
        "Philips Warm Glow bulbs shift from 2700K→2200K as you dim — best for evening use",
        "Replace fluorescent tubes immediately — they flicker and emit problematic blue-green spikes",
        "Always buy dimmable bulbs, even if you don't have dimmer switches yet",
        "Look for CRI 90+ for natural-looking light. Cost: just $2-4 per bulb",
      ]} />

      <h2>Color Temperature: The Number That Matters</h2>
      <p>
        Color temperature is measured in <strong>Kelvin (K)</strong>. Lower numbers = warmer, more amber light. Higher numbers = cooler, bluer light. For light sensitivity, lower is better.
      </p>

      <BlogComparisonTable
        columns={[
          { header: "Temperature" },
          { header: "Name" },
          { header: "Feels Like" },
          { header: "For Photophobia", highlight: true },
        ]}
        rows={[
          ["2200K", "Candlelight", "Very warm, amber glow", "★★★★★ Best"],
          ["2700K", "Warm White", "Standard warm — the sweet spot", "★★★★★ Great"],
          ["3000K", "Soft White", "Slightly cooler, still tolerable", "★★★☆☆ OK"],
          ["3500-4000K", "Neutral/Cool", "Noticeably cooler, blue-ish", "★★☆☆☆ Avoid"],
          ["5000-6500K", "Daylight", "Mimics midday sun — harsh", "★☆☆☆☆ Avoid"],
        ]}
      />

      <h2>Why Fluorescent Bulbs Are the Worst</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: AlertTriangle,
            title: "120Hz Flicker",
            desc: "Your conscious mind can't see it, but your brain detects it — triggers headaches and migraines in many people.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
          {
            icon: AlertTriangle,
            title: "Blue-Green Spikes",
            desc: "Fluorescents emit spikes in the 480-520nm range — the most irritating wavelength for photophobia.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
          {
            icon: AlertTriangle,
            title: "Harsh Quality",
            desc: "Flat, clinical light lacking the warmth and depth of incandescent or quality LED light.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-xl p-5 border ${item.color}`}>
            <item.icon className={`w-5 h-5 ${item.iconColor} mb-2`} />
            <p className="font-bold text-heading text-sm">{item.title}</p>
            <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <p>
        If your home still has fluorescent tubes (common in kitchens and garages), replacing them with warm LED panels or strip lights is one of the highest-impact changes you can make.
      </p>

      <h2>Best Bulbs for Light-Sensitive People</h2>
      <div className="not-prose my-8 space-y-4">
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-gray-1000 px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> TOP PICK</span>
          </div>
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <h3 className="font-extrabold text-heading text-base mb-1">Philips Warm Glow</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These LEDs do something unique: as you dim them, the color temperature drops from 2700K → 2200K — mimicking how old incandescent bulbs got warmer as you dimmed them. At low brightness, you get candlelight-warm light. Perfect for evening use with dimmer switches.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-extrabold text-heading text-base mb-1">Standard Warm White LEDs (2700K)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Any name-brand LED rated at 2700K works well. Look for <strong>CRI 90+</strong> for natural-looking light. Brands: Philips, GE, Cree, Sylvania. Just $2-4 per bulb.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-100 p-6">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div>
              <h3 className="font-extrabold text-heading text-base mb-1">Smart Bulbs (Adjustable Temperature)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Philips Hue, LIFX, and Wyze let you adjust brightness and color temperature from your phone. Set to 2200K for relaxing, 2700K for tasks. <Link href="/resources/smart-home-lighting-light-sensitivity" className="text-amber-600 font-semibold hover:underline">Read our smart lighting guide →</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>What to Look for on the Box</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Color Temp", value: "2700K or lower", icon: "🌡️" },
          { label: "CRI", value: "90+ for natural light", icon: "🎨" },
          { label: "Dimmable", value: "Always buy dimmable", icon: "💡" },
          { label: "Lumens", value: "800 ≈ old 60W bulb", icon: "✨" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-4 border border-gray-100 text-center">
            <p className="text-2xl mb-1">{item.icon}</p>
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.value}</p>
          </div>
        ))}
      </div>

      <h2>Quick Wins</h2>
      <BlogStepCards steps={[
        { icon: CheckCircle, title: "Audit Your Home", description: "Walk through and note every cool-white or daylight bulb" },
        { icon: ShoppingCart, title: "Buy Warm White LEDs", description: "Grab a pack of 2700K bulbs — just $2-4 each" },
        { icon: Lightbulb, title: "Replace Everything", description: "Swap them all in one evening — takes under an hour" },
        { icon: Star, title: "Notice the Difference", description: "The change in comfort is immediate and dramatic" },
      ]} />

      <BlogCTA
        heading="Better Bulbs at Home — Better Tint in Your Car"
        description="If warm lighting helps your eyes relax at home, imagine medical-grade window tint doing the same for your daily drive. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Lighting adjustments can help manage light sensitivity symptoms but are not a substitute for medical treatment.</p>
      </BlogCallout>
    </>
  );
}

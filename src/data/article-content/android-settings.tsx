import Link from "next/link";
import { Moon, Sun, SlidersHorizontal, Palette, Layers, Smartphone, Zap, ChevronDown } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function AndroidSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Android devices have powerful built-in tools for reducing screen brightness and filtering harsh light — and Samsung phones have a few extras that make them especially good for light-sensitive users. Here&apos;s how to set everything up.
      </p>

      <BlogTLDR items={[
        "Extra Dim is Android's secret weapon — dims below the normal minimum brightness",
        "Samsung devices have bonus features like Eye Comfort Shield and Natural screen mode",
        "The \"Ultra-Dim Stack\" combines 4-5 settings for maximum comfort during attacks",
        "Add key toggles to Quick Settings for one-swipe access",
        "Set up Bixby/Google Assistant Routines to toggle all settings with one voice command",
      ]} />

      <BlogComparisonTable
        columns={[
          { header: "Setting" },
          { header: "Where to Find It" },
          { header: "What It Does" },
          { header: "Impact", highlight: true },
        ]}
        rows={[
          ["Dark Theme", "Settings → Display", "Light text on dark backgrounds", "★★★★★"],
          ["Eye Comfort / Night Light", "Settings → Display", "Shifts screen to warm amber tones", "★★★★☆"],
          ["Extra Dim", "Settings → Accessibility", "Dims below minimum brightness", "★★★★★"],
          ["Bedtime Mode", "Digital Wellbeing", "Grayscale + Do Not Disturb", "★★★☆☆"],
          ["Color Inversion", "Settings → Accessibility", "Dark Mode for unsupported apps", "★★★☆☆"],
          ["Screen Mode: Natural", "Settings → Display (Samsung)", "Subdued, accurate colors", "★★★★☆"],
        ]}
      />

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Moon,
            num: "1",
            title: "Dark Theme",
            color: "bg-gray-900",
            path: "Settings → Display → Dark Theme → ON",
            desc: "Android's system-wide Dark Theme switches the UI to light text on dark backgrounds. Most Google apps and many third-party apps automatically follow this setting.",
            tip: "Schedule it for sunset activation, or just leave it on permanently.",
          },
          {
            icon: Sun,
            num: "2",
            title: "Eye Comfort Shield / Night Light",
            color: "bg-amber-500",
            path: "Settings → Display → Eye Comfort Shield (Samsung) or Night Light (Stock)",
            desc: "Shifts your screen color temperature toward warm amber tones, reducing blue light output in the 480-520nm range that's most irritating for photophobia.",
            tip: "Push the warmth slider to maximum. Samsung users: set to \"Adaptive\" for auto-adjustments.",
          },
          {
            icon: SlidersHorizontal,
            num: "3",
            title: "Extra Dim",
            color: "bg-purple-500",
            path: "Settings → Accessibility → Extra Dim → ON",
            desc: "Android's equivalent of iPhone's Reduce White Point — a game-changer. Reduces screen brightness below the normal minimum, critical for dark environments or during migraine attacks.",
            tip: "Add to Quick Settings panel for instant access. Start at 50% and adjust.",
          },
          {
            icon: Palette,
            num: "4",
            title: "Bedtime Mode / Wind Down",
            color: "bg-indigo-500",
            path: "Settings → Digital Wellbeing → Bedtime Mode → Grayscale ON",
            desc: "Applies a grayscale filter to your entire screen. Removing all color reduces visual stimulation significantly, which some people with photophobia find very helpful.",
            tip: "Schedule it or toggle manually. Great for extreme migraine situations.",
          },
        ].map((setting) => (
          <div key={setting.num} className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
            <div className="flex items-start gap-4 p-5">
              <div className={`w-10 h-10 rounded-xl ${setting.color} flex items-center justify-center flex-shrink-0`}>
                <setting.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-400">STEP {setting.num}</span>
                </div>
                <h3 className="font-extrabold text-heading text-base mb-1">{setting.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{setting.desc}</p>
                <div className="bg-gray-50 rounded-lg px-3 py-2 text-xs font-mono text-gray-600 mb-2">{setting.path}</div>
                <p className="text-amber-600 text-xs font-semibold">💡 {setting.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Samsung-Specific Features</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: "Blue Light Filter",
            desc: "Separate from Eye Comfort Shield with more granular control over intensity and scheduling.",
            badge: "Samsung Only",
          },
          {
            title: "Screen Mode: Natural",
            desc: "Set to \"Natural\" instead of \"Vivid\" for subdued, accurate colors that are easier on sensitive eyes.",
            badge: "Samsung Only",
          },
          {
            title: "Edge Lighting",
            desc: "Subtle notification indicators along the screen edge instead of flashing the whole display.",
            badge: "Samsung Only",
          },
        ].map((item) => (
          <div key={item.title} className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full uppercase tracking-wider">{item.badge}</span>
            <p className="font-bold text-heading text-sm mt-2 mb-1">{item.title}</p>
            <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>The Android Ultra-Dim Stack</h2>
      <div className="not-prose my-8 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border-2 border-purple-200">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-purple-500" />
          <h3 className="font-extrabold text-heading text-base">Maximum Comfort Combo</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Combine these settings for a screen that&apos;s significantly dimmer and warmer than any single setting alone. Add it as a custom routine in Bixby Routines (Samsung) or Google Assistant Routines to toggle everything with one voice command.
        </p>
        <div className="space-y-2">
          {[
            { step: "1", label: "Dark Theme", detail: "ON" },
            { step: "2", label: "Eye Comfort / Night Light", detail: "Max warmth" },
            { step: "3", label: "Extra Dim", detail: "50-80%" },
            { step: "4", label: "Screen Brightness", detail: "Minimum" },
            { step: "5", label: "Grayscale (optional)", detail: "For extreme situations" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-purple-100">
              <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
              <span className="font-bold text-heading text-sm flex-1">{item.label}</span>
              <span className="text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>Quick Settings Shortcuts</h2>
      <div className="not-prose my-6 bg-surface rounded-xl p-5 border border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <ChevronDown className="w-5 h-5 text-gray-400" />
          <p className="font-bold text-heading text-sm">Add these to your Quick Settings panel (swipe down from top):</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Dark Theme", "Extra Dim", "Eye Comfort Shield", "Blue Light Filter"].map((toggle) => (
            <div key={toggle} className="bg-white rounded-lg p-3 border border-gray-100 text-center">
              <p className="text-xs font-bold text-heading">{toggle}</p>
            </div>
          ))}
        </div>
      </div>

      <BlogCallout variant="tip" title="Screen settings only go so far">
        <p>Phone settings manage screen light, but driving exposes you to uncontrollable sunlight and glare. A <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical window tint exemption</Link> provides passive protection you don&apos;t have to think about. <Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 font-semibold hover:underline">On iPhone? See our iPhone guide →</Link></p>
      </BlogCallout>

      <BlogCTA
        heading="Need Protection Beyond Your Screen?"
        description="A medical window tint exemption protects you from sunlight and glare while driving — no settings to toggle, no battery to drain. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

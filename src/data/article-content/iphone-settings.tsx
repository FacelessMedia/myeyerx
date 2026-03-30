import Link from "next/link";
import { Moon, Sun, SlidersHorizontal, Palette, Layers, Smartphone, Settings, Zap, Eye } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function IphoneSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your iPhone has some incredibly powerful accessibility features that can make screen time dramatically more comfortable for light-sensitive eyes. Most people only know about brightness and Dark Mode — but Apple has buried several other tools that, when combined, create what we call the &quot;Ultra-Dim Stack.&quot;
      </p>

      <BlogTLDR items={[
        "Dark Mode + Night Shift are just the start — the real power is in Accessibility settings",
        "Reduce White Point can dim your screen below the normal minimum brightness",
        "The \"Ultra-Dim Stack\" combines 4 settings for maximum comfort during migraine attacks",
        "Set up a triple-click shortcut for instant Reduce White Point toggling",
        "Per-App Settings let you force Dark Mode on apps that don't support it",
      ]} />

      <BlogComparisonTable
        columns={[
          { header: "Setting" },
          { header: "Where to Find It" },
          { header: "What It Does" },
          { header: "Impact", highlight: true },
        ]}
        rows={[
          ["Dark Mode", "Settings → Display & Brightness", "Light text on dark backgrounds", "★★★★★"],
          ["Night Shift", "Settings → Display & Brightness", "Shifts screen to warm amber tones", "★★★★☆"],
          ["Reduce White Point", "Accessibility → Display & Text Size", "Dims below minimum brightness", "★★★★★"],
          ["Color Filters", "Accessibility → Display & Text Size", "Applies FL-41-like screen tint", "★★★☆☆"],
          ["Smart Invert", "Accessibility → Display & Text Size", "Dark Mode for unsupported apps", "★★★☆☆"],
          ["Auto-Brightness", "Accessibility → Display & Text Size", "Adjusts to ambient light", "★★★★☆"],
        ]}
      />

      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Moon,
            num: "1",
            title: "Dark Mode",
            color: "bg-gray-900",
            path: "Settings → Display & Brightness → select Dark",
            desc: "The most basic and most important change. Dark Mode inverts most of the interface to use light text on dark backgrounds, dramatically reducing overall light output from your screen.",
            tip: "Schedule it for sunset→sunrise, or just leave it on permanently.",
          },
          {
            icon: Sun,
            num: "2",
            title: "Night Shift",
            color: "bg-amber-500",
            path: "Settings → Display & Brightness → Night Shift",
            desc: "Shifts your screen's color temperature toward warm amber tones, reducing the blue light output. Blue light in the 480-520nm range is the most irritating wavelength for photophobia.",
            tip: "Slide color temperature all the way to \"More Warm\" for maximum effect.",
          },
          {
            icon: SlidersHorizontal,
            num: "3",
            title: "Reduce White Point",
            color: "bg-purple-500",
            path: "Settings → Accessibility → Display & Text Size → Reduce White Point",
            desc: "The hidden gem most people don't know about. Dims the intensity of bright colors on your screen without affecting the minimum brightness. Even when brightness is already at its lowest, this can make it even dimmer.",
            tip: "Start around 50% and adjust to your comfort level. Essential for migraine attacks.",
          },
          {
            icon: Palette,
            num: "4",
            title: "Color Filters",
            color: "bg-pink-500",
            path: "Settings → Accessibility → Display & Text Size → Color Filters",
            desc: "Apply an amber or warm tint (similar to FL-41 glasses but on your screen) or enable Grayscale to remove all color and reduce visual stimulation.",
            tip: "Color Tint with warm amber is best for photophobia; Grayscale for extreme situations.",
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

      <h2>The Ultra-Dim Stack</h2>
      <div className="not-prose my-8 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border-2 border-purple-200">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-purple-500" />
          <h3 className="font-extrabold text-heading text-base">Maximum Comfort Combo</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          For maximum comfort, combine all of these together. This combination gets your screen dimmer than any single setting can achieve alone — the difference between &quot;tolerable&quot; and &quot;actually comfortable&quot; during migraine attacks or in dark environments.
        </p>
        <div className="space-y-2">
          {[
            { step: "1", label: "Dark Mode", detail: "ON" },
            { step: "2", label: "Night Shift", detail: "Maximum warmth" },
            { step: "3", label: "Reduce White Point", detail: "80-100%" },
            { step: "4", label: "Screen Brightness", detail: "Minimum" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-purple-100">
              <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
              <span className="font-bold text-heading text-sm flex-1">{item.label}</span>
              <span className="text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>Pro Tips &amp; Shortcuts</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            icon: Zap,
            title: "Triple-Click Shortcut",
            desc: "Settings → Accessibility → Accessibility Shortcut → Reduce White Point. Triple-click the side button to toggle instantly.",
            color: "text-amber-500",
          },
          {
            icon: Smartphone,
            title: "Per-App Dark Mode",
            desc: "Settings → Accessibility → Per-App Settings → Add App → set Dark Mode to \"On\" — force it for any app.",
            color: "text-blue-500",
          },
          {
            icon: Eye,
            title: "Smart Invert",
            desc: "Settings → Accessibility → Display & Text Size → Smart Invert. Dark Mode for apps that refuse to support it.",
            color: "text-purple-500",
          },
          {
            icon: Settings,
            title: "Auto-Brightness",
            desc: "Keep enabled at Settings → Accessibility → Display & Text Size. Combined with Reduce White Point, your screen auto-adjusts perfectly.",
            color: "text-green-600",
          },
        ].map((tip) => (
          <div key={tip.title} className="bg-surface rounded-xl p-5 border border-gray-100">
            <tip.icon className={`w-6 h-6 ${tip.color} mb-3`} />
            <p className="font-bold text-heading text-sm mb-1">{tip.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>

      <BlogCallout variant="tip" title="Screen settings only go so far">
        <p>These settings help manage screen-based light exposure. For driving, where you can&apos;t control the light source, a <Link href="/resources/complete-guide-to-window-tint-medical-exemptions" className="text-amber-600 font-semibold hover:underline">medical window tint exemption</Link> provides passive protection that&apos;s always working. <Link href="/resources/android-settings-light-sensitivity" className="text-amber-600 font-semibold hover:underline">On Android? See our Android guide →</Link></p>
      </BlogCallout>

      <BlogCTA
        heading="Need Protection Beyond Your Screen?"
        description="A medical window tint exemption protects you from sunlight and glare while driving — no settings to toggle, no battery to drain. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

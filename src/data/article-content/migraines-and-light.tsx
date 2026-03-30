import Link from "next/link";
import { Brain, Sun, Zap, Car, Monitor as MonitorIcon, Lightbulb, Glasses, Eye, Moon, Leaf, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function MigrainesAndLightContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Light is one of the most common migraine triggers — and during an attack, even dim light can feel unbearable. Understanding the connection between migraines and light sensitivity is the first step toward better managing both.
      </p>

      <BlogTLDR items={[
        "80-90% of migraine sufferers experience photophobia during attacks",
        "Blue-green light (480-520nm) activates pain cells in the retina connected to the trigeminal nerve",
        "During attacks: dark room + Ultra-Dim phone stack + FL-41 glasses + cool compress",
        "Between attacks: optimize screens, control home lighting, wear FL-41 at work, tint your vehicle",
        "Don't dark-adapt — chronic light avoidance makes photophobia worse over time",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Brain} value="39M" label="Americans with migraines" />
        <BlogStat icon={Eye} value="80-90%" label="Experience photophobia during attacks" />
        <BlogStat icon={Sun} value="60%" label="Light-sensitive between attacks" />
        <BlogStat icon={Zap} value="30-40%" label="Report sunlight as trigger" />
      </BlogStatRow>

      <h2>Why Light Triggers Migraines</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50 p-6">
        <div className="flex items-start gap-4">
          <Brain className="w-8 h-8 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">The ipRGC-Trigeminal Connection</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              <strong>Intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> detect light independently of vision. They connect directly to the trigeminal nerve system — the primary pain pathway in migraines.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <p className="text-xs text-gray-600 leading-relaxed">
                When light activates these cells, it <strong>lowers the threshold</strong> for a migraine attack (making one more likely) or <strong>amplifies pain</strong> during an existing attack. The most problematic wavelengths: <strong>blue-green 480-520nm</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Types of Light That Are Worst</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Zap, label: "Fluorescent Lighting", desc: "Flicker + blue-green spectral spikes. The worst indoor source.", severity: "★★★★★" },
          { icon: Sun, label: "Direct Sunlight", desc: "Intense broadband light that overwhelms sensitive visual systems.", severity: "★★★★★" },
          { icon: Eye, label: "Reflective Glare", desc: "Water, snow, wet roads, glass buildings.", severity: "★★★★☆" },
          { icon: Car, label: "Oncoming Headlights", desc: "LED headlights are brighter and bluer than older halogen.", severity: "★★★★☆" },
          { icon: MonitorIcon, label: "Screen Light", desc: "Monitors, phones, tablets — especially white backgrounds at high brightness.", severity: "★★★☆☆" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
            <item.icon className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-bold text-heading text-sm">{item.label}</p>
                <span className="text-[10px] text-red-400">{item.severity}</span>
              </div>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>During an Attack</h2>
      <BlogStepCards steps={[
        { icon: Moon, title: "Get to a Dark Room", description: "As dark as possible. Blackout curtains in the bedroom are essential." },
        { icon: MonitorIcon, title: "Ultra-Dim Phone Stack", description: "Dark Mode + Reduce White Point at max + minimum brightness. iPhone guide | Android guide" },
        { icon: Glasses, title: "Wear FL-41 Glasses", description: "Even in a dark room, FL-41 lenses filter the worst wavelengths if any light is needed." },
        { icon: Eye, title: "Cool Compress Over Eyes", description: "Blocks light while providing pain relief from cold." },
      ]} />

      <h2>Between Attacks: Prevention</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { text: "Optimize all screens", link: "/resources/computer-settings-light-sensitivity", linkLabel: "Computer settings guide →" },
          { text: "Control home lighting", link: "/resources/light-proof-your-home", linkLabel: "Home lighting guide →" },
          { text: "Wear FL-41 glasses at work", link: "/resources/fl-41-glasses-complete-guide", linkLabel: "FL-41 guide →" },
          { text: "Polarized sunglasses outdoors", link: "/resources/best-sunglasses-driving-light-sensitivity", linkLabel: "Sunglasses guide →" },
          { text: "Window tint your vehicle", link: "/resources/complete-guide-to-window-tint-medical-exemptions", linkLabel: "Tint exemption guide →" },
          { text: "Track your triggers", link: "/resources/track-migraine-triggers", linkLabel: "Trigger tracking guide →" },
        ].map((item) => (
          <div key={item.text} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.text}</p>
              <Link href={item.link} className="text-amber-600 font-semibold text-xs hover:underline">{item.linkLabel}</Link>
            </div>
          </div>
        ))}
      </div>

      <h2>The Green Light Exception</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-green-200 bg-green-50 p-6">
        <div className="flex items-start gap-4">
          <Leaf className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-1">Narrow-Band Green Light (~520nm)</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Research from Harvard Medical School found this is the <strong>only wavelength</strong> that doesn&apos;t worsen — and may actually <strong>reduce</strong> — migraine pain. This led to the development of green light therapy lamps. <Link href="/resources/green-light-therapy-migraines" className="text-amber-600 font-semibold hover:underline">Read about green light therapy →</Link>
            </p>
          </div>
        </div>
      </div>

      <h2>Important: Don&apos;t Dark-Adapt</h2>
      <BlogCallout variant="warning" title="Chronic light avoidance makes photophobia WORSE">
        <p>
          It&apos;s tempting to spend all your time in darkness. But your eyes adapt to the darker environment, and when exposed to normal light, it feels even more painful. This creates a cycle of increasing darkness dependence. <strong>The goal is to manage and filter light, not eliminate it entirely.</strong>
        </p>
      </BlogCallout>

      <BlogCTA
        heading="Manage Migraine Light Triggers While Driving"
        description="If sunlight and glare trigger your migraines while driving, a medical window tint exemption provides passive, legal protection. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Work with your neurologist or headache specialist to develop a comprehensive migraine management plan.</p>
      </BlogCallout>
    </>
  );
}

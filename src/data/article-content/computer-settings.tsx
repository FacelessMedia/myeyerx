import Link from "next/link";
import { Monitor, Apple, Download, Layout, Globe, Timer, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function ComputerSettingsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Your computer monitor is a light source sitting inches from your face for hours at a time. For people with light sensitivity, that&apos;s a recipe for headaches, eye strain, and migraine triggers. The good news: both Windows and Mac have built-in tools that help significantly, and third-party apps fill the remaining gaps.
      </p>

      <BlogTLDR items={[
        "Both Windows and Mac have built-in Night Light/Night Shift and Dark Mode settings",
        "f.lux (free) goes far beyond built-in tools — all the way to candlelight-level warmth",
        "Iris ($15) adds flicker-free dimming that eliminates hidden PWM headache triggers",
        "Monitor positioning and bias lighting are just as important as software settings",
        "Dark Reader browser extension kills white-background ambushes on websites",
      ]} />

      <BlogComparisonTable
        columns={[
          { header: "Setting" },
          { header: "Windows" },
          { header: "Mac" },
          { header: "Impact", highlight: true },
        ]}
        rows={[
          ["Blue Light Filter", "Night Light", "Night Shift", "★★★★☆"],
          ["Dark Mode", "Settings → Colors → Dark", "System Settings → Appearance → Dark", "★★★★★"],
          ["Below-Min Brightness", "High Contrast Mode", "Reduce White Point", "★★★★☆"],
          ["Color Temperature", "Night Light strength slider", "Night Shift warmth slider", "★★★★☆"],
        ]}
      />

      <h2>Windows Settings</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          {
            title: "Night Light",
            path: "Settings → System → Display → Night Light",
            desc: "Reduces blue light output by shifting the display to warmer tones. Set the strength slider higher for warmer colors. Schedule for sunset or leave on 24/7.",
          },
          {
            title: "Dark Mode",
            path: "Settings → Personalization → Colors → Choose your mode → Dark",
            desc: "System-wide dark theme that most Microsoft apps and many third-party apps automatically follow.",
          },
          {
            title: "High Contrast Mode",
            path: "Settings → Accessibility → Contrast Themes",
            desc: "For extreme sensitivity — \"High Contrast Black\" creates a very dark interface that dramatically reduces visual intensity.",
          },
        ].map((setting) => (
          <div key={setting.title} className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <Monitor className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-heading text-sm">{setting.title}</p>
                <div className="bg-white/80 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-600 mt-1.5 mb-1.5 inline-block">{setting.path}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{setting.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Mac Settings</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          {
            title: "Night Shift",
            path: "System Settings → Displays → Night Shift",
            desc: "Shifts display colors to the warm end of the spectrum. Set color temperature to \"More Warm\" and schedule or leave on manually.",
          },
          {
            title: "Dark Mode",
            path: "System Settings → Appearance → Dark",
            desc: "macOS also offers \"Auto\" which switches based on time of day, but most light-sensitive users prefer Dark permanently.",
          },
          {
            title: "Reduce White Point",
            path: "System Settings → Accessibility → Display → Reduce White Point",
            desc: "Just like on iPhone — dims bright colors below the normal minimum brightness. Adjust slider to your comfort level.",
          },
        ].map((setting) => (
          <div key={setting.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start gap-3">
              <Apple className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-heading text-sm">{setting.title}</p>
                <div className="bg-white/80 rounded-lg px-3 py-1.5 text-xs font-mono text-gray-600 mt-1.5 mb-1.5 inline-block">{setting.path}</div>
                <p className="text-gray-600 text-xs leading-relaxed">{setting.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Third-Party Apps</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-amber-200 bg-white p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-extrabold text-heading text-base">f.lux</h3>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">FREE</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            The gold standard for blue light filtering. Goes far beyond built-in tools — adjust color temperature based on time of day, all the way down to candlelight-level warmth (1200K).
          </p>
          <div className="space-y-1.5">
            {[
              "Windows, Mac, and Linux",
              "Customizable presets (day, sunset, bedtime)",
              "Movie mode preserves colors for video",
              "Darkroom mode (deep red) for migraine attacks",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-purple-200 bg-white p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-extrabold text-heading text-base">Iris</h3>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">~$15</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Everything f.lux does plus <strong>flicker-free dimming</strong>. Standard LCDs use PWM to control brightness, which creates an invisible flicker that triggers headaches. Iris eliminates this entirely.
          </p>
          <div className="space-y-1.5">
            {[
              "Flicker-free (PWM-free) brightness control",
              "Blue light filtering",
              "Automatic break reminders",
              "Font rendering improvements",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Monitor Positioning</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Layout, title: "Window Position", desc: "Place windows to the side of your monitor, not behind or in front — reduces contrast between screen and environment" },
          { icon: Monitor, title: "Bias Lighting", desc: "Warm-toned LED strip behind your monitor reduces bright screen vs. dark room contrast", link: "/resources/bias-lighting-reduce-eye-strain", linkText: "Bias lighting guide →" },
          { icon: Layout, title: "Matte Screen", desc: "Use a matte (anti-glare) monitor or apply a matte screen protector to reduce reflections" },
          { icon: Monitor, title: "Distance & Height", desc: "Arm's length (20-26\") from your eyes. Top of screen at or slightly below eye level" },
        ].map((item) => (
          <div key={item.title} className="bg-surface rounded-xl p-4 border border-gray-100">
            <div className="flex items-start gap-3">
              <item.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-heading text-sm">{item.title}</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                {item.link && <Link href={item.link} className="text-amber-600 font-semibold text-xs hover:underline mt-1 inline-block">{item.linkText}</Link>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Browser Extensions</h2>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded-xl p-5 text-white">
          <Globe className="w-6 h-6 text-amber-400 mb-2" />
          <p className="font-bold text-sm">Dark Reader</p>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">Forces dark mode on every website — even ones without native dark themes. Per-site customization available.</p>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Free — Chrome, Firefox, Edge, Safari</span>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 text-white">
          <Globe className="w-6 h-6 text-amber-400 mb-2" />
          <p className="font-bold text-sm">Turn Off the Lights</p>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">Dims everything except the video you&apos;re watching. Perfect for YouTube and streaming sites.</p>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Free — All major browsers</span>
        </div>
      </div>

      <h2>The 20-20-20 Rule</h2>
      <BlogCallout variant="tip" title="Every 20 minutes, look 20 feet away for 20 seconds">
        <p>This gives your eye muscles micro-breaks and reduces strain accumulation throughout the day. <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-600 font-semibold hover:underline">Read our full 20-20-20 guide →</Link></p>
      </BlogCallout>

      <BlogCTA
        heading="Light Sensitivity Making Computer Work Difficult?"
        description="If your condition qualifies, a medical window tint exemption protects you while driving — complementing the screen protection you've set up here."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. If your light sensitivity is significantly impacting your ability to work, consult with a healthcare provider about treatment options.</p>
      </BlogCallout>
    </>
  );
}

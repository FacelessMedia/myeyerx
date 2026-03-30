import Link from "next/link";
import { Sun, Brain, Globe, Timer, Gauge, AlertTriangle, CheckCircle, Star } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function BestAppsContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        The right apps can make a measurable difference in how you manage light sensitivity day to day. From blue light filters that go beyond what your phone offers natively, to migraine trackers that help you identify patterns, here are the apps worth knowing about.
      </p>

      <BlogTLDR items={[
        "f.lux (free) is the gold standard for blue light filtering — goes down to candlelight warmth",
        "Iris ($15) adds flicker-free dimming that eliminates hidden PWM triggers",
        "Migraine Buddy is the best comprehensive tracker for identifying trigger patterns",
        "Dark Reader forces dark mode on every website — essential for light-sensitive browsing",
        "Skip \"blue light glasses\" apps — they duplicate what free built-in tools already do",
      ]} />

      <BlogComparisonTable
        columns={[
          { header: "App" },
          { header: "Category" },
          { header: "Platforms" },
          { header: "Price" },
          { header: "Best For", highlight: true },
        ]}
        rows={[
          ["f.lux", "Blue Light Filter", "Win/Mac/Linux/Mobile", "Free", "Best overall filter"],
          ["Iris", "Blue Light Filter", "Win/Mac/Linux", "~$15", "Flicker-free dimming"],
          ["Migraine Buddy", "Migraine Tracker", "iOS/Android", "Free+", "Detailed tracking"],
          ["Migraine Monitor", "Migraine Tracker", "iOS/Android", "Free", "Quick logging"],
          ["Dark Reader", "Browser Extension", "All browsers", "Free", "Website dark mode"],
          ["Stretchly", "Break Reminder", "Win/Mac/Linux", "Free", "20-20-20 rule"],
        ]}
      />

      <h2>Blue Light Filters</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-amber-500 px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> TOP PICK</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Sun className="w-6 h-6 text-amber-500" />
            <div>
              <h3 className="font-extrabold text-heading text-base">f.lux</h3>
              <span className="text-xs text-green-600 font-bold">Free — All platforms</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            The original and still the best. Adjusts color temperature based on location and time of day — goes all the way down to candlelight warmth (1200K), far beyond built-in tools.
          </p>
          <div className="space-y-1.5">
            {[
              "Gradual, natural color transitions throughout the day",
              "Darkroom mode (deep red) for migraine attacks",
              "Movie mode preserves accurate colors for video",
              "Customizable presets for day, sunset, and bedtime",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border-2 border-purple-200 bg-white p-6">
          <div className="flex items-center gap-3 mb-3">
            <Sun className="w-6 h-6 text-purple-500" />
            <div>
              <h3 className="font-extrabold text-heading text-base">Iris</h3>
              <span className="text-xs text-purple-600 font-bold">~$15 one-time — Desktop</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Everything f.lux does plus <strong>flicker-free dimming</strong>. Standard LCDs use PWM to control brightness, creating invisible flicker that triggers headaches. Iris eliminates this entirely.
          </p>
          <div className="space-y-1.5">
            {[
              "PWM-free brightness control (key differentiator)",
              "Blue light filtering matches f.lux",
              "Automatic break reminders built in",
              "Font rendering improvements for readability",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Migraine Trackers</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-red-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> TOP PICK</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-6 h-6 text-red-500" />
            <div>
              <h3 className="font-extrabold text-heading text-base">Migraine Buddy</h3>
              <span className="text-xs text-green-600 font-bold">Free + Premium — iOS &amp; Android</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            The most comprehensive migraine tracker. Log attacks, triggers, symptoms, medications, sleep, and weather. After 1-2 months, patterns emerge you&apos;d never notice otherwise.
          </p>
          <div className="space-y-1.5">
            {[
              "Shareable reports for your doctor",
              "Multi-factor trigger pattern discovery",
              "Weather correlation tracking",
              "Community support features",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-6 h-6 text-gray-500" />
            <div>
              <h3 className="font-extrabold text-heading text-base">Migraine Monitor</h3>
              <span className="text-xs text-green-600 font-bold">Free — iOS &amp; Android</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Simpler alternative for people who want quick logging without the depth. Track frequency and basic triggers without feeling overwhelmed.
          </p>
          <div className="space-y-1.5">
            {[
              "Fast entry under 1 minute",
              "Basic trigger tracking",
              "Simple frequency charts",
              "No learning curve",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Browser Extensions &amp; Utilities</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gray-900 rounded-xl p-5 text-white">
          <Globe className="w-6 h-6 text-amber-400 mb-2" />
          <p className="font-bold text-sm">Dark Reader</p>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">Forces dark mode on every website. Per-site customization lets you whitelist sites with good dark modes.</p>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Free — All browsers</span>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 text-white">
          <Timer className="w-6 h-6 text-blue-400 mb-2" />
          <p className="font-bold text-sm">Stretchly</p>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">Reminds you to follow the <Link href="/resources/20-20-20-rule-light-sensitivity" className="text-amber-400 hover:underline">20-20-20 rule</Link>. Customizable intervals and break compliance tracking.</p>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Free — Win/Mac/Linux</span>
        </div>
        <div className="bg-gray-900 rounded-xl p-5 text-white">
          <Gauge className="w-6 h-6 text-green-400 mb-2" />
          <p className="font-bold text-sm">Lux Meter Apps</p>
          <p className="text-gray-300 text-xs mt-1 leading-relaxed">Measure light levels in your environment to identify which rooms and setups are worst for symptoms.</p>
          <span className="text-xs text-green-400 font-bold mt-2 inline-block">Various — iOS &amp; Android</span>
        </div>
      </div>

      <BlogCallout variant="warning" title="Skip 'Blue Light Glasses' Apps">
        <p>Some apps claim to simulate blue light glasses on your screen. These are just color temperature shifters — the same thing f.lux and built-in Night Shift/Night Light already do. Don&apos;t pay for something your phone already does for free.</p>
      </BlogCallout>

      <BlogCTA
        heading="Apps Help with Screens — What About Sunlight?"
        description="Apps manage digital light sources, but driving exposes you to uncontrollable sun and glare. A medical window tint exemption provides passive, always-on protection."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

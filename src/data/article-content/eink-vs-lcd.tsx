import Link from "next/link";
import { BookOpen, Tablet, CheckCircle, X, Lightbulb } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function EinkVsLcdContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you read a lot and have light sensitivity, switching to an e-ink device might be one of the most impactful changes you can make. E-ink screens don&apos;t emit light the way phones, tablets, and computers do — they look and feel like actual paper. Here&apos;s why that matters.
      </p>

      <BlogTLDR items={[
        "E-ink reflects ambient light like paper — no photons blasting at your eyes",
        "Zero blue light, zero screen flicker, zero contrast fatigue",
        "Kindle Paperwhite (~$140-190) is best for pure reading",
        "BOOX tablets (~$250-600) run Android apps on e-ink for versatile use",
        "Best strategy: e-ink for reading, optimized phone/tablet for everything else",
      ]} />

      <h2>How E-ink Works</h2>
      <p>
        E-ink (electronic ink) displays use tiny capsules of black and white particles that rearrange when an electrical charge is applied. The screen reflects ambient light just like paper — it doesn&apos;t generate its own light. This is fundamentally different from LCD and OLED screens, which blast photons directly at your eyes.
      </p>

      <h2>E-ink vs LCD/OLED</h2>
      <BlogComparisonTable
        columns={[
          { header: "Feature" },
          { header: "E-ink" },
          { header: "LCD / OLED" },
        ]}
        rows={[
          ["Light Source", "Reflects ambient light (like paper)", "Emits light directly at your eyes"],
          ["Blue Light", "None — reflected ambient only", "Significant blue light emission"],
          ["Screen Flicker", "Zero flicker", "PWM flicker (invisible but problematic)"],
          ["Contrast Fatigue", "Matches paper — natural for eyes", "High contrast causes fatigue"],
          ["Front Light", "Optional warm-toned, can turn off", "Always on when screen is active"],
          ["Refresh Rate", "Slow — not for video/gaming", "Fast — handles all content"],
          ["Color", "Mostly grayscale", "Full color"],
          ["Battery", "Weeks of use", "Hours of use"],
        ]}
      />

      <h2>Why E-ink Is Better for Light Sensitivity</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "No Direct Light Emission", desc: "Reflects light like paper instead of shining light at you" },
          { label: "No Blue Light", desc: "Reflected ambient light has no blue light spectrum to irritate" },
          { label: "No Screen Flicker", desc: "Zero PWM — eliminates invisible flicker that triggers headaches" },
          { label: "No Contrast Fatigue", desc: "Contrast ratio matches paper, which your eyes handle naturally" },
          { label: "Optional Warm Front Light", desc: "Modern e-readers have adjustable warm lighting you can turn off" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-green-50 rounded-xl p-4 border border-green-200">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Best E-ink Devices</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-amber-500 px-3 py-1 rounded-full">BEST FOR READING</span>
          </div>
          <BookOpen className="w-8 h-8 text-amber-500 mb-3" />
          <h3 className="font-extrabold text-heading text-base mb-1">Kindle Paperwhite</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            The most popular e-reader for good reason. Flush screen, adjustable warm front light, and weeks of battery life. Compact, affordable, and perfect for book reading.
          </p>
          <div className="space-y-1.5 mb-3">
            <p className="text-xs"><strong>Best for:</strong> Pure reading — books, articles, documents</p>
            <p className="text-xs"><strong>Light control:</strong> Adjustable brightness + color temperature</p>
          </div>
          <p className="text-lg font-black text-amber-600">~$140-$190</p>
        </div>

        <div className="rounded-2xl border-2 border-purple-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-purple-500 px-3 py-1 rounded-full">MOST VERSATILE</span>
          </div>
          <Tablet className="w-8 h-8 text-purple-500 mb-3" />
          <h3 className="font-extrabold text-heading text-base mb-1">BOOX Tablets</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Android-based e-ink tablets that run any Android app — web browsers, note-taking apps, email. If you want e-ink for more than just books, BOOX is the way to go.
          </p>
          <div className="space-y-1.5 mb-3">
            <p className="text-xs"><strong>Best for:</strong> Reading, notes, web, email on e-ink</p>
            <p className="text-xs"><strong>Light control:</strong> Adjustable front light with warm/cool toggle</p>
          </div>
          <p className="text-lg font-black text-purple-600">~$250-$600</p>
        </div>
      </div>

      <h2>Limitations</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          { label: "Slow refresh rate", desc: "Not suitable for video, gaming, or fast scrolling" },
          { label: "Grayscale only", desc: "Most e-ink screens are black and white (color e-ink exists but is limited)" },
          { label: "Not a phone replacement", desc: "You still need your phone for calls, messaging, and most apps" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-red-50 rounded-xl p-4 border border-red-200">
            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        But for reading — which is often one of the most problematic activities for light-sensitive people — e-ink is a genuine game-changer.
      </p>

      <BlogCallout variant="tip" title="Combine E-ink with Your Existing Setup">
        <p>Use your e-reader for long reading sessions and keep your phone/tablet with <Link href="/resources/iphone-settings-light-sensitivity" className="text-amber-600 font-semibold hover:underline">optimized settings</Link> for everything else. This reduces total screen-light exposure throughout your day.</p>
      </BlogCallout>

      <BlogCTA
        heading="E-ink Helps with Reading — What About Driving?"
        description="If light sensitivity affects your driving, a medical window tint exemption provides passive protection against sunlight and glare. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. Consult a healthcare provider for persistent light sensitivity.</p>
      </BlogCallout>
    </>
  );
}

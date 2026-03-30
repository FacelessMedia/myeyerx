import Link from "next/link";
import { Layers, Sun, Moon, Brain, Droplets, Cloud, Volume2, Activity, CheckCircle, AlertTriangle, Glasses, Monitor, Eye } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function MigTriggerStackingContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        A single trigger rarely causes a migraine on its own. It&apos;s usually a <strong>combination</strong> of triggers that pushes you over the threshold. Understanding this &quot;trigger stacking&quot; concept changes how you think about prevention — because you don&apos;t have to eliminate every trigger, just keep the total load below your threshold.
      </p>

      <BlogTLDR items={[
        "Migraine threshold = a bucket. Each trigger adds water. Stack enough and it overflows.",
        "This is why the same trigger sometimes causes an attack and sometimes doesn't",
        "You don't need to eliminate every trigger — just keep total load below threshold",
        "Focus on controllable triggers: light, hydration, meals, sleep, eye strain",
        "Track your stacks for 4-8 weeks to build a personal early warning system",
      ]} />

      <h2>What Is Trigger Stacking?</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
        <div className="flex items-start gap-4">
          <Layers className="w-8 h-8 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">The Bucket Analogy</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Each trigger adds water to your migraine bucket — poor sleep adds some, stress adds more, bright light adds more. A single trigger might not overflow the bucket. But stack three or four together and you tip over the edge.
            </p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <p className="text-xs text-gray-600">
                <strong>Example:</strong> Driving in bright sunlight = fine when well-rested and relaxed. Add a bad night&apos;s sleep + stressful morning + skipped meal = that same drive becomes the last straw.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Common Trigger Categories</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Sun, label: "Light", desc: "Sunlight, fluorescents, screens, glare", color: "text-amber-500" },
          { icon: Moon, label: "Sleep", desc: "Too little, too much, irregular", color: "text-indigo-500" },
          { icon: Brain, label: "Stress", desc: "Acute or 'let-down' after", color: "text-red-400" },
          { icon: Activity, label: "Hormonal", desc: "Cycle, medications", color: "text-pink-500" },
          { icon: Droplets, label: "Food / Drink", desc: "Dehydration, skipped meals, alcohol", color: "text-amber-500" },
          { icon: Cloud, label: "Weather", desc: "Barometric pressure, heat, humidity", color: "text-gray-500" },
          { icon: Volume2, label: "Sensory", desc: "Smells, noise, flickering", color: "text-amber-500" },
          { icon: Activity, label: "Physical", desc: "Neck tension, eye strain, overexertion", color: "text-green-400" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <item.icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>The Strategy: Reduce the Load</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Sun, label: "Light exposure", desc: "Optimize screens, home lighting, FL-41 glasses, vehicle tint", links: [
            { text: "Screens", href: "/resources/computer-settings-light-sensitivity" },
            { text: "Home", href: "/resources/light-proof-your-home" },
            { text: "FL-41", href: "/resources/fl-41-glasses-complete-guide" },
            { text: "Tint", href: "/resources/complete-guide-to-window-tint-medical-exemptions" },
          ]},
          { icon: Droplets, label: "Hydration", desc: "Drink water consistently throughout the day" },
          { icon: Activity, label: "Meals", desc: "Don't skip meals — keep blood sugar stable" },
          { icon: Moon, label: "Sleep hygiene", desc: "Consistent bedtime, dark bedroom, no screens before bed" },
          { icon: Eye, label: "Eye strain", desc: "20-20-20 rule, proper monitor setup" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-gray-100 rounded-xl p-4 border border-gray-200">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-xs">{item.label}</p>
              <p className="text-gray-600 text-[10px] mt-0.5">{item.desc}</p>
              {item.links && (
                <div className="flex gap-2 mt-1 flex-wrap">
                  {item.links.map((l) => (
                    <Link key={l.text} href={l.href} className="text-amber-600 text-[10px] font-semibold hover:underline">{l.text} →</Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2>High-Risk Days</h2>
      <BlogCallout variant="warning" title="When you feel a stack building:">
        <div className="space-y-1">
          {[
            "Wear FL-41 glasses all day, even if you don't usually",
            "Reduce screen brightness further than normal",
            "Take more frequent breaks",
            "Stay extra hydrated",
            "Avoid optional light-intensive activities (bright stores, outdoor events)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <AlertTriangle className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </BlogCallout>

      <h2>Tracking Trigger Stacks</h2>
      <p>
        <Link href="/resources/track-migraine-triggers" className="text-amber-600 font-semibold hover:underline">Migraine tracking</Link> is how you identify your personal trigger stacks. After logging attacks for 4-8 weeks, you&apos;ll start seeing which combinations reliably cause problems. This lets you create a personal &quot;early warning system&quot; — when you recognize a dangerous stack building, you can take preventive action before the attack hits.
      </p>

      <BlogCTA
        heading="Light Is One Trigger You CAN Control While Driving"
        description="You can't control the weather or your stress level, but you can reduce light exposure in your vehicle. A medical tint exemption removes one big trigger from the stack."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Work with your neurologist for a comprehensive migraine prevention plan.</p>
      </BlogCallout>
    </>
  );
}

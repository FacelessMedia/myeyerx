import Link from "next/link";
import { Lightbulb, Mic, Clock, Sunset, Sun, Brain, MapPin, Star, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function SmartHomeLightingContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Smart lighting gives you something light-sensitive people desperately need: <strong>total control</strong>. Instead of on/off, you get precise brightness, adjustable color temperature, schedules, and voice commands. Here&apos;s how to set up your home.
      </p>

      <BlogTLDR items={[
        "Smart bulbs let you set exact color temperature (2200K-6500K) and brightness (1-100%)",
        "Create a \"Migraine Mode\" voice command that drops all lights instantly",
        "Automate evening wind-down routines that mimic natural sunset",
        "Philips Hue is the gold standard; Wyze is the budget-friendly pick at $8-12/bulb",
        "Smart dimmer switches ($25-40) let you keep existing bulbs",
      ]} />

      <BlogCallout variant="warning" title="Start with dimmer switches first">
        <p>Before going full smart home, basic dimmer switches ($20 each) are the cheapest, most impactful upgrade. <strong>Important:</strong> Make sure your LED bulbs are labeled &quot;dimmable.&quot; Non-dimmable LEDs on a dimmer will flicker — exactly what you don&apos;t want.</p>
      </BlogCallout>

      <h2>Smart Bulbs</h2>
      <BlogComparisonTable
        columns={[
          { header: "Brand" },
          { header: "Price" },
          { header: "Hub Needed?" },
          { header: "Voice Assistants" },
          { header: "Best For", highlight: true },
        ]}
        rows={[
          ["Philips Hue", "$15-25/bulb + $60 hub", "Optional (Bluetooth)", "Alexa, Google, HomeKit", "Best overall"],
          ["LIFX", "$25-40/bulb", "No", "Alexa, Google, HomeKit", "No-hub setup"],
          ["Wyze", "$8-12/bulb", "No", "Alexa, Google", "Budget pick"],
        ]}
      />

      <div className="not-prose my-8 space-y-4">
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-6 relative">
          <div className="absolute -top-3 right-4">
            <span className="text-xs font-bold text-white bg-gray-1000 px-3 py-1 rounded-full flex items-center gap-1"><Star className="w-3 h-3" /> GOLD STANDARD</span>
          </div>
          <h3 className="font-extrabold text-heading text-base mb-2">Philips Hue</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Set exact color temperature from 2200K to 6500K and brightness from 1% to 100%. Create custom &quot;scenes&quot; like &quot;Relax&quot; (2200K, 40%) or &quot;Migraine&quot; (2200K, 5%).
          </p>
          <div className="space-y-1.5">
            {[
              "Custom scenes for any situation",
              "Schedule lights to dim gradually in the evening",
              "Works with Alexa, Google, and Apple HomeKit",
              "Hub optional with newer Bluetooth models",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-bold text-heading text-sm mb-1">LIFX</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">No hub required — connects directly to WiFi. Same brightness and color control. Slightly brighter output.</p>
            <p className="text-xs font-bold text-gray-500">$25-40/bulb</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
            <span className="text-[10px] font-bold text-amber-500 bg-gray-100 px-2 py-0.5 rounded-full uppercase">Budget Pick</span>
            <h3 className="font-bold text-heading text-sm mt-1 mb-1">Wyze</h3>
            <p className="text-gray-600 text-xs leading-relaxed mb-2">Tunable white (2700K-6500K), no hub needed. Simple app. Great value smart lighting.</p>
            <p className="text-xs font-bold text-amber-500">$8-12/bulb</p>
          </div>
        </div>
      </div>

      <h2>Automation Routines</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            icon: Sunset,
            title: "Evening Wind-Down",
            desc: "At sunset, gradually shift all lights to 2200K and reduce to 40% brightness over 2 hours. Mimics natural sunset.",
            color: "bg-orange-50 border-orange-200",
            iconColor: "text-orange-500",
          },
          {
            icon: Sun,
            title: "Morning Gentle Wake",
            desc: "Lights turn on at 10% warm tones, gradually increasing over 30 minutes. No harsh wake-up blast.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-yellow-600",
          },
          {
            icon: Brain,
            title: "Migraine Mode",
            desc: "\"Hey Google, migraine mode\" — drops all lights to 2200K at 5% or off entirely. No fumbling with apps.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-red-400",
          },
          {
            icon: MapPin,
            title: "Away / Return",
            desc: "Geofencing auto-sets lights to your preferred level when you arrive home. Never walk into a dark house.",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
          },
        ].map((routine) => (
          <div key={routine.title} className={`rounded-xl p-5 border ${routine.color}`}>
            <routine.icon className={`w-5 h-5 ${routine.iconColor} mb-2`} />
            <p className="font-bold text-heading text-sm">{routine.title}</p>
            <p className="text-gray-600 text-xs mt-1 leading-relaxed">{routine.desc}</p>
          </div>
        ))}
      </div>

      <h2>Voice Control Tips</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          { cmd: "\"Set living room to 30%\"", desc: "Specific brightness" },
          { cmd: "\"Set bedroom to warm white\"", desc: "Color temperature by name" },
          { cmd: "\"Turn off all lights\"", desc: "Quick darkness for attacks" },
          { cmd: "\"Activate relax mode\"", desc: "Trigger your custom scene" },
        ].map((item) => (
          <div key={item.cmd} className="flex items-center gap-3 bg-surface rounded-lg p-3 border border-gray-100">
            <Mic className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="font-mono text-sm font-bold text-heading flex-1">{item.cmd}</span>
            <span className="text-xs text-gray-500">{item.desc}</span>
          </div>
        ))}
      </div>

      <h2>What About Smart Switches?</h2>
      <BlogCallout variant="tip" title="Keep your existing bulbs">
        <p>Smart dimmer switches control your existing dimmable bulbs. Brands like Lutron Caseta and TP-Link Kasa offer excellent smart dimmers ($25-40) that work with Alexa and Google — no need to replace every bulb.</p>
      </BlogCallout>

      <BlogCTA
        heading="Smart Lighting Indoors — Smart Tint Outdoors"
        description="Smart lighting manages your indoor environment. For the time you spend in your car, medical window tint provides similar passive light control. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

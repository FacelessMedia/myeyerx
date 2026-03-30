import Link from "next/link";
import { ClipboardList, Sun, Monitor, Car, Cloud, ArrowRightLeft, Zap, Smartphone, Table, BookOpen, Clock, MapPin, Layers, Leaf, Target, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogToolPlaceholder } from "@/components/blog/BlogToolPlaceholder";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function TrackMigraineTriggersContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        You can&apos;t manage what you don&apos;t measure. Tracking your migraine triggers — especially light-related ones — reveals patterns you&apos;d never notice otherwise. After a month or two of consistent tracking, you&apos;ll know exactly which situations put you at risk.
      </p>

      <BlogTLDR items={[
        "Track every attack: date, time, location, lighting conditions, severity, and what helped",
        "Watch for light-specific triggers: fluorescent exposure time, screen hours, driving into sun",
        "Migraine Buddy app is the best tracker — generates shareable reports for your doctor",
        "After 4-8 weeks, look for time, location, seasonal, and trigger-stacking patterns",
        "Use your data to take targeted action: accommodations, tint exemption, display settings",
      ]} />

      <h2>What to Track</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Clock, label: "Date & Time", desc: "When did it start?" },
          { icon: MapPin, label: "Location", desc: "Office, car, outdoors, home" },
          { icon: Sun, label: "Lighting", desc: "Fluorescent, sun, screen time" },
          { icon: ClipboardList, label: "Duration", desc: "How long did it last?" },
          { icon: Target, label: "Severity", desc: "1-10 scale" },
          { icon: Layers, label: "Other Triggers", desc: "Sleep, stress, food, weather" },
          { icon: CheckCircle, label: "What You Did", desc: "Meds, dark room, ice pack" },
          { icon: Target, label: "What Helped", desc: "Rate effectiveness" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <item.icon className="w-4 h-4 text-amber-500 mx-auto mb-1" />
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Light-Specific Triggers to Watch</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { icon: Zap, label: "Fluorescent Exposure Time", desc: "Hours under fluorescents before onset" },
          { icon: Monitor, label: "Screen Time", desc: "Total hours, which devices, brightness level" },
          { icon: Car, label: "Driving", desc: "Duration, direction (into sun?), tint status" },
          { icon: Cloud, label: "Weather / Brightness", desc: "Bright sunny vs overcast, snow/water glare" },
          { icon: ArrowRightLeft, label: "Light Transitions", desc: "Going from dark to bright environments" },
          { icon: Zap, label: "Flashing / Flickering", desc: "Strobe effects, old fluorescents, construction lights" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-200">
            <item.icon className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogToolPlaceholder
        title="Interactive Migraine Trigger Log"
        description="Log attacks with pre-filled light-specific fields. After 4+ weeks, see your personalized trigger patterns and recommendations."
      />

      <h2>Best Tracking Methods</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: Smartphone,
            title: "Migraine Buddy App",
            badge: "Best Overall",
            badgeColor: "bg-green-500",
            desc: "The most comprehensive tracker. Logs triggers, symptoms, medications, weather, sleep. Generates shareable reports for your doctor.",
          },
          {
            icon: Table,
            title: "Simple Spreadsheet",
            badge: "Most Flexible",
            badgeColor: "bg-blue-500",
            desc: "Columns for date, time, location, lighting, severity, duration, notes. The key is consistency — track every attack.",
          },
          {
            icon: BookOpen,
            title: "Paper Journal",
            badge: "Easiest Start",
            badgeColor: "bg-amber-500",
            desc: "Small notebook on the nightstand. Quick entry after each attack. Less structured but better than not tracking.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5">
            <span className={`text-[10px] font-bold text-white ${item.badgeColor} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{item.badge}</span>
            <item.icon className="w-6 h-6 text-gray-400 mt-3 mb-2" />
            <p className="font-bold text-heading text-sm">{item.title}</p>
            <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>What Patterns to Look For</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { label: "Time Patterns", desc: "Do attacks cluster at certain times? Afternoon = possible screen/fluorescent accumulation", color: "bg-blue-50 border-blue-200" },
          { label: "Location Patterns", desc: "More attacks at work vs home? Points to lighting environment difference", color: "bg-purple-50 border-purple-200" },
          { label: "Trigger Combinations", desc: "Bright light + poor sleep + stress = guaranteed attack?", link: "/resources/migraine-trigger-stacking", linkLabel: "Learn about trigger stacking →", color: "bg-red-50 border-red-200" },
          { label: "Seasonal Patterns", desc: "Worse in summer (more sunlight) or winter (more indoor fluorescent time)?", color: "bg-green-50 border-green-200" },
          { label: "Intervention Effectiveness", desc: "Which treatments work best for you? Data-driven decisions.", color: "bg-amber-50 border-amber-200" },
        ].map((item) => (
          <div key={item.label} className={`rounded-xl p-4 border ${item.color}`}>
            <p className="font-bold text-heading text-sm">{item.label}</p>
            <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            {item.link && (
              <Link href={item.link} className="text-amber-600 font-semibold text-xs hover:underline mt-1 inline-block">{item.linkLabel}</Link>
            )}
          </div>
        ))}
      </div>

      <h2>Using Your Data</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { trigger: "Fluorescent lights are a top trigger", action: "Request workplace accommodations", link: "/resources/workplace-accommodations-light-sensitivity" },
          { trigger: "Driving triggers attacks", action: "Get a medical tint exemption", link: "/resources/complete-guide-to-window-tint-medical-exemptions" },
          { trigger: "Screens are a pattern", action: "Optimize display settings", link: "/resources/computer-settings-light-sensitivity" },
          { trigger: "Trigger stacking is the issue", action: "Manage your trigger load", link: "/resources/migraine-trigger-stacking" },
        ].map((item) => (
          <div key={item.trigger} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-gray-100">
            <span className="text-amber-500 font-bold text-sm flex-shrink-0">→</span>
            <div>
              <p className="text-gray-700 text-xs"><strong>If:</strong> {item.trigger}</p>
              <Link href={item.link} className="text-amber-600 font-semibold text-xs hover:underline"><strong>Then:</strong> {item.action} →</Link>
            </div>
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Tracking Shows Driving Is a Trigger?"
        description="If your data reveals that sunlight and glare while driving trigger your migraines, a medical window tint exemption provides passive, legal protection."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>Trigger tracking is a self-management tool, not a replacement for medical care. Share your tracking data with your neurologist or headache specialist for the best treatment outcomes.</p>
      </BlogCallout>
    </>
  );
}

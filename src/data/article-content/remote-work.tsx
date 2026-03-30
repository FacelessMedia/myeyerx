import Link from "next/link";
import { Lamp, Monitor, Blinds, Video, Clock, Sun, Eye, Moon, Shield } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function RemoteWorkContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Working from home gives light-sensitive people something the office never can: <strong>total control over your environment</strong>. No fluorescent lights you can&apos;t turn off, no windows you can&apos;t cover, no colleagues who want the blinds open. Here&apos;s how to set up the ideal remote workspace.
      </p>

      <BlogTLDR items={[
        "Remote work = total control over lighting, monitors, windows, and schedule",
        "Desk lamp with 2700K bulb + bias lighting + Dark Mode is the core setup",
        "Position desk perpendicular to windows — never facing them or with them behind the screen",
        "Video calls: ring light on warm white + FL-41 glasses = look professional, stay comfortable",
        "Remote work can qualify as a reasonable ADA accommodation if office lighting impacts you",
      ]} />

      <h2>The Ideal Home Office Setup</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Lamp,
            title: "Lighting",
            color: "bg-amber-50 border-amber-200",
            iconColor: "text-amber-500",
            items: [
              { text: "No overhead fluorescents — use a desk lamp with a warm white (2700K) bulb", link: "/resources/best-light-bulbs-photosensitivity" },
              { text: "Dimmer switch or smart bulb — adjust brightness throughout the day" },
              { text: "Bias lighting behind your monitor — reduces contrast strain", link: "/resources/bias-lighting-reduce-eye-strain" },
              { text: "Desk perpendicular to windows — never facing or with them behind the screen" },
            ],
          },
          {
            icon: Monitor,
            title: "Monitor Setup",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-500",
            items: [
              { text: "Dark Mode everything — OS, browser, apps", link: "/resources/computer-settings-light-sensitivity" },
              { text: "f.lux or Iris — software blue light filtering beyond Night Light" },
              { text: "Anti-glare matte monitor or matte screen protector" },
              { text: "Arm's length distance (20-26 inches) from your eyes" },
              { text: "Top of screen at eye level — reduces strain from looking up" },
            ],
          },
          {
            icon: Blinds,
            title: "Window Management",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-500",
            items: [
              { text: "Sheer curtains for moderate days — soften sunlight without blocking" },
              { text: "Blackout curtains for bad days — work by lamp light" },
              { text: "UV-blocking window film — permanent protection even when curtains are open" },
            ],
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-2xl p-5 border ${section.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              <h3 className="font-extrabold text-heading text-base">{section.title}</h3>
            </div>
            <div className="space-y-1.5">
              {section.items.map((item) => {
                const text = typeof item === "string" ? item : item.text;
                const link = typeof item === "string" ? undefined : (item as { text: string; link?: string }).link;
                return (
                  <div key={text} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                    {link ? (
                      <span><Link href={link} className="text-amber-600 font-semibold hover:underline">{text}</Link></span>
                    ) : (
                      <span>{text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h2>Video Calls</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: Video, title: "Ring Light on Warm White", desc: "Position behind your camera. Lights your face without blasting your eyes." },
          { icon: Lamp, title: "Bounce Light Off Wall", desc: "Point desk lamp at wall behind monitor. Reflected light illuminates your face softly." },
          { icon: Monitor, title: "Reduce Call Window", desc: "Minimize video call window or use \"speaker view\" to reduce screen brightness." },
          { icon: Eye, title: "Wear FL-41 Glasses", desc: "Rose tint is subtle enough for professional calls — most won't notice." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
            <item.icon className="w-5 h-5 text-gray-400 mb-2" />
            <p className="font-bold text-heading text-sm">{item.title}</p>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Schedule Optimization</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Sun, label: "Start Earlier", desc: "Morning light is softer", color: "text-yellow-500" },
          { icon: Clock, label: "Break at Peak Sun", desc: "11am-2pm: non-screen tasks", color: "text-orange-500" },
          { icon: Eye, label: "20-20-20 Rule", desc: "Every 20 min, 20 ft, 20 sec", color: "text-blue-500", link: "/resources/20-20-20-rule-light-sensitivity" },
          { icon: Moon, label: "Block Dark Time", desc: "15-min breaks in dark room", color: "text-indigo-500" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-4 border border-gray-100 text-center">
            <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-1`} />
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Making the Case for Remote Work</h2>
      <BlogCallout variant="tip" title="Remote work as an ADA accommodation">
        <p>If light sensitivity is impacting your office productivity, remote work may qualify as a <Link href="/resources/workplace-accommodations-light-sensitivity" className="text-amber-600 font-semibold hover:underline">reasonable accommodation under the ADA</Link>. Document how your condition affects you in the office vs. at home, and work with your healthcare provider to support the request.</p>
      </BlogCallout>

      <BlogCTA
        heading="Work from Home Sorted — What About the Commute?"
        description="Your home office is perfectly optimized. But the drive to occasional meetings or errands still exposes you to sunlight and glare. A medical window tint exemption helps."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Consult a healthcare provider for medical advice about managing light sensitivity in your work environment.</p>
      </BlogCallout>
    </>
  );
}

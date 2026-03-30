import Link from "next/link";
import { Lightbulb, BedDouble, Sofa, CookingPot, Bath, Monitor, SlidersHorizontal, Home, Blinds, Smartphone } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogToolPlaceholder } from "@/components/blog/BlogToolPlaceholder";

export function LightProofHomeContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Your home should be the one place where your eyes can fully relax. But most homes are set up for people who don&apos;t think twice about light — bright overhead fixtures, cool-white bulbs, uncovered windows. Here&apos;s a room-by-room guide to making your home actually comfortable for light sensitivity.
      </p>

      <BlogTLDR items={[
        "Swap every bulb to warm white LEDs at 2700K or lower — the single biggest change",
        "Install dimmer switches ($15-25) for brightness control in every room",
        "Blackout curtains for bedrooms, sheer curtains for living spaces, UV film for sun-facing windows",
        "Avoid fluorescent bulbs — they flicker and emit problematic blue-green wavelengths",
        "Smart home automation can create a \"migraine mode\" with one voice command",
      ]} />

      <h2>The Single Biggest Change: Your Light Bulbs</h2>
      <p>
        If you do nothing else, <strong>swap every bulb in your home to warm white LEDs rated at 2700K or lower</strong>. Color temperature is measured in Kelvin (K). Lower numbers mean warmer, more amber light. Higher numbers mean cooler, bluer light — the kind that triggers photophobia.
      </p>

      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-blue-50 p-6">
        <h4 className="font-extrabold text-heading text-sm mb-4 text-center">Color Temperature Scale</h4>
        <div className="flex items-stretch gap-1">
          {[
            { k: "2200K", label: "Candle", color: "bg-amber-400", rec: "Best" },
            { k: "2700K", label: "Warm", color: "bg-amber-300", rec: "Great" },
            { k: "3000K", label: "Soft", color: "bg-yellow-300", rec: "OK" },
            { k: "4000K", label: "Cool", color: "bg-blue-200", rec: "Avoid" },
            { k: "5000K+", label: "Daylight", color: "bg-blue-400", rec: "Avoid" },
          ].map((item) => (
            <div key={item.k} className={`flex-1 ${item.color} rounded-lg p-3 text-center`}>
              <p className="font-black text-heading text-sm">{item.k}</p>
              <p className="text-[10px] text-gray-600">{item.label}</p>
              <span className={`text-[10px] font-bold mt-1 inline-block px-2 py-0.5 rounded-full ${item.rec === "Best" || item.rec === "Great" ? "bg-gray-1000 text-white" : item.rec === "OK" ? "bg-gray-1000 text-white" : "bg-gray-1000 text-white"}`}>{item.rec}</span>
            </div>
          ))}
        </div>
      </div>

      <p>
        <Link href="/resources/best-light-bulbs-photosensitivity" className="text-amber-600 font-semibold hover:underline">Read our complete light bulb guide →</Link>
      </p>

      <h2>Install Dimmer Switches</h2>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-surface rounded-xl p-5 border border-gray-100">
          <SlidersHorizontal className="w-6 h-6 text-amber-500 mb-2" />
          <p className="font-bold text-heading text-sm">Basic Dimmer Switch</p>
          <p className="text-gray-500 text-xs mt-1">$15-25 each, 15 min to install. Instant brightness control for any room.</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-gray-100">
          <Smartphone className="w-6 h-6 text-amber-500 mb-2" />
          <p className="font-bold text-heading text-sm">Smart Dimmer Switch</p>
          <p className="text-gray-500 text-xs mt-1">$25-40 each. Control from phone or voice (Alexa/Google compatible).</p>
        </div>
      </div>

      <h2>Room-by-Room Guide</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: BedDouble,
            title: "Bedroom",
            color: "bg-indigo-50 border-indigo-200",
            iconColor: "text-indigo-500",
            tips: [
              "Blackout curtains — non-negotiable for sleep and migraine recovery",
              "No overhead light — use bedside lamps with warm bulbs and dimmer",
              "Red or amber night light for nighttime navigation",
            ],
          },
          {
            icon: Sofa,
            title: "Living Room",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            tips: [
              "Dimmer switches on all fixtures",
              "Task lighting — table lamps, not room-flooding overhead",
              "Bias lighting behind the TV",
              "Sheer curtains to soften daylight",
            ],
            link: "/resources/bias-lighting-reduce-eye-strain",
            linkText: "Bias lighting guide →",
          },
          {
            icon: CookingPot,
            title: "Kitchen",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            tips: [
              "Under-cabinet warm LED strips for task light without overhead glare",
              "Dimmer on overhead fixture — full only when cooking",
              "Swap recessed can lights to warm white bulbs",
            ],
          },
          {
            icon: Bath,
            title: "Bathroom",
            color: "bg-cyan-50 border-cyan-200",
            iconColor: "text-cyan-600",
            tips: [
              "Warm bulbs (2700K) — bathrooms often have the worst bulbs",
              "Red or amber plug-in night light for middle-of-night visits",
              "Avoid vanity-style exposed bulbs at eye level",
            ],
          },
          {
            icon: Monitor,
            title: "Home Office",
            color: "bg-gray-100 border-gray-200",
            iconColor: "text-amber-500",
            tips: [
              "Position desk so windows are to the side, not behind monitor",
              "Bias lighting behind the monitor",
              "Task lamp with warm bulb instead of overhead lighting",
              "Sheer curtains or window film to manage glare",
            ],
          },
        ].map((room) => (
          <div key={room.title} className={`rounded-2xl p-5 border ${room.color}`}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-gray-100">
                <room.icon className={`w-5 h-5 ${room.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-heading text-base mb-2">{room.title}</h3>
                <div className="space-y-1.5">
                  {room.tips.map((tip) => (
                    <p key={tip} className="text-gray-600 text-sm leading-relaxed">• {tip}</p>
                  ))}
                </div>
                {room.link && (
                  <Link href={room.link} className="text-amber-600 font-semibold text-sm hover:underline mt-2 inline-block">{room.linkText}</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BlogToolPlaceholder
        title="Room-by-Room Light Audit Checklist"
        description="Walk through each room in your home with our interactive checklist to identify problem lights, missing dimmers, and window treatment gaps."
      />

      <h2>Window Treatments</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: "Blackout Curtains",
            where: "Bedroom, media room, dark retreat",
            desc: "Block 99-100% of incoming light",
            color: "bg-gray-900 text-white",
          },
          {
            title: "Sheer Curtains",
            where: "Living room, kitchen",
            desc: "Soften daylight while maintaining a bright, livable feel",
            color: "bg-white border border-gray-200",
          },
          {
            title: "UV-Blocking Film",
            where: "Sun-facing windows, bathrooms",
            desc: "Blocks 99% of UV while letting visible light through",
            color: "bg-gray-100 border border-gray-200",
          },
        ].map((item) => (
          <div key={item.title} className={`rounded-xl p-5 ${item.color}`}>
            <p className="font-bold text-sm">{item.title}</p>
            <p className={`text-xs mt-1 ${item.color.includes("gray-900") ? "text-gray-300" : "text-gray-500"}`}>{item.where}</p>
            <p className={`text-xs mt-2 leading-relaxed ${item.color.includes("gray-900") ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
          </div>
        ))}
      </div>
      <p>
        <Link href="/resources/blackout-curtains-window-film-guide" className="text-amber-600 font-semibold hover:underline">Read our window treatment comparison →</Link>
      </p>

      <h2>Smart Home Automation</h2>
      <BlogCallout variant="tip" title="Automate your comfort">
        <p>Smart bulbs and routines let you automate your lighting. Set lights to gradually dim in the evening, create &quot;migraine mode&quot; that drops everything to minimum, or use voice commands so you never fumble with switches. <Link href="/resources/smart-home-lighting-light-sensitivity" className="text-amber-600 font-semibold hover:underline">Read our smart home lighting guide →</Link></p>
      </BlogCallout>

      <BlogCTA
        heading="Your Home Is Handled — What About Your Car?"
        description="Medical window tint provides the same kind of passive light control for your vehicle. Block UV, reduce glare, and drive comfortably. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. Consult a healthcare provider for persistent or worsening light sensitivity.</p>
      </BlogCallout>
    </>
  );
}

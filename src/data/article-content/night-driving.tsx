import Link from "next/link";
import { Moon, Glasses, Sparkles, Settings, Eye, Car, Shield } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function NightDrivingContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Night driving is uniquely challenging for light-sensitive people. During the day, the problem is too much light. At night, the problem flips: your eyes are adapted to darkness, and then oncoming headlights, streetlights, and reflections blast through that adaptation. Here&apos;s how to manage it.
      </p>

      <BlogTLDR items={[
        "Dilated pupils + LED/HID headlights (5000-6500K) = intense pain for photophobia",
        "Yellow/amber night driving glasses filter blue glare — must be VERY lightly tinted",
        "Clean inside of windshield regularly — interior film causes the worst glare halos",
        "Dim dashboard, use night-mode mirrors, look at right lane line during oncoming lights",
        "Quality ceramic tint actually makes night driving EASIER by softening headlight glare",
      ]} />

      <h2>Why Night Driving Is So Hard</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6">
        <div className="flex items-start gap-4">
          <Moon className="w-8 h-8 text-indigo-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">The Pupil Problem</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              In darkness, pupils dilate to let in more light. When oncoming headlights hit dilated pupils, the light surge is far more intense than during the day. For photophobia, this triggers pain and temporary vision impairment.
            </p>
            <div className="bg-white rounded-lg p-3 border border-indigo-100">
              <p className="text-xs text-gray-600"><strong>Modern LED/HID headlights</strong> are significantly brighter and bluer (5000-6500K) than halogen — right in the most irritating wavelength range.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Solutions</h2>
      <div className="not-prose my-8 space-y-4">
        {[
          {
            icon: Glasses,
            title: "Anti-Glare Night Driving Glasses",
            color: "bg-amber-50 border-amber-200",
            iconColor: "text-amber-500",
            items: [
              { name: "Yellow tint", desc: "Enhances contrast, reduces blue light glare. Most common option." },
              { name: "Light amber/copper", desc: "Similar benefits with slightly less color distortion." },
              { name: "Anti-reflective coating", desc: "Reduces internal reflections within the lens." },
            ],
            note: "Must be VERY lightly tinted. Dark enough to reduce brightness = dangerous at night. Goal: filter wavelengths, not darken view.",
          },
          {
            icon: Sparkles,
            title: "Clean Your Windshield — Both Sides",
            color: "bg-blue-50 border-blue-200",
            iconColor: "text-blue-500",
            items: [
              { name: "Interior surface", desc: "Glass cleaner + microfiber cloth. Worst film builds up from dashboard off-gassing." },
              { name: "Exterior", desc: "Good windshield washer fluid." },
              { name: "Wiper blades", desc: "Replace old, streaky blades." },
            ],
          },
          {
            icon: Settings,
            title: "Adjust Mirrors & Dashboard",
            color: "bg-purple-50 border-purple-200",
            iconColor: "text-purple-500",
            items: [
              { name: "Rearview mirror", desc: "Night/dimming mode. Auto-dimming mirrors are even better." },
              { name: "Side mirrors", desc: "Angle slightly outward to reduce direct headlight reflection." },
              { name: "Dashboard brightness", desc: "Dim as low as possible while reading essential gauges." },
            ],
          },
          {
            icon: Eye,
            title: "Avoid Looking Directly at Oncoming Lights",
            color: "bg-green-50 border-green-200",
            iconColor: "text-green-500",
            items: [
              { name: "Shift gaze", desc: "Look at right edge of road or white lane line during oncoming headlights." },
              { name: "Peripheral vision", desc: "Still tracks the oncoming vehicle while central vision avoids the blast." },
            ],
          },
        ].map((section) => (
          <div key={section.title} className={`rounded-xl p-5 border ${section.color}`}>
            <div className="flex items-center gap-3 mb-3">
              <section.icon className={`w-5 h-5 ${section.iconColor}`} />
              <p className="font-extrabold text-heading text-sm">{section.title}</p>
            </div>
            <div className="space-y-1.5">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start gap-2">
                  <span className="text-gray-300 text-xs flex-shrink-0 mt-0.5">●</span>
                  <p className="text-xs text-gray-700"><strong>{item.name}</strong> — {item.desc}</p>
                </div>
              ))}
            </div>
            {section.note && (
              <div className="mt-3 bg-white rounded-lg p-3 border border-amber-100">
                <p className="text-xs text-gray-600 font-semibold">{section.note}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>Window Tint and Night Driving</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-6">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Tint Makes Night Driving Easier, Not Harder</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Quality tint — especially <Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 font-semibold hover:underline">ceramic tint</Link> — reduces glare from oncoming headlights while maintaining visibility. Many light-sensitive drivers report that tinted windows make night driving <em>easier</em> because the tint takes the edge off bright headlights.
            </p>
          </div>
        </div>
      </div>

      <BlogCTA
        heading="Get Legal Tint That Helps Day AND Night"
        description="A medical window tint exemption lets you go darker than standard limits. Ceramic tint softens headlight glare at night while providing maximum UV protection during the day."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Safety Note">
        <p>If your night vision is significantly impaired, consult an eye care professional. Some conditions that cause light sensitivity also affect night vision and may need separate treatment.</p>
      </BlogCallout>
    </>
  );
}

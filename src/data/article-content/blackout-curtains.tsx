import Link from "next/link";
import { Blinds, Sun, Film, Layers, BedDouble, Sofa, Monitor, Bath, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

export function BlackoutCurtainsContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Controlling the light that enters through your windows is one of the most impactful things you can do for a light-sensitive home. But different rooms need different approaches. Here&apos;s when to use blackout curtains, sheer curtains, and residential window film — and how to combine them.
      </p>

      <BlogTLDR items={[
        "Blackout curtains block 99-100% of light — essential for bedrooms and migraine dark rooms",
        "Sheer curtains soften harsh sunlight while keeping rooms bright and livable",
        "UV-blocking window film is set-it-and-forget-it — blocks 99% UV without darkening rooms",
        "Best approach: combine all three for layered, room-specific light control",
        "Pro tip: overlap curtains 3-4\" on each side and use a pelmet to seal top gaps",
      ]} />

      <BlogComparisonTable
        columns={[
          { header: "Treatment" },
          { header: "Light Blocking" },
          { header: "UV Protection" },
          { header: "Room Feel" },
          { header: "Best Rooms", highlight: true },
        ]}
        rows={[
          ["Blackout Curtains", "99-100%", "Full (when closed)", "Dark, private", "Bedroom, media room"],
          ["Sheer Curtains", "20-40%", "Minimal", "Bright, airy", "Living room, kitchen"],
          ["Clear UV Film", "~5%", "99% UV blocked", "Unchanged", "Any sun-facing window"],
          ["Tinted Film", "50-90%", "99% UV blocked", "Slightly dimmer", "Sun-heavy rooms"],
          ["Frosted Film", "~30%", "Moderate", "Diffused, private", "Bathroom, entryway"],
        ]}
      />

      <h2>Blackout Curtains</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-800 bg-gray-900 p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Blinds className="w-6 h-6 text-amber-400" />
          <h3 className="font-extrabold text-base">99-100% Light Blocking</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Dense, opaque liner (foam-backed or multi-layered fabric) prevents light from passing through. Essential for quality sleep, migraine recovery, and dark retreats.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-bold text-amber-400 mb-2">BEST FOR</p>
            {["Bedrooms — sleep & migraine recovery", "Media rooms — no screen glare", "Dark retreat rooms during attacks"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-amber-400 mb-2">PRO TIPS</p>
            {["Overlap edges 3-4\" on each side", "Use wraparound curtain rod", "Install pelmet/valance above", "Velcro strips seal remaining gaps"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                <span className="text-amber-400">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Sheer Curtains</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-3 mb-3">
          <Sun className="w-6 h-6 text-yellow-500" />
          <h3 className="font-extrabold text-heading text-base">Soften Without Blocking</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          Diffuse and soften incoming sunlight without blocking it entirely. Reduce glare and harsh direct sunlight while maintaining a bright, airy feel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2">BEST FOR</p>
            {["Living rooms — natural light without harshness", "Kitchens — soften morning sun", "Any room needing some natural light"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <CheckCircle className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 mb-2">TIPS</p>
            {["Layer with blackout curtains for flexibility", "White/light sheers diffuse most evenly"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <span className="text-yellow-500">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2>Residential Window Film</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-100 p-6">
        <div className="flex items-center gap-3 mb-3">
          <Film className="w-6 h-6 text-amber-500" />
          <h3 className="font-extrabold text-heading text-base">Set-It-and-Forget-It Protection</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          UV-blocking window film applied directly to glass. Quality films block up to <strong>99% of UV radiation</strong> while letting most visible light through.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { type: "Clear UV Film", desc: "Blocks UV without changing appearance. Full natural light minus the UV.", best: "Most rooms" },
            { type: "Tinted (10-50% VLT)", desc: "Reduces both UV and visible light. Cuts glare from sun-facing windows.", best: "South/west facing" },
            { type: "Frosted/Privacy", desc: "Diffuses light like a permanent sheer curtain. Adds privacy.", best: "Bathrooms, street-level" },
          ].map((item) => (
            <div key={item.type} className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="font-bold text-heading text-xs">{item.type}</p>
              <p className="text-gray-600 text-[11px] mt-1 leading-relaxed">{item.desc}</p>
              <p className="text-blue-600 text-[10px] font-bold mt-2">Best for: {item.best}</p>
            </div>
          ))}
        </div>
      </div>

      <h2>Combining Approaches</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { icon: BedDouble, room: "Bedroom", combo: "Blackout curtains + UV-blocking film", reason: "Total darkness plus UV protection — belt and suspenders", color: "bg-indigo-50 border-indigo-200", iconColor: "text-indigo-500" },
          { icon: Sofa, room: "Living Room", combo: "UV film + sheer curtains + blackout on separate rod", reason: "Layered control — sheers daily, blackouts for bad days", color: "bg-gray-100 border-gray-200", iconColor: "text-amber-500" },
          { icon: Monitor, room: "Home Office", combo: "UV film + sheer curtains", reason: "Manage glare while keeping enough light to work", color: "bg-gray-100 border-gray-200", iconColor: "text-amber-500" },
          { icon: Bath, room: "Bathroom", combo: "Frosted window film", reason: "Privacy + light diffusion in one", color: "bg-cyan-50 border-cyan-200", iconColor: "text-cyan-500" },
        ].map((item) => (
          <div key={item.room} className={`flex items-start gap-4 rounded-xl p-4 border ${item.color}`}>
            <item.icon className={`w-5 h-5 ${item.iconColor} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="font-bold text-heading text-sm">{item.room}</p>
              <p className="text-gray-600 text-xs font-semibold mt-0.5">{item.combo}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.reason}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Managed Light at Home — Now Manage It on the Road"
        description="Residential window film controls light at home. For your vehicle, a medical window tint exemption provides similar protection while driving. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

import Link from "next/link";
import { Home, Briefcase, Car, Smartphone, Pill, Eye, Droplets, Glasses, Sun, FileText, Zap } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function MigraineEmergencyKitContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        When a migraine hits, the last thing you want is to scramble for supplies. Having a pre-packed emergency kit — at home, at work, and in your car — means you can respond immediately and minimize the attack&apos;s severity.
      </p>

      <BlogTLDR items={[
        "Pre-pack 3 kits: home (bedroom), work (desk drawer), car (glove box)",
        "Core items for every kit: blackout mask, medication, cold compress, water",
        "Set up phone Ultra-Dim shortcuts BEFORE you need them",
        "When an attack starts: medicate immediately, reduce light, apply cold, hydrate",
        "If driving during an attack: pull over safely — never drive through it",
      ]} />

      <h2>The Home Kit</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Home className="w-6 h-6 text-amber-500" />
          <h3 className="font-extrabold text-heading text-base">Bedroom / Dark Room</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { item: "Blackout sleep mask", detail: "Contoured, doesn't press eyelids" },
            { item: "Cold compress / ice pack", detail: "Gel bead mask for forehead + eyes" },
            { item: "Migraine medication", detail: "Triptan, gepant, etc. — bedside drawer" },
            { item: "Water bottle", detail: "Dehydration worsens migraines" },
            { item: "Green night light", detail: "Navigate without triggering pain" },
            { item: "Phone charger", detail: "Ready for Ultra-Dim Stack" },
            { item: "Earplugs", detail: "Many migraines include sound sensitivity" },
          ].map((i) => (
            <div key={i.item} className="flex items-start gap-2 bg-white rounded-lg p-2.5 border border-blue-100">
              <span className="text-blue-400 text-xs flex-shrink-0 mt-0.5">●</span>
              <div>
                <p className="font-bold text-heading text-xs">{i.item}</p>
                <p className="text-gray-500 text-[10px]">{i.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>The Work Kit</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-6 h-6 text-amber-500" />
          <h3 className="font-extrabold text-heading text-base">Desk Drawer / Bag</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { item: "FL-41 glasses", detail: "Immediately filter problematic light" },
            { item: "Blackout sleep mask", detail: "Small — fits in a desk drawer" },
            { item: "Medication", detail: "One dose of prescribed migraine med" },
            { item: "Electrolyte packets", detail: "Faster rehydration than water alone" },
            { item: "Instant cold pack", detail: "Squeeze to activate — no freezer needed" },
            { item: "Sunglasses", detail: "For the drive home if needed" },
          ].map((i) => (
            <div key={i.item} className="flex items-start gap-2 bg-white rounded-lg p-2.5 border border-purple-100">
              <span className="text-purple-400 text-xs flex-shrink-0 mt-0.5">●</span>
              <div>
                <p className="font-bold text-heading text-xs">{i.item}</p>
                <p className="text-gray-500 text-[10px]">{i.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>The Car Kit</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Car className="w-6 h-6 text-amber-500" />
          <h3 className="font-extrabold text-heading text-base">Glove Box / Console</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { item: "Polarized sunglasses", detail: "Quality driving sunglasses" },
            { item: "Visor extender", detail: "Blocks light from extra angles" },
            { item: "Backup medication", detail: "Extra dose in the car" },
            { item: "Sealed water bottle", detail: "Keep hydrated on the go" },
            { item: "Blackout sleep mask", detail: "Pull over and rest if needed" },
            { item: "Tint exemption certificate", detail: "Always keep in the vehicle" },
          ].map((i) => (
            <div key={i.item} className="flex items-start gap-2 bg-white rounded-lg p-2.5 border border-green-100">
              <span className="text-green-400 text-xs flex-shrink-0 mt-0.5">●</span>
              <div>
                <p className="font-bold text-heading text-xs">{i.item}</p>
                <p className="text-gray-500 text-[10px]">{i.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2>Digital Preparedness</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Smartphone, label: "iPhone", desc: "Triple-click for Reduce White Point", link: "/resources/iphone-settings-light-sensitivity", color: "text-gray-800" },
          { icon: Smartphone, label: "Android", desc: "Extra Dim in Quick Settings", link: "/resources/android-settings-light-sensitivity", color: "text-amber-500" },
          { icon: Home, label: "Smart Home", desc: "\"Migraine mode\" = all lights minimum", color: "text-amber-500" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
            <item.icon className={`w-5 h-5 ${item.color} mx-auto mb-2`} />
            <p className="font-bold text-heading text-sm">{item.label}</p>
            <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
            {(item as { link?: string }).link && (
              <Link href={(item as { link: string }).link} className="text-amber-600 font-semibold text-[10px] hover:underline mt-1 inline-block">Setup guide →</Link>
            )}
          </div>
        ))}
      </div>

      <h2>When an Attack Starts</h2>
      <BlogStepCards steps={[
        { icon: Pill, title: "Take Medication Immediately", description: "Early treatment is more effective. Don't wait to see if it gets worse." },
        { icon: Eye, title: "Reduce Light Exposure", description: "FL-41 glasses or sleep mask. At work: darken workspace or move to quiet room." },
        { icon: Zap, title: "Apply Cold", description: "Cold compress on forehead, temples, or back of neck." },
        { icon: Droplets, title: "Hydrate", description: "Water or electrolyte drink." },
        { icon: Car, title: "If Driving: Pull Over", description: "Never drive through an active migraine. Pull over, mask on, recline, wait it out." },
      ]} />

      <BlogCTA
        heading="One Kit Item You Shouldn't Be Without"
        description="Your tint exemption certificate belongs in every car kit. If you don't have one yet, a medical window tint exemption provides legal, passive light protection every drive."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Always follow your neurologist&apos;s treatment plan for migraine management.</p>
      </BlogCallout>
    </>
  );
}

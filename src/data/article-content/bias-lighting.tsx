import Link from "next/link";
import { Monitor, CheckCircle, X, ShoppingCart, Lightbulb, Wrench } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function BiasLightingContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Put a warm-toned LED light strip behind your TV or computer monitor. That&apos;s it. This one $15-25 change reduces eye strain more than most people expect, and for light-sensitive people, it can make the difference between a comfortable viewing session and a headache.
      </p>

      <BlogTLDR items={[
        "A warm LED strip behind your screen reduces contrast fatigue and prevents headaches",
        "Lets you lower screen brightness further without losing visibility",
        "Budget option: $10-15 USB LED strip. Premium: $40-60 Philips Hue Play bars",
        "Set to 10-20% of screen brightness in warm white (2700-3000K)",
        "Avoid cool white, RGB cycling, or overly bright settings — defeats the purpose",
      ]} />

      <h2>What Is Bias Lighting?</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6 text-center">
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">WITHOUT BIAS LIGHTING</p>
          <div className="bg-gray-900 rounded-xl p-8 mb-3">
            <div className="bg-white rounded-lg w-20 h-14 mx-auto" />
          </div>
          <p className="text-gray-600 text-xs">Bright screen + dark room = pupils constantly adjusting = eye fatigue &amp; headaches</p>
        </div>
        <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6 text-center">
          <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3">WITH BIAS LIGHTING</p>
          <div className="bg-gray-700 rounded-xl p-8 mb-3 ring-4 ring-amber-200/50">
            <div className="bg-white rounded-lg w-20 h-14 mx-auto" />
          </div>
          <p className="text-gray-600 text-xs">Gentle ambient glow around screen = pupils stay relaxed = comfortable viewing</p>
        </div>
      </div>

      <h2>Why It Helps Light-Sensitive People</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Reduces Contrast Fatigue", desc: "Eyes don't work as hard adjusting between screen and room" },
          { label: "Allows Lower Brightness", desc: "Room isn't pitch dark, so you can dim the screen further" },
          { label: "Reduces Perceived Glare", desc: "Screen doesn't feel 'blinding' when surrounded by ambient light" },
          { label: "Prevents Headaches", desc: "Less strain = fewer tension headaches from screen time" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-gray-100 rounded-xl p-4 border border-gray-200">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How to Set It Up</h2>
      <BlogStepCards steps={[
        { icon: ShoppingCart, title: "Buy a USB LED Strip", description: "Look for \"warm white\" (2700K-3000K) or adjustable color temp. USB-powered plugs into your TV/monitor's USB port." },
        { icon: Wrench, title: "Stick It to the Back", description: "Apply adhesive strip around the perimeter of the back of your display, about 2-3 inches from the edge." },
        { icon: Lightbulb, title: "Adjust Brightness", description: "Set to about 10-20% of your screen's brightness. Should be noticeably dimmer than the screen itself." },
        { icon: Monitor, title: "Use Warm Tones Only", description: "Avoid cool white or RGB cycling colors. Warm, steady light is what reduces strain." },
      ]} />

      <h2>What to Buy</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            tier: "Budget",
            price: "$10-15",
            name: "Any USB LED Strip",
            desc: "Search \"USB LED strip warm white\" — dozens work fine. Just needs to be warm-toned.",
            badge: "bg-gray-500",
          },
          {
            tier: "Mid-Range",
            price: "$20-30",
            name: "Govee / Luminoodle",
            desc: "Adjustable brightness and color temperature. Better build quality and control.",
            badge: "bg-gray-1000",
          },
          {
            tier: "Premium",
            price: "$40-60",
            name: "Philips Hue Play",
            desc: "Can sync with screen content, but for light sensitivity the basic warm glow matters most.",
            badge: "bg-gray-1000",
          },
        ].map((item) => (
          <div key={item.tier} className="rounded-xl border border-gray-200 bg-white p-5">
            <span className={`text-[10px] font-bold text-white ${item.badge} px-2 py-0.5 rounded-full uppercase tracking-wider`}>{item.tier}</span>
            <p className="font-extrabold text-heading text-lg mt-2">{item.price}</p>
            <p className="font-bold text-heading text-sm">{item.name}</p>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Common Mistakes</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          { label: "Too Bright", desc: "Should be subtle, not a spotlight. If it creates glare on the wall, turn it down." },
          { label: "Wrong Color", desc: "Cool white or blue RGB defeats the purpose. Stick with warm tones only." },
          { label: "Cycling/Flashing Modes", desc: "Color-changing lights add visual stimulation, not reduce it." },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 bg-gray-100 rounded-xl p-4 border border-gray-200">
            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogCallout variant="tip" title="Complete screen comfort setup">
        <p>Bias lighting works best combined with <Link href="/resources/computer-settings-light-sensitivity" className="text-amber-600 font-semibold hover:underline">optimized display settings</Link> and <Link href="/resources/fl-41-glasses-complete-guide" className="text-amber-600 font-semibold hover:underline">FL-41 glasses</Link> for a triple-layer protection approach.</p>
      </BlogCallout>

      <BlogCTA
        heading="Screen Comfort Sorted — What About Driving?"
        description="Bias lighting controls screen contrast at home. A medical window tint exemption does the same for sunlight and glare in your vehicle. 100% online evaluation."
        buttonText="Start Your Evaluation — Starting at $225"
      />
    </>
  );
}

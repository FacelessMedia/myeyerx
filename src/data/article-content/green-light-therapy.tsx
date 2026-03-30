import Link from "next/link";
import { Leaf, Brain, Clock, Timer, Moon, Eye, Lightbulb, ShoppingCart, AlertTriangle, CheckCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function GreenLightTherapyContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Here&apos;s something counterintuitive: while most light makes migraines worse, one specific wavelength may actually help. Research from Harvard Medical School found that <strong>narrow-band green light (around 520nm)</strong> is the only color that doesn&apos;t increase migraine pain — and may actively reduce it.
      </p>

      <BlogTLDR items={[
        "Narrow-band green light (~520nm) is the ONLY wavelength that doesn't worsen migraine pain",
        "Harvard study: green light reduced pain by ~20%; follow-up showed 60% migraine frequency reduction",
        "Protocol: 1-2 hours daily in a dark room with only green light, for 6-10 weeks",
        "Allay Lamp (~$149) is the only FDA-listed green light therapy device for migraines",
        "Best as a complement to FL-41 glasses, optimized home lighting, and medical window tint",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Leaf} value="~520nm" label="Beneficial wavelength" />
        <BlogStat icon={Brain} value="20%" label="Pain reduction during attacks" />
        <BlogStat icon={Timer} value="60%" label="Migraine frequency reduction" />
      </BlogStatRow>

      <h2>The Research</h2>
      <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
        <div className="flex items-start gap-4">
          <Brain className="w-8 h-8 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-extrabold text-heading text-base mb-2">Harvard + University of Arizona Studies</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              In 2016, Dr. Rami Burstein at Harvard published in <em>Brain</em> that while blue, amber, red, and white light all intensified migraine pain, <strong>green light at low intensity reduced pain by ~20%</strong>. Green light generates the smallest electrical signals in the retina and cortex.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="text-xs text-gray-600 leading-relaxed">
                Follow-up at the University of Arizona confirmed: <strong>1-2 hours daily for 10 weeks</strong> reduced migraine frequency by <strong>60%</strong> on average.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>How It Works</h2>
      <BlogCallout variant="tip" title="The ipRGC connection">
        <p>The same <strong>intrinsically photosensitive retinal ganglion cells (ipRGCs)</strong> that drive light-triggered pain are least sensitive to ~520nm green light. Pain-signaling pathways receive minimal activation, and competing calming pathways may be stimulated.</p>
      </BlogCallout>

      <h2>How to Try Green Light Therapy</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <span className="text-[10px] font-bold text-white bg-green-600 px-2 py-0.5 rounded-full uppercase tracking-wider">Best Option</span>
          <ShoppingCart className="w-5 h-5 text-gray-400 mt-3 mb-2" />
          <p className="font-bold text-heading text-sm">Allay Lamp</p>
          <p className="text-gray-600 text-xs mt-1 leading-relaxed">Developed by Dr. Burstein&apos;s team. Only FDA-listed green light therapy device for migraines.</p>
          <p className="font-bold text-amber-600 text-sm mt-2">~$149</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <span className="text-[10px] font-bold text-white bg-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Budget Option</span>
          <Lightbulb className="w-5 h-5 text-gray-400 mt-3 mb-2" />
          <p className="font-bold text-heading text-sm">Generic Green LED Bulbs</p>
          <p className="text-gray-600 text-xs mt-1 leading-relaxed">Available on Amazon. Verify wavelength is close to 520nm — many &quot;green&quot; LEDs include blue spectrum.</p>
          <p className="font-bold text-amber-600 text-sm mt-2">$10-30</p>
        </div>
      </div>

      <h2>Protocol</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { icon: Clock, label: "Duration", desc: "1-2 hours", color: "text-green-400" },
          { icon: Timer, label: "Frequency", desc: "Daily, same time", color: "text-amber-500" },
          { icon: Moon, label: "Environment", desc: "Dark room, green only", color: "text-indigo-500" },
          { icon: Eye, label: "Position", desc: "Side or above, not direct", color: "text-amber-500" },
          { icon: Clock, label: "Timeline", desc: "6-10 weeks", color: "text-amber-500" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <item.icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
            <p className="font-bold text-heading text-[11px]">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <BlogCallout variant="tip" title="During an active attack">
        <p>If you need light during an attack (navigating home, using the bathroom, taking medication), green light is the least painful option. Keep a green night light in the bathroom and hallway.</p>
      </BlogCallout>

      <h2>Limitations</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          "Research is still emerging — promising but relatively small studies",
          "It doesn't work for everyone",
          "Requires consistency — occasional use likely won't show results",
          "It's a complement to other treatments, not a replacement",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 bg-gray-100 rounded-lg p-3 border border-gray-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-xs">{item}</p>
          </div>
        ))}
      </div>

      <h2>Combining with Other Approaches</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { text: "FL-41 glasses for filtering harmful wavelengths", link: "/resources/fl-41-glasses-complete-guide" },
          { text: "Optimized home lighting to reduce triggers", link: "/resources/light-proof-your-home" },
          { text: "Trigger tracking to manage your trigger stack", link: "/resources/track-migraine-triggers" },
          { text: "Medical window tint for driving protection", link: "/resources/complete-guide-to-window-tint-medical-exemptions" },
        ].map((item) => (
          <Link key={item.text} href={item.link} className="flex items-start gap-3 bg-gray-100 rounded-xl p-4 border border-gray-200 hover:border-green-300 transition-colors no-underline">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-xs font-semibold">{item.text}</p>
          </Link>
        ))}
      </div>

      <BlogCTA
        heading="Protect Your Eyes While Driving, Too"
        description="Green light therapy helps at home — but you also need protection in the car. A medical window tint exemption provides passive, legal light reduction every drive."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>Green light therapy is an emerging treatment. Discuss it with your neurologist before starting, especially if you have any retinal conditions. It should complement, not replace, your existing migraine treatment plan.</p>
      </BlogCallout>
    </>
  );
}

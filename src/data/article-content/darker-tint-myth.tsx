import Link from "next/link";
import { AlertTriangle, Eye, Shield, Layers, FlaskConical, CheckCircle, HelpCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function DarkerTintMythContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        One of the most common misconceptions about window tint is that darker = better UV protection. It seems logical — if less light gets through, less UV gets through, right? Not exactly. Here&apos;s why VLT and UV rejection are two completely different things.
      </p>

      <BlogTLDR items={[
        "VLT (darkness) and UV rejection are INDEPENDENT properties of tint film",
        "A nearly clear ceramic film (70% VLT) can block 99% UV — a very dark dyed film (5% VLT) may only block 50-70%",
        "For UV-triggered conditions (lupus, melanoma): film quality matters more than darkness",
        "For visible-light conditions (migraines): VLT matters more, but film type still affects wavelength filtering",
        "Always ask for the manufacturer's spec sheet — don't trust darkness as a proxy for protection",
      ]} />

      <h2>VLT ≠ UV Protection</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
          <AlertTriangle className="w-6 h-6 text-red-400 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">The Myth</p>
          <p className="text-gray-600 text-sm leading-relaxed">A very dark dyed film (<strong>5% VLT</strong>) blocks visible light effectively — but may only block <strong>50-70% of UV</strong> radiation.</p>
        </div>
        <div className="rounded-2xl border-2 border-gray-200 bg-gray-100 p-6">
          <Shield className="w-6 h-6 text-amber-500 mb-3" />
          <p className="font-extrabold text-heading text-sm mb-2">The Reality</p>
          <p className="text-gray-600 text-sm leading-relaxed">A nearly clear ceramic film (<strong>70% VLT</strong>) with quality UV-blocking technology can block <strong>99% of UV</strong> rays.</p>
        </div>
      </div>

      <h2>Why This Matters Medically</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
          <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-2">UV-TRIGGERED CONDITIONS</p>
          <p className="text-gray-600 text-xs leading-relaxed mb-2">Lupus, melanoma, dermatomyositis, PMLE, solar urticaria</p>
          <p className="text-gray-600 text-xs"><strong>UV rejection</strong> is what protects you. Cheap dark dyed film = less UV protection than lighter ceramic film.</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-100 p-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">VISIBLE LIGHT CONDITIONS</p>
          <p className="text-gray-600 text-xs leading-relaxed mb-2">Migraines, photophobia</p>
          <p className="text-gray-600 text-xs"><strong>VLT matters more</strong> since visible light is the trigger. But film type still affects which wavelengths are blocked.</p>
        </div>
      </div>

      <h2>What Determines UV Protection?</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { icon: Layers, label: "Film Material", desc: "Ceramic particles are the most effective UV blockers. Dye is the least effective.", color: "text-amber-500" },
          { icon: FlaskConical, label: "UV-Absorbing Additives", desc: "Quality films include specific compounds that absorb UV regardless of visible tint level.", color: "text-amber-500" },
          { icon: Shield, label: "Film Construction", desc: "Multi-layer films with dedicated UV-blocking layers outperform single-layer dyed films.", color: "text-green-400" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5">
            <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
            <div>
              <p className="font-bold text-heading text-sm">{item.label}</p>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>The Right Approach</h2>
      <BlogStepCards steps={[
        { icon: Layers, title: "Choose Film Type First", description: "Ceramic tint for maximum UV and heat rejection." },
        { icon: Eye, title: "Then Choose VLT", description: "How much visible light reduction you need for comfort." },
        { icon: CheckCircle, title: "Check the Spec Sheet", description: "Ask installer for manufacturer's data showing both VLT and UV rejection %." },
      ]} />

      <h2>What to Ask Your Installer</h2>
      <div className="not-prose my-8 space-y-2">
        {[
          "\"What is the UV rejection percentage of this specific film?\" (Should be 99%+ for ceramic)",
          "\"Does it block both UVA and UVB?\" (Some films only block UVB effectively)",
          "\"Can I see the manufacturer's spec sheet?\"",
          "\"What is the infrared/heat rejection percentage?\"",
        ].map((q) => (
          <div key={q} className="flex items-start gap-3 bg-gray-100 rounded-lg p-3 border border-gray-200">
            <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-xs font-semibold">{q}</p>
          </div>
        ))}
        <p className="text-sm mt-2">
          <Link href="/resources/questions-to-ask-tint-installer" className="text-amber-600 font-semibold hover:underline">Full list of questions to ask your installer →</Link>
        </p>
      </div>

      <h2>Bottom Line</h2>
      <BlogCallout variant="tip" title="Don't assume darker = more protection">
        <p>Choose quality film (<Link href="/resources/ceramic-window-tint-medical-use" className="text-amber-600 font-semibold hover:underline">ceramic</Link>) with documented UV rejection specs, then select the <Link href="/resources/understanding-vlt-window-tint" className="text-amber-600 font-semibold hover:underline">VLT</Link> that gives you the visible light reduction you need. Understanding <Link href="/resources/window-tint-types-explained" className="text-amber-600 font-semibold hover:underline">tint types</Link> is just as important as choosing darkness level.</p>
      </BlogCallout>

      <BlogCTA
        heading="Get Your Exemption — Then Choose the Right Tint"
        description="Our licensed providers evaluate your specific condition and help you understand what level of protection you need. 100% online."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. Consult with your healthcare provider about the level of UV and light protection recommended for your specific condition.</p>
      </BlogCallout>
    </>
  );
}

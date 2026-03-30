import Link from "next/link";
import { HelpCircle, AlertTriangle, CheckCircle, X, Shield } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";

export function QuestionsInstallerContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Choosing the right tint installer is almost as important as choosing the right tint. A bad installation means bubbles, peeling, gaps in UV coverage, and wasted money. Here are the questions to ask before handing over your keys.
      </p>

      <BlogTLDR items={[
        "Ask for name-brand film (3M, XPEL, Llumar, SunTek) — not \"our own film\"",
        "Demand ceramic tint for medical use — 99%+ UV rejection on the spec sheet",
        "Get manufacturer AND installer warranty in writing",
        "Professional installation takes 2-4 hours; under 1 hour = cutting corners",
        "Get quotes from at least 3 installers — compare film brand, warranty, and experience",
      ]} />

      <h2>10 Questions to Ask</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { q: "\"What brands of film do you carry?\"", a: "Reputable installers carry 3M, XPEL, Llumar, or SunTek. Name brands have published specs you can verify." },
          { q: "\"Do you offer ceramic tint?\"", a: "For medical use, ceramic is the best option. If they only offer dyed/metalized film, consider going elsewhere." },
          { q: "\"What is the UV rejection percentage?\"", a: "Should be 99%+ for ceramic. If they can't give a specific number, ask for the spec sheet." },
          { q: "\"Can I see the manufacturer's data sheet?\"", a: "Shows exact VLT, UV rejection, IR rejection, and total solar energy rejection. Professional installers have these ready." },
          { q: "\"What warranty do you offer?\"", a: "Quality installations: manufacturer's warranty (often lifetime for ceramic) + installer warranty on workmanship. Get both in writing." },
          { q: "\"How long have you been installing?\"", a: "Experience matters. Tint installation takes years to master — cleaner edges, fewer bubbles, better corners." },
          { q: "\"Experience with medical exemption customers?\"", a: "Some know state-specific VLT requirements and may want to see your exemption certificate." },
          { q: "\"How long does installation take?\"", a: "Full car: 2-4 hours for professional work. Under 1 hour = likely cutting corners." },
          { q: "\"What's the cure time?\"", a: "3-5 days warm weather, 2-4 weeks cold weather. Don't roll windows down during this time." },
          { q: "\"Can I see examples of your work?\"", a: "Look for clean edges, no bubbles, consistent coverage, neat corners. Check their portfolio or social media." },
        ].map((item, i) => (
          <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-extrabold">{i + 1}</span>
              <div>
                <p className="font-bold text-heading text-sm">{item.q}</p>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Red Flags</h2>
      <div className="not-prose my-6 space-y-2">
        {[
          "Can't name the film brand they use",
          "No manufacturer's warranty",
          "Significantly cheaper than other local shops (low-quality film)",
          "Promises installation in under an hour for a full car",
          "Won't show you the film's spec sheet",
          "No portfolio or examples of completed work",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 bg-red-50 rounded-lg p-3 border border-red-200">
            <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-xs font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <h2>After Installation</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          "Small water bubbles during curing are normal — disappear in weeks",
          "Don't roll down tinted windows during cure time",
          "Clean with ammonia-free glass cleaner + soft cloth",
          "Keep warranty paperwork and spec sheet with vehicle records",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-200">
            <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-xs">{item}</p>
          </div>
        ))}
      </div>

      <BlogCTA
        heading="Get Your Exemption Before Visiting the Installer"
        description="Secure your medical tint exemption first — then bring it to your installer. They'll know exactly what VLT to apply for your state."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="tip" title="Pro Tip">
        <p>Get quotes from at least 3 installers. Compare not just price, but the film brand, warranty, and the installer&apos;s experience level.</p>
      </BlogCallout>
    </>
  );
}

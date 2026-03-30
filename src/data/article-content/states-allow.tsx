import Link from "next/link";
import { CheckCircle, MapPin, Clock, Shield, DollarSign, AlertTriangle } from "lucide-react";
import { STATES, CONDITIONS } from "@/data/states";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { StateEligibilityChecker } from "@/components/tools/StateEligibilityChecker";

export function StatesAllowContent() {
  const servedStates = STATES.filter((s) => s.served && s.hasExemption);
  const exemptionStates = STATES.filter((s) => s.hasExemption);
  const noExemptionStates = STATES.filter((s) => !s.hasExemption);

  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        Most U.S. states allow some form of medical exemption for window tint, but the requirements, qualifying conditions, and processes vary significantly. This guide breaks down every state so you know exactly where you stand.
      </p>

      <BlogTLDR items={[
        `${exemptionStates.length} out of 50 states allow medical window tint exemptions`,
        `MyEyeRx serves ${servedStates.length} states with 100% online evaluations`,
        "Requirements, VLT limits, and exemption durations vary by state",
        "Qualifying conditions recognized by most states: migraines, lupus, melanoma, photophobia, and more",
        "Certificates delivered within 24-48 hours — HIPAA compliant",
      ]} />

      <BlogStatRow>
        <BlogStat icon={MapPin} value={`${exemptionStates.length}`} label="States with exemptions" />
        <BlogStat icon={Shield} value={`${servedStates.length}`} label="States we serve" />
        <BlogStat icon={Clock} value="24-48 hrs" label="Certificate delivery" />
      </BlogStatRow>

      {noExemptionStates.length > 0 && (
        <>
          <h2>States Without Formal Exemption Programs</h2>
          <div className="not-prose my-6 space-y-2">
            {noExemptionStates.map((s) => (
              <div key={s.slug} className="flex items-start gap-3 bg-red-50 rounded-lg p-3 border border-red-200">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-xs"><strong>{s.name}</strong> — Check with the {s.dmvName} for the latest updates, as regulations change</p>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>Complete State-by-State Breakdown</h2>
      <p>Below is every state that offers medical window tint exemptions, with key details about each state&apos;s program:</p>

      <div className="not-prose my-8">
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">State</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Front Side VLT</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Exemption Duration</th>
                <th className="text-left px-4 py-3 font-bold text-heading border-b border-amber-200">Price</th>
              </tr>
            </thead>
            <tbody>
              {servedStates.map((s, i) => (
                <tr key={s.slug} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 border-b border-gray-100">
                    <Link href={`/${s.slug}-window-tint-medical-exemption`} className="text-amber-600 font-semibold hover:underline">
                      {s.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 border-b border-gray-100">{s.tintLaws.frontSide}</td>
                  <td className="px-4 py-3 border-b border-gray-100">{s.exemptionDuration}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-semibold">${s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2>Which Conditions Qualify Across States?</h2>
      <p>While specific qualifying conditions vary, these conditions are recognized by the vast majority of states:</p>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONDITIONS.map((c) => (
          <Link
            key={c.slug}
            href={`/conditions/${c.slug}`}
            className="flex items-center gap-2 bg-surface rounded-lg px-4 py-3 border border-gray-100 hover:border-amber-200 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="text-sm font-medium text-heading">{c.name}</span>
          </Link>
        ))}
      </div>

      <StateEligibilityChecker />

      <h2>How to Get Your Exemption</h2>
      <p>
        MyEyeRx currently serves <strong>{servedStates.length} states</strong> with online medical tint exemption evaluations. The process is 100% online, HIPAA compliant, and certificates are delivered within 24-48 hours.
      </p>
      <p>
        <Link href="/resources/how-to-get-tint-exemption-online" className="text-amber-600 font-semibold hover:underline">Read our step-by-step guide to getting your exemption online →</Link>
      </p>

      <BlogCTA
        heading="Find Your State and Get Started"
        description="Select your state, complete a 15-minute questionnaire, and receive your physician-signed exemption certificate within 24-48 hours."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Disclaimer">
        <p>State regulations change periodically. While we strive to keep this information current, always verify requirements with your state&apos;s DMV or motor vehicle agency.</p>
      </BlogCallout>
    </>
  );
}

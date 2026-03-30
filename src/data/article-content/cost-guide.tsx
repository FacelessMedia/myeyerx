import Link from "next/link";
import { DollarSign, CheckCircle, X, Scale, CreditCard, AlertTriangle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";
import { CostCalculator } from "@/components/tools/CostCalculator";

export function CostGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        One of the most common questions we hear is &quot;how much does a window tint exemption cost?&quot; The short answer: it depends on your state and provider. Here&apos;s a transparent breakdown of what to expect.
      </p>

      <BlogTLDR items={[
        "MyEyeRx pricing: $225 (12 states), $250 (29 states + DC), $350 (New York)",
        "Fee covers everything: physician evaluation, signed certificate, digital delivery",
        "Compare: in-person visits cost $100-$300+ and doctors often don't know the right forms",
        "One-time investment vs. $25-$500+ per tint ticket (plus insurance increases)",
        "May qualify for HSA/FSA reimbursement as a licensed physician medical service",
      ]} />

      <h2>MyEyeRx Pricing</h2>
      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center">
          <DollarSign className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <p className="font-extrabold text-heading text-3xl">$225</p>
          <p className="text-xs font-bold text-green-600 uppercase mt-1 mb-3">12 States</p>
          <p className="text-gray-600 text-[11px] leading-relaxed">AR, ID, IL, MI, MN, NM, OR, SC, TX, WA, WV, WI</p>
          <p className="text-gray-400 text-[10px] mt-2">Streamlined exemption processes</p>
        </div>
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6 text-center">
          <DollarSign className="w-6 h-6 text-amber-500 mx-auto mb-2" />
          <p className="font-extrabold text-heading text-3xl">$250</p>
          <p className="text-xs font-bold text-amber-600 uppercase mt-1 mb-3">29 States + DC</p>
          <p className="text-gray-600 text-[11px] leading-relaxed">AL, AZ, CA, CT, DE, FL, GA, IN, IA, KS, LA, ME, MD, MA, MS, MO, MT, NV, NH, NJ, NC, OH, OK, PA, RI, TN, VT, VA, DC</p>
          <p className="text-gray-400 text-[10px] mt-2">Majority of states</p>
        </div>
        <div className="rounded-2xl border-2 border-purple-200 bg-purple-50 p-6 text-center">
          <DollarSign className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="font-extrabold text-heading text-3xl">$350</p>
          <p className="text-xs font-bold text-purple-600 uppercase mt-1 mb-3">New York</p>
          <p className="text-gray-600 text-[11px] leading-relaxed">Most complex process — requires MV-80W form and additional documentation</p>
        </div>
      </div>

      <h2>What&apos;s Included vs. Not Included</h2>
      <div className="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">INCLUDED IN YOUR FEE</p>
          {[
            "Full physician evaluation by licensed optometrist",
            "State-specific forms and paperwork handled",
            "Physician-signed exemption certificate",
            "Digital delivery within 24-48 hours",
            "Medical records review for state acceptance",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-gray-700 mb-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
          <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3">NOT INCLUDED</p>
          {[
            "Window tint installation (separate tint shop)",
            "DMV registration fees (typically $5-$25)",
            "Future renewals (separate evaluation)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-gray-700 mb-1.5">
              <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h2>How Does This Compare?</h2>
      <BlogComparisonTable
        columns={[
          { header: "Option" },
          { header: "Cost" },
          { header: "Pros" },
          { header: "Cons" },
        ]}
        rows={[
          ["MyEyeRx", "$225-$350", "100% online, state-specific forms, 24-48hr delivery", "No in-person exam"],
          ["In-Person Doctor", "$100-$300+", "Face-to-face evaluation", "Scheduling hassle, doctors often unfamiliar with forms"],
          ["Other Online Services", "$149-$400+", "Online convenience", "Varies in quality, may not be physician-led"],
        ]}
      />

      <BlogCallout variant="tip" title="When comparing online services, ask:">
        <p>Is the evaluation by a licensed physician (not nurse/PA)? Is it HIPAA compliant? Do they handle state-specific forms? What&apos;s the turnaround time?</p>
      </BlogCallout>

      <h2>Is It Worth the Investment?</h2>
      <div className="not-prose my-8 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
        <div className="flex items-center gap-2 mb-3">
          <Scale className="w-5 h-5 text-amber-600" />
          <h3 className="font-extrabold text-heading text-base">Cost of NOT Having an Exemption</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { cost: "$25-$500+", label: "Per tint ticket (varies by state)" },
            { cost: "Multiple tickets", label: "Can exceed exemption cost in one year" },
            { cost: "Insurance increases", label: "From traffic violations on record" },
            { cost: "$100-$400+", label: "Forced tint removal and re-application" },
            { cost: "Health impacts", label: "Driving without UV/light protection" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-amber-100">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-heading text-xs">{item.cost}</p>
                <p className="text-gray-500 text-[10px]">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-sm mt-4 font-semibold">A one-time investment of $225-$350 protects you from all of these ongoing costs.</p>
      </div>

      <h2>Can I Use HSA or FSA Funds?</h2>
      <div className="not-prose my-8 flex items-start gap-4 bg-blue-50 rounded-2xl p-5 border border-blue-200">
        <CreditCard className="w-6 h-6 text-blue-500 flex-shrink-0" />
        <div>
          <p className="font-bold text-heading text-sm mb-1">In many cases, yes.</p>
          <p className="text-gray-700 text-xs leading-relaxed">Since the evaluation is a medical service provided by a licensed physician, it may qualify as a medical expense under your HSA or FSA. Check with your plan administrator to confirm.</p>
        </div>
      </div>

      <CostCalculator />

      <BlogCTA
        heading="Transparent Pricing, No Hidden Fees"
        description="Your fee covers everything: physician evaluation, state-specific forms, signed certificate, and digital delivery. Select your state to see your exact price."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="tip" title="Pricing Note">
        <p>Prices shown are current as of March 2026 and subject to change. Visit <Link href="/" className="text-amber-600 font-semibold hover:underline">myeyerx.net</Link> and select your state for the most current pricing.</p>
      </BlogCallout>
    </>
  );
}

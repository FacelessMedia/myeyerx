import Link from "next/link";
import { FileText, Clock, Shield, CheckCircle, ClipboardList, UserCheck, Mail, Printer, Car, Bell, HelpCircle } from "lucide-react";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { StateEligibilityChecker } from "@/components/tools/StateEligibilityChecker";

export function HowToGetContent() {
  return (
    <>
      <p className="text-xl text-gray-600 leading-relaxed">
        Getting a medical window tint exemption used to require multiple in-person visits — first to your doctor, then to the DMV. Today, telehealth makes it possible to complete the entire process online in about 15 minutes. Here&apos;s exactly how to do it.
      </p>

      <BlogTLDR items={[
        "The entire process is 100% online — questionnaire takes ~15 minutes",
        "Licensed physician (Dr. Elizabeth Rose Borowiec, OD) reviews every case personally",
        "Signed certificate delivered by email within 24-48 hours",
        "Common qualifying conditions: migraines, lupus, melanoma, dry eye, photosensitivity, TBI, and more",
        "MyEyeRx is HIPAA-compliant; certificates are recognized by state DMVs and law enforcement",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Clock} value="~15 min" label="Questionnaire time" />
        <BlogStat icon={Mail} value="24-48 hrs" label="Certificate delivery" />
        <BlogStat icon={Shield} value="HIPAA" label="Fully compliant" />
      </BlogStatRow>

      <h2>Who Qualifies?</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          "Photosensitivity disorders",
          "Lupus (SLE)",
          "Chronic migraines with photophobia",
          "Melanoma / skin cancer history",
          "Post-LASIK / post-surgical sensitivity",
          "Xeroderma Pigmentosum",
          "Porphyria or Albinism",
          "Dry eye syndrome",
          "Cataracts and uveitis",
          "Traumatic brain injury / concussion",
          "Medication-induced photosensitivity",
          "Rosacea with sun sensitivity",
        ].map((condition) => (
          <div key={condition} className="flex items-start gap-2 bg-surface rounded-lg p-3 border border-gray-100">
            <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-xs font-semibold">{condition}</p>
          </div>
        ))}
      </div>
      <p className="text-sm">
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See all qualifying conditions →</Link>
      </p>

      <h2>The 5-Step Process</h2>
      <BlogStepCards steps={[
        { icon: FileText, title: "Check Your State's Requirements", description: "Most states have their own forms. We handle state-specific paperwork — just select your state." },
        { icon: ClipboardList, title: "Complete Online Evaluation", description: "~15-minute questionnaire covering your condition, symptoms, medications, and driving impact." },
        { icon: UserCheck, title: "Physician Review", description: "Dr. Elizabeth Rose Borowiec, OD reviews your case personally. Not an automated system. 24-48 hours." },
        { icon: Mail, title: "Receive Your Certificate", description: "Signed certificate delivered by email with your name, condition, physician signature, and state-specific forms." },
        { icon: Printer, title: "Print, Register, Tint", description: "Print certificate, register with DMV if required, get windows tinted by a professional installer." },
      ]} />

      <h2>What to Do After Receiving Your Certificate</h2>
      <div className="not-prose my-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Printer, label: "Print Certificate", desc: "Keep in vehicle at all times", color: "text-amber-500" },
          { icon: FileText, label: "Register with DMV", desc: "If your state requires it", color: "text-amber-500" },
          { icon: Car, label: "Get Windows Tinted", desc: "Professional installer", color: "text-green-400" },
          { icon: Bell, label: "Set Renewal Reminder", desc: "If exemption has expiry", color: "text-amber-500" },
        ].map((item) => (
          <div key={item.label} className="bg-surface rounded-xl p-3 border border-gray-100 text-center">
            <item.icon className={`w-4 h-4 ${item.color} mx-auto mb-1`} />
            <p className="font-bold text-heading text-xs">{item.label}</p>
            <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>What If I&apos;m Not Approved?</h2>
      <BlogCallout variant="warning" title="Medical documentation is required">
        <p>You are informed before purchasing that legitimate medical documentation is required. Our physician reviews your existing medical paperwork to determine state acceptance. If you proceed without valid records supporting a qualifying condition, your evaluation will be declined and the fee is non-refundable. Ensure you have appropriate medical records ready before starting.</p>
      </BlogCallout>

      <h2>Common Questions</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { q: "How long does the process take?", a: "Questionnaire: ~15 minutes. Physician review: 24-48 hours. Total: 1-2 business days." },
          { q: "Is this legitimate?", a: "Yes. HIPAA-compliant telehealth service. All evaluations by Dr. Elizabeth Rose Borowiec, OD (NPI: 1558578559). Certificates are physician-signed documents recognized by state DMVs and law enforcement." },
        ].map((item) => (
          <div key={item.q} className="rounded-xl border border-gray-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-heading text-sm">{item.q}</p>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <StateEligibilityChecker />

      <BlogCTA
        heading="Ready to Get Started?"
        description="Select your state, complete the 15-minute questionnaire, and receive your physician-signed exemption certificate within 24-48 hours."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only. A licensed physician will evaluate your specific condition to determine if you qualify for a medical window tint exemption.</p>
      </BlogCallout>
    </>
  );
}

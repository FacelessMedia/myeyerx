import Link from "next/link";
import { BookOpen, CheckCircle, MapPin, Stethoscope, FileText, Globe, Clock, DollarSign, ShieldCheck, Eye } from "lucide-react";
import { STATES, CONDITIONS } from "@/data/states";
import { BlogTLDR } from "@/components/blog/BlogTLDR";
import { BlogStat, BlogStatRow } from "@/components/blog/BlogStat";
import { BlogStepCards } from "@/components/blog/BlogStepCards";
import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { StateEligibilityChecker } from "@/components/tools/StateEligibilityChecker";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { BlogComparisonTable } from "@/components/blog/BlogComparisonTable";

const topStates = STATES.filter((s) => s.served).slice(0, 12);

export function CompleteGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you suffer from a medical condition that makes you sensitive to sunlight or UV radiation, you may qualify for a <strong>medical window tint exemption</strong> that allows your vehicle windows to be tinted darker than your state normally permits. This comprehensive guide covers everything you need to know about the process, from qualifying conditions to state-by-state requirements to what happens after you receive your certificate.
      </p>

      <BlogTLDR items={[
        "A medical tint exemption is a physician-signed certificate that legally allows darker window tint for qualifying conditions",
        "Over 20 conditions qualify — including migraines, lupus, melanoma, photosensitivity, and post-surgical sensitivity",
        "MyEyeRx serves 42+ states with 100% online evaluations starting at $225",
        "Certificates are delivered digitally within 24-48 hours — no office visit required",
        "Keep your certificate in the vehicle at all times to present during traffic stops",
      ]} />

      <BlogStatRow>
        <BlogStat icon={Globe} value="42+" label="States Served" />
        <BlogStat icon={Clock} value="24-48 hrs" label="Certificate Delivery" />
        <BlogStat icon={DollarSign} value="$225" label="Starting Price" />
        <BlogStat icon={ShieldCheck} value="100%" label="HIPAA Compliant" />
      </BlogStatRow>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <h3 className="font-bold text-heading text-lg mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-amber-500" /> What You&apos;ll Learn in This Guide</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["What medical tint exemptions are and how they work", "Which medical conditions qualify", "State-by-state requirements and processes", "How to apply online through telehealth", "Costs and what's included", "How to use your exemption certificate", "Renewal requirements", "Frequently asked questions"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>What Is a Medical Window Tint Exemption?</h2>
      <p>
        A medical window tint exemption is an official document — typically signed by a licensed physician — that certifies you have a medical condition requiring additional protection from sunlight or UV radiation while in your vehicle. This certificate allows you to have your vehicle&apos;s windows tinted darker than the standard Visible Light Transmission (VLT) limits set by your state.
      </p>
      <p>
        Every U.S. state has laws regulating how dark vehicle window tint can be. These laws are measured in VLT — the percentage of visible light that passes through the tint. For example, a state might require front side windows to allow at least 35% VLT. With a medical exemption, you may be permitted to go darker, sometimes significantly so, depending on your state&apos;s regulations.
      </p>

      <BlogCallout variant="info" title="This is a legitimate medical accommodation">
        <p>A tint exemption is not a &quot;loophole&quot; or a way to bypass the law — it&apos;s a medical accommodation similar to a handicap parking permit. It&apos;s designed to protect people with genuine medical conditions that make normal sun exposure dangerous or debilitating while driving.</p>
      </BlogCallout>

      <h2>Which Medical Conditions Qualify?</h2>
      <p>
        While specific qualifying conditions vary by state, most states recognize conditions that cause photosensitivity (sensitivity to light) or an increased vulnerability to UV radiation. The most commonly accepted conditions include:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: "Photosensitivity Disorders", desc: "Abnormal sensitivity to light causing pain, burning, rashes, or other adverse reactions when exposed to sunlight.", slug: "photosensitivity" },
          { name: "Lupus (SLE)", desc: "Autoimmune condition where UV exposure triggers flares, butterfly rash, joint pain, and fatigue.", slug: "lupus" },
          { name: "Migraines with Photophobia", desc: "Sunlight is one of the most common migraine triggers — driving in bright conditions can cause debilitating episodes.", slug: "migraines" },
          { name: "Melanoma & Skin Cancer", desc: "Patients need maximum UV protection at all times. Dermatologists frequently recommend window tint.", slug: "melanoma" },
          { name: "Post-Surgical (LASIK, Cataracts)", desc: "Increased light sensitivity after eye surgeries that can last months or longer during healing.", slug: "lasik-post-surgical" },
          { name: "Dry Eye Syndrome", desc: "The #1 cause of photophobia, affecting 16M+ Americans. Light sensitivity is a primary symptom.", slug: "dry-eye-syndrome" },
        ].map((c) => (
          <Link key={c.slug} href={`/conditions/${c.slug}`} className="block bg-surface rounded-xl p-5 border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group">
            <div className="flex items-start gap-3">
              <Eye className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-heading text-sm group-hover:text-amber-600 transition-colors">{c.name}</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h3>Other Qualifying Conditions</h3>
      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          { name: "Xeroderma Pigmentosum (XP)", desc: "Rare genetic condition — body cannot repair UV damage", slug: "xeroderma-pigmentosum" },
          { name: "Porphyria", desc: "Group of disorders causing extreme sunlight sensitivity", slug: "porphyria" },
          { name: "Albinism", desc: "Reduced melanin causing extreme sun sensitivity", slug: "albinism" },
          { name: "Rosacea", desc: "Chronic skin condition triggered by sunlight", slug: "rosacea" },
          { name: "Cataracts", desc: "Lens clouding that scatters light and amplifies glare", slug: "cataracts" },
          { name: "Traumatic Brain Injury", desc: "Concussions commonly cause lingering light sensitivity", slug: "traumatic-brain-injury" },
          { name: "Medication-Induced Sensitivity", desc: "Common drugs that increase sun sensitivity", slug: "medication-induced-photosensitivity" },
          { name: "Corneal Conditions", desc: "Corneal damage causing chronic light sensitivity", slug: "corneal-conditions" },
        ].map((c) => (
          <Link key={c.slug} href={`/conditions/${c.slug}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-amber-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-amber-50">
            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span className="font-medium">{c.name}</span>
          </Link>
        ))}
      </div>
      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See our full list of qualifying conditions →</Link>
      </p>

      <h2>State-by-State Requirements</h2>
      <p>
        Each state has its own regulations governing medical tint exemptions. Some states have very specific forms that must be completed, while others accept a general physician&apos;s letter. Key differences between states include:
      </p>

      <BlogComparisonTable
        columns={[
          { header: "Requirement" },
          { header: "What It Means" },
          { header: "Example" },
        ]}
        rows={[
          ["Required Documentation", "State-specific forms vs. general physician letter", "New York requires form MV-80W"],
          ["Exemption Duration", "How long the exemption lasts before renewal", "1 year to permanent"],
          ["Who Can Certify", "Type of physician who can sign", "MD, DO, or Optometrist"],
          ["Darkness Allowed", "How dark your tint can be with an exemption", "Some states allow any VLT; others set minimums"],
          ["Carry Requirement", "Whether you must keep the certificate in your vehicle", "Most states require it"],
        ]}
      />

      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s specific tint laws and exemption requirements →</Link>
      </p>

      <div className="bg-surface rounded-xl p-6 border border-gray-200 not-prose my-8">
        <h3 className="font-bold text-heading mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-amber-500" /> Popular State Exemption Pages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {topStates.map((s) => (
            <Link key={s.slug} href={`/${s.slug}-window-tint-medical-exemption`} className="text-sm text-amber-600 font-medium hover:underline py-1">
              {s.name} Exemption →
            </Link>
          ))}
        </div>
      </div>

      <StateEligibilityChecker />

      <h2>How to Apply for a Medical Window Tint Exemption Online</h2>
      <p>
        Traditionally, getting a medical tint exemption required an in-person visit to your doctor, then a trip to the DMV. Today, telehealth has simplified this process dramatically. Here&apos;s how it works with MyEyeRx:
      </p>

      <BlogStepCards steps={[
        { icon: MapPin, title: "Select Your State", description: "Visit myeyerx.net and choose your state. We'll show you the specific requirements and pricing for your state." },
        { icon: FileText, title: "Complete Medical Questionnaire", description: "Answer questions about your medical condition, symptoms, and how sunlight affects your daily life. This takes about 10-15 minutes." },
        { icon: Stethoscope, title: "Physician Review", description: "A licensed physician (Dr. Elizabeth Rose Borowiec, OD) reviews your case. This is a real medical evaluation, not a rubber stamp." },
      ]} />

      <BlogCallout variant="success" title="Certificate Delivered in 24-48 Hours">
        <p>If approved, your signed exemption certificate is delivered by email within 24-48 hours. Print it and keep it in your vehicle. No office visit, no DMV trip, no waiting weeks for an appointment.</p>
      </BlogCallout>

      <h2>How Much Does a Medical Tint Exemption Cost?</h2>
      <p>
        The cost of a medical window tint exemption varies by provider and state. At MyEyeRx, pricing is based on your state&apos;s requirements:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { price: "$225", states: "AR, ID, IL, MI, MN, NM, OR, SC, TX, WA, WV, WI", label: "12 States" },
          { price: "$250", states: "AL, AZ, CA, CT, DE, FL, GA, IN, IA, KS, LA, ME, MD, MA, MS, MO, MT, NV, NH, NJ, NC, OH, OK, PA, RI, TN, VT, VA, DC", label: "29 States + DC" },
          { price: "$350", states: "NY", label: "New York" },
        ].map((tier) => (
          <div key={tier.price} className="bg-white rounded-2xl border-2 border-amber-200 p-5 text-center">
            <p className="text-3xl font-extrabold text-heading">{tier.price}</p>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1 mb-3">{tier.label}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{tier.states}</p>
          </div>
        ))}
      </div>

      <div className="not-prose my-6 bg-surface rounded-xl p-5 border border-gray-200">
        <h4 className="font-bold text-heading text-sm mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> What&apos;s Included</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Licensed physician evaluation",
            "Signed exemption certificate",
            "State-specific documentation",
            "Digital delivery within 24-48 hrs",
            "HIPAA-compliant process",
            "No hidden fees or subscriptions",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <BlogComparisonTable
        columns={[
          { header: "Option" },
          { header: "Cost" },
          { header: "Time" },
          { header: "Convenience", highlight: true },
        ]}
        rows={[
          ["MyEyeRx (Online)", "$225-$350", "24-48 hours", "★★★★★"],
          ["In-Person Doctor Visit", "$100-300+ (copay)", "1-3 weeks", "★★☆☆☆"],
          ["Doctor + DMV Trip", "$100-300+ plus fees", "2-6 weeks", "★☆☆☆☆"],
        ]}
      />

      <p>
        <Link href="/resources/window-tint-exemption-cost" className="text-amber-600 font-semibold hover:underline">Read our detailed pricing guide →</Link>
      </p>

      <CostCalculator />

      <h2>What to Do After You Receive Your Exemption Certificate</h2>
      <p>Once your exemption certificate is delivered, follow these steps:</p>

      <div className="not-prose my-8 space-y-3">
        {[
          { icon: "🖨️", title: "Print two copies", desc: "Keep one in your vehicle at all times and one at home as backup." },
          { icon: "🏛️", title: "Register with your DMV (if required)", desc: "Some states require you to register the exemption. Check your state's requirements." },
          { icon: "🚗", title: "Get your windows tinted", desc: "Take the certificate to a reputable tint shop. They may want to see it before applying darker tint." },
          { icon: "📄", title: "Keep it in the vehicle", desc: "If you're pulled over, you'll need to present the certificate to law enforcement." },
          { icon: "📅", title: "Know the renewal date", desc: "If your state requires renewal, set a reminder before it expires." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 bg-surface rounded-xl p-4 border border-gray-100">
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-bold text-heading text-sm">{item.title}</p>
              <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>What Happens If You Get Pulled Over?</h2>
      <p>
        If a law enforcement officer pulls you over for window tint that appears to exceed legal limits, follow these steps:
      </p>

      <div className="not-prose my-8 space-y-3">
        {[
          { num: "1", title: "Stay calm and cooperative", desc: "The officer is doing their job. Tint violations are one of the most common traffic stops." },
          { num: "2", title: "Inform the officer immediately", desc: "Say: \"Officer, I have a medical window tint exemption. The certificate is in my glove compartment. May I get it for you?\"" },
          { num: "3", title: "Present your exemption certificate", desc: "Hand it to the officer along with your license and registration." },
          { num: "4", title: "Be patient", desc: "The officer may check your tint with a meter and verify the certificate. This usually resolves the issue." },
        ].map((step) => (
          <div key={step.num} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-200">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 font-extrabold text-sm">{step.num}</span>
            </div>
            <div>
              <p className="font-bold text-heading text-sm">{step.title}</p>
              <p className="text-gray-600 text-xs mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <BlogCallout variant="tip" title="Got a citation despite having a valid exemption?">
        <p>In most jurisdictions, you can get the citation dismissed by presenting your valid exemption certificate to the court or prosecutor. This situation is rare when you keep the certificate readily accessible. <Link href="/resources/pulled-over-tinted-windows" className="text-amber-600 font-semibold hover:underline">Read our full guide on getting pulled over →</Link></p>
      </BlogCallout>

      <h2>Exemption Renewal Requirements</h2>
      <p>
        Renewal requirements vary significantly by state:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Annual Renewal", desc: "Some states require yearly re-certification", color: "bg-blue-50 border-blue-200" },
          { label: "Biennial (Every 2 Years)", desc: "Several states use this timeline", color: "bg-green-50 border-green-200" },
          { label: "Permanent", desc: "Some states issue permanent exemptions for chronic conditions", color: "bg-amber-50 border-amber-200" },
          { label: "Condition-Dependent", desc: "Permanent for permanent conditions; renewal for temporary ones", color: "bg-purple-50 border-purple-200" },
        ].map((item) => (
          <div key={item.label} className={`rounded-xl p-4 border ${item.color}`}>
            <p className="font-bold text-heading text-sm">{item.label}</p>
            <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <p>
        Your exemption certificate will indicate its validity period. If renewal is required, you&apos;ll need a new physician evaluation — the process is the same as the initial application.
      </p>

      <h2>Frequently Asked Questions</h2>

      <BlogFAQ items={[
        {
          q: "Is a medical tint exemption the same as a tint prescription?",
          a: "The terms are often used interchangeably, but technically a \"tint exemption\" or \"tint waiver\" is the more accurate term. It's a medical certification that exempts you from standard tint laws — not a prescription for a specific product.",
        },
        {
          q: "Can I get an exemption for cosmetic reasons?",
          a: "No. Medical tint exemptions are strictly for documented medical conditions. Wanting darker tint for privacy, aesthetics, or general comfort does not qualify. A physician must certify that you have a legitimate medical need.",
        },
        {
          q: "Will my exemption work in other states?",
          a: "Generally, medical tint exemptions are state-specific. However, many states have reciprocity agreements or will accept out-of-state exemptions. If you drive frequently in multiple states, consider getting an exemption in each state you regularly visit.",
        },
        {
          q: "Can I transfer my exemption to a new vehicle?",
          a: "In most states, the exemption is issued to the person, not the vehicle. This means it applies to any vehicle you drive. However, some states tie the exemption to a specific vehicle registration. Check your state's specific rules.",
        },
        {
          q: "How dark can I go with a medical exemption?",
          a: "This depends on your state. Some states allow any darkness level with a valid exemption, while others still set minimums (e.g., 20% VLT even with an exemption). Your physician's recommendation and your state's regulations both factor in.",
        },
      ]} />

      <BlogCTA
        heading="Ready to Get Your Medical Window Tint Exemption?"
        description="Connect with a licensed physician online — no office visit required. Get your signed exemption certificate within 24-48 hours."
        buttonText="Start Your Evaluation — Starting at $225"
      />

      <BlogCallout variant="warning" title="Medical Disclaimer">
        <p>This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider regarding your specific medical condition and treatment options. Window tint exemption requirements vary by state and are subject to change.</p>
      </BlogCallout>
    </>
  );
}

import Link from "next/link";
import { BookOpen, CheckCircle } from "lucide-react";
import { STATES, CONDITIONS } from "@/data/states";

const topStates = STATES.filter((s) => s.served).slice(0, 12);

export function CompleteGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        If you suffer from a medical condition that makes you sensitive to sunlight or UV radiation, you may qualify for a <strong>medical window tint exemption</strong> that allows your vehicle windows to be tinted darker than your state normally permits. This comprehensive guide covers everything you need to know about the process, from qualifying conditions to state-by-state requirements to what happens after you receive your certificate.
      </p>

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
      <p>
        The exemption is not a &quot;loophole&quot; or a way to bypass the law — it&apos;s a legitimate medical accommodation, similar to a handicap parking permit. It&apos;s designed to protect people with genuine medical conditions that make normal sun exposure dangerous or debilitating while driving.
      </p>

      <h2>Which Medical Conditions Qualify?</h2>
      <p>
        While specific qualifying conditions vary by state, most states recognize conditions that cause photosensitivity (sensitivity to light) or an increased vulnerability to UV radiation. The most commonly accepted conditions include:
      </p>

      <h3>Photosensitivity Disorders</h3>
      <p>
        <strong>Photosensitivity</strong> is an abnormal sensitivity to light, particularly sunlight and UV radiation. People with photosensitivity may experience pain, burning, rashes, or other adverse reactions when exposed to sunlight. This is one of the most widely recognized qualifying conditions across all states.
      </p>

      <h3>Lupus (Systemic Lupus Erythematosus)</h3>
      <p>
        <strong>Lupus</strong> causes the immune system to attack healthy tissue, and UV exposure is a known trigger for flares. Lupus patients often experience the classic &quot;butterfly rash&quot; across the face, joint pain, and fatigue — all of which can be triggered or worsened by sunlight. The Lupus Foundation of America recommends comprehensive UV protection, including vehicle window tint.
      </p>

      <h3>Migraines with Photophobia</h3>
      <p>
        Sunlight is one of the most common <strong>migraine</strong> triggers. For people with chronic migraines accompanied by photophobia (light sensitivity), driving in bright conditions can trigger debilitating episodes. Medical window tint reduces light entering the vehicle, helping prevent migraine attacks while driving.
      </p>

      <h3>Melanoma and Skin Cancer</h3>
      <p>
        Patients with a history of <strong>melanoma</strong> or other skin cancers need maximum UV protection at all times, including while driving. Dermatologists frequently recommend window tint as part of a comprehensive sun protection strategy for cancer patients and survivors.
      </p>

      <h3>Post-Surgical Eye Conditions (LASIK, Cataract Surgery)</h3>
      <p>
        After eye surgeries like <strong>LASIK</strong>, cataract removal, or corneal procedures, patients often experience increased light sensitivity that can last months or longer. Window tint provides ongoing protection during the healing period.
      </p>

      <h3>Other Qualifying Conditions</h3>
      <ul>
        <li><strong>Xeroderma Pigmentosum (XP)</strong> — A rare genetic condition where the body cannot repair UV damage</li>
        <li><strong>Porphyria</strong> — A group of disorders causing extreme sunlight sensitivity</li>
        <li><strong>Albinism</strong> — Reduced melanin production causing extreme sun sensitivity</li>
        <li><strong>Rosacea with photosensitivity</strong> — Chronic skin condition triggered by sunlight</li>
        <li><strong>Dry Eye Syndrome</strong> — The #1 cause of photophobia, affecting 16M+ Americans</li>
        <li><strong>Cataracts</strong> — Lens clouding that scatters light and amplifies glare</li>
        <li><strong>Traumatic Brain Injury</strong> — Concussions commonly cause lingering light sensitivity</li>
        <li><strong>Medication-Induced Photosensitivity</strong> — Common drugs that increase sun sensitivity</li>
      </ul>
      <p>
        <Link href="/conditions" className="text-amber-600 font-semibold hover:underline">See our full list of qualifying conditions →</Link>
      </p>

      <h2>State-by-State Requirements</h2>
      <p>
        Each state has its own regulations governing medical tint exemptions. Some states have very specific forms that must be completed, while others accept a general physician&apos;s letter. Key differences between states include:
      </p>
      <ul>
        <li><strong>Required documentation</strong> — Some states have specific forms (like New York&apos;s MV-80W), while others accept any physician&apos;s letter</li>
        <li><strong>Exemption duration</strong> — Ranges from 1 year to permanent, depending on the state</li>
        <li><strong>Who can certify</strong> — Most states require an MD or DO, some accept optometrists</li>
        <li><strong>How dark you can go</strong> — Some states allow any darkness with an exemption, others still set minimums</li>
        <li><strong>Carry requirements</strong> — Most states require you to keep the exemption certificate in the vehicle</li>
      </ul>
      <p>
        <Link href="/window-tint-laws-by-state" className="text-amber-600 font-semibold hover:underline">Check your state&apos;s specific tint laws and exemption requirements →</Link>
      </p>

      <div className="bg-surface rounded-xl p-6 border border-gray-200 not-prose my-8">
        <h3 className="font-bold text-heading mb-4">Popular State Exemption Pages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {topStates.map((s) => (
            <Link key={s.slug} href={`/${s.slug}-window-tint-medical-exemption`} className="text-sm text-amber-600 font-medium hover:underline py-1">
              {s.name} Exemption →
            </Link>
          ))}
        </div>
      </div>

      <h2>How to Apply for a Medical Window Tint Exemption Online</h2>
      <p>
        Traditionally, getting a medical tint exemption required an in-person visit to your doctor, then a trip to the DMV. Today, telehealth has simplified this process dramatically. Here&apos;s how it works with MyEyeRx:
      </p>

      <div className="not-prose my-8 space-y-4">
        {[
          { step: "1", title: "Select Your State", desc: "Visit myeyerx.net and choose your state. We'll show you the specific requirements and pricing for your state." },
          { step: "2", title: "Complete Medical Questionnaire", desc: "Answer questions about your medical condition, symptoms, and how sunlight affects your daily life. This takes about 10-15 minutes." },
          { step: "3", title: "Physician Review", desc: "A licensed physician (Dr. Elizabeth Rose Borowiec, OD) reviews your case. This is a real medical evaluation, not a rubber stamp." },
          { step: "4", title: "Receive Your Certificate", desc: "If approved, your signed exemption certificate is delivered by email within 24-48 hours. Print it and keep it in your vehicle." },
        ].map((s) => (
          <div key={s.step} className="flex items-start gap-4 bg-surface rounded-xl p-5 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 font-extrabold">{s.step}</span>
            </div>
            <div>
              <p className="font-bold text-heading text-sm">{s.title}</p>
              <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>How Much Does a Medical Tint Exemption Cost?</h2>
      <p>
        The cost of a medical window tint exemption varies by provider and state. At MyEyeRx, pricing is based on your state&apos;s requirements:
      </p>
      <ul>
        <li><strong>$225</strong> — Arkansas, Idaho, Illinois, Michigan, Minnesota, New Mexico, Oregon, South Carolina, Texas, Washington, West Virginia, Wisconsin</li>
        <li><strong>$250</strong> — Alabama, Arizona, California, Connecticut, Delaware, Florida, Georgia, Indiana, Iowa, Kansas, Louisiana, Maine, Maryland, Massachusetts, Mississippi, Missouri, Montana, Nevada, New Hampshire, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, Rhode Island, Tennessee, Vermont, Virginia, DC</li>
        <li><strong>$350</strong> — New York</li>
      </ul>
      <p>
        This is a one-time fee that includes the physician evaluation, the signed exemption certificate, and delivery. There are no hidden fees, subscription costs, or renewal charges (though some states require periodic renewal, which would be a separate evaluation).
      </p>
      <p>
        <Link href="/resources/window-tint-exemption-cost" className="text-amber-600 font-semibold hover:underline">Read our detailed pricing guide →</Link>
      </p>

      <h2>What to Do After You Receive Your Exemption Certificate</h2>
      <p>Once your exemption certificate is delivered:</p>
      <ol>
        <li><strong>Print two copies</strong> — Keep one in your vehicle at all times and one at home as backup</li>
        <li><strong>Register with your DMV</strong> (if required) — Some states require you to register the exemption. Check your state&apos;s requirements.</li>
        <li><strong>Get your windows tinted</strong> — Take the certificate to a reputable tint shop. They may want to see it before applying darker tint.</li>
        <li><strong>Keep it in the vehicle</strong> — If you&apos;re pulled over, you&apos;ll need to present the certificate to law enforcement</li>
        <li><strong>Know the renewal date</strong> — If your state requires renewal, set a reminder before it expires</li>
      </ol>

      <h2>What Happens If You Get Pulled Over?</h2>
      <p>
        If a law enforcement officer pulls you over for window tint that appears to exceed legal limits:
      </p>
      <ol>
        <li>Stay calm and cooperative</li>
        <li>Inform the officer that you have a medical exemption</li>
        <li>Present your exemption certificate (this is why you keep it in the vehicle)</li>
        <li>The officer may still check your tint with a meter, but your certificate should resolve any issue</li>
      </ol>
      <p>
        In some states, if you receive a citation despite having a valid exemption, you can typically have it dismissed by presenting your certificate in court. However, this situation is rare when you keep the certificate readily accessible.
      </p>

      <h2>Exemption Renewal Requirements</h2>
      <p>
        Renewal requirements vary significantly by state:
      </p>
      <ul>
        <li><strong>Annual renewal</strong> — Some states require yearly re-certification</li>
        <li><strong>Biennial (every 2 years)</strong> — Several states use this timeline</li>
        <li><strong>Permanent</strong> — Some states issue permanent exemptions for chronic conditions</li>
        <li><strong>Condition-dependent</strong> — Some states issue permanent exemptions for permanent conditions but require renewal for temporary ones</li>
      </ul>
      <p>
        Your exemption certificate will indicate its validity period. If renewal is required, you&apos;ll need a new physician evaluation — the process is the same as the initial application.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Is a medical tint exemption the same as a tint prescription?</h3>
      <p>
        The terms are often used interchangeably, but technically a &quot;tint exemption&quot; or &quot;tint waiver&quot; is the more accurate term. It&apos;s a medical certification that exempts you from standard tint laws — not a prescription for a specific product.
      </p>

      <h3>Can I get an exemption for cosmetic reasons?</h3>
      <p>
        No. Medical tint exemptions are strictly for documented medical conditions. Wanting darker tint for privacy, aesthetics, or general comfort does not qualify. A physician must certify that you have a legitimate medical need.
      </p>

      <h3>Will my exemption work in other states?</h3>
      <p>
        Generally, medical tint exemptions are state-specific. However, many states have reciprocity agreements or will accept out-of-state exemptions. If you drive frequently in multiple states, consider getting an exemption in each state you regularly visit.
      </p>

      <h3>Can I transfer my exemption to a new vehicle?</h3>
      <p>
        In most states, the exemption is issued to the person, not the vehicle. This means it applies to any vehicle you drive. However, some states tie the exemption to a specific vehicle registration. Check your state&apos;s specific rules.
      </p>

      <h3>How dark can I go with a medical exemption?</h3>
      <p>
        This depends on your state. Some states allow any darkness level with a valid exemption, while others still set minimums (e.g., 20% VLT even with an exemption). Your physician&apos;s recommendation and your state&apos;s regulations both factor in.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Medical Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a licensed healthcare provider regarding your specific medical condition and treatment options. Window tint exemption requirements vary by state and are subject to change.
        </p>
      </div>
    </>
  );
}

import Link from "next/link";
import { DollarSign } from "lucide-react";

export function CostGuideContent() {
  return (
    <>
      <p className="text-xl text-gray-700 leading-relaxed">
        One of the most common questions we hear is &quot;how much does a window tint exemption cost?&quot; The short answer: it depends on your state and provider. Here&apos;s a transparent breakdown of what to expect.
      </p>

      <h2>MyEyeRx Pricing</h2>
      <p>
        MyEyeRx uses a straightforward, state-based pricing model. Your fee covers everything: the physician evaluation, the signed exemption certificate, and delivery. No hidden costs, no subscription fees.
      </p>

      <div className="not-prose my-8 space-y-4">
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$225 States</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">Arkansas, Idaho, Illinois, Michigan, Minnesota, New Mexico, Oregon, South Carolina, Texas, Washington, West Virginia, Wisconsin</p>
          <p className="text-gray-500 text-xs">These states have streamlined exemption processes that require less administrative work.</p>
        </div>
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$250 States</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">Alabama, Arizona, California, Connecticut, Delaware, Florida, Georgia, Indiana, Iowa, Kansas, Louisiana, Maine, Maryland, Massachusetts, Mississippi, Missouri, Montana, Nevada, New Hampshire, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, Rhode Island, Tennessee, Vermont, Virginia, DC</p>
          <p className="text-gray-500 text-xs">The majority of states fall in this tier.</p>
        </div>
        <div className="bg-surface rounded-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-amber-500" />
            <h3 className="font-bold text-heading text-lg">$350 — New York</h3>
          </div>
          <p className="text-gray-600 text-sm mb-2">New York has the most complex exemption process, requiring the specific MV-80W form and additional documentation.</p>
        </div>
      </div>

      <h2>What&apos;s Included in the Fee?</h2>
      <ul>
        <li><strong>Full physician evaluation</strong> — A licensed optometrist reviews your medical history and condition</li>
        <li><strong>State-specific documentation</strong> — We handle your state&apos;s required forms and paperwork</li>
        <li><strong>Signed exemption certificate</strong> — A physician-signed document recognized by your state&apos;s DMV and law enforcement</li>
        <li><strong>Digital delivery</strong> — Certificate delivered by email within 24-48 hours</li>
        <li><strong>Documentation review</strong> — Our physician reviews your existing medical records to determine state acceptance</li>
      </ul>

      <h2>What&apos;s NOT Included</h2>
      <ul>
        <li><strong>Window tint installation</strong> — You&apos;ll need to have your windows tinted separately at a tint shop</li>
        <li><strong>DMV registration fees</strong> — Some states charge a small fee to register your exemption (typically $5-$25)</li>
        <li><strong>Future renewals</strong> — If your state requires renewal, that would be a separate evaluation</li>
      </ul>

      <h2>How Does This Compare to Other Options?</h2>

      <h3>In-Person Doctor Visit</h3>
      <p>
        Visiting your primary care physician or ophthalmologist for a tint exemption letter typically costs $100-$300 for the office visit copay or cash price, plus your time for scheduling and attending the appointment. Many doctors are unfamiliar with the specific state forms required, which can lead to rejections and re-visits.
      </p>

      <h3>Other Online Services</h3>
      <p>
        Several competitors offer similar online services. Prices range from $149-$400+. When comparing, look for:
      </p>
      <ul>
        <li>Is the evaluation done by a licensed physician (not a nurse or PA)?</li>
        <li>Is the service HIPAA compliant?</li>
        <li>Do they handle state-specific forms?</li>
        <li>What&apos;s their turnaround time?</li>
      </ul>

      <h2>Is It Worth the Investment?</h2>
      <p>Consider the alternative costs:</p>
      <ul>
        <li><strong>Tint tickets</strong> range from $25 to $500+ per violation, depending on your state</li>
        <li><strong>Multiple tickets</strong> can add up to more than the exemption cost in a single year</li>
        <li><strong>Insurance rate increases</strong> from traffic violations</li>
        <li><strong>Required tint removal</strong> and re-application costs ($100-$400+)</li>
        <li><strong>Health impacts</strong> from driving without adequate UV/light protection</li>
      </ul>
      <p>
        A one-time investment of $225-$350 protects you from all of these ongoing costs while also protecting your health.
      </p>

      <h2>Can I Use HSA or FSA Funds?</h2>
      <p>
        In many cases, yes. Since the evaluation is a medical service provided by a licensed physician, it may qualify as a medical expense under your HSA (Health Savings Account) or FSA (Flexible Spending Account). Check with your plan administrator to confirm.
      </p>

      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 not-prose my-8">
        <p className="text-sm text-gray-500 italic">
          <strong>Pricing Note:</strong> Prices shown are current as of March 2026 and are subject to change. Visit <Link href="/get-started" className="text-amber-600 hover:underline">myeyerx.net/get-started</Link> for the most current pricing for your state.
        </p>
      </div>
    </>
  );
}

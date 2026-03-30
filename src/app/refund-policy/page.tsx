import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "MyEyeRx refund policy for medical window tint exemption evaluations. Learn about our refund process, eligibility, and how to request a refund.",
  openGraph: {
    title: "Refund Policy",
    description: "MyEyeRx refund policy for medical window tint exemption evaluations.",
    url: "https://myeyerx.net/refund-policy",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: { canonical: "https://myeyerx.net/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <>
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">Refund Policy</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-heading mb-8">Refund Policy</h1>

          <div className="prose max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-red-800 mb-3">Important: Read Before You Purchase</h2>
                <p className="text-red-700 leading-relaxed text-sm">
                  This service is for <strong>legitimate medical needs only</strong>. You must have proper medical documentation (prior diagnosis, medication list, doctor&apos;s notes) before purchasing. <strong>Once your video consultation with a physician takes place, no refund will be provided.</strong> If you are unsure whether you have the right documentation, please call us at <a href="tel:+17346441804" className="text-red-800 font-bold underline">(734) 644-1804</a> before purchasing. A quick phone call can save you from losing your money.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  At MyEyeRx, we strive to provide a smooth and transparent experience for all patients seeking medical window tint exemption evaluations. This refund policy outlines the circumstances under which refunds may or may not be issued.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Evaluation Fee</h2>
                <p className="text-gray-600 leading-relaxed">
                  The evaluation fee (starting at $225, varying by state up to $350 for New York) covers the cost of a scheduled video consultation with a licensed physician who will review your medical documentation and determine whether your condition qualifies for a medical window tint exemption under your state&apos;s requirements. This fee is charged at the time of application submission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Refund Eligibility</h2>
                <p className="text-gray-600 leading-relaxed mb-3">Refunds may be considered <strong>only</strong> in the following situations:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">-</span>
                    <span><strong>Duplicate charges:</strong> If you were charged more than once for the same evaluation, we will refund the duplicate charge promptly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">-</span>
                    <span><strong>Service not rendered:</strong> If your evaluation was not completed due to a system error or technical issue on our end and no consultation took place.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">-</span>
                    <span><strong>Cancellation before consultation:</strong> If you request a cancellation <strong>before</strong> your video consultation with a physician has been scheduled or has taken place.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Non-Refundable Situations</h2>
                <p className="text-gray-600 leading-relaxed mb-3"><strong>Refunds are NOT available</strong> in the following cases:</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">-</span>
                    <span><strong>After consultation is scheduled or takes place:</strong> Once you pay and a consultation is placed on the physician&apos;s calendar, the fee is non-refundable — regardless of outcome. This includes situations where you fail to attend, arrive without proper documentation, or are otherwise unable to complete the evaluation. The physician has dedicated their time to your appointment, and that time cannot be recovered.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">-</span>
                    <span><strong>Insufficient or missing medical documentation:</strong> You are clearly informed before purchase that legitimate medical documentation is required. If you proceed without valid paperwork supporting a qualifying condition, your evaluation may be declined and the fee is non-refundable. Our physicians review your existing medical records — arriving at a consultation without legitimate documentation will result in denial without refund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">-</span>
                    <span><strong>Change of mind:</strong> Refunds are not available if you change your mind after the consultation has been completed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">-</span>
                    <span><strong>State-specific issues:</strong> If your state does not accept the exemption format provided, as state requirements may change without notice.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Video Recording of Consultations</h2>
                <p className="text-gray-600 leading-relaxed">
                  All consultations are video recorded for state compliance and to protect both the patient and the evaluating physician. By purchasing an evaluation, you consent to this recording. Our physicians base their determinations solely on the information you communicate and the documentation you provide. These recordings serve as a record of the consultation and may be referenced in the event of a dispute.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Not Sure About Your Documentation?</h2>
                <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <strong>Call us before you pay.</strong> If you are unsure whether you have the proper medical documentation to support your claim, please call Tory at <a href="tel:+17346441804" className="text-amber-700 font-bold underline">(734) 644-1804</a> or email <a href="mailto:Tory@myeyerx.net" className="text-amber-700 font-bold underline">Tory@myeyerx.net</a>. A quick 2-minute conversation can help you understand what&apos;s needed and prevent unnecessary charges.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">How to Request a Refund</h2>
                <p className="text-gray-600 leading-relaxed">
                  To request a refund (for eligible situations only), please contact us within 30 days of your purchase with your name, email address used during registration, and the reason for your refund request:
                </p>
                <div className="mt-4 bg-surface rounded-xl p-4 border border-gray-100">
                  <p className="text-sm text-gray-600">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:Tory@myeyerx.net" className="text-amber-600 hover:text-amber-700">Tory@myeyerx.net</a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+17346441804" className="text-amber-600 hover:text-amber-700">(734) 644-1804</a>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Processing Time</h2>
                <p className="text-gray-600 leading-relaxed">
                  Approved refunds are typically processed within 5-10 business days. The refund will be credited to the original payment method. Please allow additional time for your bank or credit card company to post the refund to your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Review Integrity &amp; Defamation</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  All refund terms, documentation requirements, and service limitations are disclosed clearly <strong>before any transaction</strong>. By completing a purchase, you acknowledge that you were fully informed.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  MyEyeRx takes its business reputation seriously. If a customer publishes false, misleading, or defamatory statements about our service — on review platforms, social media, or elsewhere — that contradict the disclosures agreed to at the time of purchase, we reserve the right to pursue appropriate legal remedies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We welcome honest feedback and are always available to resolve concerns directly. If you have a complaint, please <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium">contact us</Link> before taking public action. See our full <a href="/terms" className="text-amber-600 hover:text-amber-700 font-medium">Terms &amp; Conditions</a> for details.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-heading mb-3">Questions?</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this refund policy, please don&apos;t hesitate to{" "}
                  <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-medium">contact us</Link>.
                  We&apos;re committed to ensuring every patient has a positive experience.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-400 text-xs">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

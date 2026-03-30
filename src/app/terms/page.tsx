import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "MyEyeRx terms and conditions for using our medical window tint exemption evaluation services.",
  alternates: { canonical: "https://myeyerx.net/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-amber-100">Last updated: March 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-primary-dark mb-4">1. Services</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MyEyeRx provides an online telemedicine platform that connects patients with licensed physicians for medical evaluations related to window tint exemptions. <strong>This service is intended exclusively for individuals with legitimate medical needs.</strong> We facilitate the evaluation process and delivery of signed medical exemption certificates. Our telehealth physicians review your existing medical documentation; they do not diagnose conditions or write new prescriptions.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">2. Eligibility</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You must be at least 18 years of age and a resident of the United States to use our services. You must have a legitimate, documented medical condition that may qualify for a window tint exemption under your state&apos;s laws.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">3. Medical Documentation Requirement</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            <strong>You are required to provide legitimate medical documentation prior to or during your evaluation.</strong> Acceptable documentation includes, but is not limited to: a prior diagnosis from your physician, medication lists, doctor&apos;s notes, ophthalmologist or optometrist records, or other medical paperwork that supports a qualifying condition. Our physicians review your existing records to determine if your condition qualifies under your state&apos;s exemption requirements. <strong>If you do not have proper documentation, do not purchase this service.</strong> If you are unsure whether your documentation is sufficient, call us at (734) 644-1804 before purchasing.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">4. Video Recording Consent</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            <strong>All consultations are video recorded.</strong> By purchasing an evaluation and proceeding with a consultation, you expressly consent to the video recording of your telemedicine session. These recordings are maintained for state compliance purposes, quality assurance, and to protect both you and the evaluating physician. Our physicians base their medical determinations solely on the information you communicate and the documentation you provide during the consultation. These recordings may be retained as part of your medical record and may be disclosed if required by law or regulatory bodies.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">5. Medical Disclaimer</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The telemedicine evaluation provided through MyEyeRx is not a substitute for in-person medical care. The physician will make an independent medical determination about your qualification based solely on the documentation and information you provide. Approval is not guaranteed and depends on your medical condition, documentation, and state requirements. Our physicians do not diagnose new conditions or prescribe medications during these evaluations.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">6. Payment, Refund &amp; No-Refund Policy</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The evaluation fee starts at $225 (varies by state, up to $350 for New York), payable at the time of submission. <strong>Once you pay and a consultation is scheduled on the physician&apos;s calendar, the fee is non-refundable — regardless of the outcome.</strong> This applies even if you fail to attend, arrive without sufficient documentation, or are otherwise unable to complete the evaluation. Our physicians dedicate time on their schedule for your appointment, and that time cannot be recovered. Refunds are only available for: duplicate charges, service not rendered due to our error, or cancellations made before a consultation is scheduled. See our <a href="/refund-policy" className="text-accent hover:underline">Refund Policy</a> for full details.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">7. User Responsibilities</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You agree to provide accurate and truthful information during the application process. You represent that all medical documentation submitted is genuine and was obtained from a licensed healthcare provider. Providing false, fraudulent, or misleading medical information is strictly prohibited and may result in denial of service, forfeiture of fees, and potential reporting to relevant authorities. You are responsible for understanding and complying with your state&apos;s window tint laws.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MyEyeRx is not responsible for any legal consequences arising from the use of window tint, even with a valid medical exemption. Laws vary by state and municipality, and it is your responsibility to ensure compliance. Our physicians make determinations based solely on the information and documentation you provide; MyEyeRx and its physicians are not liable for inaccurate or fraudulent documentation submitted by the patient. Our liability is limited to the amount you paid for our services.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">9. Review Integrity &amp; Defamation</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MyEyeRx is committed to transparency and customer satisfaction. All material disclosures — including documentation requirements, the no-refund policy after scheduling, video recording consent, and service limitations — are presented clearly to every customer <strong>before any transaction takes place</strong>. By proceeding with a purchase, you acknowledge that you have been fully informed of these terms.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We take the integrity of our business reputation very seriously. In the event that a customer publishes false, misleading, or defamatory statements about MyEyeRx — including on public review platforms, social media, or other online forums — that misrepresent the service provided or contradict the disclosures agreed to at the time of purchase, MyEyeRx reserves the right to pursue all available legal remedies, including but not limited to claims for defamation, tortious interference, and injunctive relief.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            This provision is not intended to discourage honest feedback. We welcome constructive criticism and are always available to resolve concerns directly. However, we will not tolerate knowingly false statements that damage our business. If you have a concern or complaint, we strongly encourage you to <a href="/contact" className="text-accent hover:underline">contact us directly</a> so we can work toward a resolution before any public action is taken.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">10. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms, contact us at{" "}
            <a href="mailto:Tory@myeyerx.net" className="text-accent hover:underline">
              Tory@myeyerx.net
            </a>{" "}
            or call{" "}
            <a href="tel:+17346441804" className="text-accent hover:underline">
              (734) 644-1804
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

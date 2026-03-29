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
          <p className="text-amber-100">Last updated: February 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-primary-dark mb-4">1. Services</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MyEyeRx provides an online telemedicine platform that connects patients with licensed physicians for medical evaluations related to window tint exemptions. We facilitate the evaluation process and delivery of signed medical exemption certificates.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">2. Eligibility</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You must be at least 18 years of age and a resident of the United States to use our services. You must have a legitimate medical condition that may qualify for a window tint exemption under your state&apos;s laws.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">3. Medical Disclaimer</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The telemedicine evaluation provided through MyEyeRx is not a substitute for in-person medical care. The physician will make an independent medical determination about your qualification. Approval is not guaranteed and depends on your medical condition and state requirements.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">4. Payment &amp; Refund Policy</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The evaluation fee starts at $225 (varies by state, up to $350 for New York), payable at the time of submission. You are required to provide legitimate medical documentation supporting a qualifying condition prior to your evaluation. Our physician reviews your existing medical paperwork to determine if your state will accept it for an exemption. If you proceed without valid medical documentation, your evaluation will be declined and the fee is non-refundable. Refunds are only available for duplicate charges, service not rendered due to our error, or cancellations made before a physician begins review. See our Refund Policy for full details.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">5. User Responsibilities</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You agree to provide accurate and truthful information during the application process. Providing false medical information is prohibited and may result in denial of service and forfeiture of fees. You are responsible for understanding and complying with your state&apos;s window tint laws.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            MyEyeRx is not responsible for any legal consequences arising from the use of window tint, even with a valid medical exemption. Laws vary by state and municipality, and it is your responsibility to ensure compliance. Our liability is limited to the amount you paid for our services.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">7. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@myeyerx.net" className="text-accent hover:underline">
              support@myeyerx.net
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

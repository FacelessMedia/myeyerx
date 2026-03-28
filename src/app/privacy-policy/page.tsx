export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-amber-100">Last updated: February 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 prose prose-gray max-w-none">
          <h2 className="text-xl font-bold text-primary-dark mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We collect personal information you provide when using our services, including your name, email address, phone number, date of birth, state of residence, and medical condition information relevant to your window tint exemption evaluation. We also collect standard usage data such as IP address, browser type, and pages visited.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your information is used to facilitate your medical evaluation for a window tint exemption, communicate with you about your application, process payments, comply with legal obligations, and improve our services. Medical information is shared only with the licensed physician conducting your evaluation.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">3. HIPAA Compliance</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are committed to protecting your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). All medical information is encrypted, stored securely, and only accessed by authorized healthcare providers involved in your care.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">4. Data Security</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We implement industry-standard security measures including SSL encryption, secure data storage, and access controls to protect your personal and medical information. We regularly review and update our security practices.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">5. Data Sharing</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We do not sell your personal information to third parties. We may share information with licensed physicians for your evaluation, payment processors to complete transactions, and as required by law. All third-party partners are bound by confidentiality agreements.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            You have the right to access, correct, or delete your personal information. You may also request a copy of your medical records. To exercise these rights, contact us at support@myeyerx.net.
          </p>

          <h2 className="text-xl font-bold text-primary-dark mb-4">7. Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:support@myeyerx.net" className="text-accent hover:underline">
              support@myeyerx.net
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

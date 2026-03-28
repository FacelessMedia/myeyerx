import { Shield, Lock, Eye, Server, UserCheck, FileCheck } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data transmitted between you and our platform is encrypted using industry-standard TLS/SSL protocols.",
  },
  {
    icon: Server,
    title: "Secure Data Storage",
    description:
      "Your medical records are stored on HIPAA-compliant servers with encryption at rest and strict access controls.",
  },
  {
    icon: UserCheck,
    title: "Authorized Access Only",
    description:
      "Only your assigned licensed physician and authorized staff have access to your medical information.",
  },
  {
    icon: Eye,
    title: "Audit Trails",
    description:
      "We maintain detailed logs of all access to protected health information for security and compliance.",
  },
  {
    icon: FileCheck,
    title: "Business Associate Agreements",
    description:
      "All third-party partners who may access PHI have signed HIPAA Business Associate Agreements.",
  },
  {
    icon: Shield,
    title: "Regular Compliance Audits",
    description:
      "Our policies and systems undergo regular review to ensure ongoing compliance with HIPAA regulations.",
  },
];

export default function HIPAACompliancePage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            HIPAA Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            HIPAA Compliance
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            Your privacy and the security of your health information is our top
            priority. Learn how we protect your data.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-primary-dark mb-4">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              MyEyeRx is fully committed to complying with the Health Insurance
              Portability and Accountability Act (HIPAA). We understand that your
              medical information is sensitive and personal, and we take every
              measure to ensure it is protected.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform has been designed from the ground up with security and
              privacy in mind. From the moment you submit your information to the
              delivery of your signed medical exemption certificate, your data is
              protected by multiple layers of security.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary-dark text-center mb-10">
          How We Protect Your Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-primary-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/5 rounded-2xl p-8 border border-accent/20 text-center">
          <h3 className="text-xl font-bold text-primary-dark mb-3">
            Questions About Our Privacy Practices?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our privacy team for any concerns about how we handle your
            information.
          </p>
          <a
            href="mailto:support@myeyerx.net"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-light rounded-full transition-all"
          >
            Contact Privacy Team
          </a>
        </div>
      </div>
    </div>
  );
}

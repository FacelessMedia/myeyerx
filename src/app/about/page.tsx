import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Eye,
  Users,
  Award,
  ArrowRight,
  Clock,
  CheckCircle,
  Heart,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Licensed Physician Window Tint Exemptions",
  description:
    "MyEyeRx connects patients with licensed physicians for medical window tint exemption evaluations. HIPAA compliant, fast turnaround, trusted by thousands.",
  openGraph: {
    title: "About Us | Licensed Physician Window Tint Exemptions",
    description:
      "MyEyeRx connects patients with licensed physicians for medical window tint exemption evaluations.",
    url: "https://myeyerx.net/about",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: {
    canonical: "https://myeyerx.net/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">About</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            About{" "}
            <span className="text-amber-500">MyEyeRx</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We make it easy for people with light-sensitive medical conditions to get the window tint exemption they need — legally, quickly, and from the comfort of home.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Millions of Americans suffer from medical conditions that make them highly sensitive to sunlight and UV radiation. For these individuals, darker vehicle window tint isn&apos;t a luxury — it&apos;s a medical necessity.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                MyEyeRx was founded to bridge the gap between patients and the medical documentation they need. We connect you with licensed physicians who can evaluate your condition through a simple online process and provide the official exemption certificate required by your state.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No office visits. No long waits. Just a straightforward path to the protection you need.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "HIPAA Compliant", desc: "Your medical data is protected" },
                { icon: Stethoscope, label: "Licensed Physicians", desc: "Board-certified evaluations" },
                { icon: Clock, label: "24-48hr Turnaround", desc: "Fast certificate delivery" },
                { icon: Users, label: "50 States Covered", desc: "Nationwide service" },
              ].map((item) => (
                <div key={item.label} className="bg-surface rounded-2xl p-5 border border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-heading text-sm mb-1">{item.label}</h3>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-12">
            Why Patients Trust MyEyeRx
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: Award,
                title: "Legitimate Medical Evaluations",
                description: "Every exemption certificate is backed by a real evaluation from a licensed physician. We don't cut corners — your exemption is medically sound and legally valid.",
              },
              {
                icon: Eye,
                title: "Specialized in Light-Sensitive Conditions",
                description: "We focus exclusively on medical conditions that require UV and light protection. Our physicians understand the specific documentation requirements for window tint exemptions in every state.",
              },
              {
                icon: Heart,
                title: "Patient-First Approach",
                description: "We believe everyone with a qualifying condition should have easy access to the documentation they need. Our online process eliminates barriers like travel, long wait times, and expensive specialist visits.",
              },
              {
                icon: Shield,
                title: "HIPAA Compliant & Secure",
                description: "Your personal and medical information is protected with industry-standard encryption and strict HIPAA compliance. We never share your data with third parties.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have questions about the process or your eligibility? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:7346441804" className="flex items-center gap-2 text-heading font-semibold hover:text-amber-600 transition-colors">
              <CheckCircle className="w-5 h-5 text-amber-500" />
              (734) 644-1804
            </a>
            <a href="mailto:Tory@myeyerx.net" className="flex items-center gap-2 text-heading font-semibold hover:text-amber-600 transition-colors">
              <CheckCircle className="w-5 h-5 text-amber-500" />
              Tory@myeyerx.net
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Start your online physician evaluation today and receive your exemption certificate within 24-48 hours.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Questions About Window Tint Exemptions",
  description:
    "Contact MyEyeRx for questions about medical window tint exemptions. Call (734) 644-1804 or email Tory@myeyerx.net. We're here to help.",
  openGraph: {
    title: "Contact Us | Questions About Window Tint Exemptions",
    description: "Contact MyEyeRx for questions about medical window tint exemptions.",
    url: "https://myeyerx.net/contact",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: { canonical: "https://myeyerx.net/contact" },
};

export default function ContactPage() {
  return (
    <>
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Contact <span className="text-amber-500">MyEyeRx</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Have questions about the exemption process, your eligibility, or your application status? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="tel:7346441804" className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-gray-100 hover:border-amber-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-heading text-lg mb-1 group-hover:text-amber-600 transition-colors">Call Us</h2>
                <p className="text-amber-600 font-bold text-xl">(734) 644-1804</p>
                <p className="text-gray-500 text-sm mt-1">Mon–Fri, 9am–5pm EST</p>
              </div>
            </a>

            <a href="mailto:Tory@myeyerx.net" className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-gray-100 hover:border-amber-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-heading text-lg mb-1 group-hover:text-amber-600 transition-colors">Email Us</h2>
                <p className="text-amber-600 font-bold text-lg">Tory@myeyerx.net</p>
                <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-heading text-lg mb-1">Turnaround Time</h2>
                <p className="text-gray-700 font-semibold">24-48 Hours</p>
                <p className="text-gray-500 text-sm mt-1">From application to certificate</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-bold text-heading text-lg mb-1">Service Area</h2>
                <p className="text-gray-700 font-semibold">All 50 U.S. States</p>
                <p className="text-gray-500 text-sm mt-1">100% online — no office visit needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-heading text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I check the status of my application?", a: "You'll receive email updates at each step of the process. If you haven't heard back within 48 hours, please email Tory@myeyerx.net or call (734) 644-1804 with your name and application date." },
              { q: "Can I get a refund if I don't qualify?", a: "Please review our refund policy for details. If a physician determines you do not qualify for a medical exemption, contact us to discuss your options." },
              { q: "Do you accept insurance?", a: "Window tint medical exemption evaluations are typically not covered by insurance. The $79 fee covers the complete physician evaluation and exemption certificate." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-heading font-semibold text-sm pr-4">{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">Skip the phone call — start your application online right now.</p>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-white/70 text-xs mt-4 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
          </p>
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  Linkedin,
  ExternalLink,
  MapPin,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Licensed Physician Window Tint Exemptions",
  description:
    "Meet the MyEyeRx team — founded by Toriano Dewberry, with medical evaluations by Dr. Elizabeth Rose Borowiec, OD. HIPAA compliant medical window tint exemptions.",
  openGraph: {
    title: "About Us | Licensed Physician Window Tint Exemptions",
    description:
      "Meet the MyEyeRx team — founded by Toriano Dewberry, with medical evaluations by Dr. Elizabeth Rose Borowiec, OD.",
    url: "https://myeyerx.net/about",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: {
    canonical: "https://myeyerx.net/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About MyEyeRx",
  url: "https://myeyerx.net/about",
  mainEntity: {
    "@type": "MedicalBusiness",
    name: "MyEyeRx",
    url: "https://myeyerx.net",
    telephone: "(734) 644-1804",
    email: "Tory@myeyerx.net",
    founder: {
      "@type": "Person",
      name: "Toriano Dewberry",
      jobTitle: "CEO & Licensed Optician",
      url: "https://myeyerx.net/about",
      sameAs: ["https://www.linkedin.com/in/toriano-dewberry-33882939/"],
    },
    employee: {
      "@type": "Person",
      name: "Dr. Elizabeth Rose Borowiec",
      jobTitle: "Medical Director & Licensed Optometrist",
      sameAs: [
        "https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/",
        "https://doctor.webmd.com/doctor/elizabeth-borowiec-acb041d9-6953-41e9-a9b3-378dda9a95b5-overview",
        "https://www.vitals.com/optometrists/1pqjgg/elizabeth-borowiec",
      ],
    },
    sameAs: [
      "https://www.youtube.com/@myeyerx",
      "https://www.facebook.com/MyEyeRx",
      "https://www.instagram.com/myeyerx/",
      "https://www.tiktok.com/@myeyerx",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

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
                In the eyewear industry, there&apos;s a strong focus on promoting products like anti-glare lenses, tinted lenses, and polarized sunglasses for light sensitivity. However, the significant advantages of tinted car windows for drivers have often been overlooked.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                At MyEyeRx, we recognize the dual benefits of tinted windows in enhancing both safety and comfort for individuals sensitive to light. We connect you with licensed physicians who evaluate your condition through a simple online process and provide the official exemption certificate required by your state.
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
                { icon: Users, label: "42+ States Served", desc: "Expanding nationwide" },
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

      {/* Our Team */}
      <section className="py-16 lg:py-20 bg-surface" id="team">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-heading text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            MyEyeRx is led by experienced professionals dedicated to making medical window tint exemptions accessible to everyone who needs them.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Toriano Dewberry */}
            <div id="toriano-dewberry" className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-24">
              <div className="bg-amber-500 h-2" />
              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-200 flex-shrink-0">
                    <Image src="/tory.jpg" alt="Toriano Dewberry" width={80} height={80} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-heading">Toriano Dewberry</h3>
                    <p className="text-amber-600 font-semibold text-sm">CEO & Founder</p>
                    <p className="text-gray-500 text-sm">Licensed Optician</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Toriano (Tory) Dewberry is an optician, entrepreneur, and inventor who founded MyEyeRx to address an unmet need in the eyecare industry. With a background in optics from Wayne County Community College District and years of hands-on experience in the field, Tory recognized that many patients with light-sensitive conditions were being underserved.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Based in Dearborn, Michigan, Tory has built MyEyeRx into a trusted resource helping patients across 42+ states obtain legitimate medical window tint exemptions through convenient online physician evaluations.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Dearborn, MI</span>
                  <span className="flex items-center gap-1"><GraduationCap className="w-3.5 h-3.5" /> Wayne County Community College</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/toriano-dewberry-33882939/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href="mailto:Tory@myeyerx.net"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Tory@myeyerx.net
                  </a>
                </div>
              </div>
            </div>

            {/* Dr. Elizabeth Borowiec */}
            <div id="dr-borowiec" className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden scroll-mt-24">
              <div className="bg-blue-500 h-2" />
              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-extrabold text-blue-700">EB</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-heading">Dr. Elizabeth Rose Borowiec, OD</h3>
                    <p className="text-blue-600 font-semibold text-sm">Medical Director</p>
                    <p className="text-gray-500 text-sm">Licensed Optometrist</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Dr. Elizabeth Rose Borowiec is a licensed optometrist practicing in the Detroit, Michigan area. She provides the medical oversight and physician evaluations that form the foundation of MyEyeRx&apos;s services, ensuring every exemption certificate is backed by a thorough and legitimate medical evaluation.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  With expertise in optometry and a focus on light-sensitive conditions, Dr. Borowiec reviews patient medical histories, conducts evaluations, and provides the signed medical documentation required for window tint exemptions across multiple states.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Detroit, MI</span>
                  <span className="flex items-center gap-1"><Stethoscope className="w-3.5 h-3.5" /> Optometry (OD)</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/elizabeth-borowiec-02a5b9293/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href="https://doctor.webmd.com/doctor/elizabeth-borowiec-acb041d9-6953-41e9-a9b3-378dda9a95b5-overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> WebMD
                  </a>
                  <a
                    href="https://www.vitals.com/optometrists/1pqjgg/elizabeth-borowiec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Vitals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="py-16 lg:py-20 bg-white">
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
              <div key={item.title} className="flex gap-5 bg-surface rounded-2xl p-6 border border-gray-100">
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
      <section className="py-16 lg:py-20 bg-surface">
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
            href="/"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-bold text-amber-900 bg-white hover:bg-amber-50 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Evaluation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

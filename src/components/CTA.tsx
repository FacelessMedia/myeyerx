import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Ready to Get Your Medical
          <br />
          Window Tint Exemption?
        </h2>
        <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of patients who have gotten their medical window tint
          exemption through our fast, easy, and HIPAA-compliant online platform.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-primary bg-white hover:bg-amber-50 rounded-full transition-all shadow-xl hover:shadow-2xl"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

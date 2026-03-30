import Link from "next/link";
import { ArrowRight, Shield, Clock } from "lucide-react";

interface BlogCTAProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function BlogCTA({
  heading = "Ready to Get Your Medical Window Tint Exemption?",
  description = "Connect with a licensed physician online — no office visit required. Get your signed exemption certificate within 24-48 hours.",
  buttonText = "Start Your Evaluation — Starting at $225",
  buttonHref = "/#state-selector",
}: BlogCTAProps) {
  return (
    <div className="not-prose my-12 rounded-2xl bg-gray-100 border border-gray-200 p-8 sm:p-10 text-center">
      <h3 className="text-xl sm:text-2xl font-extrabold text-heading mb-3">{heading}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">{description}</p>
      <Link
        href={buttonHref}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-full transition-all shadow-lg hover:shadow-xl"
      >
        {buttonText} <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-gray-500 text-xs mt-4 flex items-center justify-center gap-4">
        <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> HIPAA Compliant</span>
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 24-48hr Turnaround</span>
      </p>
    </div>
  );
}

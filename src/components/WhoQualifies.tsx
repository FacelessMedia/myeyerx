import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const conditions = [
  "Photosensitivity",
  "Cardiopulmonary Conditions",
  "Lupus (SLE)",
  "Melanoma / Skin Cancer",
  "Post-Surgical Eye Conditions",
  "Temporary Conditions (time-limited)",
];

export default function WhoQualifies() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50 aspect-[4/3] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-amber-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 0-.879-2.121l-3.246-3.246a2.999 2.999 0 0 0-2.121-.879H6.75A2.25 2.25 0 0 0 4.5 10.5v6.375c0 .621.504 1.125 1.125 1.125H6.75" />
                  </svg>
                </div>
                <p className="text-amber-700 font-bold text-lg">Window Tint Exemption</p>
                <p className="text-amber-600 text-sm mt-1">Medical evaluation online</p>
              </div>
            </div>
            {/* CTA sidebar */}
            <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white rounded-xl px-6 py-4 shadow-lg hidden lg:block">
              <p className="font-bold text-sm leading-tight">Contact us Now to Start</p>
              <p className="font-bold text-sm leading-tight">Your Evaluation Process</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading leading-tight mb-5">
              Who Qualifies for a{" "}
              <span className="text-amber-500">Window Tint Exemption?</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Most states allow individuals with certain light-sensitivity or medical
              conditions to apply for a window tint exemption. Below are common
              categories of qualifying conditions, as recognized by most U.S. states:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{condition}</span>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
            >
              Find Your State &amp; Apply <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

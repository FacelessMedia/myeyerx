import { Metadata } from "next";
import Link from "next/link";
import { STATES } from "@/data/states";
import { Scale, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Window Tint Laws by State | Complete 2026 Guide",
  description:
    "Complete guide to window tint laws in all 50 U.S. states. Learn VLT limits, penalties, and how to get a medical exemption for darker tint in your state.",
  openGraph: {
    title: "Window Tint Laws by State | Complete 2026 Guide",
    description:
      "Complete guide to window tint laws in all 50 U.S. states. Learn VLT limits, penalties, and medical exemption options.",
    url: "https://myeyerx.net/window-tint-laws-by-state",
    siteName: "MyEyeRx",
    type: "website",
  },
  alternates: {
    canonical: "https://myeyerx.net/window-tint-laws-by-state",
  },
};

export default function TintLawsHub() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-amber-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li className="text-heading font-medium">Window Tint Laws by State</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-6">
            <Scale className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">State Regulations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading leading-tight mb-6">
            Window Tint Laws{" "}
            <span className="text-amber-500">by State</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Every state has different regulations for how dark your vehicle window tint can be. Find your state below to learn the specific VLT (Visible Light Transmission) limits, penalties for illegal tint, and how to get a medical exemption.
          </p>
        </div>
      </section>

      {/* State Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-heading">State</th>
                  <th className="text-left py-3 px-4 font-bold text-heading">Front Side</th>
                  <th className="text-left py-3 px-4 font-bold text-heading">Back Side</th>
                  <th className="text-left py-3 px-4 font-bold text-heading">Rear</th>
                  <th className="text-left py-3 px-4 font-bold text-heading">Exemption?</th>
                  <th className="text-right py-3 px-4 font-bold text-heading"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {STATES.map((state) => (
                  <tr key={state.slug} className="hover:bg-amber-50 transition-colors">
                    <td className="py-3 px-4">
                      <Link
                        href={`/window-tint-laws-by-state/${state.slug}`}
                        className="font-semibold text-heading hover:text-amber-600 transition-colors"
                      >
                        {state.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{state.tintLaws.frontSide}</td>
                    <td className="py-3 px-4 text-gray-600">{state.tintLaws.backSide}</td>
                    <td className="py-3 px-4 text-gray-600">{state.tintLaws.rearWindow}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-green-600 font-medium text-xs">
                        ✓ Yes
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/${state.slug}-window-tint-medical-exemption`}
                        className="text-amber-600 font-semibold text-xs hover:text-amber-700 transition-colors"
                      >
                        Get Exemption →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-3">
            {STATES.map((state) => (
              <Link
                key={state.slug}
                href={`/window-tint-laws-by-state/${state.slug}`}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="font-semibold text-heading text-sm">{state.name}</span>
                    <span className="text-gray-500 text-xs block">Front: {state.tintLaws.frontSide}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

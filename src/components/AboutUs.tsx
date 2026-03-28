import { Phone, Mail, MapPin, GraduationCap, Award, Briefcase } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-heading leading-tight">
            About <span className="text-amber-500">MyEyeRx</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left – Company & Founder */}
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              In the eyewear industry, there&apos;s a strong focus on promoting products like
              anti-glare lenses, tinted lenses, and polarized sunglasses for individuals
              with light sensitivity. However, the significant advantages of tinted car
              windows for drivers have often been neglected.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              At MyEyeRx, we recognize the dual benefits of tinted windows in enhancing
              both safety and comfort for individuals sensitive to light. We engage with
              our clients to assess whether window tinting is suitable for them and then
              supply a comprehensive prescription kit.
            </p>

            <h3 className="text-xl font-bold text-heading mb-3">What Sets Us Apart</h3>
            <ul className="space-y-2 text-gray-600 text-sm mb-8">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                A paper prescription for each vehicle you own
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                An electronic prescription for immediate use
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Guidelines on how to include your tint prescription on your driver&apos;s license
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">✓</span>
                Tailored follow-up instructions based on your state&apos;s regulations
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-amber-800 text-sm font-semibold mb-1">Pioneering Online Eye Care</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pride ourselves on being the pioneering online eye care consultancy
                specializing in tint prescriptions. Our service is designed for individuals
                experiencing light sensitivity, offering consultations to determine the
                need for window tinting — available exclusively within the United States.
              </p>
            </div>
          </div>

          {/* Right – Toriano Dewberry */}
          <div className="bg-surface rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-extrabold text-amber-600">TD</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-heading">Toriano Dewberry</h3>
                <p className="text-amber-600 font-semibold text-sm">Founder &amp; Principal Owner</p>
                <p className="text-gray-500 text-sm">Professional &amp; Experienced Eye Care Specialist</p>
              </div>
            </div>

            <p className="text-gray-500 italic text-sm border-l-4 border-amber-400 pl-4 mb-6">
              &ldquo;Strategy without tactics is the slowest route to victory. Tactics
              without strategy is the noise before defeat.&rdquo;
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              MyEyeRx is a telemedical consulting agency specializing in optometric
              consulting. Toriano has assisted countless clients in obtaining medical
              exemptions for window tint without ever stepping out of their homes.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-heading text-sm">Education</p>
                  <p className="text-gray-500 text-xs">J.D., 1991–1994, William Mitchell College of Law (Top 5 of School)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-heading text-sm">Certifications</p>
                  <p className="text-gray-500 text-xs">Environmental and Natural Resources Law Certificate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-heading text-sm">Admitted To Practice</p>
                  <p className="text-gray-500 text-xs">New York · The State Bar of California · US Court of Florida Claims</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:7346441804" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  (734) 644-1804
                </a>
                <span className="text-gray-300">|</span>
                <a href="tel:7343388453" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  (734) 338-8453
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:Tory@myeyerx.net" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  Tory@myeyerx.net
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-gray-600">PO Box 6025, Redford, MI 48239</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Mon: 9:00am–7:00pm · Tue–Sun: By Appointment · Please allow 48 hrs for response
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

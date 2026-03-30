import { UserCheck, MonitorSmartphone, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Expert Guidance",
    description:
      "Our certified medical professionals offer personalized advice, ensuring you receive the care that best meets your unique medical needs.",
    position: "left",
  },
  {
    icon: MonitorSmartphone,
    title: "Easy Online Application",
    description:
      "Get your medical window tint exemption evaluation from home with our easy online platform. We ensure a fast and stress-free experience.",
    position: "right",
  },
  {
    icon: Zap,
    title: "Fast Approval",
    description:
      "Most applications are processed within 24 to 48 hours, ensuring a swift response to your requests. Our dedicated team works diligently to review each submission thoroughly.",
    position: "left",
  },
  {
    icon: ShieldCheck,
    title: "Secure And Confidential",
    description:
      "All personal information and medical records are handled with the highest level of confidentiality and security.",
    position: "right",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-amber-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight">
            Why <span className="text-amber-900">Choose MyEyeRx</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left features */}
          <div className="space-y-6">
            {features
              .filter((f) => f.position === "left")
              .map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/25 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Center - Doctor/Brand visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">MyEyeRx</p>
                  <p className="text-white/80 text-xs">Licensed Physicians</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-6">
            {features
              .filter((f) => f.position === "right")
              .map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/25 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

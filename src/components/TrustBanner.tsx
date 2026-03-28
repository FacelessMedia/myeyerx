import { ShieldCheck, Lock, Users } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Get Approved",
    subtitle: "Or Your Money Back",
  },
  {
    icon: Lock,
    title: "Secure & HIPAA",
    subtitle: "Compliant",
  },
  {
    icon: Users,
    title: "Trusted By",
    subtitle: "10K+ Patients",
  },
];

export default function TrustBanner() {
  return (
    <section className="bg-amber-500 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base leading-tight">{badge.title}</p>
                <p className="font-bold text-white text-base leading-tight">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

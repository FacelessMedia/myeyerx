import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BlogStepCardsProps {
  steps: Step[];
}

export function BlogStepCards({ steps }: BlogStepCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 not-prose my-8">
      {steps.map((step, i) => (
        <div
          key={i}
          className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl border-2 border-amber-300 p-6 pt-8"
        >
          <div className="absolute -top-3.5 left-5 w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
            {i + 1}
          </div>
          <div className="flex justify-end mb-4">
            <step.icon className="w-10 h-10 text-amber-400 stroke-[1.5]" />
          </div>
          <h4 className="text-base font-bold text-heading mb-2 leading-snug">{step.title}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

import { LucideIcon, Lightbulb, AlertTriangle, Info, CheckCircle } from "lucide-react";

type CalloutVariant = "tip" | "warning" | "info" | "success";

const VARIANTS: Record<CalloutVariant, { accent: string; iconColor: string; Icon: LucideIcon }> = {
  tip: { accent: "border-l-amber-400", iconColor: "text-amber-500", Icon: Lightbulb },
  warning: { accent: "border-l-red-400", iconColor: "text-red-400", Icon: AlertTriangle },
  info: { accent: "border-l-blue-400", iconColor: "text-blue-400", Icon: Info },
  success: { accent: "border-l-green-400", iconColor: "text-green-400", Icon: CheckCircle },
};

interface BlogCalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

export function BlogCallout({ variant = "info", title, children }: BlogCalloutProps) {
  const v = VARIANTS[variant];
  return (
    <div className={`bg-gray-100 border border-gray-200 border-l-4 ${v.accent} rounded-xl p-5 not-prose my-8`}>
      <div className="flex items-start gap-3">
        <v.Icon className={`w-5 h-5 ${v.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-sm text-gray-600 leading-relaxed">
          {title && <p className="font-bold text-heading mb-1">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

import { LucideIcon, Lightbulb, AlertTriangle, Info, CheckCircle } from "lucide-react";

type CalloutVariant = "tip" | "warning" | "info" | "success";

const VARIANTS: Record<CalloutVariant, { bg: string; border: string; iconColor: string; Icon: LucideIcon }> = {
  tip: { bg: "bg-amber-50", border: "border-amber-200", iconColor: "text-amber-500", Icon: Lightbulb },
  warning: { bg: "bg-red-50", border: "border-red-200", iconColor: "text-red-500", Icon: AlertTriangle },
  info: { bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-500", Icon: Info },
  success: { bg: "bg-green-50", border: "border-green-200", iconColor: "text-green-600", Icon: CheckCircle },
};

interface BlogCalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}

export function BlogCallout({ variant = "info", title, children }: BlogCalloutProps) {
  const v = VARIANTS[variant];
  return (
    <div className={`${v.bg} ${v.border} border rounded-xl p-5 not-prose my-8`}>
      <div className="flex items-start gap-3">
        <v.Icon className={`w-5 h-5 ${v.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="text-sm text-gray-700 leading-relaxed">
          {title && <p className="font-bold text-heading mb-1">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

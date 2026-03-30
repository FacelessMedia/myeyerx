import { LucideIcon } from "lucide-react";

interface BlogStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function BlogStat({ icon: Icon, value, label }: BlogStatProps) {
  return (
    <div className="bg-gray-100 rounded-2xl border border-gray-200 p-5 text-center">
      <Icon className="w-7 h-7 text-amber-500 mx-auto mb-2" />
      <p className="text-2xl font-extrabold text-heading">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

interface BlogStatRowProps {
  children: React.ReactNode;
}

export function BlogStatRow({ children }: BlogStatRowProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 not-prose my-8">
      {children}
    </div>
  );
}

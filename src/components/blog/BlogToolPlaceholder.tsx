import { Wrench } from "lucide-react";

interface BlogToolPlaceholderProps {
  title: string;
  description: string;
}

export function BlogToolPlaceholder({ title, description }: BlogToolPlaceholderProps) {
  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/50 p-8 text-center">
      <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
        <Wrench className="w-7 h-7 text-amber-500" />
      </div>
      <h4 className="font-extrabold text-heading text-base mb-2">{title}</h4>
      <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
        Coming Soon
      </span>
    </div>
  );
}

import { Zap } from "lucide-react";

interface BlogTLDRProps {
  items: string[];
}

export function BlogTLDR({ items }: BlogTLDRProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200 not-prose my-8">
      <h3 className="font-extrabold text-heading text-base mb-3 flex items-center gap-2">
        <Zap className="w-5 h-5 text-amber-500" /> Key Takeaways
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

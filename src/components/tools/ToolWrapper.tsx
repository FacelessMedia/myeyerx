"use client";

import { type ReactNode } from "react";
import { Wrench } from "lucide-react";

interface ToolWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ToolWrapper({ title, description, children }: ToolWrapperProps) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-100 p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Wrench className="w-4 h-4 text-amber-600" />
        </div>
        <h4 className="font-extrabold text-heading text-base">{title}</h4>
      </div>
      {description && (
        <p className="text-gray-500 text-sm mb-5 ml-11">{description}</p>
      )}
      <div className="mt-4">{children}</div>
    </div>
  );
}

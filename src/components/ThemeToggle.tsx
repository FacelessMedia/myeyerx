"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
      style={{
        backgroundColor: theme === "night" ? "#4C1D95" : "#E5E7EB",
      }}
      aria-label={theme === "night" ? "Switch to light mode" : "Switch to night mode for light-sensitive eyes"}
      title={theme === "night" ? "Switch to Day Mode" : "Night Mode (Light-Sensitive)"}
    >
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
        style={{
          backgroundColor: theme === "night" ? "#8B5CF6" : "#F59E0B",
          transform: theme === "night" ? "translateX(24px)" : "translateX(0)",
        }}
      >
        {theme === "night" ? (
          <Moon className="w-3.5 h-3.5 text-white" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-white" />
        )}
      </div>
    </button>
  );
}

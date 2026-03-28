"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "night";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("myeyerx-theme") as Theme | null;
    if (stored === "night") {
      setTheme("night");
      document.documentElement.classList.add("night");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "night" : "light";
    setTheme(next);
    localStorage.setItem("myeyerx-theme", next);
    if (next === "night") {
      document.documentElement.classList.add("night");
    } else {
      document.documentElement.classList.remove("night");
    }
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

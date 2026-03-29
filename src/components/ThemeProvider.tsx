"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "night";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "night",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("night");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("myeyerx-theme") as Theme | null;
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.remove("night");
    } else {
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

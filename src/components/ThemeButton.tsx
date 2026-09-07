"use client";

import { useTheme } from "@teispace/next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });

    const audio = new Audio("/switchtab.mp3");
    audio.play();
  };

  return (
    <button
      onClick={toggleTheme}
      suppressHydrationWarning
      className="cursor-pointer text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {!mounted || theme === "light" ? (
        <Moon className="h-[18px] w-[18px]" />
      ) : (
        <Sun className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}

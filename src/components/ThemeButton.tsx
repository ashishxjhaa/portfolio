"use client";

import { useTheme } from "@teispace/next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { playSwitchTab } from "@/lib/playSwitchTab";

const SPRING = {
  type: "spring" as const,
  stiffness: 280,
  damping: 22,
  mass: 0.8,
};

const iconTransition = {
  incoming: { x: -16, y: -12, rotate: -80, scale: 0.4, opacity: 0 },
  rest: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
  outgoing: { x: 16, y: 12, rotate: 80, scale: 0.4, opacity: 0 },
};

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={() => {
        playSwitchTab();
        const next = isDark ? "light" : "dark";
        const apply = () => {
          flushSync(() => {
            setTheme(next);
          });
        };

        if (!document.startViewTransition) {
          apply();
          return;
        }

        document.startViewTransition(apply);
      }}
      suppressHydrationWarning
      className="relative grid size-9 cursor-pointer place-items-center overflow-visible text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="relative size-[18px] overflow-visible">
        <AnimatePresence initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            className="absolute inset-0 grid place-items-center"
            style={{ transformOrigin: "50% 120%", pointerEvents: "none" }}
            variants={iconTransition}
            initial="incoming"
            animate="rest"
            exit="outgoing"
            transition={SPRING}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}

"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./SplashScreen";

interface SplashLayoutProps {
  children: React.ReactNode;
}

export function SplashLayout({ children }: SplashLayoutProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}

      <AnimatePresence mode="wait">
        {showSplash ? <SplashScreen key="splash" /> : null}
      </AnimatePresence>
    </>
  );
}


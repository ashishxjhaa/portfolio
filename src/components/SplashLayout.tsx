"use client";

import { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./SplashScreen";
import { Spinner } from "../ui/spinner";

interface SplashLayoutProps {
  children: React.ReactNode;
}

export function SplashLayout({ children }: SplashLayoutProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Image 0.9s + wipe starts 0.45s + wipe 0.8s ≈ 1.25s;
    // unmount once the sweep has fully passed
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen w-full items-center justify-center">
            <Spinner />
          </div>
        }
      >
        {children}
      </Suspense>

      <AnimatePresence mode="wait">
        {showSplash ? <SplashScreen key="splash" /> : null}
      </AnimatePresence>
    </>
  );
}

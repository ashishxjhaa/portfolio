"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const easeOut = [0.22, 1, 0.36, 1] as const;
const wipeEase = [0.76, 0, 0.24, 1] as const;

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* White wipe band: travels right to left, glued to the receding
          black edge so the page is revealed in a single wipe. */}
      <motion.div
        className="absolute top-0 left-0 z-10 h-full w-16 bg-white sm:w-24"
        initial={{ x: "100vw" }}
        animate={{ x: "0vw" }}
        transition={{ duration: 0.8, delay: 0.45, ease: wipeEase }}
        aria-hidden
      />

      {/* Black splash + logo: recedes right to left via clip-path */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center bg-black"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 100% 0% 0%)" }}
        transition={{ duration: 0.8, delay: 0.45, ease: wipeEase }}
      >
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
        >
          <Image
            src="/logo.png"
            alt="ashish"
            width={192}
            height={192}
            priority
            className="size-36 rounded-2xl object-cover sm:size-44"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

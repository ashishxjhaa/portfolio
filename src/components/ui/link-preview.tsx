"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { encode } from "qss";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
};

export const LinkPreview = ({
  children,
  url,
  className,
  width = 400,
  height = 250,
}: LinkPreviewProps) => {
  const src = `https://api.microlink.io/?${encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "light",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 1440,
    "viewport.height": 900,
  })}`;

  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const x = useMotionValue(0);
  const translateX = useSpring(x, { stiffness: 100, damping: 15 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  if (!isMounted) {
    return (
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        suppressHydrationWarning
      >
        {children}
      </a>
    );
  }

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={setOpen}
    >
      <HoverCardPrimitive.Trigger asChild>
        <a
          href={url}
          onMouseMove={handleMouseMove}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
        >
          {children}
        </a>
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Portal>
        <HoverCardPrimitive.Content
          className="z-50 [transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              className="rounded-xl shadow-xl"
              style={{ x: translateX }}
            >
              <a
                href={url}
                className="block rounded-xl border-2 border-transparent bg-white p-1 shadow hover:border-neutral-200 dark:hover:border-neutral-800"
                style={{ fontSize: 0 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  width={width}
                  height={height}
                  className="rounded-lg object-contain bg-white"
                  alt="preview image"
                />
              </a>
            </motion.div>
          ) : null}
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Portal>
    </HoverCardPrimitive.Root>
  );
};

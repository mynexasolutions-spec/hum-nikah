"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "scale-up"
  | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number | "some" | "all";
  staggerChildren?: number;
}

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.2,
  staggerChildren = 0,
}: ScrollRevealProps) {
  const getVariants = (): Variants => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 35 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
              staggerChildren,
            },
          },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -35 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
              staggerChildren,
            },
          },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
              staggerChildren,
            },
          },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
              staggerChildren,
            },
          },
        };
      case "zoom-in":
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
              staggerChildren,
            },
          },
        };
      case "none":
      default:
        return {
          hidden: {},
          visible: {
            transition: {
              staggerChildren,
            },
          },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  className = "",
  variant = "fade-up",
  duration = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationType;
  duration?: number;
}) {
  const itemVariants: Variants = {
    hidden:
      variant === "fade-up"
        ? { opacity: 0, y: 25 }
        : variant === "fade-down"
        ? { opacity: 0, y: -25 }
        : variant === "fade-left"
        ? { opacity: 0, x: -25 }
        : variant === "fade-right"
        ? { opacity: 0, x: 25 }
        : variant === "zoom-in"
        ? { opacity: 0, scale: 0.9 }
        : { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}


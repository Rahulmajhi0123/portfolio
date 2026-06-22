"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "ul";
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = (motion as unknown as Record<string, typeof motion.div>)[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={defaultVariants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={defaultVariants}>
      {children}
    </motion.div>
  );
}

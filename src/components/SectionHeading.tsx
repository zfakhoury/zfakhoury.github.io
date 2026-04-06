"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeWriter } from "./TypeWriter";

export function SectionHeading({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  const [inView, setInView] = useState(false);
  const text = children?.toString() || "";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => setInView(true)}
      className="mb-12 flex items-center gap-4"
    >
      {number && (
        <span className="font-mono text-sm text-[var(--color-accent)]">
          {number}
        </span>
      )}
      <span className="w-8 h-px bg-[var(--color-accent)]" />
      <h2 className="text-2xl sm:text-3xl font-bold whitespace-nowrap relative">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {inView ? (
            <TypeWriter text={text} delay={40} startDelay={200} />
          ) : null}
        </span>
      </h2>
      <span className="flex-1 h-px bg-[var(--color-border)]" />
    </motion.div>
  );
}

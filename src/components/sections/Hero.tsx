"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Terminal } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg)] dot-grid opacity-50" />
      <div className="absolute top-1/3 -right-48 w-[500px] h-[500px] bg-[var(--color-accent)]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -left-48 w-[400px] h-[400px] bg-[var(--color-accent-secondary)]/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] mb-8 font-mono text-sm text-[var(--color-text-muted)]"
        >
          <Terminal size={14} className="text-[var(--color-accent)]" />
          <span className="text-[var(--color-accent)]">$</span> whoami
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2"
        >
          <Image
            src="/memoji.png"
            alt="Zouhair Fakhoury memoji"
            width={280}
            height={280}
            className="mx-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          {t("name")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-xl sm:text-2xl text-[var(--color-text-secondary)] mb-2 font-medium"
        >
          {t("title")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="font-mono text-sm text-[var(--color-text-muted)] mb-10"
        >
          <span className="text-[var(--color-accent)]">{">"}</span> {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--color-accent)] text-[#0a0e17] rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            {t("cta")}
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[var(--color-border)] rounded-lg font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
          >
            <Mail size={16} />
            {t("contact")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

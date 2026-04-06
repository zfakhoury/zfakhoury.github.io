"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

export function About() {
  const t = useTranslations("about");
  const blurbs = t.raw("blurbs") as string[];

  return (
    <section id="about" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01">{t("title")}</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-medium text-[var(--color-text)] mb-10 leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        <div className="space-y-4">
          {blurbs.map((blurb, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-3 text-[var(--color-text-secondary)] leading-relaxed"
            >
              <span className="font-mono text-[var(--color-accent)] shrink-0 mt-0.5">{">"}</span>
              <p>{blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

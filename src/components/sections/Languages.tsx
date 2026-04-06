"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

interface LanguageItem {
  name: string;
  level: string;
  percent: number;
}

interface InterestItem {
  name: string;
  description: string;
}

function TerminalBar({ percent }: { percent: number }) {
  const total = 20;
  const filled = Math.round((percent / 100) * total);
  const empty = total - filled;
  return (
    <span className="font-mono text-xs">
      <span className="text-[var(--color-accent)]">{"█".repeat(filled)}</span>
      <span className="text-[var(--color-border)]">{"░".repeat(empty)}</span>
    </span>
  );
}

export function Languages() {
  const t = useTranslations("languages");
  const tInterests = useTranslations("interests");
  const languages = t.raw("items") as LanguageItem[];
  const interests = tInterests.raw("items") as InterestItem[];

  return (
    <section id="languages" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Languages */}
          <div>
            <SectionHeading number="04">{t("title")}</SectionHeading>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-[var(--color-text-muted)]">languages --list</span>
              </div>
              <div className="p-4 space-y-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-[var(--color-text)] w-24 shrink-0">{lang.name}</span>
                    <TerminalBar percent={lang.percent} />
                    <span className="text-[var(--color-accent)] text-xs w-14 text-right shrink-0">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <SectionHeading number="05">{tInterests("title")}</SectionHeading>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden font-mono text-sm">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-[var(--color-text-muted)]">interests --verbose</span>
              </div>
              <div className="p-4 space-y-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-[var(--color-accent)] shrink-0">{">"}</span>
                    <span>
                      <span className="font-semibold text-[var(--color-text)]">{interest.name}</span>
                      <span className="text-[var(--color-text-muted)]"> — {interest.description}</span>
                    </span>
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 mt-1 text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-accent)]">{">"}</span>
                  <span className="w-2 h-4 bg-[var(--color-accent)] animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

interface TimelineItem {
  label: string;
  place: string;
  date: string;
  type: "work" | "education" | "project";
}

const typePrefix = {
  work: "~/work",
  education: "~/edu",
  project: "~/projects",
};

export function Background() {
  const t = useTranslations("background");
  const timeline = t.raw("timeline") as TimelineItem[];

  return (
    <section id="background" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03">{t("title")}</SectionHeading>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden font-mono text-sm">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-[var(--color-text-muted)]">
              history --reverse
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] shrink-0">{">"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                      <div>
                        <span className="text-[var(--color-text-muted)]">
                          {typePrefix[item.type]}/
                        </span>
                        <span className="text-[var(--color-text)] font-semibold">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[var(--color-text-muted)] text-xs shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <div className="text-[var(--color-text-muted)] ml-0 mt-0.5">
                      <span className="text-[var(--color-accent-secondary)]">@</span> {item.place}
                    </div>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="border-b border-[var(--color-border)]/50 mt-4" />
                )}
              </motion.div>
            ))}
            <div className="flex items-center gap-2 mt-2 text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)]">{">"}</span>
              <span className="w-2 h-4 bg-[var(--color-accent)] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

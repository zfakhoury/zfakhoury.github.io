"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  date: string;
  bullets: string[];
}

export function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as ExperienceItem[];

  return (
    <section id="experience" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("title")}</SectionHeading>

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/30 transition-colors group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase
                      size={18}
                      className="text-[var(--color-accent)] shrink-0"
                    />
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                  </div>
                  {item.company && (
                    <p className="text-[var(--color-accent)] font-medium ml-[26px]">
                      {item.company}
                    </p>
                  )}
                  {item.type && (
                    <p className="text-sm text-[var(--color-text-muted)] ml-[26px]">
                      {item.type}
                    </p>
                  )}
                </div>
                <span className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] shrink-0">
                  <Calendar size={13} />
                  {item.date}
                </span>
              </div>

              <ul className="space-y-2 ml-[26px]">
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-[var(--color-accent)] mt-1.5 shrink-0">
                      &bull;
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";

export function Skills() {
  const t = useTranslations("skills");

  const categories = {
    languages: {
      label: t("categories.languages"),
      items: t.raw("items.languages") as string[],
    },
    frameworks: {
      label: t("categories.frameworks"),
      items: t.raw("items.frameworks") as string[],
    },
    domains: {
      label: t("categories.domains"),
      items: t.raw("items.domains") as string[],
    },
  };

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("title")}</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category], catIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <h3 className="text-lg font-semibold mb-5 text-[var(--color-accent)]">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.15 + i * 0.05,
                    }}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-[var(--color-accent-bg)] text-[var(--color-accent-light)] border border-[var(--color-accent)]/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

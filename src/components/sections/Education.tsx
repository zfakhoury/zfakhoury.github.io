"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  school: string;
  detail: string;
  date: string;
  location: string;
}

export function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as EducationItem[];

  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("title")}</SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)] hidden sm:block" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)] hidden sm:block" />

                <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap
                      size={20}
                      className="text-[var(--color-accent)] mt-0.5 shrink-0 sm:hidden"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.degree}</h3>
                      <p className="text-[var(--color-accent)] font-medium">
                        {item.school}
                      </p>
                      {item.detail && (
                        <p className="text-sm text-[var(--color-text-muted)]">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)] mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

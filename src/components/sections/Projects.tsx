"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Folder, Star, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface FeaturedLink {
  label: string;
  href: string;
}

interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

export function Projects() {
  const t = useTranslations("projects");
  const items = t.raw("items") as ProjectItem[];
  const featuredTags = t.raw("featured.tags") as string[];
  const featuredLinks = t.raw("featured.links") as FeaturedLink[];

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02">{t("title")}</SectionHeading>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-bg-card)] relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-accent-secondary)]/5 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-4">
              {/* App icon — iOS style radius */}
              <Image
                src="/justpray-icon.png"
                alt="Just Pray app icon"
                width={80}
                height={80}
                className="shrink-0 shadow-lg"
                style={{ borderRadius: "22.37%" }}
              />

              <div>
                <div className="flex items-center gap-2 mb-2">
                <Star size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  {t("featured.label")}
                </span>
              </div>

                <h3 className="text-2xl sm:text-3xl font-bold">
                  {t("featured.name")}
                </h3>
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mb-6">
              {t("featured.description")}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {featuredTags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {featuredLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-mono font-medium rounded-lg bg-[var(--color-accent)] text-[#0a0e17] hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const Wrapper = item.link ? "a" : "div";
            const wrapperProps = item.link
              ? { href: item.link, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`group block p-5 h-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300 ${item.link ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[var(--color-accent-bg)]">
                        <Folder size={18} className="text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.link && (
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] font-medium border border-[var(--color-border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

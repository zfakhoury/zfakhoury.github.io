"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons";

const links = [
  {
    key: "email" as const,
    href: "mailto:zouhairfakhoury@icloud.com",
    icon: Mail,
    brandIcon: false,
    external: false,
  },
  {
    key: "github" as const,
    href: "https://github.com/zfakhoury",
    icon: null,
    brandIcon: true,
    BrandComponent: GithubIcon,
    external: true,
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/zouhair-fakhoury-458b76240/",
    icon: null,
    brandIcon: true,
    BrandComponent: LinkedinIcon,
    external: true,
  },
];

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading number="06">{t("title")}</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg text-[var(--color-text-secondary)] mb-10"
        >
          {t("description")}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.key}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors group"
            >
              {link.brandIcon && link.BrandComponent ? (
                <link.BrandComponent size={18} />
              ) : link.icon ? (
                <link.icon size={18} />
              ) : null}
              <span className="font-medium">{t(link.key)}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

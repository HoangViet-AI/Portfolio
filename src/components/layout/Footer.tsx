"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      aria-label="Site footer"
      className="text-center py-8 text-foreground/40 text-sm"
    >
      <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
      <p>{t.footer.tagline}</p>
    </footer>
  );
}

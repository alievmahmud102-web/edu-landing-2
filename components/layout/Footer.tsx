"use client";

import { useI18n } from "@/components/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-auto border-t border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm text-gray-400">{t("footer_copyright")}</p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/I18nProvider";
import type { Lang } from "@/config/i18n";

const LANGS: Lang[] = ["ru", "en", "uz"];

export function Header() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-gray-900">
          {t("header_brand")}
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm" role="group" aria-label="Language">
            {LANGS.map((code, index) => (
              <span key={code} className="inline-flex items-center gap-1">
                {index > 0 ? (
                  <span className="select-none text-gray-300" aria-hidden="true">
                    |
                  </span>
                ) : null}
                <button
                  type="button"
                  onClick={() => setLang(code)}
                  className={
                    lang === code
                      ? "font-semibold text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm" href="/#contact">
            {t("header_trial_cta")}
          </Button>
        </div>
      </div>
    </header>
  );
}

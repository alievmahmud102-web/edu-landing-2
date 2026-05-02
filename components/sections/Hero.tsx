"use client";

import { BadgeCheck, Download, DollarSign, LayoutTemplate, Star } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { useI18n } from "@/components/I18nProvider";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-[140%] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 -translate-x-1/4 rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-600 ring-1 ring-blue-100 backdrop-blur-sm">
          <Star className="h-4 w-4" />
          {t("hero_badge")}
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-[1.05] text-gray-900 md:text-5xl">
          {t("hero_title")}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl leading-8 text-gray-500">
          {t("hero_subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="/#contact">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-5 w-5" />
              {t("hero_cta_trial")}
            </span>
          </Button>
          <Button variant="outline" size="lg" href="/#catalog">
            <span className="inline-flex items-center gap-2">
              <LayoutTemplate className="h-5 w-5" />
              {t("hero_cta_programs")}
            </span>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-blue-600" />
            <span>{t("hero_stat_1")}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-blue-600" />
            <span>{t("hero_stat_2")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-blue-600" />
            <span>{t("hero_stat_3")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

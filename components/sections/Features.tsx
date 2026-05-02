"use client";

import {
  Archive,
  CreditCard,
  MousePointer2,
  Rocket
} from "lucide-react";

import { Card } from "@/components/ui/Card";
import { useI18n } from "@/components/I18nProvider";

const steps = [
  { step: "01", icon: MousePointer2 },
  { step: "02", icon: CreditCard },
  { step: "03", icon: Archive },
  { step: "04", icon: Rocket }
];

export function Features() {
  const { t } = useI18n();

  return (
    <section
      id="how"
      className="relative overflow-hidden bg-slate-50 px-6 py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>
      <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
        {t("features_title")}
      </h2>
      <p className="mb-16 text-center text-slate-500">
        {t("features_subtitle")}
      </p>
      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden="true"
          className="absolute left-[12.5%] right-[12.5%] top-12 hidden border-t border-dashed border-blue-200 lg:block"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => {
            const Icon = item.icon;
            const titleKey = `step_${item.step}_title`;
            const descKey = `step_${item.step}_desc`;

            return (
              <Card
                key={item.step}
                className="group relative rounded-2xl border border-white/60 bg-white/70 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(37,99,235,0.12)]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-blue-600 ring-1 ring-blue-100">
                    {t("features_step_label")} {item.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {t(titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t(descKey)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

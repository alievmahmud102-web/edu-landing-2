"use client";

import { ChevronDown } from "lucide-react";

import { useI18n } from "@/components/I18nProvider";

const FAQ_INDEXES = [0, 1, 2, 3, 4] as const;

export function FAQ() {
  const { t } = useI18n();

  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">
        {t("faq_title")}
      </h2>
      <div className="mx-auto max-w-2xl space-y-5">
        {FAQ_INDEXES.map((i) => {
          const question = t(`faq_${i}_q`);
          const answer = t(`faq_${i}_a`);

          return (
            <details
              key={i}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:bg-slate-50 hover:shadow-md"
            >
              <summary className="flex list-none items-center justify-between cursor-pointer px-6 py-4 font-medium text-slate-900 outline-none transition-colors [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="grid grid-rows-[0fr] transition-all duration-200 group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="border-t border-slate-200 px-6 py-4 text-sm leading-relaxed text-slate-600">
                    {answer}
                  </div>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

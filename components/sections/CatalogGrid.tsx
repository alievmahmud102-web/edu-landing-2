"use client";

import Link from "next/link";
import { CheckCircle2, LayoutTemplate } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useI18n } from "@/components/I18nProvider";
import { programKey } from "@/config/i18n";
import type { Template } from "@/types";

type CatalogGridProps = {
  templates: Template[];
};

const FEATURE_COUNT = 6;

export function CatalogGrid({ templates }: CatalogGridProps) {
  const { t } = useI18n();

  function truncate(text: string, max: number): string {
    if (text.length <= max) return text;
    return text.slice(0, text.lastIndexOf(" ", max)) + "...";
  }

  return (
    <section id="catalog" className="bg-slate-50 px-6 py-20">
      <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
        {t("catalog_title")}
      </h2>
      <p className="mb-16 text-center text-slate-500">
        {t("catalog_subtitle")}
      </p>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
        {templates.map((template) => {
          const title = t(programKey(template.slug, "title"));
          const description = t(programKey(template.slug, "description"));
          const badgeText = t(programKey(template.slug, "badge")).trim();
          const features = Array.from({ length: FEATURE_COUNT }, (_, i) =>
            t(programKey(template.slug, `feature_${i}`))
          );

          return (
            <Card
              key={template.id}
              className="group w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="relative aspect-video overflow-hidden rounded-t-xl bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/50 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_45%)]" />
                <div className="absolute inset-x-4 top-4 h-8 rounded-md bg-white/70 shadow-sm backdrop-blur-sm" />
                <div className="absolute inset-x-6 top-16 h-24 rounded-lg bg-white/75 shadow-sm backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm">
                  <LayoutTemplate className="h-3.5 w-3.5 text-blue-600" />
                  {t("catalog_preview_label")}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-slate-900">
                    <Link href={`/templates/${template.slug}`}>{title}</Link>
                  </h3>
                  {badgeText ? <Badge>{badgeText}</Badge> : null}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                  {truncate(description, 90)}
                </p>
                <ul className="mb-5 space-y-2 text-sm text-slate-600">
                  {features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-5 flex items-end gap-2">
                  {template.oldPrice ? (
                    <span className="text-sm text-slate-400 line-through">
                      {template.oldPrice}
                    </span>
                  ) : null}
                  <span className="text-3xl font-bold leading-none text-slate-950">
                    {template.displayPrice}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" href={`/templates/${template.slug}`}>
                    {t("catalog_details")}
                  </Button>
                  <Button variant="primary" size="sm" href={`/templates/${template.slug}`}>
                    {t("catalog_enroll")}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { notFound, useParams } from "next/navigation";

import { templates } from "@/data/templates";
import { programKey } from "@/config/i18n";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useI18n } from "@/components/I18nProvider";
import { BuyForm } from "./BuyForm";

const FEATURE_COUNT = 6;

export default function TemplatePage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const template = templates.find((item) => item.slug === slug);
  const { t } = useI18n();

  if (!template) {
    notFound();
  }

  const title = t(programKey(template.slug, "title"));
  const description = t(programKey(template.slug, "description"));
  const badgeText = t(programKey(template.slug, "badge")).trim();
  const features = Array.from({ length: FEATURE_COUNT }, (_, i) =>
    t(programKey(template.slug, `feature_${i}`))
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div>
          {badgeText ? (
            <div className="mb-4">
              <Badge>{badgeText}</Badge>
            </div>
          ) : null}
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mb-8 leading-relaxed text-gray-500">{description}</p>

          <h2 className="mb-4 font-semibold text-gray-900">{t("template_what_included")}</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5L10 17L19 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sticky top-24">
          <Card className="p-8">
            <div>
              {template.oldPrice ? (
                <span className="mr-2 text-sm text-gray-400 line-through">
                  {template.oldPrice}
                </span>
              ) : null}
              <span className="text-4xl font-bold text-gray-900">{template.displayPrice}</span>
            </div>
            <p className="mb-6 mt-2 text-sm text-gray-400">{t("template_monthly_note")}</p>
            <hr className="mb-6 border-gray-100" />

            <BuyForm slug={template.slug} displayPrice={template.displayPrice} />

            <hr className="mb-6 mt-6 border-gray-100" />

            {template.demoUrl ? (
              <Button
                variant="outline"
                size="md"
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                {t("template_syllabus_btn")}
              </Button>
            ) : (
              <button
                type="button"
                disabled
                className="w-full cursor-not-allowed rounded-lg border border-dashed border-gray-200 py-3 text-center text-sm text-gray-400"
              >
                {t("template_syllabus_soon")}
              </button>
            )}

            <div className="mt-6 flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 3L19 6V11C19 16 15.8 20.7 12 22C8.2 20.7 5 16 5 11V6L12 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {t("template_satisfaction_title")}
                </p>
                <p className="text-sm text-gray-400">{t("template_satisfaction_body")}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

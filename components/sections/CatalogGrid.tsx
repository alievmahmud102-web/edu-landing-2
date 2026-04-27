import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Template } from "@/types";

type CatalogGridProps = {
  templates: Template[];
};

export function CatalogGrid({ templates }: CatalogGridProps) {
  function truncate(text: string, max: number): string {
    if (text.length <= max) return text;
    return text.slice(0, text.lastIndexOf(" ", max)) + "...";
  }

  return (
    <section id="catalog" className="bg-gray-50 px-6 py-20">
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
        Шаблоны сайтов
      </h2>
      <p className="mb-16 text-center text-gray-500">
        Выберите подходящий шаблон для вашего бизнеса
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-semibold text-gray-900">
                <Link href={`/templates/${template.slug}`}>{template.title}</Link>
              </h3>
              {template.badge ? <Badge>{template.badge}</Badge> : null}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              {truncate(template.description, 90)}
            </p>
            <ul className="mb-6 space-y-1 text-sm text-gray-500">
              {template.features.slice(0, 3).map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <div className="mb-6 flex items-baseline gap-2">
              {template.oldPrice ? (
                <span className="text-sm text-gray-400 line-through">
                  {template.oldPrice}
                </span>
              ) : null}
              <span className="text-2xl font-bold text-gray-900">
                {template.displayPrice}
              </span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" href={`/templates/${template.slug}`}>
                Подробнее
              </Button>
              <Button variant="primary" size="sm" href={`/templates/${template.slug}`}>
                Купить
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

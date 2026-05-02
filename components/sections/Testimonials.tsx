import { Quote, Star } from "lucide-react";

import { reviews } from "@/data/reviews";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  function getInitials(name: string): string {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }

  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">
        Что говорят родители и ученики
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <Quote
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 h-12 w-12 text-slate-100"
            />
            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={`${review.id}-${idx}`}
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-700">{review.text}</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-sm font-semibold text-white">
                {getInitials(review.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

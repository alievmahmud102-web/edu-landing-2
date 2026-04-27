import { reviews } from "@/data/reviews";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-16 text-center text-3xl font-bold text-gray-900">
        Что говорят покупатели
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.id}>
            <p className="mb-3 text-sm text-yellow-400">★★★★★</p>
            <p className="mb-4 leading-relaxed text-gray-700">{review.text}</p>
            <p className="text-sm font-semibold text-gray-900">{review.name}</p>
            <p className="text-sm text-gray-400">{review.role}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

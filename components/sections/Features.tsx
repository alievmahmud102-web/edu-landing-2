import { Card } from "@/components/ui/Card";

const steps = [
  {
    step: "01",
    title: "Выберите шаблон",
    description: "Просмотрите каталог, изучите состав и нажмите Live Demo"
  },
  {
    step: "02",
    title: "Оплатите онлайн",
    description: "Безопасная оплата через Stripe. Без регистрации, без лишних шагов"
  },
  {
    step: "03",
    title: "Получите архив",
    description: "Ссылка на ZIP приходит на email и доступна сразу на странице"
  },
  {
    step: "04",
    title: "Запустите сайт",
    description: "Внутри архива — инструкция по установке и настройке"
  }
];

export function Features() {
  return (
    <section id="how" className="bg-gray-50 px-6 py-20">
      <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
        Как это работает
      </h2>
      <p className="mb-16 text-center text-gray-500">
        Четыре шага от выбора до запущенного сайта
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <Card key={item.step}>
            <span className="mb-4 block text-3xl font-bold text-blue-100">
              {item.step}
            </span>
            <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-6 block text-sm font-medium text-blue-600">
          ⭐ Более 120 школ и репетиторов уже запустили сайт
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Готовый сайт для вашей школы или курсов — за 15 минут
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-500">
          Профессиональные шаблоны для репетиторов, языковых школ и учебных
          центров. Купите, скачайте ZIP-архив и запустите сайт сегодня — без
          разработчика и дизайнера.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="/#catalog">
            Смотреть шаблоны
          </Button>
          <Button variant="outline" size="lg" href="/#how">
            Как это работает
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">◆</span>
            <span>5 шаблонов</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">$</span>
            <span>От $29</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">⬇</span>
            <span>ZIP + инструкция</span>
          </div>
        </div>
      </div>
    </section>
  );
}

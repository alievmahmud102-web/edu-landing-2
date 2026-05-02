import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Какой формат занятий доступен в центре?",
    answer:
      "Доступны очные и онлайн-занятия: мини-группы до 8 человек, индивидуальные уроки и интенсивные курсы перед экзаменами."
  },
  {
    question: "Как проходит старт обучения?",
    answer:
      "Сначала проводим диагностику знаний, затем подбираем преподавателя и отправляем персональный план с графиком, целями и домашними заданиями."
  },
  {
    question: "Сколько стоит обучение?",
    answer:
      "Базовые программы начинаются от $150 в месяц. Финальная стоимость зависит от формата, количества занятий и выбранного направления."
  },
  {
    question: "Какие предметы и направления вы ведете?",
    answer:
      "Готовим по математике, русскому, английскому, физике, информатике, а также ведем курсы по IELTS, SAT и олимпиадным дисциплинам."
  },
  {
    question: "Как вы контролируете прогресс ученика?",
    answer:
      "После каждого модуля проводим контрольные срезы, даем отчеты родителям и ежемесячно корректируем учебный маршрут по результатам."
  },
  {
    question: "Есть ли пробное занятие?",
    answer:
      "Да, первое диагностическое занятие можно пройти в пробном формате, чтобы познакомиться с преподавателем и методикой центра."
  }
];

export function FAQ() {
  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-16 text-center text-3xl font-bold text-slate-900">
        Вопросы по обучению
      </h2>
      <div className="mx-auto max-w-2xl space-y-5">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:bg-slate-50 hover:shadow-md"
          >
            <summary className="flex list-none items-center justify-between cursor-pointer px-6 py-4 font-medium text-slate-900 outline-none transition-colors [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="grid grid-rows-[0fr] transition-all duration-200 group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="border-t border-slate-200 px-6 py-4 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

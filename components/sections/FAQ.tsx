const faqItems = [
  {
    question: "Смогу ли я сам установить шаблон?",
    answer:
      "Да. Внутри ZIP-архива есть пошаговая инструкция по установке. Среднее время установки — 15–30 минут даже без опыта."
  },
  {
    question: "Что именно я получу после оплаты?",
    answer:
      "ZIP-архив с готовым шаблоном сайта, инструкцией по установке и настройке. Ссылка придёт на email и будет доступна на странице сразу после оплаты."
  },
  {
    question: "Есть ли гарантия возврата?",
    answer:
      "Да, 7 дней с момента покупки. Если шаблон не подошёл — напишите на support@edutemplates.com и мы вернём деньги без лишних вопросов."
  },
  {
    question: "На каком движке сделаны шаблоны?",
    answer:
      "Шаблоны сделаны на чистом HTML/CSS/JS. Вы можете разместить их на любом хостинге без необходимости устанавливать CMS или базу данных."
  },
  {
    question: "Могу ли я адаптировать шаблон под свой бренд?",
    answer:
      "Да, шаблон полностью ваш после покупки. Меняйте цвета, тексты, изображения и структуру как угодно."
  },
  {
    question: "Есть ли поддержка после покупки?",
    answer:
      "Да. По вопросам установки и настройки пишите на support@edutemplates.com. Отвечаем в течение 24 часов."
  }
];

export function FAQ() {
  return (
    <section className="bg-white px-6 py-20">
      <h2 className="mb-16 text-center text-3xl font-bold text-gray-900">
        Частые вопросы
      </h2>
      <div className="mx-auto max-w-2xl space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="overflow-hidden rounded-lg border border-gray-100">
            <summary className="flex list-none items-center justify-between cursor-pointer px-6 py-4 font-medium text-gray-900 transition-colors hover:bg-gray-50">
              <span>{item.question}</span>
              <span className="faq-plus">+</span>
              <span className="faq-minus hidden">−</span>
            </summary>
            <div className="border-t border-gray-100 px-6 py-4 text-sm leading-relaxed text-gray-500">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
      <style>{`
        details[open] summary .faq-plus {
          display: none;
        }
        details[open] summary .faq-minus {
          display: inline;
        }
      `}</style>
    </section>
  );
}

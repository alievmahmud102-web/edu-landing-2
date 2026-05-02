export type Lang = "ru" | "en" | "uz";

export const DEFAULT_LANG: Lang = "ru";

export const STORAGE_KEY = "fluentkids-i18n-lang";

/** Builds translation keys like program_beginner_english_title */
export function programKey(slug: string, suffix: string): string {
  return `program_${slug.replace(/-/g, "_")}_${suffix}`;
}

export const translations: Record<
  Lang,
  Record<string, string>
> = {
  ru: {
    header_brand: "FluentKids English",
    header_trial_cta: "Пробный урок",
    footer_copyright:
      "© 2026 FluentKids English. Курсы английского для детей и подростков — разговорная речь, экзамены и помощь со школой.",
    hero_badge:
      "Английский для детей 6–16 лет · мини-группы · онлайн и офлайн",
    hero_title: "Ребенок заговорит на английском уверенно — без зубрежки",
    hero_subtitle:
      "Современные курсы английского для детей с заметным результатом уже через 2 месяца",
    hero_cta_trial: "Записаться на бесплатный пробный урок",
    hero_cta_programs: "Смотреть программы",
    hero_stat_1: "Методика с упором на разговор",
    hero_stat_2: "Тарифы от $150 в месяц",
    hero_stat_3: "IELTS и подготовка к экзаменам",
    features_title: "Как мы обучаем",
    features_subtitle: "Четыре шага от заявки до уверенной речи",
    features_step_label: "Шаг",
    step_01_title: "Оставьте заявку",
    step_01_desc:
      "Расскажите о ребенке и целях — мы подберем уровень и формат занятий",
    step_02_title: "Пройдите диагностику",
    step_02_desc:
      "Проверяем аудирование, говорение, чтение и письмо — видим сильные стороны и пробелы",
    step_03_title: "Получите персональный план",
    step_03_desc:
      "Вы получаете понятный маршрут, варианты расписания и контрольные точки прогресса",
    step_04_title: "Начните заниматься",
    step_04_desc:
      "Ребенок в мини-группе или индивидуально — с обратной связью для родителей",
    catalog_title: "Программы",
    catalog_subtitle:
      "Выберите курс под уровень ребенка — от первых слов до IELTS и помощи со школой",
    catalog_preview_label: "Превью программы",
    catalog_details: "Подробнее",
    catalog_enroll: "Записаться",
    testimonials_title: "Отзывы родителей",
    review_1_name: "Сара Митчелл",
    review_1_role: "Мама, ребенку 12 лет",
    review_1_text:
      "Мы перепробовали три школы. Здесь сын реально говорит на уроках, а не только заполняет листы. За два месяца он уже заказывает еду и общается с гостями из другой страны без ступора.",
    review_2_name: "Джеймс Оконкво",
    review_2_role: "Папа, дочери 9 лет",
    review_2_text:
      "Дочь была очень застенчивой. Маленькие группы сильно помогли. Учитель каждую неделю присылает короткий отчет — мы всегда знаем, что повторить дома.",
    review_3_name: "Елена Петрова",
    review_3_role: "Мама, дочери 15 лет",
    review_3_text:
      "Нужна была структурированная подготовка к IELTS без выгорания. Диагностика была честной, план понятный, пробные экзамены как настоящие. Дочь набрала нужный балл с первой попытки.",
    review_4_name: "Дэвид Чен",
    review_4_role: "Папа, сыну 11 лет",
    review_4_text:
      "Чередуем онлайн и офлайн — качество одинаковое. Домашка адекватная, в поездках не отстаем. Рекомендуем занятым семьям.",
    faq_title: "Частые вопросы",
    faq_0_q: "Какой формат вы предлагаете?",
    faq_0_a:
      "Занятия в мини-группах (обычно до 8 человек), индивидуально и интенсивы перед экзаменами. Доступны онлайн, офлайн или смешанный график — в зависимости от города и уровня.",
    faq_1_q: "Сколько это стоит?",
    faq_1_a:
      "Программы от $150 в месяц в зависимости от формата, интенсивности и группы или индивидуально. После диагностики отправляем прозрачный расчет без скрытых платежей.",
    faq_2_q: "Есть ли пробный урок?",
    faq_2_a:
      "Да. Запишитесь на бесплатный пробный урок через форму на сайте. Ребенок познакомится с преподавателем, попробует реальный урок, а вы получите рекомендации по дальнейшим шагам.",
    faq_3_q: "Какие возрасты вы берете?",
    faq_3_a:
      "Мы специализируемся на детях и подростках примерно с 6 до 16 лет. Для старших есть трек IELTS после входного теста на готовность.",
    faq_4_q: "Онлайн или офлайн?",
    faq_4_a:
      "И то, и другое. Многие семьи сочетают онлайн-недели с очными занятиями. Программа, домашка и отслеживание прогресса одинаковые в любом формате.",
    contact_title: "Оставить заявку",
    contact_subtitle:
      "Оставьте контакты — мы свяжемся с вами и назначим бесплатный пробный урок",
    contact_label_name: "Имя",
    contact_label_phone: "Телефон",
    contact_label_age: "Возраст ребенка",
    contact_submit: "Отправить заявку",
    contact_sending: "Отправка...",
    contact_error_required: "Заполните все поля.",
    contact_error_submit: "Не удалось отправить. Попробуйте еще раз.",
    contact_success: "Спасибо! Мы скоро свяжемся с вами.",
    not_found_title: "404 — Страница не найдена",
    not_found_body:
      "Ссылка могла устареть или страница программы была перенесена.",
    not_found_cta: "К программам",
    template_what_included: "Что входит в программу",
    template_monthly_note: "Стоимость за месяц. Без скрытых платежей.",
    template_enroll_loading: "Переход к оплате...",
    template_enroll_for: "Записаться за {{price}}",
    template_checkout_error: "Не удалось оформить оплату. Попробуйте еще раз.",
    template_email_invalid: "Введите корректный email",
    template_contact_email_label: "Email для связи",
    template_placeholder_email: "school@example.com",
    template_syllabus_btn: "Смотреть программу курса →",
    template_syllabus_soon: "Подробная программа скоро появится",
    template_satisfaction_title: "7 дней на принятие решения",
    template_satisfaction_body:
      "Если формат не подойдет, поможем сменить группу или оформим возврат по правилам школы.",
    program_beginner_english_title: "Английский с нуля",
    program_beginner_english_description:
      "Мягкий старт для тех, кто только знакомится с английским или нуждается в базе. Словарь, аудирование и простое говорение через игры и короткие диалоги.",
    program_beginner_english_badge: "Популярно",
    program_beginner_english_feature_0: "Мини-группы и много говорения",
    program_beginner_english_feature_1: "Уровни от первых слов до коротких рассказов",
    program_beginner_english_feature_2: "Еженедельные заметки для родителей",
    program_beginner_english_feature_3: "Онлайн или офлайн",
    program_beginner_english_feature_4: "Без зубрежки — учимся на практике",
    program_beginner_english_feature_5: "Педагоги с опытом работы с 6–16 лет",
    program_speaking_english_title: "Разговорный английский",
    program_speaking_english_description:
      "Курс про уверенность в речи: ролевые игры, обсуждения и произношение, чтобы ребенок использовал язык в быту.",
    program_speaking_english_badge: "Топ",
    program_speaking_english_feature_0: "Говорим на каждом уроке",
    program_speaking_english_feature_1: "Произношение и беглость речи",
    program_speaking_english_feature_2: "Проекты и мини-презентации",
    program_speaking_english_feature_3: "Практика в парах и группах",
    program_speaking_english_feature_4: "Обратная связь после занятий",
    program_speaking_english_feature_5: "Материалы под уровень ребенка",
    program_ielts_preparation_title: "Подготовка к IELTS",
    program_ielts_preparation_description:
      "Системная подготовка для старших учеников к IELTS и аналогичным экзаменам. Все четыре навыка, стратегии и тайминг.",
    program_ielts_preparation_badge: "",
    program_ielts_preparation_feature_0: "Диагностика и дорожная карта баллов",
    program_ielts_preparation_feature_1: "Academic и General треки",
    program_ielts_preparation_feature_2: "Письмо и speaking с разбором",
    program_ielts_preparation_feature_3: "Полные пробники с разбором",
    program_ielts_preparation_feature_4: "Техники экзамена и тайм-менеджмент",
    program_ielts_preparation_feature_5: "Мини-группы или индивидуально",
    program_school_support_english_title: "Английский + школа",
    program_school_support_english_description:
      "Помогаем тянуть школьный английский, домашку и контрольные, параллельно усиливая говорение.",
    program_school_support_english_badge: "",
    program_school_support_english_feature_0: "Согласовано со школьной программой",
    program_school_support_english_feature_1: "Грамматика и лексика простым языком",
    program_school_support_english_feature_2: "Подготовка к контрольным и проектам",
    program_school_support_english_feature_3: "Дополнительное говорение сверх учебника",
    program_school_support_english_feature_4: "Регулярная связь с родителями",
    program_school_support_english_feature_5: "Гибкое расписание в будни и выходные",
    program_one_on_one_lessons_title: "Индивидуальные занятия",
    program_one_on_one_lessons_description:
      "Персональный темп и цели — от нагона до интенсива перед экзаменом, план строится вокруг вашего ребенка.",
    program_one_on_one_lessons_badge: "",
    program_one_on_one_lessons_feature_0: "План после диагностического урока",
    program_one_on_one_lessons_feature_1: "Гибкая запись с преподавателем",
    program_one_on_one_lessons_feature_2: "100% внимания потребностям ребенка",
    program_one_on_one_lessons_feature_3: "Быстрая обратная связь по домашке и речи",
    program_one_on_one_lessons_feature_4: "Фокус на IELTS или школьные экзамены",
    program_one_on_one_lessons_feature_5: "Онлайн или офлайн"
  },
  en: {
    header_brand: "FluentKids English",
    header_trial_cta: "Free trial",
    footer_copyright:
      "© 2026 FluentKids English. English courses for children and teens — speaking, exams, and school support.",
    hero_badge:
      "English for kids ages 6–16 · small groups · online and in person",
    hero_title:
      "Your child will speak English confidently — without memorization",
    hero_subtitle:
      "Modern English courses for kids with real results in just 2 months",
    hero_cta_trial: "Book a free trial lesson",
    hero_cta_programs: "View programs",
    hero_stat_1: "Speaking-first methodology",
    hero_stat_2: "Plans from $150 / month",
    hero_stat_3: "IELTS and exam tracks available",
    features_title: "How we teach",
    features_subtitle: "Four steps from application to confident speaking",
    features_step_label: "Step",
    step_01_title: "Submit application",
    step_01_desc:
      "Tell us about your child and goals so we can recommend the right level and format",
    step_02_title: "Take a diagnostic test",
    step_02_desc:
      "We assess listening, speaking, reading, and writing to see strengths and gaps",
    step_03_title: "Get a personalized plan",
    step_03_desc:
      "You receive a clear learning path, schedule options, and milestones to track progress",
    step_04_title: "Start learning",
    step_04_desc:
      "Your child joins small-group or private lessons with ongoing feedback for parents",
    catalog_title: "Programs",
    catalog_subtitle:
      "Choose a track for your child’s level — from first words to IELTS and school support",
    catalog_preview_label: "Program preview",
    catalog_details: "Details",
    catalog_enroll: "Enroll",
    testimonials_title: "What parents say",
    review_1_name: "Sarah Mitchell",
    review_1_role: "Parent of a 12-year-old",
    review_1_text:
      "We tried three places before this school. Here our son actually speaks in class — not just fills in worksheets. After two months he orders food and chats with our guest family in English without freezing up.",
    review_2_name: "James Okonkwo",
    review_2_role: "Parent of a 9-year-old",
    review_2_text:
      "My daughter was shy and barely said a word. The small groups helped a lot. The teacher sends a short update every week, so we always know what to practice at home.",
    review_3_name: "Elena Petrova",
    review_3_role: "Parent of a 15-year-old",
    review_3_text:
      "We needed structured IELTS prep without killing her motivation. The diagnostic was honest, the plan was clear, and mock tests felt like the real exam. She hit her target band on the first try.",
    review_4_name: "David Chen",
    review_4_role: "Parent of an 11-year-old",
    review_4_text:
      "We mix online weeks with in-person classes and the quality stays the same. Homework is reasonable, and when we travel we do not fall behind. Highly recommend for busy families.",
    faq_title: "Frequently asked questions",
    faq_0_q: "What format do you offer?",
    faq_0_a:
      "Small-group classes (typically up to eight learners), private one-on-one lessons, and focused exam intensives. Lessons are available online, in person, or as a blended schedule depending on your city and level.",
    faq_1_q: "How much does it cost?",
    faq_1_a:
      "Programs start from $150 per month depending on format, frequency, and whether you choose group or private lessons. After the diagnostic we send a clear quote with no hidden fees.",
    faq_2_q: "Is there a trial lesson?",
    faq_2_a:
      "Yes. Book a free trial lesson through the form on this page. Your child meets the teacher, tries the real lesson flow, and you get recommendations for the next step.",
    faq_3_q: "What ages do you teach?",
    faq_3_a:
      "We specialize in children and teens from about 6 to 16 years old. Older students can join our IELTS preparation track with a placement test to confirm readiness.",
    faq_4_q: "Online or offline?",
    faq_4_a:
      "Both. Many families combine online weeks with classroom lessons. The curriculum, homework, and progress tracking stay the same whichever format you choose.",
    contact_title: "Submit your application",
    contact_subtitle:
      "Leave your details and we will contact you to schedule a free trial lesson",
    contact_label_name: "Name",
    contact_label_phone: "Phone",
    contact_label_age: "Child's age",
    contact_submit: "Submit application",
    contact_sending: "Sending...",
    contact_error_required: "Please fill in all fields.",
    contact_error_submit: "Something went wrong. Please try again.",
    contact_success: "Thank you! We will contact you shortly.",
    not_found_title: "404 — Page not found",
    not_found_body:
      "This link may be outdated or the program page may have moved.",
    not_found_cta: "Back to programs",
    template_what_included: "What is included",
    template_monthly_note: "Monthly tuition. No hidden fees.",
    template_enroll_loading: "Redirecting to checkout...",
    template_enroll_for: "Enroll for {{price}}",
    template_checkout_error: "We could not complete checkout. Please try again.",
    template_email_invalid: "Please enter a valid email address",
    template_contact_email_label: "Contact email",
    template_placeholder_email: "school@example.com",
    template_syllabus_btn: "View syllabus →",
    template_syllabus_soon: "Detailed syllabus coming soon",
    template_satisfaction_title: "7-day satisfaction window",
    template_satisfaction_body:
      "If the format is not a fit, we help you switch groups or refund according to policy.",
    program_beginner_english_title: "Beginner English",
    program_beginner_english_description:
      "A friendly start for children who are new to English or need a solid foundation. We build vocabulary, listening, and simple speaking through games and short dialogues.",
    program_beginner_english_badge: "Popular",
    program_beginner_english_feature_0: "Small groups with lots of speaking time",
    program_beginner_english_feature_1: "Clear levels from first words to short stories",
    program_beginner_english_feature_2: "Weekly progress notes for parents",
    program_beginner_english_feature_3: "Online or in-person options",
    program_beginner_english_feature_4: "No rote memorization — we learn by doing",
    program_beginner_english_feature_5: "Supportive teachers trained for ages 6–16",
    program_speaking_english_title: "Speaking English",
    program_speaking_english_description:
      "Confidence-first course focused on real conversation: role-plays, discussions, and pronunciation so your child can use English naturally in daily situations.",
    program_speaking_english_badge: "Top pick",
    program_speaking_english_feature_0: "Speaking in every lesson",
    program_speaking_english_feature_1: "Pronunciation and fluency drills",
    program_speaking_english_feature_2: "Themed projects and mini-presentations",
    program_speaking_english_feature_3: "Peer practice in small groups",
    program_speaking_english_feature_4: "Teacher feedback after each class",
    program_speaking_english_feature_5: "Materials matched to your child’s level",
    program_ielts_preparation_title: "IELTS Preparation",
    program_ielts_preparation_description:
      "Structured preparation for older students targeting IELTS or similar exams. We balance all four skills with exam strategies and timed practice.",
    program_ielts_preparation_badge: "",
    program_ielts_preparation_feature_0: "Diagnostic test and score roadmap",
    program_ielts_preparation_feature_1: "Academic and general training tracks",
    program_ielts_preparation_feature_2: "Writing and speaking with detailed feedback",
    program_ielts_preparation_feature_3: "Full mock tests with review sessions",
    program_ielts_preparation_feature_4: "Exam techniques and time management",
    program_ielts_preparation_feature_5: "Small groups or one-on-one add-on",
    program_school_support_english_title: "School Support English",
    program_school_support_english_description:
      "Helps learners keep up with school English, homework, and tests while building stronger speaking alongside the curriculum.",
    program_school_support_english_badge: "",
    program_school_support_english_feature_0: "Aligned with typical school programs",
    program_school_support_english_feature_1: "Grammar and vocabulary made clear",
    program_school_support_english_feature_2: "Test and project preparation",
    program_school_support_english_feature_3: "Extra speaking to go beyond the textbook",
    program_school_support_english_feature_4: "Regular check-ins with parents",
    program_school_support_english_feature_5: "Flexible schedule on weekdays or weekends",
    program_one_on_one_lessons_title: "One-on-one lessons",
    program_one_on_one_lessons_description:
      "Fully personalized lessons for faster progress or specific goals — from catching up to intensive exam prep, with a plan built around your child.",
    program_one_on_one_lessons_badge: "",
    program_one_on_one_lessons_feature_0: "Custom plan after a diagnostic lesson",
    program_one_on_one_lessons_feature_1: "Flexible booking with your teacher",
    program_one_on_one_lessons_feature_2: "100% attention on your child’s needs",
    program_one_on_one_lessons_feature_3: "Fast feedback on homework and speaking",
    program_one_on_one_lessons_feature_4: "Optional focus on IELTS or school exams",
    program_one_on_one_lessons_feature_5: "Online or in-person available"
  },
  uz: {
    header_brand: "FluentKids English",
    header_trial_cta: "Bepul sinov darsi",
    footer_copyright:
      "© 2026 FluentKids English. Bolalar va o‘smirlar uchun ingliz tili kurslari — nutq, imtihonlar va maktab darsi bilan yordam.",
    hero_badge:
      "6–16 yosh bolalar uchun ingliz tili · kichik guruhlar · onlayn va oflayn",
    hero_title:
      "Farzandingiz ingliz tilida ishonch bilan gapira boshlaydi — yodlashsiz",
    hero_subtitle:
      "Bolalar uchun zamonaviy ingliz tili kurslari — atigi 2 oyda sezilarli natija",
    hero_cta_trial: "Bepul sinov darsiga yozilish",
    hero_cta_programs: "Dasturlarni ko‘rish",
    hero_stat_1: "Nutqqa urg‘u berilgan metodika",
    hero_stat_2: "Oylik tariflar $150 dan boshlanadi",
    hero_stat_3: "IELTS va imtihonga tayyorlov",
    features_title: "O‘qitish tartibimiz",
    features_subtitle: "Ariza dan ishonchli nutqqacha to‘rt qadam",
    features_step_label: "Qadam",
    step_01_title: "Ariza qoldiring",
    step_01_desc:
      "Farzandingiz va maqsadlari haqida yozing — darajasi va dars formatini tanlaymiz",
    step_02_title: "Diagnostik testdan o‘ting",
    step_02_desc:
      "Tinglash, gapirish, o‘qish va yozishni tekshiramiz — kuchli tomonlar va bo‘shliqlar aniqlanadi",
    step_03_title: "Shaxsiy rejani oling",
    step_03_desc:
      "Aniq o‘qish yo‘li, jadval variantlari va progress uchun belgilar beriladi",
    step_04_title: "O‘qishni boshlang",
    step_04_desc:
      "Farzandingiz kichik guruh yoki individual darslarda — ota-onalar uchun muntazam fikr-mulohaza",
    catalog_title: "Dasturlar",
    catalog_subtitle:
      "Farzandingiz darajasiga mos kursni tanlang — birinchi so‘zdan IELTS va maktab darslarigacha",
    catalog_preview_label: "Dastur ko‘rinishi",
    catalog_details: "Batafsil",
    catalog_enroll: "Yozilish",
    testimonials_title: "Ota-onalar fikri",
    review_1_name: "Sara Mitchell",
    review_1_role: "12 yoshli farzandning onasi",
    review_1_text:
      "Uchta joyni sinab ko‘rdik. Bu yerda o‘g‘lim darsda haqiqatan gapiradi — faqat varaq to‘ldirmaydi. Ikki oy ichida mehmon oila bilan ingliz tilida buyurtma beradi va suhbatlasha oladi.",
    review_2_name: "James Okonkwo",
    review_2_role: "9 yoshli farzandning otasi",
    review_2_text:
      "Qizim juda uyatchan edi. Kichik guruhlar katta yordam berdi. O‘qituvchi har hafta qisqa xabar yuboradi — uyda nima takrorlashni bilamiz.",
    review_3_name: "Yelena Petrova",
    review_3_role: "15 yoshli farzandning onasi",
    review_3_text:
      "IELTS uchun tartibli tayyorlov kerak edi. Diagnostika halol rejani aniq qildi, sinov imtihonlari haqiqiyga o‘xshardi. Qizim birinchi marta kerakli ballni oldi.",
    review_4_name: "David Chen",
    review_4_role: "11 yoshli farzandning otasi",
    review_4_text:
      "Onlayn haftalarni oflayn darslar bilan aralashtiramiz — sifat bir xil. Uy vazifasi oqilona, sayohatda ham orqada qolmaymiz.",
    faq_title: "Tez-tez beriladigan savollar",
    faq_0_q: "Qanday format mavjud?",
    faq_0_a:
      "Kichik guruhlar (odatda 8 tagacha), individual darslar va imtihon oldi intensivlar. Onlayn, oflayn yoki aralash jadval — shahar va darajaga qarab.",
    faq_1_q: "Narxi qancha?",
    faq_1_a:
      "Dasturlar oyiga $150 dan boshlanadi — format, chastota va guruh yoki individual tanloviga qarab. Diagnostikadan keyin yashirin to‘lovlarsiz aniq hisob yuboramiz.",
    faq_2_q: "Sinov darsi bormi?",
    faq_2_a:
      "Ha. Sahifadagi forma orqali bepul sinov darsiga yoziling. Farzandingiz o‘qituvchi bilan tanishadi, haqiqiy dars oqimini sinab ko‘radi, keyingi qadamlar bo‘yicha tavsiya olasiz.",
    faq_3_q: "Qanday yoshlarni o‘qitasiz?",
    faq_3_a:
      "Taxminan 6 dan 16 yoshgacha bolalar va o‘smirlarga ixtisoslashganmiz. Kattaroq o‘quvchilar tayyorlik testidan keyin IELTS treki bilan qo‘shilishi mumkin.",
    faq_4_q: "Onlayn yoki oflayn?",
    faq_4_a:
      "Ikkalasi ham. Ko‘p oilalar onlayn haftalarni sinf darslari bilan birlashtiradi. Dastur, uy vazifasi va progress kuzatuvi har qanday formatda bir xil.",
    contact_title: "Ariza qoldirish",
    contact_subtitle:
      "Ma’lumotlaringizni qoldiring — bepul sinov darsi uchun siz bilan bog‘lanamiz",
    contact_label_name: "Ism",
    contact_label_phone: "Telefon",
    contact_label_age: "Farzandning yoshi",
    contact_submit: "Ariza yuborish",
    contact_sending: "Yuborilmoqda...",
    contact_error_submit: "Xatolik yuz berdi. Qayta urinib ko‘ring.",
    contact_error_required: "Barcha maydonlarni to‘ldiring.",
    contact_success: "Rahmat! Tez orada siz bilan bog‘lanamiz.",
    not_found_title: "404 — Sahifa topilmadi",
    not_found_body:
      "Havola eskirgan bo‘lishi yoki dastur sahifasi ko‘chirilgan bo‘lishi mumkin.",
    not_found_cta: "Dasturlarga qaytish",
    template_what_included: "Dasturga nimalar kiradi",
    template_monthly_note: "Oylik to‘lov. Yashirin to‘lovlar yo‘q.",
    template_enroll_loading: "To‘lov sahifasiga yo‘naltirilmoqda...",
    template_enroll_for: "{{price}} ev yozilish",
    template_checkout_error: "To‘lovni yakunlab bo‘lmadi. Qayta urinib ko‘ring.",
    template_email_invalid: "To‘g‘ri email kiriting",
    template_contact_email_label: "Aloqa uchun email",
    template_placeholder_email: "school@example.com",
    template_syllabus_btn: "Dasturni ko‘rish →",
    template_syllabus_soon: "Batafsil dastur tez orada",
    template_satisfaction_title: "7 kunlik qanoatlantirish muddati",
    template_satisfaction_body:
      "Format mos kelmasa, guruhni almashtirish yoki qoidalarga muvofiq qaytarishda yordam beramiz.",
    program_beginner_english_title: "Boshlang‘ich ingliz tili",
    program_beginner_english_description:
      "Ingliz tiliga yangi qadam yoki mustahkam asos kerak bo‘lgan bolalar uchun yumshoq boshlanish. Lug‘at, tinglash va qisqa suhbatlar o‘yinlar orqali.",
    program_beginner_english_badge: "Mashhur",
    program_beginner_english_feature_0: "Kichik guruhlarda ko‘p gapirish",
    program_beginner_english_feature_1: "Birinchi so‘zdan qisqa hikoyalargacha",
    program_beginner_english_feature_2: "Ota-onalar uchun haftalik qisqa xabar",
    program_beginner_english_feature_3: "Onlayn yoki oflayn",
    program_beginner_english_feature_4: "Yodlamasdan — amaliyot orqali",
    program_beginner_english_feature_5: "6–16 yosh bilan ish tajribasi",
    program_speaking_english_title: "Nutq ingliz tili",
    program_speaking_english_description:
      "Haqiqiy suhbat, rollar, muhokama va talaffuz — bolaning kundalik hayotda tabiiy gapirishiga yordam.",
    program_speaking_english_badge: "Top",
    program_speaking_english_feature_0: "Har darsda gapirish",
    program_speaking_english_feature_1: "Talaffuz va oqim mashqlari",
    program_speaking_english_feature_2: "Mavzuli loyihalar va mini-taqdimotlar",
    program_speaking_english_feature_3: "Juft va guruh amaliyoti",
    program_speaking_english_feature_4: "Har darsdan keyin fikr",
    program_speaking_english_feature_5: "Darajaga mos materiallar",
    program_ielts_preparation_title: "IELTS tayyorlov",
    program_ielts_preparation_description:
      "IELTS va shunga o‘xshash imtihonlar uchun tuzilgan tayyorlov. To‘rt ko‘nikma, strategiya va vaqt bilan mashq.",
    program_ielts_preparation_badge: "",
    program_ielts_preparation_feature_0: "Diagnostika va ball yo‘l xaritasi",
    program_ielts_preparation_feature_1: "Academic va General yo‘nalishlari",
    program_ielts_preparation_feature_2: "Yozish va gapirish bo‘yicha batafsil tahlil",
    program_ielts_preparation_feature_3: "To‘liq sinov imtihonlari va tahlil",
    program_ielts_preparation_feature_4: "Imtihon texnikasi va vaqt boshqaruvi",
    program_ielts_preparation_feature_5: "Kichik guruh yoki qo‘shimcha individual",
    program_school_support_english_title: "Maktab ingliz tiliga yordam",
    program_school_support_english_description:
      "Maktab darsi, uy vazifasi va testlar bilan yordam, darslikdan tashqari nutqni kuchaytirish.",
    program_school_support_english_badge: "",
    program_school_support_english_feature_0: "Odatdagi maktab dasturi bilan uyg‘un",
    program_school_support_english_feature_1: "Grammatika va lug‘at soddalashtirilgan",
    program_school_support_english_feature_2: "Test va loyiha tayyorlov",
    program_school_support_english_feature_3: "Darslikdan ortiqcha gapirish",
    program_school_support_english_feature_4: "Ota-onalar bilan muntazam aloqa",
    program_school_support_english_feature_5: "Dam olish va ish kunlari jadvali",
    program_one_on_one_lessons_title: "Individual darslar",
    program_one_on_one_lessons_description:
      "Tezroq natija yoki aniq maqsadlar — qoldiqlarni yopishdan imtihon intensivigacha, reja farzandingiz atrofida.",
    program_one_on_one_lessons_badge: "",
    program_one_on_one_lessons_feature_0: "Diagnostik darsdan keyin shaxsiy reja",
    program_one_on_one_lessons_feature_1: "O‘qituvchi bilan moslashuvchan yozilish",
    program_one_on_one_lessons_feature_2: "100% e’tibor farzand ehtiyojlariga",
    program_one_on_one_lessons_feature_3: "Uy vazifasi va nutqqa tez fikr",
    program_one_on_one_lessons_feature_4: "IELTS yoki maktab imtihonlari ixtiyoriy fokus",
    program_one_on_one_lessons_feature_5: "Onlayn yoki oflayn"
  }
};

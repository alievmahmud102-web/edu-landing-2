# EduTemplates

Магазин готовых шаблонов сайтов для образовательного бизнеса.
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase + Stripe + Resend.

## Быстрый старт

1. Установи зависимости: npm install
2. Скопируй .env.example в .env.local и заполни все ключи
3. Создай таблицу в Supabase — выполни SQL из supabase/migrations/001_orders.sql
4. Создай приватный бакет "templates" в Supabase Storage
5. Загрузи ZIP-архивы шаблонов в бакет с именами:
   - ege-center.zip
   - language-school.zip
   - it-courses.zip
   - kids-center.zip
   - tutor.zip
6. Настрой Stripeё Webhook на /api/webhook
   Событие: checkout.session.completed
7. npm run dev

## Деплой на Vercel

1. Подключи репозиторий в Vercel
2. Добавь все переменные из .env.example в Environment Variables
3. После деплоя обнови Stripe Webhook URL на продакшн-адрес

## Переменные окружения

NEXT_PUBLIC_SUPABASE_URL — URL проекта Supabase
SUPABASE_SERVICE_ROLE_KEY — сервисный ключ Supabase (не публичный)
STRIPE_SECRET_KEY — секретный ключ Stripe
STRIPE_WEBHOOK_SECRET — секрет для верификации вебхуков
RESEND_API_KEY — ключ Resend для отправки email
TELEGRAM_BOT_TOKEN — токен Telegram бота для уведомлений админа
TELEGRAM_ADMIN_CHAT_ID — chat_id куда слать уведомления
NEXT_PUBLIC_BASE_URL — базовый URL сайта (например https://edutemplates.com)

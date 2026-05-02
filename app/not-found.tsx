import { Button } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <svg
        className="mx-auto mb-6 h-16 w-16 text-gray-300"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9.75 9.25C9.75 7.95 10.79 7 12.03 7C13.26 7 14.25 7.85 14.25 9.08C14.25 10.92 12 11.25 12 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
      </svg>
      <h1 className="mb-3 text-2xl font-bold text-gray-900">404 — Страница не найдена</h1>
      <p className="mb-8 text-gray-500">
        Возможно, ссылка устарела или страница программы была перемещена.
      </p>
      <Button variant="primary" href="/">
        Вернуться к программам
      </Button>
    </div>
  );
}

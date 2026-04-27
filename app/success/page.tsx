import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { templates } from "@/data/templates";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase";

type SuccessPageProps = {
  searchParams: {
    session_id?: string;
  };
};

export default async function SuccessPage({
  searchParams
}: SuccessPageProps): Promise<JSX.Element> {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect("/");
  }

  let session: Awaited<ReturnType<typeof stripe.checkout.sessions.retrieve>>;

  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"]
    });
  } catch {
    redirect("/");
  }

  if (!session) {
    redirect("/");
  }

  if (session.payment_status !== "paid") {
    redirect("/");
  }

  const customerEmail = session.customer_email;
  const templateSlug = session.metadata?.template_slug;

  if (!customerEmail || !templateSlug) {
    redirect("/");
  }

  const template = templates.find((item) => item.slug === templateSlug);

  if (!template) {
    redirect("/");
    notFound();
  }

  const { data } = await supabaseAdmin.storage
    .from("templates")
    .createSignedUrl(`${templateSlug}.zip`, 3600);

  const downloadUrl = data?.signedUrl ?? null;

  return (
    <div className="mx-auto max-w-lg bg-white px-6 py-24 text-center">
      <div className="mb-6 mx-auto h-16 w-16 rounded-full bg-green-100 p-3">
        <svg
          className="h-full w-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 12.5L10 17L19 8"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 className="mb-3 text-3xl font-bold text-gray-900">Спасибо за покупку!</h1>
      <p className="mb-2 text-gray-500">Вы приобрели шаблон: {template.title}</p>
      <p className="mb-8 text-gray-500">
        Ссылка на скачивание отправлена на {customerEmail}
      </p>

      {downloadUrl ? (
        <a
          href={downloadUrl}
          download
          className="block w-full rounded-lg bg-blue-600 px-8 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
        >
          Скачать шаблон
        </a>
      ) : (
        <div className="block w-full cursor-not-allowed rounded-lg bg-gray-400 px-8 py-3 text-center font-medium text-white opacity-60">
          Ссылка недоступна — проверьте email
        </div>
      )}

      <p className="mb-8 mt-4 text-sm text-gray-400">
        Ссылка действительна 1 час. Письмо со ссылкой также отправлено на ваш
        email.
      </p>

      <Link
        href="/"
        className="text-sm text-blue-600 transition-colors hover:text-blue-700"
      >
        ← Вернуться в каталог
      </Link>
    </div>
  );
}

"use client";

import { useState } from "react";

import { useI18n } from "@/components/I18nProvider";

type BuyFormProps = {
  slug: string;
  displayPrice: string;
};

type CheckoutResponse = {
  url?: string;
};

export function BuyForm({ slug, displayPrice }: BuyFormProps) {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleBuy = async (): Promise<void> => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t("template_email_invalid"));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          templateSlug: slug,
          email
        })
      });

      if (response.ok) {
        const data: CheckoutResponse = await response.json();

        if (data.url) {
          window.location.href = data.url;
          return;
        }
      }

      setError(t("template_checkout_error"));
    } catch {
      setError(t("template_checkout_error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
          {t("template_contact_email_label")}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("template_placeholder_email")}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
      </div>

      {error ? <p className="text-sm text-red-500">{error}</p> : null}

      <button
        type="button"
        onClick={handleBuy}
        disabled={isLoading || email.trim() === ""}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading
          ? t("template_enroll_loading")
          : t("template_enroll_for").replace("{{price}}", displayPrice)}
      </button>
    </div>
  );
}

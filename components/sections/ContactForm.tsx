"use client";

import { useState, type FormEvent } from "react";

import { useI18n } from "@/components/I18nProvider";

export function ContactForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!name.trim() || !phone.trim() || !age.trim()) {
      setError(t("contact_error_required"));
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          age: age.trim()
        })
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setPhone("");
        setAge("");
        return;
      }

      setError(t("contact_error_submit"));
    } catch {
      setError(t("contact_error_submit"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 px-6 py-20">
      <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
        {t("contact_title")}
      </h2>
      <p className="mb-16 text-center text-slate-500">
        {t("contact_subtitle")}
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-2xl flex-col gap-4"
        noValidate
      >
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="contact-name">
            {t("contact_label_name")}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="contact-phone">
            {t("contact_label_phone")}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="contact-age">
            {t("contact_label_age")}
          </label>
          <input
            id="contact-age"
            name="age"
            type="text"
            inputMode="numeric"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
        </div>

        {error ? <p className="text-sm text-red-500">{error}</p> : null}
        {success ? (
          <p className="text-sm text-green-600">{t("contact_success")}</p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? t("contact_sending") : t("contact_submit")}
        </button>
      </form>
    </section>
  );
}

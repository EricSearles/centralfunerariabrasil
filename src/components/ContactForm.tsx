"use client";

import { FormEvent, useState } from "react";

import { attendanceOptions } from "@/data/contact";
import { createLeadMessage, createWhatsAppLink } from "@/lib/whatsapp";

type ContactFormProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  defaultType?: string;
  compact?: boolean;
};

type FormState = {
  name: string;
  whatsapp: string;
  city: string;
  state: string;
  serviceType: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  whatsapp: "",
  city: "",
  state: "",
  serviceType: "",
  notes: "",
};

export function ContactForm({
  title = "Solicitar orientação",
  description = "Preencha os dados essenciais para que nossa equipe possa analisar a necessidade da família e retornar com acolhimento e agilidade.",
  buttonLabel = "Enviar solicitação",
  defaultType = "",
  compact = false,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    serviceType: defaultType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const whatsappLink = createWhatsAppLink(
    createLeadMessage({
      name: form.name || "Não informado",
      whatsapp: form.whatsapp || "Não informado",
      city: form.city || "Não informado",
      state: form.state || "-",
      serviceType: form.serviceType || "Não informado",
      notes: form.notes || "-",
    }),
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Informe seu WhatsApp.";
    if (!form.city.trim()) nextErrors.city = "Informe sua cidade.";
    if (!form.serviceType.trim()) nextErrors.serviceType = "Selecione o tipo de atendimento.";

    setErrors(nextErrors);
    setFeedback(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Não foi possível enviar a solicitação.");
      }

      setFeedback({
        type: "success",
        message: result.message || "Solicitação enviada com sucesso.",
      });
      setForm({
        ...initialState,
        serviceType: defaultType,
      });
      setErrors({});
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível enviar a solicitação no momento.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-xl border border-brand-100 bg-brand-50/45 px-4 py-3 text-sm text-brand-700 outline-none transition placeholder:text-text-muted/70 focus:border-brand-400 focus:bg-white";

  return (
    <div className="rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-card sm:p-8">
      <div className="max-w-2xl">
        <h3 className="font-display text-3xl text-brand-700">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>
      </div>
      <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div className={compact ? "sm:col-span-2" : ""}>
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="name">
            Nome
          </label>
          <input
            className={inputClassName}
            id="name"
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Seu nome"
            value={form.name}
          />
          {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
        </div>
        <div className={compact ? "sm:col-span-2" : ""}>
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="whatsapp">
            WhatsApp
          </label>
          <input
            className={inputClassName}
            id="whatsapp"
            onChange={(event) =>
              setForm((current) => ({ ...current, whatsapp: event.target.value }))
            }
            placeholder="(11) 4172-0100"
            value={form.whatsapp}
          />
          {errors.whatsapp ? <p className="mt-2 text-sm text-red-600">{errors.whatsapp}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="city">
            Cidade
          </label>
          <input
            className={inputClassName}
            id="city"
            onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
            placeholder="Sua cidade"
            value={form.city}
          />
          {errors.city ? <p className="mt-2 text-sm text-red-600">{errors.city}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="state">
            Estado
          </label>
          <input
            className={inputClassName}
            id="state"
            onChange={(event) => setForm((current) => ({ ...current, state: event.target.value }))}
            placeholder="UF"
            value={form.state}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="serviceType">
            Tipo de atendimento
          </label>
          <select
            className={inputClassName}
            id="serviceType"
            onChange={(event) =>
              setForm((current) => ({ ...current, serviceType: event.target.value }))
            }
            value={form.serviceType}
          >
            <option value="">Selecione</option>
            {attendanceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceType ? (
            <p className="mt-2 text-sm text-red-600">{errors.serviceType}</p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-brand-700" htmlFor="notes">
            Observações
          </label>
          <textarea
            className={`${inputClassName} min-h-32 resize-y`}
            id="notes"
            onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
            placeholder="Descreva brevemente a necessidade da família, cidade de atendimento ou informações relevantes."
            value={form.notes}
          />
        </div>
        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Enviando..." : buttonLabel}
          </button>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-support-whatsapp/25 bg-support-whatsapp/10 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-support-whatsapp transition hover:bg-support-whatsapp/15"
            href={whatsappLink}
            rel="noreferrer"
            target="_blank"
          >
            Falar pelo WhatsApp
          </a>
        </div>
        {feedback ? (
          <div className="sm:col-span-2">
            <p
              className={`text-sm leading-7 ${
                feedback.type === "success" ? "text-brand-700" : "text-red-600"
              }`}
            >
              {feedback.message}
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
}
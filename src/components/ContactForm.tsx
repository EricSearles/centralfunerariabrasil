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
  title = "Solicitar atendimento pelo WhatsApp",
  description = "Preencha os dados essenciais e nós abriremos uma conversa com a mensagem organizada para agilizar o atendimento.",
  buttonLabel = "Abrir WhatsApp",
  defaultType = "",
  compact = false,
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    serviceType: defaultType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Informe seu WhatsApp.";
    if (!form.city.trim()) nextErrors.city = "Informe sua cidade.";
    if (!form.serviceType.trim()) nextErrors.serviceType = "Selecione o tipo de atendimento.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const link = createWhatsAppLink(
      createLeadMessage({
        name: form.name,
        whatsapp: form.whatsapp,
        city: form.city,
        state: form.state,
        serviceType: form.serviceType,
        notes: form.notes,
      }),
    );

    window.open(link, "_blank", "noopener,noreferrer");
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
            placeholder="(11) 93000-0000"
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
        <div className="sm:col-span-2">
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-support-whatsapp px-6 py-3 text-sm font-semibold tracking-[0.04em] text-white transition hover:brightness-95"
            type="submit"
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

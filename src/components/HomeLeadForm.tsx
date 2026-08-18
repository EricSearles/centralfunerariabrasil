"use client";

import { FormEvent, useState } from "react";
import { MessageCircleMore } from "lucide-react";

import { attendanceOptions, contact } from "@/data/contact";

type HomeLeadFormState = {
  name: string;
  whatsapp: string;
  email: string;
  serviceType: string;
};

const initialState: HomeLeadFormState = {
  name: "",
  whatsapp: "",
  email: "",
  serviceType: "",
};

export function HomeLeadForm() {
  const [form, setForm] = useState<HomeLeadFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof HomeLeadFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(
    null,
  );

  const inputClassName =
    "w-full rounded-2xl border border-white/90 bg-white px-4 py-3.5 text-sm text-brand-800 outline-none transition placeholder:text-brand-500/80 focus:border-brand-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(187,149,92,0.12)]";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof HomeLeadFormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Informe seu WhatsApp.";
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
        body: JSON.stringify({
          ...form,
          city: "-",
          state: "-",
          notes: "Solicitação enviada pelo formulário rápido da home.",
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Não foi possível enviar a solicitação.");
      }

      setFeedback({
        type: "success",
        message: result.message || "Solicitação enviada com sucesso.",
      });
      setForm(initialState);
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

  return (
    <div className="rounded-[2rem] border border-white/70 bg-[rgba(255,252,247,0.96)] p-5 text-brand-800 shadow-[0_28px_90px_rgba(11,37,51,0.26)] backdrop-blur-md md:p-7">
      <div className="flex items-start gap-3">
        <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
          <MessageCircleMore className="h-5 w-5" />
        </div>
        <div>
          <h2 className="font-display text-3xl leading-tight text-brand-800">Atendimento imediato 24h</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-brand-700/88">
            Envie as informações básicas e nossa equipe recebe sua solicitação por e-mail em
            <span className="font-semibold text-brand-800"> {contact.email}</span>.
          </p>
        </div>
      </div>

      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700" htmlFor="home-name">
            Nome completo
          </label>
          <input
            className={inputClassName}
            id="home-name"
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder="Seu nome"
            value={form.name}
          />
          {errors.name ? <p className="mt-2 text-sm font-medium text-red-700">{errors.name}</p> : null}
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700" htmlFor="home-whatsapp">
            Telefone / WhatsApp
          </label>
          <input
            className={inputClassName}
            id="home-whatsapp"
            onChange={(event) =>
              setForm((current) => ({ ...current, whatsapp: event.target.value }))
            }
            placeholder="(11) 4172-0100"
            value={form.whatsapp}
          />
          {errors.whatsapp ? <p className="mt-2 text-sm font-medium text-red-700">{errors.whatsapp}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700" htmlFor="home-email">
            E-mail
          </label>
          <input
            className={inputClassName}
            id="home-email"
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="voce@email.com"
            type="email"
            value={form.email}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-brand-700" htmlFor="home-serviceType">
            Tipo de serviço
          </label>
          <select
            className={inputClassName}
            id="home-serviceType"
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
          {errors.serviceType ? <p className="mt-2 text-sm font-medium text-red-700">{errors.serviceType}</p> : null}
        </div>
        <div className="sm:col-span-2 space-y-3 pt-1">
          <button
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-brand-700 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Enviando..." : "Solicitar contato"}
          </button>
          <p className="text-center text-xs leading-5 text-brand-700/78">
            Seus dados são enviados com sigilo para nossa equipe de atendimento.
          </p>
        </div>
        {feedback ? (
          <div className="sm:col-span-2">
            <p className={`text-sm font-medium leading-6 ${feedback.type === "success" ? "text-brand-800" : "text-red-700"}`}>
              {feedback.message}
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
}

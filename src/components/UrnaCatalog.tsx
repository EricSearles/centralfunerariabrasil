"use client";

import Image from "next/image";
import { MessageCircle, PhoneCall, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";
import { contact } from "@/data/contact";
import type { UrnaFilter, UrnaItem } from "@/data/urnas";
import { urnaFilterOptions } from "@/data/urnas";
import { createWhatsAppLink } from "@/lib/whatsapp";

type UrnaCatalogProps = {
  items: UrnaItem[];
};

export function UrnaCatalog({ items }: UrnaCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<"todos" | UrnaFilter>("todos");
  const [selectedUrna, setSelectedUrna] = useState<UrnaItem | null>(null);

  useEffect(() => {
    if (!selectedUrna) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedUrna(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedUrna]);

  const filteredItems =
    activeFilter === "todos" ? items : items.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="rounded-[1.8rem] border border-brand-100 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,246,241,0.92))] p-5 shadow-card sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
              Navegação por perfil
            </p>
            <p className="mt-2 text-sm leading-7 text-text-muted">
              {filteredItems.length} modelo(s) visível(is) com disponibilidade sempre confirmada pela equipe.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {urnaFilterOptions.map((option) => {
              const active = option.value === activeFilter;

              return (
                <button
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-brand-800 bg-brand-800 text-white shadow-sm"
                      : "border-brand-200 bg-white text-brand-700 hover:border-brand-300 hover:bg-brand-50"
                  }`}
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => {
          const whatsappLink = createWhatsAppLink(
            `${contact.whatsappDefaultMessage}\n\nGostaria de consultar disponibilidade da urna ${item.name} - ${item.reference}.`,
          );

          return (
            <article
              className="group overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-soft"
              key={item.slug}
            >
              <button
                aria-label={`Ver detalhes da urna ${item.name}`}
                className="relative block aspect-[4/5] w-full overflow-hidden bg-brand-50 text-left"
                onClick={() => setSelectedUrna(item)}
                type="button"
              >
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(11,37,51,0.12))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur">
                  {item.collectionLabel}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/72 via-brand-900/24 to-transparent p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>
              </button>

              <div className="space-y-4 p-6">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <p className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {item.reference}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-[2rem] leading-tight text-brand-700">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
                </div>

                <div className="rounded-2xl border border-brand-100 bg-[linear-gradient(180deg,rgba(248,246,241,0.95),rgba(255,255,255,1))] px-4 py-3 text-sm text-brand-700">
                  Disponível sob consulta
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-200 bg-white px-5 py-3 text-sm font-semibold tracking-[0.04em] text-brand-800 transition hover:bg-brand-50"
                    onClick={() => setSelectedUrna(item)}
                    type="button"
                  >
                    Ver detalhes
                  </button>
                  <Button className="flex-1" external href={whatsappLink} variant="whatsapp">
                    Consultar disponibilidade
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selectedUrna ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-900/65 p-4 backdrop-blur-sm"
          onClick={() => setSelectedUrna(null)}
          role="dialog"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,246,241,0.97))] shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Fechar detalhes"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-sm"
              onClick={() => setSelectedUrna(null)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-brand-50">
                <Image
                  alt={selectedUrna.alt}
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={selectedUrna.image}
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {selectedUrna.categoryLabel}
                  </span>
                  <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {selectedUrna.collectionLabel}
                  </span>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-brand-400">
                  {selectedUrna.reference}
                </p>
                <h3 className="mt-3 font-display text-4xl leading-tight text-brand-700 sm:text-5xl">
                  {selectedUrna.name}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted">
                  {selectedUrna.description}
                </p>

                <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 px-5 py-4 text-sm leading-7 text-brand-700">
                  A equipe confirma acabamento, disponibilidade, localidade de atendimento e referência final durante a orientação no WhatsApp.
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="sm:flex-1"
                    external
                    href={createWhatsAppLink(
                      `${contact.whatsappDefaultMessage}\n\nGostaria de consultar disponibilidade da urna ${selectedUrna.name} - ${selectedUrna.reference}.`,
                    )}
                    variant="whatsapp"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Consultar no WhatsApp
                    </span>
                  </Button>
                  <Button
                    className="sm:flex-1"
                    external
                    href={`tel:+${contact.phoneRaw}`}
                    variant="secondary"
                  >
                    <span className="inline-flex items-center gap-2">
                      <PhoneCall className="h-4 w-4" />
                      Ligar agora
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

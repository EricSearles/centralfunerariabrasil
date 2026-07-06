import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { highlightedUrnas } from "@/data/urnas";

const homeHighlights = highlightedUrnas.slice(0, 4);

export function UrnaHighlights() {
  const [featured, ...secondary] = homeHighlights;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f8f6f1_52%,#fff_100%)] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(16,42,67,0.08),transparent_30%)]" />

      <Container>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            description="Selecionamos alguns acabamentos e linhas de homenagem para orientar a família com mais clareza, sempre com confirmação de disponibilidade pelo atendimento."
            eyebrow="Urnas e homenagens"
            title="Opções para a cerimônia"
          />

          <div className="max-w-sm rounded-[1.5rem] border border-brand-100 bg-white/90 p-5 shadow-card backdrop-blur">
            <p className="text-sm leading-7 text-text-muted">
              Conheça alguns modelos e acabamentos com consulta humanizada pelo atendimento.
            </p>
            <div className="mt-4">
              <Button href="/urnas-funerarias" variant="secondary">
                Ver opções de urnas
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-12 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          {featured ? (
            <article className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white shadow-card">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[420px] bg-brand-50">
                  <Image
                    alt={featured.alt}
                    className="object-cover"
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    src={featured.image}
                  />
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-9">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                        {featured.reference}
                      </span>
                      <span className="rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                        {featured.categoryLabel}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-4xl leading-tight text-brand-700 sm:text-[3rem]">
                      {featured.name}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
                      {featured.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-4 text-sm leading-7 text-brand-700">
                      Disponível sob consulta com orientação sobre localidade, acabamento e cerimônia.
                    </div>
                    <Button href="/urnas-funerarias" variant="primary">
                      Consultar modelo
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {secondary.map((item) => (
              <article
                className="overflow-hidden rounded-[1.6rem] border border-brand-100 bg-white shadow-card"
                key={item.slug}
              >
                <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative aspect-[4/5] bg-brand-50 sm:aspect-auto sm:min-h-[220px]">
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
                      src={item.image}
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                        {item.reference}
                      </span>
                      <span className="rounded-full border border-brand-100 bg-white px-3 py-1 text-[11px] font-semibold text-brand-700">
                        {item.categoryLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-[2rem] leading-tight text-brand-700">{item.name}</h3>
                    <p className="text-sm leading-7 text-text-muted">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Consulta acolhedora pelo WhatsApp 24h",
            "Modelos e linhas para sepultamento, cremação e homenagens",
            "Disponibilidade confirmada conforme atendimento e localidade",
          ].map((item) => (
            <div
              className="rounded-[1.35rem] border border-brand-100 bg-white/88 px-5 py-4 text-sm leading-7 text-brand-700 shadow-card backdrop-blur"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

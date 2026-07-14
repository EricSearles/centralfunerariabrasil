import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { UrnaCatalog } from "@/components/UrnaCatalog";
import { contact } from "@/data/contact";
import { catalogReferenceHighlights, highlightedUrnas, urnas } from "@/data/urnas";

const pageUrl = `${contact.siteUrl}/urnas-funerarias`;

export const metadata: Metadata = {
  title: "Urnas Funerárias | Modelos sob Consulta | Central Funerária Brasil",
  description:
    "Conheça opções de urnas funerárias para cerimônias de despedida, cremação e sepultamento. Atendimento 24h com orientação da Central Funerária Brasil.",
  alternates: {
    canonical: "/urnas-funerarias",
  },
  keywords: [
    "urnas funerárias",
    "caixões funerários",
    "modelos de urnas funerárias",
    "urna para cremação",
    "urna para sepultamento",
    "catálogo de urnas funerárias",
    "Central Funerária Brasil",
  ],
  openGraph: {
    title: "Urnas Funerárias | Modelos sob Consulta | Central Funerária Brasil",
    description:
      "Conheça modelos de urnas funerárias para cerimônias de despedida, cremação e sepultamento, com orientação humanizada da Central Funerária Brasil.",
    url: pageUrl,
    siteName: contact.companyName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/urnas/consolare/urna-almandina-delicata-ref-3009.webp",
        alt: "Urna funerária clara com crucifixo dourado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urnas Funerárias | Modelos sob Consulta | Central Funerária Brasil",
    description:
      "Modelos de urnas funerárias para cerimônias de despedida, cremação e sepultamento com atendimento 24h.",
    images: ["/images/urnas/consolare/urna-almandina-delicata-ref-3009.webp"],
  },
};

const faqItems = [
  {
    question: "As urnas têm pronta entrega?",
    answer:
      "Alguns acabamentos podem ter disponibilidade imediata, mas a confirmação depende da localidade, do horário do atendimento e da referência escolhida.",
  },
  {
    question: "Posso escolher o modelo pelo site?",
    answer:
      "O site apresenta alguns modelos para consulta. A definição final é feita com a equipe, que confirma disponibilidade, acabamento e adequação à cerimônia.",
  },
  {
    question: "Os modelos podem variar conforme disponibilidade?",
    answer:
      "Sim. As linhas exibidas servem como referência, e a equipe informa as alternativas disponíveis no momento do atendimento.",
  },
  {
    question: "A Central Funerária Brasil auxilia na escolha?",
    answer:
      "Sim. Nossa equipe orienta a família conforme o tipo de despedida, necessidade religiosa, localidade e perfil da cerimônia.",
  },
  {
    question: "Posso solicitar orientação pelo WhatsApp?",
    answer:
      "Sim. O WhatsApp é o canal mais rápido para consultar disponibilidade, entender acabamentos e receber orientação imediata.",
  },
];

const howToChooseItems = [
  "Cerimônia e tipo de despedida",
  "Preferência por acabamento claro ou escuro",
  "Necessidade de homenagem religiosa ou memorial",
  "Disponibilidade confirmada no momento do atendimento",
];

export default function UrnasFunerariasPage() {
  const heroHighlights = highlightedUrnas.slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: contact.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Urnas funerárias",
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de urnas funerárias",
    itemListElement: urnas.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      image: `${contact.siteUrl}${item.image}`,
      url: pageUrl,
    })),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        type="application/ld+json"
      />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f6f1_0%,#fff_100%)] pb-16 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,155,94,0.16),transparent_34%),radial-gradient(circle_at_center_right,rgba(16,42,67,0.07),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] pattern-grid opacity-25" />

        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Urnas funerárias" },
                ]}
              />

              <div className="mt-6 inline-flex rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700 backdrop-blur">
                Modelos sob consulta
              </div>

              <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-brand-700 sm:text-6xl">
                Urnas funerárias
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
                Modelos selecionados para cerimônias de despedida, sepultamento,{" "}
                <Link className="font-semibold text-brand-700 transition hover:text-brand-800" href="/servicos#cremacao">
                  cremação
                </Link>{" "}
                e homenagens familiares, com disponibilidade sob consulta.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button external href={contact.whatsappUrlWithMessage} variant="whatsapp">
                  Falar no WhatsApp
                </Button>
                <Button external href={`tel:+${contact.phoneRaw}`} variant="secondary">
                  Ligar agora
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-brand-100 bg-white/92 px-5 py-4 shadow-card backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Atendimento</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">Orientação humana 24 horas.</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-white/92 px-5 py-4 shadow-card backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Disponibilidade</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">Confirmação conforme localidade.</p>
                </div>
                <div className="rounded-2xl border border-brand-100 bg-white/92 px-5 py-4 shadow-card backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Acabamentos</p>
                  <p className="mt-2 text-sm leading-7 text-text-muted">Modelos, linhas e acabamentos reais.</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-brand-100 bg-white/94 p-4 shadow-card backdrop-blur sm:p-6">
              <div className="grid gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-brand-50">
                  <Image
                    alt="Destaque de urna funerária clara com crucifixo dourado"
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src="/images/urnas/consolare/urna-almandina-delicata-ref-3009.webp"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-900/70 via-brand-900/20 to-transparent p-5">
                    <span className="rounded-full border border-white/20 bg-white/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                      Consulta guiada
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {heroHighlights.map((item) => (
                    <div
                      className="rounded-[1.35rem] border border-brand-100 bg-brand-50/70 p-3"
                      key={item.slug}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white">
                        <Image
                          alt={item.alt}
                          className="object-cover"
                          fill
                          loading="lazy"
                          sizes="(max-width: 1024px) 33vw, 15vw"
                          src={item.image}
                        />
                      </div>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-400">
                        {item.reference}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-brand-700">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-100 bg-brand-50 px-4 py-4 text-sm leading-7 text-brand-700">
                  As imagens abaixo representam modelos e acabamentos reais recebidos pela equipe.
                </div>
                <div className="rounded-2xl border border-brand-100 bg-brand-50 px-4 py-4 text-sm leading-7 text-brand-700">
                  A referência final é confirmada no atendimento, junto com o suporte para{" "}
                  <Link className="font-semibold text-brand-800 transition hover:text-brand-700" href="/servicos#sepultamento">
                    sepultamento
                  </Link>{" "}
                  ou{" "}
                  <Link className="font-semibold text-brand-800 transition hover:text-brand-700" href="/servicos#cremacao">
                    cremação
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2rem] border border-brand-100 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,246,241,0.94))] p-6 shadow-card lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <SectionTitle
                  description="A escolha da urna pode variar conforme cerimônia, acabamento, disponibilidade, localidade e necessidade da família. Nossa equipe confirma cada opção diretamente no atendimento."
                  eyebrow="Orientação da equipe"
                  title="Modelos e referências para a cerimônia"
                />
                <p className="mt-6 text-base leading-8 text-text-muted">
                  Trabalhamos com referências enviadas em catálogo e com imagens reais de acabamentos recebidos pela equipe.
                  Entre as linhas consultadas estão opções como Água Marinha, Angelita Bright, Lunar, Lázuli, Ágata,
                  Amazonita Constelação e Turmalina, sempre apresentadas com acolhimento, discrição e confirmação de
                  disponibilidade.
                </p>
                <p className="mt-4 text-base leading-8 text-text-muted">
                  Se a família precisar de um apoio mais amplo, a equipe também orienta sobre{" "}
                  <Link className="font-semibold text-brand-700 transition hover:text-brand-800" href="/servicos">
                    serviço funerário completo
                  </Link>{" "}
                  e recebe solicitações pela página de{" "}
                  <Link className="font-semibold text-brand-700 transition hover:text-brand-800" href="/contato">
                    contato
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-brand-100 bg-white/86 p-5 shadow-card backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
                  Referências consultadas
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {catalogReferenceHighlights.map((item) => (
                    <span
                      className="rounded-full border border-brand-100 bg-white px-4 py-2 text-sm text-brand-700"
                      key={`${item.name}-${item.reference}`}
                    >
                      {item.name} <strong>{item.reference}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionTitle
                description="Reunimos linhas, acabamentos e estilos de homenagem para ajudar a família antes do contato com a equipe."
                eyebrow="Atendimento orientado"
                title="Opções para despedida, cremação e sepultamento"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.6rem] border border-brand-100 bg-brand-50/70 p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">Cerimônia</p>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  A equipe orienta conforme velório, homenagem religiosa, cerimônia reservada e formato da despedida.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-brand-100 bg-brand-50/70 p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">Localidade</p>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  A disponibilidade pode variar conforme região, horário do atendimento e logística necessária.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-brand-100 bg-brand-50/70 p-5 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-400">Orientação</p>
                <p className="mt-3 text-sm leading-7 text-text-muted">
                  O contato pelo WhatsApp agiliza a consulta e ajuda a família a decidir com mais clareza e serenidade.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            description="Filtre por acabamento ou perfil de homenagem para consultar os modelos com mais clareza. As opções abaixo permanecem sempre sujeitas à confirmação da equipe."
            eyebrow="Modelos sob consulta"
            title="Modelos sob consulta"
          />
          <div className="mt-10">
            <UrnaCatalog items={urnas} />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionTitle
                description="A equipe ajuda a família a entender acabamento, estilo de homenagem, localidade do atendimento e adequação ao tipo de cerimônia."
                eyebrow="Como escolher"
                title="Como escolher a urna funerária"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {howToChooseItems.map((item) => (
                <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card" key={item}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-base leading-7 text-text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            description="Reunimos as dúvidas mais comuns para facilitar a orientação da família antes do contato."
            eyebrow="Perguntas frequentes"
            title="FAQ sobre urnas funerárias"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <article className="rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-card" key={item.question}>
                <h2 className="font-display text-[1.9rem] leading-tight text-brand-700">{item.question}</h2>
                <p className="mt-4 text-sm leading-7 text-text-muted">{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-brand-800 px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <SectionTitle
                description="Nossa equipe está disponível para orientar sua família com respeito, agilidade e discrição."
                eyebrow="Atendimento imediato"
                inverse
                title="Precisa de atendimento agora?"
              />
              <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                <div className="flex items-center gap-3 text-white/80">
                  <PhoneCall className="h-5 w-5 text-brand-400" />
                  <span>Telefone e WhatsApp: {contact.phone}</span>
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button external href={contact.whatsappUrlWithMessage} variant="whatsapp">
                    WhatsApp
                  </Button>
                  <Button
                    className="border-white/20 bg-white/10 text-white hover:bg-white/15"
                    external
                    href={`tel:+${contact.phoneRaw}`}
                    variant="ghost"
                  >
                    Ligar agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

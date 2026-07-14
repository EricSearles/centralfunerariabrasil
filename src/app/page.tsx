import type { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { UrnaHighlights } from "@/components/UrnaHighlights";
import { contact } from "@/data/contact";
import { featuredServices, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Central Funerária Brasil | Atendimento Funerário 24 Horas",
  description: contact.seoDescription,
};

const featuredBlocks = [
  {
    title: "Traslado funerário nacional e internacional",
    description:
      "Organização e suporte para traslado terrestre, interestadual e internacional, com orientação documental e atendimento 24 horas.",
    href: "/traslado-funerario",
    label: "Solicitar traslado",
    imagePath: "/images/transportes/transporte-aereo-funerario-exterior-1.jpeg",
  },
  {
    title: "Transporte aéreo funerário",
    description:
      "Coordenação de transporte funerário aéreo, incluindo logística aeroportuária, transporte de esquife e apoio às famílias em deslocamentos nacionais e internacionais.",
    href: "/transporte-aereo-funerario",
    label: "Falar sobre transporte aéreo",
    imagePath: "/images/transportes/transporte-aereo-funerario-interior.jpeg",
  },
  {
    title: "Planos funerários para famílias e empresas",
    description:
      "Conheça opções de planos individuais, familiares e empresariais, com cobertura e suporte conforme a necessidade.",
    href: "/planos-funerarios",
    label: "Solicitar orientação sobre planos",
    imagePath: "/images/home/elderly-support.jpg",
  },
  {
    title: "Velório online sob solicitação",
    description:
      "Possibilidade de transmissão privada, mensagens de homenagem e compartilhamento restrito para familiares e amigos que não puderam estar presentes.",
    href: "/velorio-online",
    label: "Saber mais",
    imagePath: "/images/home/apoio-familiar.jpg",
  },
];

const visualMoments = [
  {
    title: "Acolhimento e orientação",
    description:
      "Nossa equipe conduz cada etapa com escuta atenta, linguagem clara e suporte responsável para a família.",
    imagePath: "/images/home/maos-acolhimento-familiar.jpg",
    badge: "Atendimento",
  },
  {
    title: "Homenagens e ambientação",
    description:
      "Composições florais, ambientação serena e apresentação cuidadosa para cerimônias de despedida.",
    imagePath: "/images/home/memorial.jpg",
    badge: "Homenagens",
  },
  {
    title: "Ambiente para despedida",
    description:
      "Imagens de apoio ajudam a apresentar estrutura, serenidade e cuidado sem sobrecarregar a navegação.",
    imagePath: "/images/home/interior-capela.jpg",
    badge: "Cerimônia",
  },
];

export default function HomePage() {
  const homeServiceHighlights = services
    .filter((service) => featuredServices.includes(service.title))
    .slice(0, 6);
  const [primaryMoment, ...secondaryMoments] = visualMoments;

  return (
    <>
      <Hero
        badges={[
          "Atendimento 24 horas",
          "Suporte humanizado",
          "Traslado nacional e internacional",
          "Assistência familiar",
        ]}
        backgroundImagePath="/images/funeraria-imagem-1.png"
        description="Suporte imediato, humanizado e respeitoso para orientar sua família em momentos difíceis."
        hideSideImage
        imagePath="/images/funeraria-imagem-5.png"
        title="Atendimento funerário 24 horas em todo o Brasil"
      />

      <section className="border-y border-brand-100 bg-white py-5">
        <Container>
          <div className="flex flex-col gap-3 text-sm text-brand-700 md:flex-row md:items-center md:justify-between">
            <p className="font-medium">
              Atendimento imediato 24 horas para orientar sua família com respeito e clareza.
            </p>
            <p className="text-text-muted">
              Cobertura nacional conforme disponibilidade operacional e necessidade do atendimento.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              description="A Central Funerária Brasil oferece suporte humanizado para orientar famílias em situações de urgência, com atendimento 24 horas e encaminhamento adequado para cada necessidade."
              eyebrow="Como podemos ajudar"
              title="Serviços funerários com orientação clara"
            />
            <Button href="/servicos" variant="secondary">
              Ver todos os serviços
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServiceHighlights.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="space-y-10">
          {featuredBlocks.map((block, index) => (
            <div
              className="grid gap-10 overflow-hidden rounded-[2rem] border border-brand-100 bg-white p-6 shadow-card lg:grid-cols-2 lg:p-10"
              key={block.title}
            >
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
                  Soluções especializadas
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-brand-700">
                  {block.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
                  {block.description}
                </p>
                <div className="mt-8">
                  <Button href={block.href} variant="primary">
                    {block.label}
                  </Button>
                </div>
              </div>
              <ImagePlaceholder
                className={index % 2 === 1 ? "lg:order-1" : ""}
                imagePath={block.imagePath}
                label={block.title}
              />
            </div>
          ))}
        </Container>
      </section>

      <UrnaHighlights />

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionTitle
                description="Reunimos acolhimento, homenagens e estrutura em uma única área visual, evitando repetição e mantendo a home mais clara."
                eyebrow="Estrutura e homenagens"
                title="Cuidado, serenidade e orientação em uma mesma leitura"
              />
              <p className="mt-6 text-base leading-8 text-text-muted">
                Selecionamos referências institucionais e visuais de apoio para apresentar atendimento
                humanizado, ambientação serena e opções sob consulta de maneira respeitosa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Atendimento com escuta acolhedora",
                  "Homenagens com apresentação serena",
                  "Orientação prática em todas as etapas",
                  "Cobertura conforme disponibilidade operacional",
                  "Urnas e acabamentos com consulta orientada",
                ].map((item) => (
                  <div
                    className="rounded-full border border-brand-100 bg-white px-4 py-2 text-sm text-brand-700 shadow-card"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/contato" variant="secondary">
                  Falar com atendimento
                </Button>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {primaryMoment ? (
                <article className="overflow-hidden rounded-[1.8rem] border border-brand-100 bg-white shadow-card sm:row-span-2">
                  <div className="relative min-h-[420px]">
                    <Image
                      alt={primaryMoment.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      src={primaryMoment.imagePath}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,33,0.06)_0%,rgba(10,23,33,0.48)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex rounded-full border border-white/35 bg-white/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {primaryMoment.badge}
                      </span>
                      <h3 className="mt-4 font-display text-[2.4rem] leading-tight text-white">
                        {primaryMoment.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-7 text-white/84">
                        {primaryMoment.description}
                      </p>
                    </div>
                  </div>
                </article>
              ) : null}

              {secondaryMoments.map((item) => (
                <article
                  className="overflow-hidden rounded-[1.6rem] border border-brand-100 bg-white shadow-card"
                  key={item.title}
                >
                  <div className="relative min-h-[205px]">
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                      src={item.imagePath}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,33,0.04)_0%,rgba(10,23,33,0.38)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-flex rounded-full border border-white/35 bg-white/16 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                        {item.badge}
                      </span>
                      <h3 className="mt-3 font-display text-[1.9rem] leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/82">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        description="Nossa equipe está disponível 24 horas para orientar você."
        title="Precisa de atendimento funerário agora?"
      />
    </>
  );
}

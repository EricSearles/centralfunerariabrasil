import type { Metadata } from "next";
import {
  CheckCircle2,
  FileText,
  HeartHandshake,
  MapPinned,
  PhoneCall,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { BenefitCard } from "@/components/BenefitCard";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { InfoCard } from "@/components/InfoCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { contact } from "@/data/contact";
import { featuredServices, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Central Funerária Brasil | Atendimento Funerário 24 Horas",
  description: contact.seoDescription,
};

const immediateCards = [
  {
    icon: PhoneCall,
    title: "Atendimento 24h",
    description: "Equipe disponível para orientar de forma imediata e acolhedora a qualquer hora.",
  },
  {
    icon: MapPinned,
    title: "Remoção funerária",
    description: "Suporte para deslocamento, encaminhamento e logística funerária com respeito.",
  },
  {
    icon: FileText,
    title: "Assistência documental",
    description: "Orientação sobre documentos, etapas e encaminhamentos necessários.",
  },
  {
    icon: UsersRound,
    title: "Suporte familiar",
    description: "Acolhimento e clareza para apoiar decisões práticas em momentos sensíveis.",
  },
];

const featuredBlocks = [
  {
    title: "Traslado funerário nacional e internacional",
    description:
      "Organização e suporte para traslado terrestre, interestadual e internacional, com orientação documental e atendimento 24 horas.",
    href: "/traslado-funerario",
    label: "Solicitar traslado",
    imagePath: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Transporte aéreo funerário",
    description:
      "Coordenação de transporte funerário aéreo, incluindo logística aeroportuária, transporte de esquife e apoio às famílias em deslocamentos nacionais e internacionais.",
    href: "/transporte-aereo-funerario",
    label: "Falar sobre transporte aéreo",
    imagePath: "/images/funeraria-background-image-1.png",
  },
  {
    title: "Planos funerários para famílias e empresas",
    description:
      "Conheça opções de planos individuais, familiares e empresariais, com cobertura e suporte conforme a necessidade.",
    href: "/planos-funerarios",
    label: "Solicitar orientação sobre planos",
    imagePath: "/images/funeraria-imagem4.png",
  },
  {
    title: "Velório online sob solicitação",
    description:
      "Possibilidade de transmissão privada, mensagens de homenagem e compartilhamento restrito para familiares e amigos que não puderam estar presentes.",
    href: "/velorio-online",
    label: "Saber mais",
    imagePath: "/images/funeraria-imagem-1.png",
  },
];

export default function HomePage() {
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

      <section className="py-24">
        <Container>
          <SectionTitle
            description="A Central Funerária Brasil oferece suporte humanizado para orientar famílias em situações de urgência, com atendimento 24 horas e encaminhamento adequado para cada necessidade."
            eyebrow="Como podemos ajudar"
            title="Em momentos difíceis, conte com orientação clara e acolhimento"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {immediateCards.map((item) => (
              <InfoCard
                description={item.description}
                icon={item.icon}
                key={item.title}
                title={item.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              description="Estrutura preparada para acolher diferentes necessidades com cuidado, orientação e atendimento contínuo."
              eyebrow="Serviços funerários"
              title="Serviços funerários completos"
            />
            <Button href="/servicos" variant="secondary">
              Ver todos os serviços
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services
              .filter((service) => featuredServices.includes(service.title))
              .map((service) => (
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

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionTitle
                description="Nosso compromisso é oferecer orientação clara, atendimento acolhedor e suporte responsável em todas as etapas do serviço funerário."
                eyebrow="Institucional"
                title="Atendimento humanizado, respeito e cuidado"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                description="Escuta atenta, linguagem respeitosa e suporte sereno para cada família."
                icon={HeartHandshake}
                title="Atendimento humanizado"
              />
              <InfoCard
                description="Orientação prática desde os primeiros passos até a finalização do serviço."
                icon={CheckCircle2}
                title="Orientação em todas as etapas"
              />
              <InfoCard
                description="Capacidade de apoio em diferentes regiões, conforme disponibilidade operacional."
                icon={ShieldCheck}
                title="Cobertura nacional"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <BenefitCard
              description="Disponibilidade imediata para orientar famílias em situações de urgência."
              icon={PhoneCall}
              title="Atendimento 24h"
            />
            <BenefitCard
              description="Acolhimento responsável com comunicação clara e respeitosa em cada contato."
              icon={HeartHandshake}
              title="Cuidado com a família"
            />
            <BenefitCard
              description="Estrutura pensada para encaminhar demandas em diversas regiões do país."
              icon={MapPinned}
              title="Cobertura nacional"
            />
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

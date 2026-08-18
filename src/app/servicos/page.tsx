import type { Metadata } from "next";
import { CheckCircle2, Clock3, Mail, Route } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InternalHero } from "@/components/InternalHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { contact } from "@/data/contact";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços Funerários | Central Funerária Brasil",
  description:
    "Conheça os serviços funerários da Central Funerária Brasil, com atendimento 24 horas, remoção, traslado, cremação, sepultamento e assistência documental.",
};

const howItWorks = [
  {
    icon: Clock3,
    title: "Primeiro contato",
    description: "A família recebe orientação inicial e apoio para entender o atendimento necessário.",
  },
  {
    icon: Route,
    title: "Encaminhamento",
    description: "Nossa equipe organiza a logística e direciona as etapas conforme a necessidade do caso.",
  },
  {
    icon: CheckCircle2,
    title: "Acompanhamento",
    description: "Seguimos com suporte documental, operacional e humano durante todo o processo.",
  },
];

export default function ServicosPage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços" },
        ]}
        description="Conheça os principais serviços funerários da Central Funerária Brasil. Atuamos com acolhimento, orientação e suporte prático para famílias que precisam de atendimento imediato ou planejamento prévio."
        imagePath="/images/funeraria-imagem-3.png"
        title="Serviços funerários"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Cada serviço foi organizado para transmitir clareza, confiança e suporte em todas as etapas necessárias."
            eyebrow="Nossos serviços"
            title="Atendimento completo para diferentes necessidades"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                id={service.href.includes("#") ? service.href.split("#")[1] : undefined}
                key={service.title}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            description="Nosso fluxo é pensado para oferecer orientação rápida e acolhimento responsável."
            eyebrow="Como funciona"
            title="Como funciona o atendimento"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card" key={item.title}>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-[1.7rem] leading-tight text-brand-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionTitle
                description="Se você já sabe o tipo de atendimento desejado, pode enviar os dados principais para que nossa equipe receba a solicitação de cotação por e-mail."
                eyebrow="Solicitação rápida"
                title="Solicite uma cotação da nossa equipe"
              />
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-5 py-4 text-sm text-text-muted shadow-card">
                <Mail className="h-5 w-5 text-brand-400" />
                Solicitações de cotação e atendimento são encaminhadas para {contact.email}.
              </div>
            </div>
            <QuoteForm defaultType="Atendimento funerário 24h" />
          </div>
        </Container>
      </section>

      <CTASection
        description="Nossa equipe está pronta para orientar sobre remoção, cremação, sepultamento, documentação e cerimônia."
        secondaryExternal
        secondaryHref={`mailto:${contact.email}`}
        secondaryLabel="Enviar e-mail"
        title="Precisa de ajuda para organizar o atendimento?"
      />
    </>
  );
}

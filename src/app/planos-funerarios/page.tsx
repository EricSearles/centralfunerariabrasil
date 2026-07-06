import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, UsersRound, Wallet } from "lucide-react";

import { BenefitCard } from "@/components/BenefitCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InternalHero } from "@/components/InternalHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";
import { planOptions } from "@/data/services";
import { iconMap } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Planos Funerários | Central Funerária Brasil",
  description:
    "Conheça planos funerários individuais, familiares e empresariais com atendimento orientado e suporte conforme a necessidade.",
};

const benefits = [
  {
    title: "Prevenção financeira",
    description: "Mais previsibilidade para organizar custos e decisões com antecedência.",
    icon: Wallet,
  },
  {
    title: "Atendimento orientado",
    description: "Suporte consultivo para entender coberturas e possibilidades com clareza.",
    icon: ShieldCheck,
  },
  {
    title: "Suporte em momentos difíceis",
    description: "Estrutura para reduzir o impacto operacional diante de uma necessidade real.",
    icon: HeartHandshake,
  },
  {
    title: "Cobertura familiar",
    description: "Alternativas voltadas à proteção de uma pessoa, da família ou de colaboradores.",
    icon: UsersRound,
  },
];

export default function PlanosFunerariosPage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Planos Funerários" },
        ]}
        description="Conheça opções de planos individuais, familiares e empresariais com atendimento orientado e possibilidades de cobertura conforme a necessidade."
        imagePath="/images/funeraria-imagem4.png"
        title="Planos funerários"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Os planos podem ser apresentados conforme o perfil da família ou da empresa, sempre com explicação objetiva e acolhedora."
            eyebrow="Tipos de planos"
            title="Opções para diferentes perfis"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {planOptions.map((plan) => {
              const Icon = iconMap[plan.icon];

              return (
                <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card" key={plan.title}>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-[1.7rem] leading-tight text-brand-700">{plan.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-muted">{plan.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            description="As vantagens estão relacionadas à previsibilidade, ao suporte consultivo e à tranquilidade de contar com orientação estruturada."
            eyebrow="Benefícios"
            title="Por que conhecer um plano funerário"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <BenefitCard
                description={benefit.description}
                icon={benefit.icon}
                key={benefit.title}
                title={benefit.title}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <QuoteForm defaultType="Planos funerários" />
        </Container>
      </section>

      <CTASection
        description="Se desejar entender as possibilidades de plano, nossa equipe pode orientar pelo WhatsApp."
        title="Solicite orientação sobre planos funerários"
      />
    </>
  );
}

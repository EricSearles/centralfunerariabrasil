import type { Metadata } from "next";
import { Globe2, Plane, PlaneTakeoff, UsersRound } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { InternalHero } from "@/components/InternalHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";
import { airTransportHighlights } from "@/data/services";

export const metadata: Metadata = {
  title: "Transporte Aéreo Funerário | Central Funerária Brasil",
  description:
    "Suporte para transporte aéreo funerário com logística aeroportuária, documentação e soluções nacionais e internacionais.",
};

export default function TransporteAereoFunerarioPage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Transporte Aéreo Funerário" },
        ]}
        description="A Central Funerária Brasil oferece suporte para transporte aéreo funerário, coordenando soluções para deslocamentos nacionais e internacionais com orientação documental e logística especializada."
        imagePath="/images/transportes/transporte-aereo-funerario-interior.jpeg"
        title="Transporte aéreo funerário"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Atendimento voltado a deslocamentos que exigem integração entre transporte terrestre, estrutura aeroportuária e organização documental."
            eyebrow="Descrição"
            title="Soluções aéreas com orientação especializada"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              description="Coordenação de transporte de corpo em aeronaves conforme a necessidade do trajeto."
              icon={Plane}
              title="Transporte em aeronaves"
            />
            <InfoCard
              description="Apoio para transporte de esquife e organização do fluxo até o destino final."
              icon={PlaneTakeoff}
              title="Logística aeroportuária"
            />
            <InfoCard
              description="Atendimento nacional e internacional com suporte às exigências de cada operação."
              icon={Globe2}
              title="Cobertura ampliada"
            />
            <InfoCard
              description="Orientação para familiares sobre acompanhamento, etapas e alinhamentos possíveis."
              icon={UsersRound}
              title="Apoio à família"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                description="A estrutura pode envolver jatos executivos, turboélices, helicópteros e integração com serviços terrestres."
                eyebrow="Situações atendidas"
                title="Modalidades e possibilidades operacionais"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {airTransportHighlights.map((item) => (
                <li
                  className="rounded-xl border border-brand-100 bg-brand-50/55 px-5 py-4 text-sm text-brand-700"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <QuoteForm defaultType="Transporte aéreo funerário" />
        </Container>
      </section>

      <CTASection
        description="Se o caso exige coordenação aeroportuária e transporte aéreo, podemos organizar a orientação inicial agora."
        title="Fale sobre transporte aéreo funerário"
      />
    </>
  );
}

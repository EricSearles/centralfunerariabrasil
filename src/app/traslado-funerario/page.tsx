import type { Metadata } from "next";
import { FileCheck2, Globe2, MapPinned, Truck } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { InternalHero } from "@/components/InternalHero";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionTitle } from "@/components/SectionTitle";
import { trasladoHighlights } from "@/data/services";

export const metadata: Metadata = {
  title: "Traslado Funerário | Central Funerária Brasil",
  description:
    "Coordenação de traslado funerário municipal, interestadual e internacional com orientação documental e atendimento 24 horas.",
};

export default function TrasladoFunerarioPage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Traslado Funerário" },
        ]}
        description="Realizamos a coordenação de traslado funerário com suporte para deslocamentos municipais, interestaduais e internacionais, oferecendo orientação sobre documentação, logística e etapas necessárias."
        imagePath="/images/funeraria-imagem-3.png"
        title="Traslado funerário"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Suporte pensado para organizar o deslocamento com responsabilidade, atenção documental e contato contínuo com a família."
            eyebrow="Descrição do serviço"
            title="Coordenação cuidadosa para diferentes distâncias"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              description="Atendimento para deslocamentos dentro do mesmo município ou região metropolitana."
              icon={Truck}
              title="Traslado terrestre funerário"
            />
            <InfoCard
              description="Apoio para rotas entre estados, com organização logística e documentação de suporte."
              icon={MapPinned}
              title="Traslado interestadual"
            />
            <InfoCard
              description="Encaminhamento e suporte para processos internacionais, conforme exigências aplicáveis."
              icon={Globe2}
              title="Traslado internacional"
            />
            <InfoCard
              description="Orientação documental e alinhamento das etapas antes do deslocamento."
              icon={FileCheck2}
              title="Documentação e orientação"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                description="Atuamos na organização do fluxo de remoção, documentação e deslocamento para que a família tenha mais clareza durante o processo."
                eyebrow="Tipos de traslado"
                title="Situações atendidas"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {trasladoHighlights.map((item) => (
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
          <QuoteForm defaultType="Traslado funerário" />
        </Container>
      </section>

      <CTASection
        description="Nossa equipe pode orientar sobre deslocamentos municipais, interestaduais e internacionais."
        title="Precisa organizar um traslado funerário?"
      />
    </>
  );
}

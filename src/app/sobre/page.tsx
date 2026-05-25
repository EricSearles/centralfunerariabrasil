import type { Metadata } from "next";
import { Compass, HeartHandshake, MapPinned, ShieldCheck, Sparkles, Target } from "lucide-react";

import { BenefitCard } from "@/components/BenefitCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { InternalHero } from "@/components/InternalHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre a Central Funerária Brasil",
  description:
    "Conheça a Central Funerária Brasil, nosso propósito, missão, visão e valores para atendimento funerário humanizado em todo o país.",
};

export default function SobrePage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre" },
        ]}
        description="A Central Funerária Brasil nasce com o propósito de oferecer atendimento funerário humanizado, ágil e responsável para famílias em todo o Brasil. Atuamos com suporte, orientação e organização de serviços funerários, buscando acolher cada família com respeito, clareza e cuidado."
        imagePath="/images/funeraria-imagem-2.png"
        title="Sobre a Central Funerária Brasil"
      />

      <section className="py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <BenefitCard
              description="Oferecer suporte funerário humanizado e eficiente em momentos de perda."
              icon={Target}
              title="Missão"
            />
            <BenefitCard
              description="Ser referência nacional em atendimento funerário responsável, acessível e acolhedor."
              icon={Compass}
              title="Visão"
            />
            <BenefitCard
              description="Respeito, empatia, transparência, agilidade e cuidado com a família."
              icon={Sparkles}
              title="Valores"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            description="Trabalhamos para que cada família receba atenção clara, suporte prático e encaminhamento cuidadoso em um momento que exige sensibilidade."
            eyebrow="Compromisso institucional"
            title="Acolhimento com responsabilidade em cada etapa"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              description="Comunicação respeitosa, escuta ativa e orientação humana desde o primeiro contato."
              icon={HeartHandshake}
              title="Atendimento humanizado"
            />
            <InfoCard
              description="Atuação com suporte em diferentes regiões, conforme logística e disponibilidade operacional."
              icon={MapPinned}
              title="Cobertura nacional"
            />
            <InfoCard
              description="Processos organizados para transmitir segurança, previsibilidade e confiança às famílias."
              icon={ShieldCheck}
              title="Confiança e clareza"
            />
          </div>
        </Container>
      </section>

      <CTASection
        description="Se precisar de orientação imediata, nossa equipe está disponível para ajudar com respeito e clareza."
        title="Fale com a Central Funerária Brasil"
      />
    </>
  );
}

import type { Metadata } from "next";
import { Heart, LockKeyhole, Monitor, Video } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { InfoCard } from "@/components/InfoCard";
import { InternalHero } from "@/components/InternalHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Velório Online | Central Funerária Brasil",
  description:
    "Conheça a possibilidade de velório online com transmissão privada, homenagens e compartilhamento restrito para familiares e amigos.",
};

const items = [
  {
    icon: Video,
    title: "Transmissão privada",
    description: "Possibilidade de transmissão online em ambiente restrito e organizado para a família.",
  },
  {
    icon: Heart,
    title: "Área de homenagem",
    description: "Espaço pensado para mensagens de carinho, despedida e memória entre familiares.",
  },
  {
    icon: LockKeyhole,
    title: "Compartilhamento restrito",
    description: "Controle de acesso para manter o conteúdo reservado a pessoas autorizadas.",
  },
  {
    icon: Monitor,
    title: "Atendimento sob consulta",
    description: "A equipe orienta sobre formato, disponibilidade e alinhamentos necessários para cada família.",
  },
];

export default function VelorioOnlinePage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Velório Online" },
        ]}
        description="Conheça a possibilidade de velório online com transmissão privada, homenagens e compartilhamento restrito para familiares e amigos que não puderem estar presentes."
        imagePath="/images/funeraria-imagem-1.png"
        title="Velório online"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="O atendimento é conduzido com orientação da equipe, respeitando a necessidade da família e o formato mais adequado para a despedida."
            eyebrow="Como funciona"
            title="Transmissão, homenagens e acompanhamento"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
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

      <CTASection
        description="Se a família precisa entender essa possibilidade, podemos orientar sobre disponibilidade e formato do atendimento."
        title="Deseja saber mais sobre velório online?"
      />
    </>
  );
}

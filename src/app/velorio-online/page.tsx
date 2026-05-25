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
    "Apresentação institucional do serviço de velório online com transmissão privada, homenagens e compartilhamento restrito sob solicitação.",
};

const items = [
  {
    icon: Video,
    title: "Transmissão privada",
    description: "Possibilidade de transmissão online em ambiente restrito e organizado sob solicitação.",
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
    title: "Solicitação sob demanda",
    description: "A ativação depende de alinhamento operacional, disponibilidade e definição prévia com a família.",
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
        description="Apresentamos a possibilidade de velório online com transmissão privada, homenagens e compartilhamento restrito para familiares e amigos que não puderem estar presentes."
        imagePath="/images/funeraria-imagem-1.png"
        title="Velório online"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Nesta primeira versão, não existe sistema real de velório online. A página apresenta o serviço e direciona o interesse para atendimento via WhatsApp."
            eyebrow="Como funciona"
            title="Serviço apresentado sob solicitação"
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

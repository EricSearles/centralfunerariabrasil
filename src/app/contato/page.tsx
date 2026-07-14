import type { Metadata } from "next";
import { Clock3, Globe2, Mail, MapPinned, MessageCircle, PhoneCall } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { InfoCard } from "@/components/InfoCard";
import { InternalHero } from "@/components/InternalHero";
import { SectionTitle } from "@/components/SectionTitle";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contato | Central Funerária Brasil",
  description:
    "Entre em contato com a Central Funerária Brasil para atendimento funerário 24 horas, traslado, planos funerários e suporte familiar.",
};

export default function ContatoPage() {
  return (
    <>
      <InternalHero
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Contato" },
        ]}
        description="Fale com a Central Funerária Brasil para atendimento funerário 24 horas, orientação sobre traslado, transporte aéreo funerário, planos funerários e outras necessidades."
        imagePath="/images/funeraria-imagem-1.png"
        title="Contato"
      />

      <section className="py-24">
        <Container>
          <SectionTitle
            description="Escolha o canal mais adequado ou envie as informações principais para que nossa equipe retorne com a orientação inicial."
            eyebrow="Fale com nossa equipe"
            title="Canais de atendimento"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard
              description={`Telefone e WhatsApp: ${contact.phone}`}
              icon={PhoneCall}
              title="Telefone"
            />
            <InfoCard
              description="Atendimento direto pelo mesmo número."
              icon={MessageCircle}
              title="WhatsApp"
            />
            <InfoCard description={contact.email} icon={Mail} title="E-mail" />
            <InfoCard description={contact.attendance} icon={Clock3} title="Atendimento" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />
            <div className="space-y-6">
              <div className="rounded-[1.75rem] border border-brand-100 bg-brand-50/55 p-6">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 text-brand-400" />
                  <div>
                    <h3 className="font-display text-3xl text-brand-700">Endereço de atendimento</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      {contact.addressLine1}
                      <br />
                      CEP: {contact.addressZip}
                      <br />
                      {contact.addressLine2}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      Atendimento sujeito à disponibilidade operacional e à logística da região. O encaminhamento é feito conforme a necessidade informada pela família.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-1 h-5 w-5 text-brand-400" />
                  <div>
                    <h3 className="font-display text-3xl text-brand-700">Contato direto</h3>
                    <p className="mt-3 text-sm leading-7 text-text-muted">
                      Telefone e WhatsApp: {contact.phone}
                      <br />
                      Site: centralfunerariabrasil.com.br
                    </p>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                compact
                imagePath="/images/funeraria-imagem-5.png"
                label="Atendimento e acolhimento"
              />
              <div className="rounded-[1.75rem] border border-brand-100 bg-white p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-support-whatsapp" />
                  <p className="text-sm leading-7 text-text-muted">
                    Se preferir, você também pode falar com nossa equipe diretamente pelo WhatsApp para receber orientação imediata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        description="Se preferir, fale diretamente com nossa equipe pelo WhatsApp e receba orientação imediata."
        title="Precisa de atendimento funerário agora?"
      />
    </>
  );
}

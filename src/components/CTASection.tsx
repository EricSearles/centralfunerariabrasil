import { MessageCircle, PhoneCall } from "lucide-react";

import { contact } from "@/data/contact";

import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

type CTASectionProps = {
  title: string;
  description: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  secondaryHref = "/contato",
  secondaryLabel = "Ir para contato",
}: CTASectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-brand-800 px-6 py-14 text-white shadow-soft sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <SectionTitle
              description={description}
              eyebrow="Atendimento imediato"
              inverse
              title={title}
            />
            <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
              <div className="flex items-center gap-3 text-white/80">
                <PhoneCall className="h-5 w-5 text-brand-400" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MessageCircle className="h-5 w-5 text-brand-400" />
                <span>Equipe disponível 24 horas para orientação</span>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button external href={contact.whatsappUrlWithMessage} variant="whatsapp">
                  Falar no WhatsApp 24h
                </Button>
                <Button className="border-white/20 bg-white/10 text-white hover:bg-white/15" href={secondaryHref} variant="ghost">
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

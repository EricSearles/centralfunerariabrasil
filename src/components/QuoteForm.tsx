import { ContactForm } from "./ContactForm";

type QuoteFormProps = {
  defaultType?: string;
};

export function QuoteForm({ defaultType = "Planos funerários" }: QuoteFormProps) {
  return (
    <ContactForm
      buttonLabel="Solicitar orientação pelo WhatsApp"
      defaultType={defaultType}
      description="Envie os dados principais para que possamos iniciar uma conversa organizada, com mais clareza e acolhimento."
      title="Receber orientação personalizada"
    />
  );
}

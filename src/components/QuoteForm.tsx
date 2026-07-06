import { ContactForm } from "./ContactForm";

type QuoteFormProps = {
  defaultType?: string;
};

export function QuoteForm({ defaultType = "Planos funerários" }: QuoteFormProps) {
  return (
    <ContactForm
      buttonLabel="Solicitar orientação"
      defaultType={defaultType}
      description="Envie os dados principais para que nossa equipe retorne com orientação organizada, clara e acolhedora."
      title="Receber orientação personalizada"
    />
  );
}

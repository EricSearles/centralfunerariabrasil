import { ContactForm } from "./ContactForm";

type QuoteFormProps = {
  defaultType?: string;
};

export function QuoteForm({ defaultType = "Planos funerários" }: QuoteFormProps) {
  return (
    <ContactForm
      buttonLabel="Solicitar cotação"
      defaultType={defaultType}
      description="Envie os dados principais para que nossa equipe receba a cotação por e-mail e retorne com orientação organizada, clara e acolhedora."
      secondaryAction="email"
      title="Solicitar cotação"
    />
  );
}

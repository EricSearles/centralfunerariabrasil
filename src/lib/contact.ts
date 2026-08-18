import { contact } from "@/data/contact";

type ContactMessageInput = {
  name: string;
  whatsapp: string;
  email?: string;
  city?: string;
  state?: string;
  serviceType: string;
  notes?: string;
};

export function createContactEmailBody(input: ContactMessageInput): string {
  return [
    "Olá, gostaria de solicitar contato/cotação pela Central Funerária Brasil.",
    "",
    `Nome: ${input.name}`,
    `WhatsApp: ${input.whatsapp}`,
    `E-mail: ${input.email || "-"}`,
    `Cidade: ${input.city || "-"}`,
    `Estado: ${input.state || "-"}`,
    `Tipo de atendimento: ${input.serviceType}`,
    `Observações: ${input.notes || "-"}`,
  ].join("\n");
}

export function createContactMailtoLink(subject: string, body: string): string {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

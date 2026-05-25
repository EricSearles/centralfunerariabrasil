import { contact } from "@/data/contact";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function createLeadMessage(input: {
  name: string;
  whatsapp: string;
  city: string;
  state?: string;
  serviceType: string;
  notes?: string;
}): string {
  return [
    "Olá, preciso de atendimento funerário pela Central Funerária Brasil.",
    "",
    `Nome: ${input.name}`,
    `WhatsApp: ${input.whatsapp}`,
    `Cidade: ${input.city}`,
    `Estado: ${input.state || "-"}`,
    `Tipo de atendimento: ${input.serviceType}`,
    `Observações: ${input.notes || "-"}`,
  ].join("\n");
}

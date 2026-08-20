import { contact } from "@/data/contact";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function createLeadMessage(input: {
  name: string;
  whatsapp: string;
  email?: string;
  city?: string;
  state?: string;
  serviceType: string;
  notes?: string;
}): string {
  return [
    contact.whatsappDefaultMessage,
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
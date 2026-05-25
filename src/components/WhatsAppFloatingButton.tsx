import { MessageCircle } from "lucide-react";

import { contact } from "@/data/contact";

export function WhatsAppFloatingButton() {
  return (
    <>
      <a
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-support-whatsapp px-5 py-4 text-sm font-semibold text-white shadow-soft transition hover:brightness-95 md:flex"
        href={contact.whatsappUrlWithMessage}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="h-5 w-5" />
        Atendimento 24h
      </a>
      <a
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-support-whatsapp text-white shadow-soft transition hover:brightness-95 md:hidden"
        href={contact.whatsappUrlWithMessage}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}

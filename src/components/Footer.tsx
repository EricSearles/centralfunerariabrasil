import Link from "next/link";

import { contact } from "@/data/contact";
import { footerQuickLinks, footerServiceLinks } from "@/data/navigation";

import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-brand-800 py-16 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
              Atendimento funerário humanizado com suporte imediato, orientação clara e
              organização responsável para famílias em todo o Brasil.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-white/75 transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Serviços
            </h3>
            <ul className="mt-4 space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-sm text-white/75 transition hover:text-white" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>Telefone e WhatsApp: {contact.phone}</li>
              <li>E-mail: {contact.email}</li>
              <li>Endereço: {contact.addressLine1}</li>
              <li>CEP: {contact.addressZip}</li>
              <li>{contact.addressLine2}</li>
              <li>Atendimento: {contact.attendance}</li>
              <li>Site: centralfunerariabrasil.com.br</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/55">
          Atendimento sujeito à disponibilidade operacional, região de cobertura, documentação
          necessária e confirmação do serviço.
        </div>
      </Container>
    </footer>
  );
}

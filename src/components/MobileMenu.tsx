"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { contact } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>("/servicos");

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-brand-900/15 backdrop-blur-sm lg:hidden">
      <div className="ml-auto flex h-full w-full max-w-sm flex-col border-l border-brand-100 bg-brand-50 px-6 py-6 text-brand-700 shadow-soft">
        <div className="flex items-center justify-between">
          <BrandLogo size="mobile" />
          <button
            aria-label="Fechar menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-100 bg-white"
            onClick={onClose}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-10 flex flex-1 flex-col gap-3 overflow-y-auto pr-1">
          {navigationItems.map((item) => {
            if (!item.children) {
              return (
                <Link
                  className="rounded-xl px-4 py-3 text-base text-brand-700 transition hover:bg-white hover:text-brand-800"
                  href={item.href}
                  key={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            }

            const isExpanded = expandedItem === item.href;

            return (
              <div className="rounded-2xl border border-brand-100 bg-white/70" key={item.href}>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <Link className="text-base text-brand-700" href={item.href} onClick={onClose}>
                    {item.label}
                  </Link>
                  <button
                    aria-expanded={isExpanded}
                    aria-label={`Abrir submenu de ${item.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-brand-100 bg-white text-brand-700"
                    onClick={() => setExpandedItem(isExpanded ? null : item.href)}
                    type="button"
                  >
                    <ChevronDown className={`h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
                {isExpanded ? (
                  <div className="space-y-1 border-t border-brand-100 px-3 py-3">
                    {item.children.map((child) => (
                      <Link
                        className="block rounded-xl px-3 py-2 text-sm text-brand-700 transition hover:bg-brand-50 hover:text-brand-800"
                        href={child.href}
                        key={child.href}
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
        <div className="space-y-3 border-t border-brand-100 pt-6 text-sm leading-7 text-text-muted">
          <Button external href={contact.whatsappUrlWithMessage} size="sm" variant="whatsapp">
            WhatsApp 24h
          </Button>
          <p>
            Atendimento imediato:
            <br />
            Telefone e WhatsApp: {contact.phone}
          </p>
          <p>E-mail: {contact.email}</p>
          <p>{contact.address}</p>
        </div>
      </div>
    </div>
  );
}

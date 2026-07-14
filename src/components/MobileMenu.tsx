"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { contact } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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
        <nav className="mt-10 flex flex-1 flex-col gap-2">
          {navigationItems.map((item) => (
            <Link
              className="rounded-xl px-4 py-3 text-base text-brand-700 transition hover:bg-white hover:text-brand-800"
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-3 border-t border-brand-100 pt-6">
          <Button external href={contact.whatsappUrlWithMessage} size="sm" variant="whatsapp">
            WhatsApp 24h
          </Button>
          <p className="text-sm leading-7 text-text-muted">
            Atendimento imediato:
            <br />
            Telefone e WhatsApp: {contact.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

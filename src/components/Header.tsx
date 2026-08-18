"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { contact } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scrolled ? "bg-white/95 shadow-[0_8px_30px_rgba(16,42,67,0.05)]" : "bg-brand-50/98";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b border-brand-100 transition duration-300 ${headerClass}`}
      >
        <Container>
          <div className="flex min-h-[88px] items-center justify-between gap-6 sm:min-h-[96px]">
            <BrandLogo priority />

            <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
              {navigationItems.map((item) => (
                <div className="group relative py-4" key={item.href}>
                  <div className="flex items-center gap-1">
                    <Link
                      className="text-sm text-brand-700/80 transition hover:text-brand-800"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                    {item.children ? <ChevronDown className="h-4 w-4 text-brand-400" /> : null}
                  </div>

                  {item.children ? (
                    <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[280px] translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="rounded-2xl border border-brand-100 bg-white p-3 shadow-soft">
                        {item.children.map((child) => (
                          <Link
                            className="block rounded-xl px-4 py-3 text-sm text-brand-700 transition hover:bg-brand-50 hover:text-brand-800"
                            href={child.href}
                            key={child.href}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                external
                href={contact.whatsappUrlWithMessage}
                size="sm"
                variant="whatsapp"
              >
                WhatsApp 24h
              </Button>
            </div>

            <button
              aria-label="Abrir menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-100 bg-white text-brand-800 lg:hidden"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu onClose={() => setMenuOpen(false)} open={menuOpen} />
    </>
  );
}

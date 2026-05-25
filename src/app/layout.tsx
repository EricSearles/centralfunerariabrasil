import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { contact } from "@/data/contact";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(contact.siteUrl),
  title: "Central Funerária Brasil | Atendimento Funerário 24 Horas",
  description: contact.seoDescription,
  keywords: [
    "atendimento funerário 24 horas",
    "traslado funerário",
    "transporte aéreo funerário",
    "planos funerários",
    "velório online",
    "Central Funerária Brasil",
  ],
  openGraph: {
    title: "Central Funerária Brasil | Atendimento Funerário 24 Horas",
    description: contact.seoDescription,
    url: contact.siteUrl,
    siteName: contact.companyName,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Funerária Brasil | Atendimento Funerário 24 Horas",
    description: contact.seoDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

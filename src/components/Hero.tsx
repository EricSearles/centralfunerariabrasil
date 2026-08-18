import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

import { contact } from "@/data/contact";

import { Button } from "./Button";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

type HeroProps = {
  title: string;
  description: string;
  badges: string[];
  imagePath: string;
  backgroundImagePath?: string;
  hideSideImage?: boolean;
  sideContent?: ReactNode;
};

export function Hero({
  title,
  description,
  badges,
  imagePath,
  backgroundImagePath,
  hideSideImage = false,
  sideContent,
}: HeroProps) {
  const hasAside = Boolean(sideContent);

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 lg:pb-28">
      {backgroundImagePath ? (
        <>
          <div className="absolute inset-0">
            <Image
              alt="Fundo institucional"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={backgroundImagePath}
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,246,241,0.90)_0%,rgba(248,246,241,0.78)_34%,rgba(248,246,241,0.46)_58%,rgba(11,37,51,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,37,51,0.08),rgba(11,37,51,0.14))]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-hero-soft" />
      )}

      <Container className="relative">
        <div
          className={`grid gap-12 ${
            hasAside
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(320px,430px)] lg:items-start lg:gap-12"
              : hideSideImage
                ? "lg:grid-cols-[minmax(0,0.95fr)] lg:items-center"
                : "lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16"
          }`}
        >
          <div className="animate-reveal rounded-[2rem] bg-[rgba(248,246,241,0.34)] p-4 backdrop-blur-[2px] sm:p-6 lg:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/35 bg-white/88 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 shadow-sm backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4" />
              Atendimento 24 horas
            </div>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.08] text-brand-800 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-700/88">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button external href={contact.whatsappUrlWithMessage} variant="primary">
                Solicitar atendimento agora
              </Button>
              <Button external href={contact.whatsappUrlWithMessage} variant="whatsapp">
                Falar no WhatsApp 24h
              </Button>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {badges.map((badge) => (
                <li
                  className="rounded-xl border border-brand-100/85 bg-white/94 px-4 py-3 text-sm font-medium text-brand-800 shadow-card backdrop-blur-sm"
                  key={badge}
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {hasAside ? <div className="lg:pt-3">{sideContent}</div> : null}

          {!hasAside && !hideSideImage ? (
            <div>
              <ImagePlaceholder
                imagePath={imagePath}
                label="Atendimento acolhedor e institucional"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

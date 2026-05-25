import { ReactNode } from "react";

import { contact } from "@/data/contact";

import { Breadcrumb } from "./Breadcrumb";
import { Button } from "./Button";
import { Container } from "./Container";
import { ImagePlaceholder } from "./ImagePlaceholder";

type InternalHeroProps = {
  title: string;
  description: string;
  imagePath: string;
  breadcrumbs: { label: string; href?: string }[];
  aside?: ReactNode;
};

export function InternalHero({
  title,
  description,
  imagePath,
  breadcrumbs,
  aside,
}: InternalHeroProps) {
  return (
    <section className="bg-hero-soft pb-16 pt-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Breadcrumb items={breadcrumbs} />
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-brand-700 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button external href={contact.whatsappUrlWithMessage} variant="primary">
                Solicitar atendimento
              </Button>
              <Button href="/contato" variant="secondary">
                Ir para contato
              </Button>
            </div>
            {aside ? <div className="mt-8">{aside}</div> : null}
          </div>
          <ImagePlaceholder imagePath={imagePath} label={title} />
        </div>
      </Container>
    </section>
  );
}

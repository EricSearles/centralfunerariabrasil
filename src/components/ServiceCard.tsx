import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceItem } from "@/data/services";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-card transition duration-300 hover:-translate-y-0.5">
      <div className="relative aspect-[5/4] overflow-hidden bg-brand-50">
        <Image
          alt={`Imagem de apoio para ${service.title}`}
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          src={service.image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,23,33,0.06)_0%,rgba(10,23,33,0.22)_100%)]" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.7rem] leading-tight text-brand-700">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-text-muted">{service.description}</p>
        <div className="mt-5 h-px bg-brand-100" />
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-brand-400">
          Atendimento com orientação e acolhimento
        </p>
        <Link
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition group-hover:text-brand-700"
          href={service.href}
        >
          Solicitar orientação
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

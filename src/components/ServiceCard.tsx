import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceItem } from "@/data/services";
import { iconMap } from "@/lib/icons";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-[1.7rem] leading-tight text-brand-700">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-text-muted">{service.description}</p>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition group-hover:text-brand-700"
        href={service.href}
      >
        Solicitar atendimento
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

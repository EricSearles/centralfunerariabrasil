import { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-[1.7rem] leading-tight text-brand-700">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-text-muted">{description}</p>
    </div>
  );
}

import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
};

export function InfoCard({ icon: Icon, title, description, dark = false }: InfoCardProps) {
  const classes = dark
    ? "border-white/10 bg-white/10 text-white"
    : "border-brand-100 bg-white text-brand-700";

  const descriptionColor = dark ? "text-white/75" : "text-text-muted";

  return (
    <div
      className={`rounded-2xl border p-6 shadow-card transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      <div
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          dark ? "bg-white/10 text-brand-400" : "bg-brand-50 text-brand-400"
        }`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-[1.7rem] leading-tight">{title}</h3>
      <p className={`mt-3 break-words text-sm leading-7 [overflow-wrap:anywhere] ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
}

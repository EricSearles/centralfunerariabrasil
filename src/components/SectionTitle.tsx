type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  const titleColor = inverse ? "text-white" : "text-brand-700";
  const textColor = inverse ? "text-white/78" : "text-text-muted";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl leading-tight sm:text-[3.2rem] ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${textColor}`}>{description}</p>
      ) : null}
    </div>
  );
}

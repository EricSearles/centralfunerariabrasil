"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

type ImagePlaceholderProps = {
  imagePath: string;
  label?: string;
  className?: string;
  compact?: boolean;
  showPath?: boolean;
};

export function ImagePlaceholder({
  imagePath,
  label = "Imagem institucional",
  className = "",
  compact = false,
  showPath = false,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [imagePath]);

  const minHeightClass = compact ? "min-h-[220px]" : "min-h-[360px]";

  if (!hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white shadow-card ${minHeightClass} ${className}`}
      >
        <Image
          alt={label}
          className="object-cover"
          fill
          onError={() => setHasError(true)}
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={imagePath}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(11,37,51,0.12))]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/88 px-3 py-1.5 text-xs font-medium tracking-[0.04em] text-brand-700 backdrop-blur">
          Imagem institucional
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-brand-100 bg-gradient-to-br from-white via-brand-50 to-white shadow-card ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,155,94,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(248,246,241,0.2))]" />
      <div className={`relative flex h-full flex-col justify-between p-6 sm:p-8 ${minHeightClass}`}>
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-100 bg-white text-brand-400 shadow-sm">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div className="max-w-md">
          <p className="font-display text-3xl text-brand-700">{label}</p>
          <p className="mt-3 text-sm leading-7 text-text-muted">Imagem institucional</p>
          <p className="mt-1 text-sm leading-7 text-text-muted">
            Espaço reservado para foto de acolhimento.
          </p>
        </div>
        {showPath ? (
          <div className="rounded-xl border border-brand-100 bg-white/90 px-4 py-3 text-xs text-text-muted">
            Caminho preparado: <span className="font-medium text-brand-700">{imagePath}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

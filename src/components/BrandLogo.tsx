import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "footer" | "header" | "mobile";
  withLink?: boolean;
};

const sizeClasses: Record<NonNullable<BrandLogoProps["size"]>, string> = {
  header: "h-16 w-[90px] sm:h-20 sm:w-[112px]",
  mobile: "h-20 w-[110px]",
  footer: "h-28 w-[150px]",
};

export function BrandLogo({
  className = "",
  priority = false,
  size = "header",
  withLink = true,
}: BrandLogoProps) {
  const logo = (
    <div className={`relative ${sizeClasses[size]} ${className}`.trim()}>
      <Image
        alt="Funerária Urgente"
        className="object-contain object-left"
        fill
        priority={priority}
        sizes="(max-width: 768px) 110px, 150px"
        src="/images/logo-funeraria-urgente.jpeg"
      />
    </div>
  );

  if (!withLink) {
    return logo;
  }

  return (
    <Link aria-label="Voltar para a página inicial" className="inline-flex items-center" href="/">
      {logo}
    </Link>
  );
}

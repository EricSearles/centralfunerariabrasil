import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";
type ButtonSize = "default" | "sm";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-800 text-white hover:bg-brand-700 focus-visible:outline-brand-800",
  secondary:
    "border border-brand-400 bg-transparent text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-400",
  whatsapp:
    "bg-support-whatsapp text-white hover:brightness-95 focus-visible:outline-support-whatsapp",
  ghost:
    "border border-brand-100 bg-white text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-12 rounded-xl px-6 py-3 text-sm tracking-[0.04em]",
  sm: "min-h-10 rounded-lg px-4 py-2.5 text-xs tracking-[0.06em]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  external = false,
}: ButtonProps) {
  const baseClassName =
    "inline-flex items-center justify-center font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  if (external) {
    return (
      <a
        className={`${baseClassName} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={`${baseClassName} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

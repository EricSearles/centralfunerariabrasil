export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigationItems: NavigationItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Todos os serviços", href: "/servicos" },
      { label: "Atendimento funerário 24h", href: "/servicos#atendimento-funerario-24h" },
      { label: "Traslado funerário", href: "/traslado-funerario" },
      { label: "Urnas funerárias", href: "/urnas-funerarias" },
      { label: "Planos funerários", href: "/planos-funerarios" },
      { label: "Velório online", href: "/velorio-online" },
    ],
  },
  { label: "Urnas", href: "/urnas-funerarias" },
  { label: "Traslado Funerário", href: "/traslado-funerario" },
  { label: "Planos Funerários", href: "/planos-funerarios" },
  { label: "Velório Online", href: "/velorio-online" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerQuickLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Urnas funerárias", href: "/urnas-funerarias" },
  { label: "Contato", href: "/contato" },
];

export const footerServiceLinks = [
  { label: "Catálogo de urnas", href: "/urnas-funerarias" },
  { label: "Traslado Funerário", href: "/traslado-funerario" },
  { label: "Transporte Aéreo", href: "/transporte-aereo-funerario" },
  { label: "Planos Funerários", href: "/planos-funerarios" },
  { label: "Velório Online", href: "/velorio-online" },
];

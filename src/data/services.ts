export type ServiceIconName =
  | "clock"
  | "home"
  | "building"
  | "sparkles"
  | "shield"
  | "flower"
  | "package"
  | "heart"
  | "scroll"
  | "flame"
  | "landmark"
  | "file"
  | "users"
  | "plane"
  | "route";

export type ServiceItem = {
  title: string;
  description: string;
  icon: ServiceIconName;
  href: string;
  image: string;
};

export const services: ServiceItem[] = [
  {
    title: "Atendimento funerário 24h",
    description: "Orientação imediata para situações urgentes, com suporte respeitoso e contínuo.",
    icon: "clock",
    href: "/servicos#atendimento-funerario-24h",
    image: "/images/funeraria-imagem-5.png",
  },
  {
    title: "Remoção funerária residencial",
    description: "Organização ágil e cuidadosa da remoção com suporte às famílias e responsáveis.",
    icon: "home",
    href: "/servicos#remocao-funeraria-residencial",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Remoção hospitalar",
    description: "Encaminhamento com alinhamento documental e orientação para hospitais e unidades de saúde.",
    icon: "building",
    href: "/servicos#remocao-hospitalar",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Preparação e higienização",
    description: "Cuidados técnicos voltados à apresentação respeitosa e organizada para despedidas.",
    icon: "sparkles",
    href: "/servicos#preparacao-e-higienizacao-do-corpo",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Tanatopraxia",
    description: "Procedimentos especializados de preservação e preparação conforme a necessidade do serviço.",
    icon: "shield",
    href: "/servicos#tanatopraxia",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Embalsamamento",
    description: "Solução indicada para casos específicos, incluindo traslados e períodos maiores de deslocamento.",
    icon: "flower",
    href: "/servicos#embalsamamento",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Ornamentação funerária",
    description: "Arranjos e composição do ambiente com sobriedade, serenidade e respeito à despedida.",
    icon: "flower",
    href: "/servicos#ornamentacao-funeraria",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Urnas funerárias",
    description: "Opções com orientação cuidadosa para adequação ao serviço e à cerimônia escolhida.",
    icon: "package",
    href: "/servicos#urnas-funerarias",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Coroas e flores",
    description: "Suporte para homenagens florais e composição memorial com significado e discrição.",
    icon: "flower",
    href: "/servicos#coroas-e-flores",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Cerimonial funerário",
    description: "Apoio na condução do momento de despedida, respeitando preferências e rituais da família.",
    icon: "heart",
    href: "/servicos#cerimonial-funerario",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Cremação",
    description: "Orientação sobre etapas, documentação e organização do processo com clareza e acolhimento.",
    icon: "flame",
    href: "/servicos#cremacao",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Sepultamento",
    description: "Coordenação de sepultamento com suporte documental, operacional e cerimonial.",
    icon: "landmark",
    href: "/servicos#sepultamento",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Assistência documental",
    description: "Apoio com informações e encaminhamentos documentais necessários em cada etapa.",
    icon: "file",
    href: "/servicos#assistencia-documental",
    image: "/images/funeraria-imagem-3.png",
  },
  {
    title: "Assessoria familiar",
    description: "Suporte humanizado para orientar decisões e aliviar a carga prática do momento.",
    icon: "users",
    href: "/servicos#assessoria-familiar",
    image: "/images/funeraria-imagem-3.png",
  },
];

export const featuredServices = [
  "Atendimento funerário 24h",
  "Remoção funerária residencial",
  "Preparação e higienização",
  "Tanatopraxia",
  "Embalsamamento",
  "Cremação",
  "Sepultamento",
  "Urnas funerárias",
  "Cerimonial funerário",
  "Assessoria familiar",
];

export const trasladoHighlights = [
  "Traslado terrestre funerário",
  "Traslado interestadual",
  "Traslado internacional",
  "Remoção funerária",
  "Logística entre cidades e estados",
  "Apoio documental",
  "Orientação à família",
];

export const airTransportHighlights = [
  "Transporte de corpo em aeronaves",
  "Transporte de esquife",
  "Transporte funerário em jatos executivos",
  "Transporte funerário em turboélices",
  "Transporte funerário em helicópteros",
  "Atendimento nacional e internacional",
  "Transporte acompanhado por familiares quando possível",
  "Apoio aeroportuário",
];

export const planOptions = [
  {
    title: "Plano individual",
    description: "Estrutura pensada para atendimento direcionado a uma única pessoa, com orientação clara e objetiva.",
    icon: "shield" as const,
  },
  {
    title: "Plano familiar",
    description: "Alternativa voltada à proteção de toda a família, com mais previsibilidade e apoio em momentos delicados.",
    icon: "users" as const,
  },
  {
    title: "Plano empresarial",
    description: "Possibilidade de suporte para empresas que buscam cuidado e amparo aos colaboradores e dependentes.",
    icon: "building" as const,
  },
];

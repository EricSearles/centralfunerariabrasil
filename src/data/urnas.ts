export type UrnaFilter = "madeira-clara" | "madeira-escura" | "tradicionais" | "especiais" | "sob-consulta";

export type UrnaItem = {
  slug: string;
  name: string;
  reference: string;
  image: string;
  category: UrnaFilter;
  categoryLabel: string;
  collection: "consolare" | "homenagens";
  collectionLabel: string;
  description: string;
  alt: string;
  featured?: boolean;
};

export const urnaFilterOptions: Array<{ label: string; value: "todos" | UrnaFilter }> = [
  { label: "Todos", value: "todos" },
  { label: "Madeira clara", value: "madeira-clara" },
  { label: "Madeira escura", value: "madeira-escura" },
  { label: "Tradicionais", value: "tradicionais" },
  { label: "Especiais", value: "especiais" },
  { label: "Sob consulta", value: "sob-consulta" },
];

export const catalogReferenceHighlights = [
  { name: "Água Marinha", reference: "REF. 095" },
  { name: "Angelita Bright", reference: "REF. 610" },
  { name: "Aragonita Vintage", reference: "REF. 375" },
  { name: "Lunar", reference: "REF. 091" },
  { name: "Lázuli", reference: "REF. 060" },
  { name: "Granada", reference: "REF. 072" },
  { name: "Ágata", reference: "REF. ES-081" },
  { name: "Amazonita Constelação", reference: "REF. 207" },
  { name: "Turmalina", reference: "REF. 047" },
];

export const urnas: UrnaItem[] = [
  {
    slug: "almandina-delicata-ref-3009",
    name: "Almandina Delicata",
    reference: "REF. 3009",
    image: "/images/urnas/consolare/urna-almandina-delicata-ref-3009.webp",
    category: "especiais",
    categoryLabel: "Especiais",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Modelo claro com detalhes em relevo e crucifixo dourado, indicado para homenagens religiosas e cerimônias serenas.",
    alt: "Urna funerária Almandina Delicata em acabamento claro com relevo ornamental e crucifixo dourado.",
    featured: true,
  },
  {
    slug: "esmeralda-ref-039",
    name: "Esmeralda",
    reference: "REF. 039",
    image: "/images/urnas/consolare/urna-esmeralda-ref-039.webp",
    category: "tradicionais",
    categoryLabel: "Tradicionais",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Linha de acabamento brilhante e presença clássica, pensada para despedidas tradicionais com visual discreto.",
    alt: "Urna funerária Esmeralda em tom amadeirado brilhante com linhas clássicas.",
    featured: true,
  },
  {
    slug: "apatita-classica",
    name: "Apatita",
    reference: "REF. sob consulta",
    image: "/images/urnas/consolare/urna-apatita-classica.webp",
    category: "madeira-escura",
    categoryLabel: "Madeira escura",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Modelo de tom escuro com desenho frontal elegante, adequado para cerimônias tradicionais e memoriais familiares.",
    alt: "Urna funerária Apatita em acabamento escuro com desenho frontal elegante.",
  },
  {
    slug: "espinelio-ref-abb-04",
    name: "Espinélio",
    reference: "REF. ABB-04",
    image: "/images/urnas/consolare/urna-espinelio-ref-abb-04.webp",
    category: "sob-consulta",
    categoryLabel: "Sob consulta",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Modelo escuro com placa frontal decorativa e composição clássica, sujeito à confirmação de disponibilidade.",
    alt: "Urna funerária Espinélio em acabamento escuro com placa frontal decorativa.",
    featured: true,
  },
  {
    slug: "turquesa-ref-2072",
    name: "Turquesa",
    reference: "REF. 2072",
    image: "/images/urnas/consolare/urna-turquesa-ref-2072.webp",
    category: "sob-consulta",
    categoryLabel: "Sob consulta",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Opção de presença sóbria com moldura frontal e placa memorial, indicada para atendimento personalizado.",
    alt: "Urna funerária Turquesa em tom castanho com moldura frontal e placa memorial.",
  },
  {
    slug: "mogno-entalhe-ondulado",
    name: "Mogno com entalhe ondulado",
    reference: "CFB-URN-301",
    image: "/images/urnas/consolare/urna-mogno-entalhe-ondulado.webp",
    category: "madeira-escura",
    categoryLabel: "Madeira escura",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Acabamento em mogno com frisos ondulados, pensado para cerimônias que pedem um visual mais clássico e marcante.",
    alt: "Urna funerária em mogno com entalhe ondulado e acabamento clássico.",
  },
  {
    slug: "mel-entalhada",
    name: "Mel entalhada",
    reference: "CFB-URN-302",
    image: "/images/urnas/consolare/urna-mel-entalhada.webp",
    category: "especiais",
    categoryLabel: "Especiais",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Modelo em tom mel com entalhe ornamental, sugerido para homenagens de presença visual acolhedora.",
    alt: "Urna funerária em tom mel com entalhe ornamental no painel frontal.",
  },
  {
    slug: "cafe-entalhada-lateral",
    name: "Café entalhada lateral",
    reference: "CFB-URN-303",
    image: "/images/urnas/consolare/urna-cafe-entalhada-lateral.webp",
    category: "madeira-escura",
    categoryLabel: "Madeira escura",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Acabamento em café com molduras laterais trabalhadas, disponível mediante confirmação com a equipe.",
    alt: "Urna funerária em tom café com entalhes laterais e acabamento brilhante.",
  },
  {
    slug: "devocional-natural-dourada",
    name: "Devocional natural dourada",
    reference: "CFB-HOM-101",
    image: "/images/urnas/consolare/urna-devocional-natural-dourada.webp",
    category: "madeira-clara",
    categoryLabel: "Madeira clara",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Modelo em madeira clara com gravura devocional e detalhes dourados, indicado para homenagens religiosas.",
    alt: "Urna funerária em madeira clara com gravura devocional e detalhes dourados.",
    featured: true,
  },
  {
    slug: "madeira-natural-crucifixo-dourado",
    name: "Madeira natural com crucifixo dourado",
    reference: "CFB-HOM-102",
    image: "/images/urnas/homenagens/urna-madeira-natural-crucifixo-dourado.webp",
    category: "madeira-clara",
    categoryLabel: "Madeira clara",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Proposta em tom natural com crucifixo dourado, adequada para cerimônias tradicionais e despedidas familiares.",
    alt: "Urna funerária em madeira natural com crucifixo dourado.",
    featured: true,
  },
  {
    slug: "madeira-natural-oval",
    name: "Madeira natural oval",
    reference: "CFB-HOM-103",
    image: "/images/urnas/homenagens/urna-madeira-natural-oval.webp",
    category: "madeira-clara",
    categoryLabel: "Madeira clara",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Modelo em madeira natural com painel oval e ferragens discretas, pensado para uma apresentação mais sóbria.",
    alt: "Urna funerária em madeira natural com painel oval e acabamento discreto.",
  },
  {
    slug: "grafite-homenagem-floral",
    name: "Grafite homenagem floral",
    reference: "CFB-HOM-104",
    image: "/images/urnas/homenagens/urna-grafite-homenagem-floral.webp",
    category: "especiais",
    categoryLabel: "Especiais",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Visual em tom grafite com aplicação floral de homenagem, reservado para consultas específicas com a equipe.",
    alt: "Urna funerária em tom grafite com aplicação floral de homenagem.",
  },
  {
    slug: "ambar-lisa-tradicional",
    name: "Âmbar lisa tradicional",
    reference: "CFB-URN-304",
    image: "/images/urnas/homenagens/urna-ambar-lisa-tradicional.webp",
    category: "tradicionais",
    categoryLabel: "Tradicionais",
    collection: "consolare",
    collectionLabel: "Coleção Consolare",
    description:
      "Modelo em tom âmbar com linhas limpas e apresentação clássica, indicado para cerimônias tradicionais.",
    alt: "Urna funerária em tom âmbar com linhas lisas e acabamento tradicional.",
  },
  {
    slug: "apatita-com-cristo",
    name: "Apatita com Cristo",
    reference: "REF. sob consulta",
    image: "/images/urnas/homenagens/urna-apatita-com-cristo.webp",
    category: "sob-consulta",
    categoryLabel: "Sob consulta",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Versão da linha Apatita com aplicação religiosa em destaque, recomendada para consultas guiadas pelo atendimento.",
    alt: "Urna funerária Apatita em acabamento escuro com figura religiosa aplicada na tampa.",
  },
  {
    slug: "champanhe-cristo-dourado",
    name: "Champanhe com Cristo dourado",
    reference: "CFB-HOM-105",
    image: "/images/urnas/homenagens/urna-champanhe-cristo-dourado.webp",
    category: "especiais",
    categoryLabel: "Especiais",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Modelo claro em tom champanhe com elemento religioso dourado, pensado para cerimônias de despedida serenas.",
    alt: "Urna funerária clara em tom champanhe com figura religiosa dourada.",
  },
  {
    slug: "marfim-crucifixo-classico",
    name: "Marfim com crucifixo clássico",
    reference: "CFB-HOM-106",
    image: "/images/urnas/homenagens/urna-marfim-crucifixo-classico.webp",
    category: "sob-consulta",
    categoryLabel: "Sob consulta",
    collection: "homenagens",
    collectionLabel: "Linha de homenagens",
    description:
      "Acabamento claro com relevo ornamental e crucifixo central, sujeito à confirmação de disponibilidade no atendimento.",
    alt: "Urna funerária em acabamento marfim com relevo ornamental e crucifixo central.",
  },
];

export const highlightedUrnas = urnas.filter((item) => item.featured);

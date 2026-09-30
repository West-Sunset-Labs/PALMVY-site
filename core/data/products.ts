export type ProductPlatform = "ios" | "android" | "web";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "launched" | "coming-soon";
  platforms: ProductPlatform[];
  /** Pontos de destaque exibidos na landing page (derivados da descrição do produto). */
  highlights: string[];
  downloadLinks?: {
    ios?: string;
    android?: string;
    web?: string;
  };
  /** Cor sólida de identidade do produto (classe Tailwind, ex: "bg-pacific-blue") */
  accentColor: string;
  /** Tom do fundo do painel: "light" pede texto/linhas escuras, "dark" pede claras */
  tone: "light" | "dark";
  /** Fundo do cartão que envolve a logo, quando ela não tem fundo transparente */
  logoBg?: string;
  image?: string;
  featured?: boolean;
  /** Rota da landing page do produto (ex.: "/produtos/sossegue"). Sem ela, o botão "Conhecer" não aparece. */
  landingPage?: string;
}

export const PLATFORM_LABELS: Record<ProductPlatform, string> = {
  ios: "iOS",
  android: "Android",
  web: "Web",
};

export const LANDING_ROUTE_BASE = "/produtos";

export const products: Product[] = [
  {
    id: "sossegue",
    name: "Sossegue",
    tagline: "Financeiro feito com calma",
    description:
      "Tira o peso da cabeça de MEIs e autônomos. Com um painel calmo e conversa natural (texto ou áudio), organiza dinheiro, clientes e cobranças sem a pessoa precisar entender de sistema.",
    status: "coming-soon",
    platforms: ["ios", "android"],
    highlights: [
      "Painel calmo, sem exigir que você entenda de sistema",
      "Conversa natural por texto ou áudio",
      "Organiza dinheiro, clientes e cobranças",
    ],
    accentColor: "bg-pacific-blue",
    tone: "dark",
    logoBg: "bg-cloud",
    image: "/images/products/sossegue.png",
    featured: true,
    landingPage: "/produtos/sossegue",
  },
  {
    id: "tunelab",
    name: "TuneLab",
    tagline: "IA que entende seu carro",
    description:
      "App mobile para entusiastas de carros. Analisa o veículo por fotos e texto e sugere tunagens de aparência e performance de forma educativa.",
    status: "coming-soon",
    platforms: ["ios", "android"],
    highlights: [
      "Analisa o veículo por fotos e texto",
      "Sugere tunagens de aparência e performance",
      "Apresenta tudo de forma educativa",
    ],
    accentColor: "bg-gold",
    tone: "light",
    logoBg: "bg-pacific-night",
    image: "/images/products/tunelab.png",
    featured: false,
    landingPage: "/produtos/tunelab",
  },
  {
    id: "safezone",
    name: "SafeZone",
    tagline: "Segurança pública com dados reais",
    description:
      "App que mapeia áreas de risco com denúncias anônimas verificadas. Duas camadas de acesso, verificação rigorosa e moderação comunitária — segurança de verdade, não achismo.",
    status: "coming-soon",
    platforms: ["ios", "android"],
    highlights: [
      "Denúncias anônimas e verificadas",
      "Duas camadas de acesso",
      "Verificação rigorosa e moderação comunitária",
    ],
    accentColor: "bg-palm-green",
    tone: "dark",
    // Sem logo ainda — o painel mostra "Em breve" até a imagem chegar.
    featured: false,
    landingPage: "/produtos/safezone",
  },
];

export const findProductByLandingSlug = (slug: string): Product | undefined =>
  products.find(
    (product) => product.landingPage === `${LANDING_ROUTE_BASE}/${slug}`,
  );

export const getLandingSlugs = (): string[] =>
  products.flatMap((product) =>
    product.landingPage
      ? [product.landingPage.slice(LANDING_ROUTE_BASE.length + 1)]
      : [],
  );

export const philosophyPillars = [
  {
    title: "Design com propósito",
    description:
      "Cada pixel tem razão de ser. Interfaces calmas que não gritam.",
  },
  {
    title: "Código feito com calma",
    description: "Performance, tipagem e manutenibilidade antes de tudo.",
  },
  {
    title: "Impacto real",
    description:
      "Apps que resolvem problemas de verdade, não soluções em busca de problema.",
  },
];

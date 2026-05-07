export type AppStatus = "Em breve" | "Em desenvolvimento" | "Disponível";

export interface App {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  status: AppStatus;
  iconGradient: string;
  iconAccent: string;
  href: string;
}

export const apps: App[] = [
  {
    slug: "sai-de-casa",
    name: "Sai de Casa",
    category: "LOCAL & SOCIAL",
    tagline: "O app que te convida pra rua.",
    description:
      "Descubra eventos, lugares e rolês próximos de você. Para quem quer parar de ficar em casa e finalmente vivenciar a cidade.",
    status: "Em breve",
    iconGradient: "from-amber-400 via-orange-500 to-rose-600",
    iconAccent: "#EA580C",
    href: "/sai-de-casa",
  },
  {
    slug: "lumea-oppo",
    name: "LumeaOppo",
    category: "BELEZA & BEM-ESTAR",
    tagline: "Sua pele, finalmente em foco.",
    description:
      "Rotina de skincare com inteligência. Acompanhe produtos, identifique o que realmente funciona e construa consistência com calma.",
    status: "Em breve",
    iconGradient: "from-pink-400 via-fuchsia-500 to-violet-600",
    iconAccent: "#A855F7",
    href: "/lumea-oppo",
  },
  {
    slug: "aloy-core",
    name: "Aloy Core",
    category: "INFRAESTRUTURA & IA",
    tagline: "A inteligência nos bastidores.",
    description:
      "O núcleo de IA do ecossistema West Sunset Labs. Memória, automações e processamento que alimentam cada produto do studio.",
    status: "Em desenvolvimento",
    iconGradient: "from-cyan-400 via-blue-500 to-violet-700",
    iconAccent: "#6D28D9",
    href: "/aloy-core",
  },
];

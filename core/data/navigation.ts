export type NavLink = {
  href: string;
  label: string;
};

// O prefixo "/" faz os links funcionarem também fora da home (ex.: landing pages).
export const NAV_LINKS: readonly NavLink[] = [
  { href: '/#produtos', label: 'Produtos' },
  { href: '/#filosofia', label: 'Filosofia' },
  { href: '/#como-trabalhamos', label: 'Contato' },
];

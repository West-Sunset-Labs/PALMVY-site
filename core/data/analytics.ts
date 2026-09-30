// Token público do Cloudflare Web Analytics (vem do painel "Manage site").
// Não é segredo: o script o expõe para qualquer visitante.
const CLOUDFLARE_TOKEN_PATTERN = /^[A-Za-z0-9]{16,64}$/;

export const CLOUDFLARE_BEACON_SRC =
  'https://static.cloudflareinsights.com/beacon.min.js';

// Sem token válido, nenhum script de medição é carregado.
export const getCloudflareToken = (
  token: string | undefined = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN,
): string | null =>
  token && CLOUDFLARE_TOKEN_PATTERN.test(token) ? token : null;

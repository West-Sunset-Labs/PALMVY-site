import { SITE_URL } from '@/core/data/site';
import { privacyPolicy } from '@/core/data/legal/privacy';
import { termsOfUse } from '@/core/data/legal/terms';
import { getLandingSlugs, LANDING_ROUTE_BASE } from '@/core/data/products';

const LEGAL_PAGES = [
  { path: '/privacidade', isDraft: privacyPolicy.isDraft },
  { path: '/termos', isDraft: termsOfUse.isDraft },
];

// Rascunhos ficam fora do sitemap, porque as páginas deles usam noindex.
export const getSitemapPaths = (): string[] => [
  '/',
  ...getLandingSlugs().map((slug) => `${LANDING_ROUTE_BASE}/${slug}`),
  ...LEGAL_PAGES.filter(({ isDraft }) => !isDraft).map(({ path }) => path),
];

export const getSitemapUrls = (): string[] =>
  getSitemapPaths().map((path) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`));

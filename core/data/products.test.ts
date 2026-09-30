import { describe, expect, it } from 'vitest';
import {
  LANDING_ROUTE_BASE,
  findProductByLandingSlug,
  getLandingSlugs,
  products,
} from '@/core/data/products';

describe('products', () => {
  it('tem ids únicos', () => {
    const ids = products.map((product) => product.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('tem no máximo um produto em destaque', () => {
    const featured = products.filter((product) => product.featured);

    expect(featured.length).toBeLessThanOrEqual(1);
  });

  it('tem ao menos um destaque por produto', () => {
    for (const product of products) {
      expect(product.highlights.length, product.name).toBeGreaterThan(0);
    }
  });

  it('usa rotas internas, únicas e no padrão /produtos/<slug>', () => {
    const landingPages = products.flatMap((product) =>
      product.landingPage ? [product.landingPage] : [],
    );

    for (const route of landingPages) {
      expect(route).toMatch(new RegExp(`^${LANDING_ROUTE_BASE}/[a-z0-9-]+$`));
    }
    expect(new Set(landingPages).size).toBe(landingPages.length);
  });
});

describe('landing pages', () => {
  it('gera um slug para cada produto com landing page', () => {
    const expected = products.filter((product) => product.landingPage);

    expect(getLandingSlugs()).toHaveLength(expected.length);
  });

  it('encontra o produto pelo slug e ignora slugs desconhecidos', () => {
    for (const slug of getLandingSlugs()) {
      expect(findProductByLandingSlug(slug)?.landingPage).toBe(
        `${LANDING_ROUTE_BASE}/${slug}`,
      );
    }
    expect(findProductByLandingSlug('nao-existe')).toBeUndefined();
    expect(findProductByLandingSlug('../etc')).toBeUndefined();
  });
});

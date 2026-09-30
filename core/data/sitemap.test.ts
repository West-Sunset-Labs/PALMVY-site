import { describe, expect, it } from 'vitest';
import { privacyPolicy } from '@/core/data/legal/privacy';
import { getLandingSlugs } from '@/core/data/products';
import { SITE_URL } from '@/core/data/site';
import { getSitemapPaths, getSitemapUrls } from '@/core/data/sitemap';

describe('sitemap', () => {
  it('inclui a home e todas as landing pages de produto', () => {
    const paths = getSitemapPaths();

    expect(paths).toContain('/');
    for (const slug of getLandingSlugs()) {
      expect(paths).toContain(`/produtos/${slug}`);
    }
  });

  it('não repete endereços', () => {
    const paths = getSitemapPaths();

    expect(new Set(paths).size).toBe(paths.length);
  });

  it('deixa de fora páginas legais ainda em rascunho', () => {
    if (privacyPolicy.isDraft) {
      expect(getSitemapPaths()).not.toContain('/privacidade');
    }
  });

  it('gera URLs absolutas no domínio do site', () => {
    for (const url of getSitemapUrls()) {
      expect(url.startsWith(SITE_URL)).toBe(true);
    }
    expect(getSitemapUrls()).toContain(SITE_URL);
  });
});

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import { NAV_LINKS } from '@/core/data/navigation';

const SECTIONS_DIR = fileURLToPath(
  new URL('../../components/sections/', import.meta.url),
);

const collectSectionIds = (): Set<string> => {
  const ids = new Set<string>();

  for (const fileName of readdirSync(SECTIONS_DIR)) {
    if (!fileName.endsWith('.tsx')) continue;
    const source = readFileSync(`${SECTIONS_DIR}${fileName}`, 'utf8');
    for (const match of source.matchAll(/\bid=["']([^"']+)["']/g)) {
      ids.add(match[1]);
    }
  }

  return ids;
};

describe('NAV_LINKS', () => {
  it('aponta para âncoras da home, válidas em qualquer página', () => {
    for (const { href } of NAV_LINKS) {
      expect(href).toMatch(/^\/#[a-z0-9-]+$/);
    }
  });

  it('tem uma seção com o id correspondente em components/sections', () => {
    const sectionIds = collectSectionIds();

    for (const { href } of NAV_LINKS) {
      const anchor = href.slice(2);

      expect(sectionIds, `sem seção com id "${anchor}"`).toContain(anchor);
    }
  });
});

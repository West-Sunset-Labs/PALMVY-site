import { describe, expect, it } from 'vitest';
import { CONTACT_EMAIL } from '@/core/data/contact';
import { privacyPolicy } from '@/core/data/legal/privacy';
import { termsOfUse } from '@/core/data/legal/terms';

const documents = [
  { name: 'privacidade', document: privacyPolicy },
  { name: 'termos', document: termsOfUse },
];

describe.each(documents)('documento legal: $name', ({ document }) => {
  it('tem título, descrição e data de revisão válida', () => {
    expect(document.title.length).toBeGreaterThan(0);
    expect(document.description.length).toBeGreaterThan(0);
    expect(document.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(document.updatedAt))).toBe(false);
  });

  it('tem seções com título único e ao menos um parágrafo', () => {
    const headings = document.sections.map((section) => section.heading);

    expect(document.sections.length).toBeGreaterThan(0);
    expect(new Set(headings).size).toBe(headings.length);
    for (const section of document.sections) {
      expect(section.paragraphs.length, section.heading).toBeGreaterThan(0);
    }
  });

  it('informa o e-mail de contato', () => {
    const text = document.sections.flatMap((s) => s.paragraphs).join(' ');

    expect(text).toContain(CONTACT_EMAIL);
  });
});

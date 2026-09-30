import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { CtaLink } from '@/components/ui/CtaLink';

describe('CtaLink', () => {
  it('abre link externo em nova aba com noopener noreferrer', () => {
    const html = renderToStaticMarkup(
      <CtaLink href="https://wa.me/5511999999999" isExternal>
        Falar
      </CtaLink>,
    );

    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it('não força nova aba em âncora interna', () => {
    const html = renderToStaticMarkup(
      <CtaLink href="#produtos" isExternal={false}>
        Ver
      </CtaLink>,
    );

    expect(html).not.toContain('target=');
    expect(html).not.toContain('rel=');
  });

  it('renderiza rota interna sem abrir nova aba', () => {
    const html = renderToStaticMarkup(
      <CtaLink href="/produtos/sossegue" isExternal={false}>
        Conhecer
      </CtaLink>,
    );

    expect(html).toContain('href="/produtos/sossegue"');
    expect(html).not.toContain('target=');
  });

  it('aplica o visual do Button quando recebe variant e size', () => {
    const html = renderToStaticMarkup(
      <CtaLink href="#produtos" isExternal={false} variant="primary" size="lg">
        Ver
      </CtaLink>,
    );

    expect(html).toContain('bg-sunset');
    expect(html).toContain('h-12');
    expect(html).toContain('inline-flex');
  });
});

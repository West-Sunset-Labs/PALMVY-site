import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getProductContactLink } from "@/core/data/contact";
import { PLATFORM_LABELS, type Product } from "@/core/data/products";

export function ProductLanding({ product }: { product: Product }) {
  const contactLink = getProductContactLink(product);
  const isLaunched = product.status === "launched";
  const ctaLabel = isLaunched
    ? `Falar sobre o ${product.name}`
    : "Quero ser avisado";
  const closingTitle = isLaunched
    ? `Quer conhecer o ${product.name}?`
    : `Quer acompanhar o ${product.name}?`;

  return (
    <>
      <section
        aria-labelledby="produto-titulo"
        className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <CtaLink
              href="/#produtos"
              isExternal={false}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-cloud transition-colors mb-8"
            >
              <span aria-hidden="true">←</span> Todos os produtos
            </CtaLink>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <StatusBadge status={product.status} />
              <ul className="flex flex-wrap gap-2" aria-label="Plataformas">
                {product.platforms.map((platform) => (
                  <li
                    key={platform}
                    className="font-mono text-xs text-muted border border-soft-gray/20 rounded-full px-3 py-1"
                  >
                    {PLATFORM_LABELS[platform]}
                  </li>
                ))}
              </ul>
            </div>

            <h1
              id="produto-titulo"
              className="font-display text-5xl sm:text-6xl text-cloud mb-4 leading-[1.1]"
            >
              {product.name}
            </h1>
            <p className="text-xl text-soft-gray mb-6">{product.tagline}</p>
            <p className="text-base text-muted mb-10 max-w-xl leading-relaxed">
              {product.description}
            </p>

            <div className="hidden md:block">
              <CtaLink
                href={contactLink.href}
                isExternal={contactLink.isExternal}
                variant="primary"
                size="lg"
              >
                {ctaLabel}
              </CtaLink>
              <p className="text-sm text-muted mt-4">
                Sem cadastro: a conversa acontece no WhatsApp.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-soft-gray/10">
            <ProductVisual product={product} className="min-h-72 md:min-h-96" />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="destaques-titulo"
        className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-soft-gray/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="destaques-titulo"
            className="font-display text-3xl sm:text-4xl text-cloud mb-10"
          >
            Destaques
          </h2>
          <ul className="grid md:grid-cols-3 gap-6">
            {product.highlights.map((highlight, index) => (
              <li key={highlight}>
                <Card className="p-6 h-full">
                  <p className="font-mono text-sm text-sunset mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-base text-cloud">{highlight}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="contato-titulo"
        className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-soft-gray/10"
      >
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 sm:p-12">
            <div className="max-w-xl">
              <h2
                id="contato-titulo"
                className="font-display text-2xl sm:text-3xl text-cloud mb-4"
              >
                {closingTitle}
              </h2>
              <p className="text-soft-gray mb-8">
                Fale direto com a gente pelo WhatsApp. Sem formulário e sem
                cadastro.
              </p>
              <CtaLink
                href={contactLink.href}
                isExternal={contactLink.isExternal}
                variant="primary"
                size="lg"
              >
                {ctaLabel}
              </CtaLink>
            </div>
          </Card>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-soft-gray/10 bg-pacific-night/90 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
        <CtaLink
          href={contactLink.href}
          isExternal={contactLink.isExternal}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {ctaLabel}
        </CtaLink>
      </div>
    </>
  );
}

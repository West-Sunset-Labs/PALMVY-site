"use client";

import { Card } from "@/components/ui/Card";
import { CtaLink } from "@/components/ui/CtaLink";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products } from "@/core/data/products";

export function Products() {
  const featuredProduct = products.find((p) => p.featured);
  const otherProducts = products.filter((p) => !p.featured);

  return (
    <section
      id="produtos"
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl text-cloud mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted">
            Aplicativos para facilitar sua vida.
          </p>
        </div>

        {featuredProduct && (
          <div className="mb-16">
            <Card interactive className="p-0 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <h3 className="font-display text-3xl sm:text-4xl text-cloud mb-2">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-lg text-muted mb-6">
                    {featuredProduct.tagline}
                  </p>
                  <p className="text-base text-soft-gray mb-8 leading-relaxed">
                    {featuredProduct.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <StatusBadge status={featuredProduct.status} />
                    {featuredProduct.landingPage && (
                      <CtaLink
                        href={featuredProduct.landingPage}
                        isExternal={false}
                        variant="primary"
                        size="md"
                      >
                        Conhecer
                      </CtaLink>
                    )}
                  </div>
                </div>

                <ProductVisual
                  product={featuredProduct}
                  className="hidden md:flex h-full min-h-96"
                />
              </div>
            </Card>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {otherProducts.map((product) => (
            <Card key={product.id} interactive className="p-0 overflow-hidden">
              <ProductVisual product={product} className="h-48" />
              <div className="p-8">
                <h3 className="text-2xl text-cloud mb-2 font-medium">
                  {product.name}
                </h3>
                <p className="text-sm text-muted mb-4">{product.tagline}</p>
                <p className="text-sm text-soft-gray mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <StatusBadge status={product.status} />
                  {product.landingPage && (
                    <CtaLink
                      href={product.landingPage}
                      isExternal={false}
                      variant="secondary"
                      size="sm"
                    >
                      Conhecer
                    </CtaLink>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

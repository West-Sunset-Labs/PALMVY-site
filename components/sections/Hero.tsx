import { CtaLink } from "@/components/ui/CtaLink";
import { HorizonLines } from "@/components/ui/HorizonLines";
import { CONTACT_LINK } from "@/core/data/contact";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <HorizonLines className="absolute inset-x-0 bottom-0 w-full h-48 sm:h-64 text-soft-gray/[0.08]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-sm text-muted mb-6">
            California Dreamin&apos;. Digital reality.
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cloud mb-6 leading-[1.1]">
            Apps feitos com calma e propósito
          </h1>

          <p className="text-lg sm:text-xl text-soft-gray mb-10 max-w-xl leading-relaxed">
            PALMVY é um estúdio digital que cria aplicativos móveis e web com
            design refinado, código limpo e sem vender &quot;experiência&quot;.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <CtaLink
              href="#produtos"
              isExternal={false}
              variant="primary"
              size="lg"
            >
              Ver produtos
            </CtaLink>
            <CtaLink
              href={CONTACT_LINK.href}
              isExternal={CONTACT_LINK.isExternal}
              variant="secondary"
              size="lg"
            >
              Falar com a gente
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

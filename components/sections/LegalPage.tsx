import { CtaLink } from "@/components/ui/CtaLink";
import type { LegalDocument } from "@/core/data/legal/types";

const formatDate = (isoDate: string): string =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <section
      aria-labelledby="legal-titulo"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <article className="max-w-3xl mx-auto">
        <CtaLink
          href="/"
          isExternal={false}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-cloud transition-colors mb-8"
        >
          <span aria-hidden="true">←</span> Voltar ao início
        </CtaLink>

        <h1
          id="legal-titulo"
          className="font-display text-4xl sm:text-5xl text-cloud mb-4 leading-[1.1]"
        >
          {document.title}
        </h1>
        <p className="text-sm text-muted mb-8">
          Última atualização: {formatDate(document.updatedAt)}
        </p>

        {document.isDraft && (
          <p
            role="note"
            className="mb-10 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-gold"
          >
            Versão em revisão: este texto ainda pode mudar.
          </p>
        )}

        <div className="space-y-10">
          {document.sections.map(({ heading, paragraphs }) => (
            <section key={heading}>
              <h2 className="font-display text-2xl text-cloud mb-4">
                {heading}
              </h2>
              <div className="space-y-4 text-base text-soft-gray leading-relaxed">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}

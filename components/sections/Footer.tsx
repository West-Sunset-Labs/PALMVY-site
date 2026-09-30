import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";
import {
  CONTACT_EMAIL,
  CONTACT_LINK,
  getSocialLinks,
} from "@/core/data/contact";

const SOCIAL_LINKS = getSocialLinks();

export function Footer() {
  return (
    <footer className="border-t border-soft-gray/10 bg-pacific-deep py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-lg text-cloud mb-4">PALMVY</h3>
            <p className="text-sm text-muted">
              Apps e sites feitos com calma, sem enrolação e sem vender
              &quot;experiência&quot;.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-cloud mb-4 font-medium">Produtos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#produtos"
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  Sossegue
                </Link>
              </li>
              <li>
                <Link
                  href="/#produtos"
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  TuneLab
                </Link>
              </li>
              <li>
                <Link
                  href="/#produtos"
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  SafeZone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-cloud mb-4 font-medium">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#filosofia"
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  Filosofia
                </Link>
              </li>
              <li>
                <Link
                  href="/#como-trabalhamos"
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  Como trabalhamos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm text-cloud mb-4 font-medium">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted hover:text-cloud transition-colors"
                >
                  Email
                </a>
              </li>
              {CONTACT_LINK.isExternal && (
                <li>
                  <CtaLink
                    href={CONTACT_LINK.href}
                    isExternal
                    className="text-sm text-muted hover:text-cloud transition-colors"
                  >
                    WhatsApp
                  </CtaLink>
                </li>
              )}
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <CtaLink
                    href={href}
                    isExternal
                    className="text-sm text-muted hover:text-cloud transition-colors"
                  >
                    {label}
                  </CtaLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-soft-gray/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © 2026 PALMVY. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidade"
              className="text-sm text-muted hover:text-cloud transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-sm text-muted hover:text-cloud transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

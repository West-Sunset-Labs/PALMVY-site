import Link from 'next/link';
import { MobileMenu } from '@/components/sections/MobileMenu';
import { CtaLink } from '@/components/ui/CtaLink';
import { Logo } from '@/components/ui/Logo';
import { CONTACT_LINK } from '@/core/data/contact';
import { NAV_LINKS } from '@/core/data/navigation';

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-pacific-night/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="inline-flex items-center">
          <Logo variant="horizontal" size="sm" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-soft-gray transition-colors hover:text-cloud"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CtaLink
            href={CONTACT_LINK.href}
            isExternal={CONTACT_LINK.isExternal}
            className="hidden rounded-md bg-sunset px-4 py-2 text-sm font-medium text-pacific-night transition-colors hover:bg-sunset-dark sm:inline-flex"
          >
            Vamos conversar?
          </CtaLink>

          <MobileMenu links={NAV_LINKS} contactLink={CONTACT_LINK} />
        </div>
      </div>
    </nav>
  );
}

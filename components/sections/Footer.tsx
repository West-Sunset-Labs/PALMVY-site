export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 md:px-10 lg:px-16 border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-500 to-orange-400" />
          <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">
            West Sunset Labs
          </span>
        </div>

        <p className="text-xs text-white/20">
          © {year} West Sunset Labs — Todos os direitos reservados.
        </p>

        <nav className="flex gap-6">
          {[
            { label: "Sai de Casa", href: "/sai-de-casa" },
            { label: "LumeaOppo", href: "/lumea-oppo" },
            { label: "Aloy Core", href: "/aloy-core" },
            { label: "Contato", href: "mailto:sam@westsunsetlabs.com" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/30 transition-colors duration-200 hover:text-white/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

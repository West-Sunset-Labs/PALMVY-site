const navLinks = [
  { label: "Sai de Casa", href: "/sai-de-casa" },
  { label: "LumeaOppo", href: "/lumea-oppo" },
  { label: "Aloy Core", href: "/aloy-core" },
  { label: "Studio", href: "/about" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="absolute inset-0 -z-10 bg-[#09090B]/70 backdrop-blur-xl border-b border-white/[0.06]" />

      <a href="/" className="flex items-center gap-2 group">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-orange-400 shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
        <span className="text-sm font-semibold tracking-widest text-white/90 uppercase">
          west{" "}
          <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">
            sunset
          </span>{" "}
          labs
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/50 transition-colors duration-200 hover:text-white/90"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="flex md:hidden flex-col gap-1.5 p-2"
        aria-label="Abrir menu"
      >
        <span className="block h-px w-5 bg-white/60" />
        <span className="block h-px w-5 bg-white/60" />
      </button>
    </header>
  );
}

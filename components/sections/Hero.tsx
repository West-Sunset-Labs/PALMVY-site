import { SunsetButton } from "@/components/ui/SunsetButton";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-32 px-6 md:px-10 lg:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 20% 110%, rgba(109,40,217,0.28) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(234,88,12,0.18) 0%, transparent 55%), #09090B",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 -z-10"
        style={{
          background:
            "linear-gradient(to top, #09090B 0%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-orange-400/80 uppercase">
          Um studio de software indie
        </p>

        <h1 className="mb-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
          Feito a oeste de{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #A855F7 0%, #EA580C 60%, #F59E0B 100%)",
            }}
          >
            tudo.
          </span>
        </h1>

        <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-white/50 md:text-lg">
          West Sunset Labs constrói apps pequenos e deliberados — ferramentas
          calmas que respeitam a sua atenção e não pedem nada em troca.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <SunsetButton href="#apps" variant="primary">
            Ver os apps
            <ArrowDown />
          </SunsetButton>
          <SunsetButton href="/about" variant="ghost">
            Sobre o studio
          </SunsetButton>
        </div>
      </div>
    </section>
  );
}

function ArrowDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="opacity-70"
    >
      <path
        d="M7 2v10M2 7l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { GlassCard } from "@/components/ui/GlassCard";
import { SunsetButton } from "@/components/ui/SunsetButton";

export function StudioBio() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <GlassCard className="relative overflow-hidden px-8 py-12 md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 100% 0%, rgba(109,40,217,0.12) 0%, transparent 70%)",
            }}
          />

          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/30 uppercase">
            O Studio
          </p>

          <h2 className="mb-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Um studio de uma pessoa,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #A855F7 0%, #EA580C 100%)",
              }}
            >
              de propósito.
            </span>
          </h2>

          <p className="mb-3 max-w-md text-base leading-relaxed text-white/50">
            Construo devagar, desenho com cuidado, e só publico o que eu mesmo
            usaria.
          </p>
          <p className="mb-10 max-w-md text-base leading-relaxed text-white/50">
            Tudo aqui é feito por um único par de mãos — sem pressa, sem ruído.
          </p>

          <SunsetButton href="/about" variant="ghost">
            Conheça o studio
            <ExternalArrow />
          </SunsetButton>
        </GlassCard>
      </div>
    </section>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 13L13 3M13 3H6M13 3v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

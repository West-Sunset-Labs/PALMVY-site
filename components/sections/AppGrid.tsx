import { GlassCard } from "@/components/ui/GlassCard";
import { apps, type App } from "@/core/data/apps";

export function AppGrid() {
  return (
    <section id="apps" className="px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-white/30 uppercase">
              Três apps
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              A coleção.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            Um studio, três produtos silenciosos. Cada um moldado por uma
            necessidade real.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <GlassCard hoverable className="group flex flex-col overflow-hidden">
      <a href={app.href} className="flex flex-col flex-1 p-5">
        <div className="mb-5 flex items-start justify-between">
          <AppIcon gradient={app.iconGradient} name={app.name} />
          <ExternalArrow />
        </div>

        <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-white/30 uppercase">
          {app.category}
        </p>
        <h3 className="mb-2 text-xl font-bold text-white">{app.name}</h3>
        <p className="mb-1 text-sm font-medium text-white/60">{app.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/35">
          {app.description}
        </p>

        <div className="mt-auto pt-5">
          <StatusBadge status={app.status} />
        </div>
      </a>
    </GlassCard>
  );
}

function AppIcon({ gradient, name }: { gradient: string; name: string }) {
  return (
    <div
      className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center`}
      aria-hidden
    >
      <span className="text-xl font-black text-white/90">
        {name.charAt(0)}
      </span>
    </div>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="mt-1 text-white/20 transition-all duration-300 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

function StatusBadge({ status }: { status: App["status"] }) {
  const styles: Record<App["status"], string> = {
    "Disponível": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    "Em breve": "bg-orange-500/10 text-orange-400/80 border-orange-500/15",
    "Em desenvolvimento": "bg-violet-500/10 text-violet-400/80 border-violet-500/15",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

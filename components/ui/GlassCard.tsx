import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function GlassCard({ children, className = "", hoverable = false }: GlassCardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hoverable
          ? "transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_0_40px_rgba(109,40,217,0.12)]"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

interface SunsetButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
}

export function SunsetButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: SunsetButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-all duration-300 ease-in-out";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-orange-500 text-white shadow-[0_0_24px_rgba(109,40,217,0.35)] hover:shadow-[0_0_36px_rgba(234,88,12,0.4)] hover:scale-[1.02]",
    ghost:
      "border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm hover:border-white/30 hover:bg-white/10 hover:text-white",
  };

  const classes = [base, variants[variant], className].join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-md border border-soft-gray/10 bg-pacific-deep
        shadow-[inset_0_1px_0_rgba(199,209,216,0.06)]
        transition-all duration-200
        ${
          interactive
            ? "hover:border-soft-gray/25 hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(199,209,216,0.06),0_16px_32px_rgba(7,26,43,0.45)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

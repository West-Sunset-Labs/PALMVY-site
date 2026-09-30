interface HorizonLinesProps {
  className?: string;
}

export function HorizonLines({ className = "" }: HorizonLinesProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 88 Q 50 70 100 88 T 200 88 T 300 88 T 400 88"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1"
      />
      <path
        d="M0 102 Q 50 86 100 102 T 200 102 T 300 102 T 400 102"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M0 116 Q 50 100 100 116 T 200 116 T 300 116 T 400 116"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1"
      />
    </svg>
  );
}

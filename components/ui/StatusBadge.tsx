import type { Product } from "@/core/data/products";

const BASE_STYLES =
  "inline-flex px-3 py-1 rounded-full text-xs font-medium";

const STATUS_CONTENT: Record<
  Product["status"],
  { label: string; styles: string }
> = {
  launched: {
    label: "Disponível",
    styles: "bg-palm-green/20 border border-palm-green text-cloud",
  },
  "coming-soon": {
    label: "Em breve",
    styles: "border border-soft-gray/20 text-muted",
  },
};

export function StatusBadge({ status }: { status: Product["status"] }) {
  const { label, styles } = STATUS_CONTENT[status];

  return <div className={`${BASE_STYLES} ${styles}`}>{label}</div>;
}

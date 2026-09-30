export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const BASE_STYLES =
  "font-medium rounded-md transition-colors duration-200 font-sans";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-sunset text-pacific-night hover:bg-sunset-dark",
  secondary:
    "border border-soft-gray/20 text-cloud hover:border-soft-gray/40 hover:bg-soft-gray/5",
  ghost: "text-soft-gray hover:text-cloud",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg h-12",
};

export const getButtonClassName = (
  variant: ButtonVariant,
  size: ButtonSize,
  className = "",
): string =>
  `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

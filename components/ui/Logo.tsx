import Image from 'next/image';

type LogoVariant = 'symbol' | 'horizontal' | 'vertical';
type LogoSize = 'sm' | 'md' | 'lg';

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
};

const LOGO_WIDTHS: Record<LogoVariant, Record<LogoSize, number>> = {
  symbol: { sm: 28, md: 36, lg: 56 },
  horizontal: { sm: 130, md: 170, lg: 260 },
  vertical: { sm: 90, md: 120, lg: 187 },
};

const LOGO_SOURCES: Record<LogoVariant, string> = {
  symbol: '/images/logo/symbol.svg',
  horizontal: '/images/logo/lockup-horizontal.svg',
  vertical: '/images/logo/lockup-vertical.svg',
};

// height / width of each SVG's viewBox
const LOGO_ASPECT_RATIOS: Record<LogoVariant, number> = {
  symbol: 109 / 112,
  horizontal: 69 / 260,
  vertical: 137 / 187,
};

export const Logo = ({ variant = 'symbol', size = 'md', className }: LogoProps) => {
  const width = LOGO_WIDTHS[variant][size];

  return (
    <Image
      src={LOGO_SOURCES[variant]}
      alt="PALMVY"
      width={width}
      height={Math.round(width * LOGO_ASPECT_RATIOS[variant])}
      className={className}
      priority
    />
  );
};

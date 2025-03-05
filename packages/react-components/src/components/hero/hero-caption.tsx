import { PropsWithChildren } from 'react';

export type HeroCaptionProps = PropsWithChildren<{
  /** Additional classes to apply to the caption */
  className?: string;
}>;

export function HeroCaption({ children, className }: HeroCaptionProps) {
  return <p className={`uofg-hero-caption tw:text-xl ${className}`}>{children}</p>;
}

HeroCaption.displayName = 'HeroCaption';

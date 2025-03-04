import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { HeroContext } from './hero-context';

export type HeroTitleElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

export type HeroTitleProps<T extends HeroTitleElementType = 'h1'> = PropsWithChildren<{
  /**
   * The element type to render the title as
   * @default 'h1'
   */
  as?: T;
  /**
   * Additional classes to apply to the title
   */
  className?: string;
}>;

/**
 * The HeroTitle component is used to display the title of a hero.
 */
export function HeroTitle<T extends HeroTitleElementType = 'h1'>({
  as,
  children,
  className,
  ...rest
}: HeroTitleProps<T>) {
  const context = useContext(HeroContext);
  const Component = as ?? 'h1';

  const heroTitle = tv({
    base: 'tw:font-serif tw:font-bold tw:text-3xl tw:w-fit',
    variants: {
      variant: {
        spotlight: 'tw:text-white',
        basic: 'tw:bg-yellow tw:md:text-4xl tw:text-yellow-contrast tw:p-1',
      },
    },
  });

  const classes = `uofg-hero-title ${twMerge(heroTitle({ variant: context?.variant }), className)}`;

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
}

HeroTitle.displayName = 'HeroTitle';

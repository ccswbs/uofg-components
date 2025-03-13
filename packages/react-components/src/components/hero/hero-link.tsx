import { ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../button/button';

export type HeroLinkElementType = ElementType<{ href?: string }, 'a'>;

export type HeroLinkProps<T extends HeroLinkElementType = 'a'> = PropsWithChildren<{
  /**
   * The element type to render the link as
   *
   * @default 'a'
   */
  as?: T;
  /** The URL to link to */
  href: string;
  /** Additional classes to apply to the link */
  className?: string;
}>;

/** The HeroLink component is used to display a link within a hero. */
export function HeroLink<T extends HeroLinkElementType = 'a'>({
  as,
  href,
  children,
  className,
  ...rest
}: HeroLinkProps<T>) {
  const Component = as ?? 'a';

  return (
    <Button
      {...rest}
      as={Component}
      color="yellow"
      href={href}
      className={`uofg-hero-link ${twMerge('uog:p-3 uog:w-fit', className)}`}
    >
      {children}
    </Button>
  );
}

HeroLink.displayName = 'HeroLink';

import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { Link } from '../link/link';

export type BlockquoteAuthorLinkProps<T extends ElementType = 'a'> = PropsWithChildren<
  {
    /** Additional classes to apply to the component. */
    className?: string;
    /** The URL to link to. */
    href: string;
    /** The element type to render as. */
    as?: T;
  } & ComponentPropsWithoutRef<T>
>;

export function BlockquoteAuthorLink<T extends ElementType = 'a'>({
  as,
  children,
  className,
  href,
  ...rest
}: BlockquoteAuthorLinkProps<T>) {
  const Component = as ?? 'a';

  return (
    <Link {...rest} href={href} as={Component} className={`uofg-blockquote-author-link ${className}`}>
      {children}
    </Link>
  );
}

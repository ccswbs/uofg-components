import { HTMLAttributes, PropsWithChildren } from 'react';

export type HeaderLinkProps = PropsWithChildren<
  {
    /** The URL for the header link */
    href?: string;
  } & HTMLAttributes<HTMLAnchorElement>
>;

export function HeaderLink({ href, children, ...rest }: HeaderLinkProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

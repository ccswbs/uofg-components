import { HTMLAttributes, PropsWithChildren } from 'react';

export type FooterLinkProps = PropsWithChildren<
  {
    /** The URL for the header link */
    href?: string;
  } & HTMLAttributes<HTMLAnchorElement>
>;

export function FooterLink({ href, children, ...rest }: FooterLinkProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

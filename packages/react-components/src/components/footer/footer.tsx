import type { HTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'uofg-footer': HTMLAttributes<any>;
    }
  }
}

export type FooterProps = PropsWithChildren<{}>;

/**
 * A React component wrapper for the footer component from the uoguelph/web-components package, as such that package
 * must be included in your page for this to function correctly.
 */
export function Footer({ children }: FooterProps) {
  return <uofg-footer>{children}</uofg-footer>;
}

export { FooterLink } from './footer-link';

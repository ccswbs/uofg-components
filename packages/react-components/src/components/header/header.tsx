import type { HTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'uofg-header': {
        'variant'?: string;
        'page-title'?: string;
        'page-url'?: string;
      } & HTMLAttributes<any>;
    }
  }
}

export type HeaderProps = PropsWithChildren<{
  /** The title of the department or topic the page which contains the header belongs to */
  title?: string;
  /** The URL to the home page of the department or topic this page belongs to */
  url?: string;
  /** The variant of the header */
  variant?: 'dual-brand';
}>;

/**
 * A React component wrapper for the header component from the uoguelph/web-components package, as such that package
 * must be included in your page for this to function correctly.
 */
export function Header({ title, url, variant, children }: HeaderProps) {
  return (
    <uofg-header page-title={title} page-url={url} variant={variant}>
      {children}
    </uofg-header>
  );
}

export { HeaderLink } from './header-link';
export { HeaderMenu } from './header-menu';
export { HeaderMenuItem } from './header-menu-item';

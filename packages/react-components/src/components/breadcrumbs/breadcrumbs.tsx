import { PropsWithChildren } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import { Container } from '../container/container';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbHome } from './breadcrumb-home';

export type BreadcrumbsProps = PropsWithChildren<{
  /** Additional classes to apply to the breadcrumbs */
  className?: string;
}>;

/**
 * The Breadcrumbs component is a navigational aid that displays a trail of links representing the user's path within a
 * website or application.
 */
export function Breadcrumbs({ className, children }: BreadcrumbsProps) {
  const breadcrumbs = twJoin('flex w-full flex-wrap items-center gap-2');

  return (
    <Container>
      <ol className={`uofg-breadcrumbs ${twMerge(breadcrumbs, className)}`}>{children}</ol>
    </Container>
  );
}

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumb, BreadcrumbHome };

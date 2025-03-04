import { Container } from '../container/container';
import { twJoin, twMerge } from 'tailwind-merge';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbHome } from './breadcrumb-home';
import { PropsWithChildren } from 'react';

export type BreadcrumbsProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the breadcrumbs
   */
  className?: string;
}>;

/**
 * The Breadcrumbs component is a navigational aid that displays a trail of links representing the user's path within a website or application.
 */
export function Breadcrumbs({ className, children }: BreadcrumbsProps) {
  const breadcrumbs = twJoin('tw:flex tw:w-full tw:flex-wrap tw:items-center tw:gap-2');

  return (
    <Container centered>
      <ol className={twMerge(breadcrumbs, className)}>{children}</ol>
    </Container>
  );
}

Breadcrumbs.displayName = 'Breadcrumbs';

export { Breadcrumb, BreadcrumbHome };

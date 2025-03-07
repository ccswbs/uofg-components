import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type NavigationProps = PropsWithChildren<{
  /** Additional classes to add the navigation */
  className?: string;
}>;
export function Navigation({ className, children }: NavigationProps) {
  const list = twMerge(
    'tw:md:flex-row tw:flex tw:flex-col tw:gap-1 tw:border-b-4 tw:border-yellow tw:w-full',
    className,
  );

  return (
    <nav className="uofg-navigation tw:contents">
      <ul className={`uofg-navigation-list ${list}`}>{children}</ul>
    </nav>
  );
}

Navigation.displayName = 'Navigation';

export { NavigationLink } from './navigation-link';

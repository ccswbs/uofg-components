import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type NavigationProps = PropsWithChildren<{
  /** Additional classes to add the navigation */
  className?: string;
}>;
export function Navigation({ className, children }: NavigationProps) {
  const list = twMerge('flex w-full flex-col gap-1 border-b-4 border-yellow md:flex-row', className);

  return (
    <nav className="uofg-navigation contents">
      <ul className={`uofg-navigation-list ${list}`}>{children}</ul>
    </nav>
  );
}

Navigation.displayName = 'Navigation';

export { NavigationLink } from './navigation-link';

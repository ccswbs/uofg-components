import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type NavigationProps = PropsWithChildren<{
  /** Additional classes to add the navigation */
  className?: string;
}>;
export function Navigation({ className, children }: NavigationProps) {
  const list = twMerge(
    'uog:md:flex-row uog:flex uog:flex-col uog:gap-1 uog:border-b-4 uog:border-yellow uog:w-full',
    className,
  );

  return (
    <nav className="uofg-navigation uog:contents">
      <ul className={`uofg-navigation-list ${list}`}>{children}</ul>
    </nav>
  );
}

Navigation.displayName = 'Navigation';

export { NavigationLink } from './navigation-link';

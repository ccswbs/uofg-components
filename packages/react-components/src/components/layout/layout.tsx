import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export function Layout({ children, className }: PropsWithChildren<{ className?: string }>) {
  const classes = tv({
    slots: {
      container: 'contents',
      main: 'flex flex-1 flex-col',
      skipLink:
        'sr-only! fixed top-0 left-0 z-[1000] block w-full bg-yellow text-center text-black no-underline focus-visible:not-sr-only! focus-visible:p-2!',
    },
  })();

  return (
    <div className={`uofg-layout-container ${twMerge(className, classes.container())}`}>
      <a className={`uofg-skip-link ${classes.skipLink()}`} href="#content" autoFocus={false}>
        Skip to main content
      </a>

      <div className={`uofg-layout ${classes.main()}`}>{children}</div>
    </div>
  );
}

Layout.displayName = 'Layout';

export { LayoutContent } from './layout-content';

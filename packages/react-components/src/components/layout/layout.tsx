import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export function Layout({ children }: PropsWithChildren<{}>) {
  const classes = tv({
    slots: {
      main: 'flex flex-1 flex-col',
      skipLink:
        'sr-only! fixed top-0 left-0 z-[1000] block w-full bg-yellow text-center text-black no-underline focus-visible:not-sr-only! focus-visible:p-2!',
    },
  })();

  return (
    <div className="uofg-layout-container">
      <a className={`uofg-skip-link ${classes.skipLink()}`} href="#content" autoFocus={false}>
        Skip to main content
      </a>

      <div className={`uofg-layout ${classes.main()}`}>{children}</div>
    </div>
  );
}

Layout.displayName = 'Layout';

export { LayoutContent } from './layout-content';

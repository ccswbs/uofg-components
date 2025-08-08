import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';
import { LoadingIndicator } from '../loading-indicator/loading-indicator';

export type LayoutProps = PropsWithChildren<{
  /**
   * Whether the content of the layout should be hidden, and a loading indicator should be shown in its place. If set to
   * a string, it will be used as the message displayed in the loading indicator
   */
  loading?: boolean | string;
}>;

export function Layout({ children, loading }: LayoutProps) {
  const classes = tv({
    slots: {
      placeholder:
        'fixed top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-6 bg-white text-red transition-opacity duration-300 data-[closed]:opacity-0',
      skipLink:
        'sr-only! fixed top-0 left-0 z-[1000] block w-full bg-yellow text-center text-black no-underline focus-visible:not-sr-only! focus-visible:p-2!',
    },
  });

  const { placeholder, skipLink } = classes();

  return (
    <>
      <Transition show={Boolean(loading)}>
        <div className={`uofg-layout-placeholder ${placeholder()}`}>
          <LoadingIndicator>{typeof loading !== 'boolean' && loading}</LoadingIndicator>
        </div>
      </Transition>

      {!loading && (
        <>
          <a className={skipLink()} href="#content" autoFocus={false}>
            Skip to main content
          </a>
          <div className="uofg-layout flex flex-1 flex-col">{children}</div>
        </>
      )}
    </>
  );
}

Layout.displayName = 'Layout';

export { LayoutContent } from './layout-content';

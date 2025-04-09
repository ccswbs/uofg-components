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
      placeholder: [
        'uog:text-uog-color-red',
        'uog:fixed',
        'uog:top-0',
        'uog:left-0',
        'uog:z-20',
        'uog:flex',
        'uog:h-screen',
        'uog:w-screen',
        'uog:flex-col',
        'uog:items-center',
        'uog:justify-center',
        'uog:gap-6',
        'uog:bg-white',
        'uog:transition-opacity',
        'uog:duration-300',
        'uog:data-[closed]:opacity-0',
      ],
      skipLink: [
        'uog:bg-uog-color-yellow',
        'uog:sr-only',
        'uog:left-0',
        'uog:z-[1000]',
        'uog:fixed',
        'uog:top-0',
        'uog:w-fit',
        'uog:px-0',
        'uog:underline',
        'uog:transition-[padding]',
        'uog:focus:not-sr-only',
        'uog:focus:px-2',
      ],
    },
  });

  const { placeholder, skipLink } = classes();

  return (
    <>
      <Transition show={Boolean(loading)}>
        <div className={placeholder()}>
          <LoadingIndicator>{typeof loading !== 'boolean' && loading}</LoadingIndicator>
        </div>
      </Transition>

      {!loading && (
        <>
          <a className={skipLink()} href="#content">
            Skip to main content
          </a>
          <div className="flex flex-1 flex-col">{children}</div>
        </>
      )}
    </>
  );
}

Layout.displayName = 'Layout';

export { LayoutContent } from './layout-content';

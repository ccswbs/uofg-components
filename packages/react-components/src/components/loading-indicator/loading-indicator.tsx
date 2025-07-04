import { faSpinnerThird } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { faGryphonStatue } from '@awesome.me/kit-7993323d0c/icons/kit/custom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type LoadingIndicatorProps = PropsWithChildren<{
  /**
   * The size of the loading indicator
   *
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The color of the loading indicator
   *
   * @default 'red'
   */
  color?: 'blue' | 'red' | 'green' | 'yellow';
  /** Additional classes to add the loading indicator */
  className?: string;
}>;

/** A component which can be used as a placeholder while content is loading */
export function LoadingIndicator({ size = 'lg', color = 'red', className, children }: LoadingIndicatorProps) {
  const loadingIndicator = tv({
    slots: {
      base: 'relative flex h-fit w-fit flex-col items-center justify-center gap-2',
      container: 'relative flex aspect-square w-[1em] flex-col items-center justify-center',
      spinner: 'z-0 animate-spin',
      icon: 'absolute w-[0.6em]!',
      text: 'text-center font-serif',
    },
    variants: {
      size: {
        sm: {
          container: 'text-[8rem]',
          text: 'sr-only',
        },
        md: {
          container: 'text-[12rem]',
          text: 'text-[1.5rem]',
        },
        lg: {
          container: 'text-[15rem]',
          text: 'text-lg',
        },
      },
      color: {
        red: {
          base: 'text-red',
        },
        blue: {
          base: 'text-blue',
        },
        green: {
          base: 'text-green',
        },
        yellow: {
          base: 'text-yellow',
        },
      },
    },
  });

  const { base, icon, container, spinner, text } = loadingIndicator({ size, color });

  return (
    <div className={`uofg-loading-indicator ${twMerge(base(), className)}`}>
      <div className={container()}>
        <FontAwesomeIcon className={`uofg-loading-indicator-spinner ${spinner()}`} icon={faSpinnerThird} />
        <FontAwesomeIcon className={`uofg-loading-indicator-icon ${icon()}`} icon={faGryphonStatue} />
      </div>

      <span className={text()}>{children}</span>
    </div>
  );
}

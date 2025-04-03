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
      base: 'uog:flex uog:flex-col uog:items-center uog:justify-center uog:relative uog:w-fit uog:h-fit uog:gap-2',
      container: 'uog:relative uog:aspect-square uog:flex uog:flex-col uog:items-center uog:justify-center uog:w-[1em]',
      spinner: 'uog:animate-spin uog:z-0',
      icon: 'uog:absolute uog:w-[0.6em]!',
      text: 'uog:font-serif uog:text-center',
    },
    variants: {
      size: {
        sm: {
          container: 'uog:text-[8rem]',
          text: 'uog:sr-only',
        },
        md: {
          container: 'uog:text-[12rem]',
          text: 'uog:text-[1.5rem]',
        },
        lg: {
          container: 'uog:text-[15rem]',
          text: 'uog:text-lg',
        },
      },
      color: {
        red: {
          base: 'uog:text-red',
        },
        blue: {
          base: 'uog:text-blue',
        },
        green: {
          base: 'uog:text-green',
        },
        yellow: {
          base: 'uog:text-yellow',
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

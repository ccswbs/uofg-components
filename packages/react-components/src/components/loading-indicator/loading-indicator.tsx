import { faSpinnerThird } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { faGryphonStatue } from '@awesome.me/kit-7993323d0c/icons/kit/custom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type LoadingIndicatorProps = {
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
};

/** A component which can be used as a placeholder while content is loading */
export function LoadingIndicator({ size = 'lg', color = 'red', className }: LoadingIndicatorProps) {
  const loadingIndicator = tv({
    slots: {
      base: 'tw:flex tw:flex-col tw:items-center tw:justify-center tw:relative',
      spinner: 'tw:w-[1em] tw:animate-spin',
      container: 'tw:flex tw:absolute tw:flex-col tw:items-center tw:justify-center',
      icon: '',
      text: '',
    },
    variants: {
      size: {
        sm: {
          spinner: 'tw:text-[8rem]',
          icon: 'tw:text-[4rem]',
          text: 'tw:sr-only',
        },
        md: {
          spinner: 'tw:text-[14rem]',
          icon: 'tw:text-[6rem]',
          text: 'tw:text-[1.5rem]',
        },
        lg: {
          spinner: 'tw:text-[18rem]',
          icon: 'tw:text-[8rem]',
          text: 'tw:text-lg',
        },
      },
      color: {
        red: {
          icon: 'tw:text-red',
          spinner: 'tw:text-red',
          text: 'tw:text-red',
        },
        blue: {
          icon: 'tw:text-blue',
          spinner: 'tw:text-blue',
          text: 'tw:text-blue',
        },
        green: {
          icon: 'tw:text-green',
          spinner: 'tw:text-green',
          text: 'tw:text-green',
        },
        yellow: {
          icon: 'tw:text-yellow',
          spinner: 'tw:text-yellow',
          text: 'tw:text-yellow',
        },
      },
    },
  });

  const { base, icon, container, spinner, text } = loadingIndicator({ size, color });

  return (
    <div className={`uofg-loading-indicator ${twMerge(base(), className)}`}>
      <FontAwesomeIcon className={`uofg-loading-indicator-spinner ${spinner()}`} icon={faSpinnerThird} />
      <div className={container()}>
        <FontAwesomeIcon className={`uofg-loading-indicator-icon ${icon()}`} icon={faGryphonStatue} />
        <span className={text()}>Loading</span>
      </div>
    </div>
  );
}

import { tv } from 'tailwind-variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGryphonStatue } from '@awesome.me/kit-7993323d0c/icons/kit/custom';
import { faSpinner } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { twMerge } from 'tailwind-merge';

export type LoadingIndicatorProps = {
  /**
   * The size of the loading indicator
   * @default 'lg'
   * */
  size?: 'sm' | 'md' | 'lg';
  /**
   * The color of the loading indicator
   * @default 'red'
   */
  color?: 'blue' | 'red' | 'green' | 'yellow';
  /** Additional classes to add the loading indicator */
  className?: string;
};

/**
 * A component which can be used as a placeholder while content is loading
 */
export function LoadingIndicator({ size = 'lg', color = 'red', className }: LoadingIndicatorProps) {
  const loadingIndicator = tv({
    slots: {
      base: 'tw:flex tw:flex-col tw:items-center tw:justify-center',
      icon: '',
      container: 'tw:flex tw:items-center tw:gap-2',
      spinner: 'tw:w-[1em] tw:animate-spin',
      loadingText: 'tw:font-condensed tw:text-3xl',
    },
    variants: {
      size: {
        sm: {
          icon: 'tw:text-4xl',
          loadingText: 'tw:text-lg',
        },
        md: {
          icon: 'tw:text-6xl',
          loadingText: 'tw:text-xl',
        },
        lg: {
          icon: 'tw:text-9xl',
          loadingText: 'tw:text-2xl',
        },
      },
      color: {
        red: {
          icon: 'tw:text-red',
          spinner: 'tw:text-red',
          loadingText: 'tw:text-red',
        },
        blue: {
          icon: 'tw:text-blue',
          spinner: 'tw:text-blue',
          loadingText: 'tw:text-blue',
        },
        green: {
          icon: 'tw:text-green',
          spinner: 'tw:text-green',
          loadingText: 'tw:text-green',
        },
        yellow: {
          icon: 'tw:text-yellow',
          spinner: 'tw:text-yellow',
          loadingText: 'tw:text-yellow',
        },
      },
    },
  });

  const { base, icon, container, spinner, loadingText } = loadingIndicator({ size, color });

  return (
    <div className={`uofg-loading-indicator ${twMerge(base(), className)}`}>
      <FontAwesomeIcon className={`uofg-loading-indicator-icon ${icon()}`} icon={faGryphonStatue} />

      <div className={`uofg-loading-indicator-container ${container()}`}>
        <FontAwesomeIcon className={`uofg-loading-indicator-spinner ${spinner()}`} icon={faSpinner} />
        <span className={`uofg-loading-indicator-loading-text ${loadingText()}`}>Loading</span>
      </div>
    </div>
  );
}

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
      base: 'uog:flex uog:flex-col uog:items-center uog:justify-center uog:relative',
      spinner: 'uog:w-[1em] uog:animate-spin',
      container: 'uog:flex uog:absolute uog:flex-col uog:items-center uog:justify-center',
      icon: '',
      text: 'uog:font-serif',
    },
    variants: {
      size: {
        sm: {
          spinner: 'uog:text-[8rem]',
          icon: 'uog:text-[4rem]',
          text: 'uog:sr-only',
        },
        md: {
          spinner: 'uog:text-[14rem]',
          icon: 'uog:text-[6rem]',
          text: 'uog:text-[1.5rem]',
        },
        lg: {
          spinner: 'uog:text-[18rem]',
          icon: 'uog:text-[8rem]',
          text: 'uog:text-lg',
        },
      },
      color: {
        red: {
          icon: 'uog:text-red',
          spinner: 'uog:text-red',
          text: 'uog:text-red',
        },
        blue: {
          icon: 'uog:text-blue',
          spinner: 'uog:text-blue',
          text: 'uog:text-blue',
        },
        green: {
          icon: 'uog:text-green',
          spinner: 'uog:text-green',
          text: 'uog:text-green',
        },
        yellow: {
          icon: 'uog:text-yellow',
          spinner: 'uog:text-yellow',
          text: 'uog:text-yellow',
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

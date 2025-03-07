import { faPlay } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, ButtonProps } from '../button/button';
import { EmbeddedVideoContext } from './embedded-video-context';

type EmbeddedVideoModalButtonProps = PropsWithChildren<{
  /** The type of button to render, either a play button or a color which will be passed to a Button component */
  type: 'play-button' | ButtonProps['color'];
  /** Additional classes to apply to the button */
  className?: string;
}>;

export function EmbeddedVideoModalButton({ type, children, className }: EmbeddedVideoModalButtonProps) {
  const context = useContext(EmbeddedVideoContext);

  if (type === 'play-button') {
    const button = twMerge(
      'tw:flex tw:aspect-square tw:w-24 tw:items-center tw:justify-center tw:rounded-full tw:bg-black/30 tw:text-4xl tw:text-white tw:transition-colors tw:hover:bg-red/30 tw:focus:bg-red/30',
      className,
    );

    return (
      <button type="button" className={button} onClick={() => context?.setModalOpen(true)}>
        <FontAwesomeIcon icon={faPlay} />
        <span className="sr-only">Show Video</span>
      </button>
    );
  }

  return (
    <Button type="button" color={type} className={className} onClick={() => context?.setModalOpen(true)}>
      {children}
    </Button>
  );
}

EmbeddedVideoModalButton.displayName = 'EmbeddedVideoModalButton';

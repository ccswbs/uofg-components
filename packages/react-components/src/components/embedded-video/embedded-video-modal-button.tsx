'use client';

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
      'flex aspect-square w-24 items-center justify-center rounded-full bg-red text-4xl text-white transition-colors hover:bg-red-focus focus:bg-red-focus',
      className,
    );

    return (
      <button
        type="button"
        className={`uofg-embedded-video-play-button ${button}`}
        onClick={() => context?.setModalOpen(true)}
      >
        <FontAwesomeIcon icon={faPlay} />
        <span className="sr-only">Show Video</span>
      </button>
    );
  }

  return (
    <Button
      type="button"
      color={type}
      className={`uofg-embedded-video-play-button ${className}`}
      onClick={() => context?.setModalOpen(true)}
    >
      {children}
    </Button>
  );
}

EmbeddedVideoModalButton.displayName = 'EmbeddedVideoModalButton';

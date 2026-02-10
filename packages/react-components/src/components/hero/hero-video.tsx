'use client';

import { faPlay } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useContext } from 'react';
import { tv } from 'tailwind-variants';
import { EmbeddedVideo, EmbeddedVideoModalButton } from '../embedded-video/embedded-video';
import { HeroContext } from './hero-context';

export type HeroVideo = PropsWithChildren<{
  /** The URL of the video to embed. */
  src: string;
  /** The title of the video. */
  title: string;
  /** The URL to a human readable transcript of the video. */
  transcript?: string;
  /** Additional classes to apply to the video container */
  className?: string;
}>;

/** The HeroVideo component is used to display a video modal in a hero. */
export function HeroVideo({ src, title, transcript, children }: HeroVideo) {
  const context = useContext(HeroContext);
  const heroVideo = tv({
    base: '',
    variants: {
      variant: {
        basic:
          'absolute top-[calc(50%-var(--text-3xl)/2)] left-1/2 w-12 -translate-x-1/2 -translate-y-1/2 text-xl sm:top-1/2 sm:w-24 sm:text-4xl',
        spotlight: 'w-fit gap-2 p-3',
      },
    },
  });

  const classes = `uofg-hero-video ${heroVideo({ variant: context?.variant })}`;

  if (context?.variant === 'spotlight') {
    return (
      <EmbeddedVideo src={src} title={title} transcript={transcript}>
        <EmbeddedVideoModalButton type="yellow" className={classes}>
          <FontAwesomeIcon icon={faPlay} />
          <span>{children}</span>
        </EmbeddedVideoModalButton>
      </EmbeddedVideo>
    );
  }

  return (
    <EmbeddedVideo src={src} title={title} transcript={transcript}>
      <EmbeddedVideoModalButton type="play-button" className={classes} />
    </EmbeddedVideo>
  );
}

HeroVideo.displayName = 'HeroVideo';

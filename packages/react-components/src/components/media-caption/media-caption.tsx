import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { EmbeddedVideo } from '../embedded-video/embedded-video';

const defaultElement = 'img';

type MediaCaptionElementType =
  | ElementType<{ src: string; alt?: string; height?: number; width?: number }, 'img'>
  | typeof EmbeddedVideo;

type MediaCaptionPropsAs<T extends MediaCaptionElementType> = {
  as?: T;
};

type MediaCaptionPropsBase = {
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'above';
  background?: 'none' | 'light-grey' | 'dark-grey';
  className?: string;
  mediaClassName?: string;
};

export type MediaCaptionProps<T extends MediaCaptionElementType = typeof defaultElement> = PropsWithChildren<
  MediaCaptionPropsAs<T> & ComponentPropsWithoutRef<T> & MediaCaptionPropsBase
>;

export function MediaCaption<T extends MediaCaptionElementType = typeof defaultElement>({
  as,
  size = 'small',
  position = 'left',
  background = 'none',
  children,
  src,
  className,
  mediaClassName,
  ...rest
}: MediaCaptionProps<T>) {
  const Component = as ?? defaultElement;
  const type = Component instanceof EmbeddedVideo ? 'video' : 'image';

  // Small video doesn't work well, so we'll bump it up to medium
  size = type === 'video' && size === 'small' ? 'medium' : size;

  const mediaCaption = tv({
    slots: {
      base: 'uog:flex uog:flex-col',
      mediaWrapper: '',
      media: 'uog:w-full uog:object-cover',
      caption: 'uog:p-4',
    },
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      position: {
        left: {
          base: 'uog:md:grid',
        },
        right: {
          base: 'uog:md:grid',
          mediaWrapper: 'uog:col-start-2 uog:row-start-1',
          caption: 'uog:col-start-1 uog:row-start-1',
        },
        above: {
          caption: 'uog:flex-1',
        },
      },
      background: {
        'light-grey': {
          caption: 'uog:bg-light-grey-bg uog:text-body-copy',
        },
        'dark-grey': {
          caption: 'uog:bg-dark-grey-bg uog:text-body-copy-on-dark',
        },
        'none': {},
      },
    },
    compoundVariants: [
      {
        size: 'small',
        position: 'left',
        class: {
          base: 'uog:grid-cols-[1fr_4fr]',
        },
      },
      {
        size: 'medium',
        position: 'left',
        class: {
          base: 'uog:grid-cols-[1fr_2fr]',
        },
      },
      {
        size: 'large',
        position: 'left',
        class: {
          base: 'uog:grid-cols-[1fr_1fr]',
        },
      },
      {
        size: 'small',
        position: 'right',
        class: {
          base: 'uog:grid-cols-[4fr_1fr]',
        },
      },
      {
        size: 'medium',
        position: 'right',
        class: {
          base: 'uog:grid-cols-[2fr_1fr]',
        },
      },
      {
        size: 'large',
        position: 'right',
        class: {
          base: 'uog:grid-cols-[1fr_1fr]',
        },
      },
      {
        background: 'none',
        position: 'left',
        class: {
          caption: 'uog:md:px-4 uog:py-0',
        },
      },
      {
        background: 'none',
        position: 'right',
        class: {
          caption: 'uog:md:px-4 uog:py-0',
        },
      },
      {
        background: 'none',
        position: 'above',
        class: {
          caption: 'uog:px-0',
        },
      },
    ],
  });

  const { base, mediaWrapper, media, caption } = mediaCaption({ size, position, background });

  return (
    <div className={twMerge(base(), className)}>
      <div className={mediaWrapper()}>
        <Component {...rest} src={src as string} className={twMerge(media(), mediaClassName)} />
      </div>

      <div className={caption()}>{children}</div>
    </div>
  );
}

MediaCaption.displayName = 'MediaCaption';

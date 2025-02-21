import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { EmbeddedVideo } from './embedded-video';
import { tv } from 'tailwind-variants';

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
      base: 'tw:flex tw:flex-col',
      mediaWrapper: '',
      media: 'tw:w-full tw:object-cover',
      caption: 'tw:p-4',
    },
    variants: {
      size: {
        small: {},
        medium: {},
        large: {},
      },
      position: {
        left: {
          base: 'tw:md:grid',
        },
        right: {
          base: 'tw:md:grid',
          mediaWrapper: 'tw:col-start-2 tw:row-start-1',
          caption: 'tw:col-start-1 tw:row-start-1',
        },
        above: {
          caption: 'tw:flex-1',
        },
      },
      background: {
        'light-grey': {
          caption: 'tw:bg-light-grey-bg tw:text-body-copy',
        },
        'dark-grey': {
          caption: 'tw:bg-dark-grey-bg tw:text-body-copy-on-dark',
        },
        'none': {},
      },
    },
    compoundVariants: [
      {
        size: 'small',
        position: 'left',
        class: {
          base: 'tw:grid-cols-[1fr_4fr]',
        },
      },
      {
        size: 'medium',
        position: 'left',
        class: {
          base: 'tw:grid-cols-[1fr_2fr]',
        },
      },
      {
        size: 'large',
        position: 'left',
        class: {
          base: 'tw:grid-cols-[1fr_1fr]',
        },
      },
      {
        size: 'small',
        position: 'right',
        class: {
          base: 'tw:grid-cols-[4fr_1fr]',
        },
      },
      {
        size: 'medium',
        position: 'right',
        class: {
          base: 'tw:grid-cols-[2fr_1fr]',
        },
      },
      {
        size: 'large',
        position: 'right',
        class: {
          base: 'tw:grid-cols-[1fr_1fr]',
        },
      },
      {
        background: 'none',
        position: 'left',
        class: {
          caption: 'tw:md:px-4 tw:py-0',
        },
      },
      {
        background: 'none',
        position: 'right',
        class: {
          caption: 'tw:md:px-4 tw:py-0',
        },
      },
      {
        background: 'none',
        position: 'above',
        class: {
          caption: 'tw:px-0',
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

import { twJoin, twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { EmbeddedVideo } from './embedded-video';

const defaultElement = 'img';

type MediaCaptionElementType = ElementType<{ src: string; className?: string }, 'img'> | typeof EmbeddedVideo;

type MediaCaptionPropsAs<T extends MediaCaptionElementType> = {
  as?: T;
};

type MediaCaptionPropsBase = {
  size?: 'small' | 'medium' | 'large';
  position?: 'left' | 'right' | 'above';
  background?: 'none' | 'light-grey' | 'dark-grey';
  className?: string;
};

export type MediaCaptionProps<T extends MediaCaptionElementType = typeof defaultElement> = PropsWithChildren<
  MediaCaptionPropsAs<T> & ComponentPropsWithoutRef<T> & MediaCaptionPropsBase
>;

export function MediaCaption<T extends MediaCaptionElementType = typeof defaultElement>({
  as,
  size = 'small',
  position = 'left',
  background = 'none',
  className,
  children,
  src,
  ...rest
}: MediaCaptionProps<T>) {
  const Component = as ?? defaultElement;
  const type = Component instanceof EmbeddedVideo ? 'video' : 'image';

  // Small video doesn't work well, so we'll bump it up to medium
  size = type === 'video' && size === 'small' ? 'medium' : size;

  return (
    <div
      className={twMerge(
        'flex flex-col',
        position === 'left' &&
          twJoin(
            'md:grid',
            size === 'small' && 'grid-cols-[1fr,4fr]',
            size === 'medium' && 'grid-cols-[1fr,2fr]',
            size === 'large' && 'grid-cols-[1fr,1fr]',
          ),
        position === 'right' &&
          twJoin(
            'md:grid',
            size === 'small' && 'grid-cols-[4fr,1fr]',
            size === 'medium' && 'grid-cols-[2fr,1fr]',
            size === 'large' && 'grid-cols-[1fr,1fr]',
          ),
        className,
      )}
    >
      <div className={twJoin(position === 'right' && 'col-start-2 row-start-1')}>
        <Component
          {...rest}
          src={src as string}
          className={twMerge('w-full object-cover', 'className' in rest && (rest.className as string))}
        />
      </div>

      <div
        className={twMerge(
          'p-4',
          position === 'right' && 'col-start-1 row-start-1',
          position === 'above' && 'flex-1',
          background === 'light-grey' && 'bg-light-blue-50',
          background === 'dark-grey' && 'bg-cool-gray-950 text-white',
          background === 'none' && position === 'left' && 'md:px-4 py-0',
          background === 'none' && position === 'right' && 'md:px-4 py-0',
          background === 'none' && position === 'above' && 'px-0',
        )}
      >
        {children}
      </div>
    </div>
  );
}

MediaCaption.displayName = 'MediaCaption';

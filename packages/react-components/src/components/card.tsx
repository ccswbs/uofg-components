import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'div';

type CardElementType = ElementType<{ href?: string }, 'a'> | 'div' | 'article';

type CardPropsAs<T extends CardElementType> = {
  as?: T;
};

type CardPropsBase = {
  image?: ReactElement;
  title: ReactNode;
  footer?: ReactNode;
  className?: string;
  centered?: boolean;
};

export type CardProps<T extends CardElementType = typeof defaultElement> = PropsWithChildren<
  CardPropsAs<T> & ComponentPropsWithoutRef<T> & CardPropsBase
>;

export function Card<T extends CardElementType = typeof defaultElement>({
  as,
  image,
  title,
  footer,
  className,
  centered,
  children,
  ...rest
}: CardProps<T>) {
  const Component = as ?? defaultElement;

  const card = tv({
    slots: {
      base: twMerge(
        'group ease-in-out focus-visible:ring-light-blue flex flex-col justify-center transition duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      ),
      contentContainer: 'flex flex-1 flex-col gap-2 bg-blue-light p-5 text-blue-light-contrast',
      imageContainer: 'w-full overflow-hidden',
      imageWrapper: 'w-full overflow-hidden',
      titleContainer: 'flex flex-1',
      titleWrapper: 'font-bold text-lg',
      footerContainer: 'flex gap-2 border-t border-t-blue-dark bg-blue px-5 py-2 text-blue-contrast transition-colors',
    },
    variants: {
      isLink: {
        true: {
          contentContainer: 'transition-colors group-hover:bg-yellow',
          imageWrapper:
            'ease-in-out transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110',
        },
      },
      hasImage: {
        true: '',
      },
      centered: {
        true: {
          titleContainer: 'items-center justify-center',
          footerContainer: 'justify-center',
        },
        false: '',
      },
    },
    compoundVariants: [
      {
        isLink: true,
        hasImage: false,
        class: {
          base: 'transition-colors group-hover:bg-yellow',
        },
      },
    ],
  });

  const { base, contentContainer, imageContainer, imageWrapper, titleContainer, titleWrapper, footerContainer } = card({
    isLink: 'href' in rest,
    hasImage: Boolean(image),
    centered,
  });

  const content = (
    <>
      {/* Card Image */}
      {image && (
        <div className={imageContainer()}>
          <div className={imageWrapper()}>{image}</div>
        </div>
      )}

      {/* Card Main Container */}
      <div className={contentContainer()}>
        {/* Card Title */}
        <div className={titleContainer()}>
          {typeof title === 'string' ?
            <span className={titleWrapper()}>{title}</span>
          : title}
        </div>

        {/* Card Body */}
        {children}
      </div>

      {/* Card Footer */}
      {footer && <div className={footerContainer()}>{footer}</div>}
    </>
  );

  return (
    <Component {...rest} className={base()}>
      {content}
    </Component>
  );
}

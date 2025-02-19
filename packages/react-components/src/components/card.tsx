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
        'tw:group tw:ease-in-out tw:focus-visible:ring-light-blue tw:flex tw:flex-col tw:justify-center tw:transition tw:duration-200 tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none',
        className,
      ),
      contentContainer: 'tw:flex tw:flex-1 tw:flex-col tw:gap-2 tw:bg-grey-light-bg tw:p-5 tw:text-grey-light-contrast',
      imageContainer: 'tw:w-full tw:overflow-hidden',
      imageWrapper: 'tw:w-full tw:overflow-hidden',
      titleContainer: 'tw:flex tw:flex-1',
      titleWrapper: 'tw:font-bold tw:text-lg',
      footerContainer: 'tw:flex tw:gap-2 tw:bg-grey-light tw:px-5 tw:py-2 tw:text-grey-light-contrast tw:transition-colors',
    },
    variants: {
      isLink: {
        true: {
          contentContainer: 'tw:transition-colors tw:group-hocus:bg-yellow tw:group-hocus:text-yellow-contrast',
          imageWrapper:
            'tw:ease-in-out tw:transition-transform tw:duration-200 tw:group-hover:scale-110 tw:group-focus-visible:scale-110',
        },
      },
      hasImage: {
        true: '',
      },
      centered: {
        true: {
          titleContainer: 'tw:items-center tw:justify-center',
          footerContainer: 'tw:justify-center',
        },
        false: '',
      },
    },
    compoundVariants: [
      {
        isLink: true,
        hasImage: false,
        class: {
          base: 'tw:transition-colors tw:group-hover:bg-yellow',
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
          {typeof title === 'string' ? (
            <span className={titleWrapper()}>{title}</span>
          ) : (
            title
          )}
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
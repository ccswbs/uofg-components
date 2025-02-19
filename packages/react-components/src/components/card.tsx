import { twMerge } from 'tailwind-merge';
import { AnchorHTMLAttributes, FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

export type CardPropsBase = {
  image?: ReactElement;
  title: ReactNode;
  footer?: ReactNode;
  className?: string;
  centered?: boolean;
  children?: ReactNode;
};

export type CardProps = CardPropsBase &
  (
    | ({
        as: 'div';
      } & HTMLAttributes<HTMLDivElement>)
    | ({
        as: 'link';
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export const Card: FC<CardProps> = ({ as = 'div', image, title, footer, className, centered, children, ...rest }) => {
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
    isLink: as === 'link',
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
          {typeof title === 'string' ? <span className={titleWrapper()}>{title}</span> : title}
        </div>

        {/* Card Body */}
        {children}
      </div>

      {/* Card Footer */}
      {footer && <div className={footerContainer()}>{footer}</div>}
    </>
  );

  if (as === 'div') {
    return (
      <div {...(rest as HTMLAttributes<HTMLDivElement>)} className={base()}>
        {content}
      </div>
    );
  }

  return (
    <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={base()}>
      {content}
    </a>
  );
};

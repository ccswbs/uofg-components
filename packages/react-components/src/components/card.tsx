import { twJoin, twMerge } from 'tailwind-merge';
import { AnchorHTMLAttributes, FC, HTMLAttributes, ReactElement, ReactNode } from 'react';

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
    | {
        as: 'div';
      } & HTMLAttributes<HTMLDivElement>
    | ({
        as: 'link';
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export const Card: FC<CardProps> = ({ as = 'div', image, title, footer, className, centered, children, ...rest }) => {
  const isLink = as === 'link';
  const noImage = !image;

  const container = twMerge(
    'group ease-in-out focus-visible:ring-light-blue flex flex-col justify-center transition duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
    noImage && isLink && 'hover:scale-105 focus-visible:scale-105',
    className,
  );
  const contentContainer = twJoin(
    'bg-light-blue-50 flex flex-1 flex-col gap-2 p-5',
    isLink && 'transition-colors group-hover:bg-yellow',
  );
  const imageContainer = twJoin('w-full overflow-hidden');
  const imageWrapper = twJoin(
    '[&>img]:object-cover',
    isLink && 'ease-in-out transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110',
  );
  const titleContainer = twJoin('flex flex-1', centered && 'items-center justify-center');
  const titleWrapper = twJoin('font-bold text-lg');
  const footerContainer = twJoin(
    'border-t-blue-200 bg-light-blue-100 flex gap-2 border-t px-5 py-2 transition-colors',
    centered && 'justify-center',
  );

  const content = (
    <>
      {/* Card Image */}
      {image && (
        <div className={imageContainer}>
          <div className={imageWrapper}>{image}</div>
        </div>
      )}

      {/* Card Main Container */}
      <div className={contentContainer}>
        {/* Card Title */}
        <div className={titleContainer}>
          {typeof title === 'string' ? <span className={titleWrapper}>{title}</span> : title}
        </div>

        {/* Card Body */}
        {children}
      </div>

      {/* Card Footer */}
      {footer && <div className={footerContainer}>{footer}</div>}
    </>
  );

  if (as === 'div') {
    return <div {...(rest as HTMLAttributes<HTMLDivElement>)} className={container}>{content}</div>;
  }

  return (
    <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={container}>
      {content}
    </a>
  );
};

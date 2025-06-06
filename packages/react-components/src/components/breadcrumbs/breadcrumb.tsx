import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export const defaultBreadcrumbElement = 'a';

export type BreadcrumbElementType = ElementType;

export type BreadcrumbProps<T extends BreadcrumbElementType = typeof defaultBreadcrumbElement> = PropsWithChildren<
  {
    /**
     * The element to render the breadcrumb as
     *
     * @default 'a'
     */
    as?: T;
    /** The URL to link to */
    href?: string;
    /** Additional classes to apply to the breadcrumb */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

/** The Breadcrumb component is used to display a single breadcrumb in a Breadcrumbs component. */
export function Breadcrumb<T extends BreadcrumbElementType = typeof defaultBreadcrumbElement>({
  as,
  children,
  className,
  href,
  ...rest
}: BreadcrumbProps<T>) {
  const Component = as ?? defaultBreadcrumbElement;
  const breadcrumb = tv({
    slots: {
      container: 'uog:flex uog:items-center uog:gap-2',
      icon: 'uog:h-[.75em]',
      link: 'uog:underline uog:decoration-transparent uog:decoration-1 uog:transition-colors uog:hocus-visible:decoration-black',
    },
  });

  const { container, icon, link } = breadcrumb();

  return (
    <li className={`uofg-breadcrumb-list-item ${container()}`}>
      <FontAwesomeIcon icon={faChevronRight} className={icon()} />
      {href ?
        <Component {...rest} className={`uofg-breadcrumb ${twMerge(link(), className)}`} href={href}>
          {children}
        </Component>
      : <span>{children}</span>}
    </li>
  );
}

Breadcrumb.displayName = 'Breadcrumb';

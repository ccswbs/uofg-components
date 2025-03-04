import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@awesome.me/kit-7993323d0c/icons/sharp/light';
import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { Container } from './container';
import { tv } from 'tailwind-variants';
import { twJoin, twMerge } from 'tailwind-merge';

const defaultElement = 'a';

export type BreadcrumbElementType = ElementType<{ href?: string }, 'a'>;
export type BreadcrumbProps<T extends BreadcrumbElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element to render the breadcrumb as
     * @default 'a'
     */
    as?: T;
    /**
     * The URL to link to
     */
    href?: string;
    /**
     * Additional classes to apply to the breadcrumb
     */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;
export function Breadcrumb<T extends BreadcrumbElementType = typeof defaultElement>({
  as,
  children,
  className,
  href,
  ...rest
}: BreadcrumbProps<T>) {
  const Component = as ?? defaultElement;
  const breadcrumb = tv({
    slots: {
      container: 'tw:flex tw:items-center tw:gap-2',
      icon: 'tw:h-[.75em]',
      link: 'tw:underline tw:decoration-transparent tw:decoration-1 tw:transition-colors tw:hocus-visible:decoration-black',
    },
  });

  const { container, icon, link } = breadcrumb();

  return (
    <li className={container()}>
      <FontAwesomeIcon icon={faChevronRight} className={icon()} />
      {href ?
        <Component {...rest} className={twMerge(link(), className)} href={href}>
          {children}
        </Component>
      : <span>{children}</span>}
    </li>
  );
}
Breadcrumb.displayName = 'Breadcrumb';

export function BreadcrumbHome<T extends BreadcrumbElementType = typeof defaultElement>({
  href = '/',
  children, // eslint-disable-line @typescript-eslint/no-unused-vars
  className,
  ...rest
}: BreadcrumbProps<T>) {
  const icon = twJoin('tw:h-[1em] tw:fill-black');

  return (
    <li>
      <a {...rest} href={href} className={className}>
        <FontAwesomeIcon icon={faHome} className={icon} />
        <span className="tw:sr-only">U of G Homepage</span>
      </a>
    </li>
  );
}
BreadcrumbHome.displayName = 'BreadcrumbHome';

export type BreadcrumbsProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the breadcrumbs
   */
  className?: string;
}>;
/**
 * The Breadcrumbs component is a navigational aid that displays a trail of links representing the user's path within a website or application.
 */
export function Breadcrumbs({ className, children }: BreadcrumbsProps) {
  const breadcrumbs = twJoin('tw:flex tw:w-full tw:flex-wrap tw:items-center tw:gap-2');

  return (
    <Container centered>
      <ol className={twMerge(breadcrumbs, className)}>{children}</ol>
    </Container>
  );
}
Breadcrumbs.displayName = 'Breadcrumbs';

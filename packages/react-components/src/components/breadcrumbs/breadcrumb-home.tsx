import { faHome } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twJoin } from 'tailwind-merge';
import { BreadcrumbElementType, BreadcrumbProps, defaultBreadcrumbElement } from './breadcrumb';

export function BreadcrumbHome<T extends BreadcrumbElementType = typeof defaultBreadcrumbElement>({
  href = '/',
  children, // eslint-disable-line @typescript-eslint/no-unused-vars
  className,
  ...rest
}: BreadcrumbProps<T>) {
  const icon = twJoin('uog:h-[1em] uog:fill-black');

  return (
    <li className="uofg-breadcrumb-home-list-item">
      <a {...rest} href={href} className={`uofg-breadcrumb-home ${className}`}>
        <FontAwesomeIcon icon={faHome} className={icon} />
        <span className="uog:sr-only">U of G Homepage</span>
      </a>
    </li>
  );
}

BreadcrumbHome.displayName = 'BreadcrumbHome';

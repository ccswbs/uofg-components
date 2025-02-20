import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@awesome.me/kit-7993323d0c/icons/sharp/light';
import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { Container } from './container';
import { tv } from 'tailwind-variants';

export type Breadcrumb = {
  title: string;
  url: string;
};

const defaultElement = 'a';

type BreadcrumbsElementType = ElementType<{ href?: string }, 'a'>;

type BreadcrumbsPropsAs<T extends BreadcrumbsElementType> = {
  as?: T;
};

type BreadcrumbsPropsBase = {
  links: Breadcrumb[];
};

export type BreadcrumbsProps<T extends BreadcrumbsElementType = typeof defaultElement> = PropsWithChildren<
  BreadcrumbsPropsAs<T> & ComponentPropsWithoutRef<T> & BreadcrumbsPropsBase
>;

export function Breadcrumbs<T extends BreadcrumbsElementType = typeof defaultElement>({
  as,
  links,
  ...rest
}: BreadcrumbsProps<T>) {
  const Component = as ?? defaultElement;
  const breadcrumbs = tv({
    slots: {
      base: 'tw:flex tw:w-full tw:flex-wrap tw:items-center tw:gap-2',
      homeIcon: 'tw:h-[1em] tw:fill-black',
      breadcrumbContainer: 'tw:flex tw:items-center tw:gap-2',
      breadcrumbIcon: 'tw:h-[.75em]',
      breadcrumbLink:
        'tw:underline tw:decoration-transparent tw:decoration-1 tw:transition-colors tw:hover:decoration-black tw:focus:decoration-black',
    },
  });

  const { base, homeIcon, breadcrumbContainer, breadcrumbIcon, breadcrumbLink } = breadcrumbs();

  return (
    <Container centered>
      <ol className={base()}>
        <li>
          <Component {...rest} href="/">
            <FontAwesomeIcon icon={faHome} className={homeIcon()} />
            <span className="tw:sr-only">U of G Homepage</span>
          </Component>
        </li>
        {links?.map((link, index) => (
          <li key={index} className={breadcrumbContainer()}>
            <FontAwesomeIcon icon={faChevronRight} className={breadcrumbIcon()} />
            {index === links.length - 1 ?
              <span>{link.title}</span>
            : <Component {...rest} className={breadcrumbLink()} href={link.url}>
                {link.title}
              </Component>
            }
          </li>
        ))}
      </ol>
    </Container>
  );
}

Breadcrumbs.displayName = 'Breadcrumbs';

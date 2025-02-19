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
      base: 'flex w-full flex-wrap items-center gap-2',
      homeIcon: 'h-[1em] fill-black',
      breadcrumbContainer: 'flex items-center gap-2',
      breadcrumbIcon: 'h-[.75em]',
      breadcrumbLink:
        'underline decoration-transparent decoration-1 transition-colors hover:decoration-black focus:decoration-black',
    },
  });

  const { base, homeIcon, breadcrumbContainer, breadcrumbIcon, breadcrumbLink } = breadcrumbs();

  return (
    <Container centered>
      <ol className={base()}>
        <li>
          <Component {...rest} href="/">
            <FontAwesomeIcon icon={faHome} className={homeIcon()} />
            <span className="sr-only">U of G Homepage</span>
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

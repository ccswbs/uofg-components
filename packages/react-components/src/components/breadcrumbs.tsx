import type { ElementType, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@awesome.me/kit-7993323d0c/icons/sharp/light';
import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { Container } from './container';
import { tv } from 'tailwind-variants';

export type Breadcrumb = {
  title: string;
  url: string;
};

export type BreadcrumbsProps = {
  links: Breadcrumb[];
  as?: ElementType<{ href: string }>;
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ links, as = 'a' }) => {
  const Link = as;

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
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className={homeIcon()} />
            <span className="sr-only">U of G Homepage</span>
          </Link>
        </li>
        {links?.map((link, index) => (
          <li key={index} className={breadcrumbContainer()}>
            <FontAwesomeIcon icon={faChevronRight} className={breadcrumbIcon()} />
            {index === links.length - 1 ? (
              <span>{link.title}</span>
            ) : (
              <Link className={breadcrumbLink()} href={link.url}>
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

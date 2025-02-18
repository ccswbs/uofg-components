import type { ElementType, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@awesome.me/kit-7993323d0c/icons/sharp/light';
import { faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/light';
import { Container } from './container';

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

  return (
    <Container centered>
      <ol className="flex w-full flex-wrap items-center gap-2">
        <li>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="h-[1em] fill-black" />
            <span className="sr-only">U of G Homepage</span>
          </Link>
        </li>
        {links?.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faChevronRight} className="h-[.75em]" />
            {index === links.length - 1 ? (
              <span>{link.title}</span>
            ) : (
              <Link
                className="underline decoration-transparent decoration-1 transition-colors hover:decoration-black focus:decoration-black"
                href={link.url}
              >
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

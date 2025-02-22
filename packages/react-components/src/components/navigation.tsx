import { ComponentPropsWithoutRef, ElementType } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'a';

type NavigationElementType = ElementType<{ href?: string }, 'a'>;

type NavigationPropsAs<T extends NavigationElementType> = {
  as?: T;
};

export type NavigationProps<T extends NavigationElementType = typeof defaultElement> = NavigationPropsAs<T> &
  ComponentPropsWithoutRef<'nav'> & {
    fullWidth?: boolean;
    links: {
      href: string;
      text: string;
      active?: boolean;
      props?: ComponentPropsWithoutRef<T>;
    }[];
  };
export function Navigation<T extends NavigationElementType = typeof defaultElement>({
  as,
  fullWidth = true,
  links,
  ...rest
}: NavigationProps<T>) {
  const Component = as ?? defaultElement;

  const navigation = tv({
    slots: {
      list: 'tw:md:flex-row tw:flex tw:flex-col tw:gap-1 tw:border-b-4 tw:border-yellow',
      listItem: 'tw:contents',
      link: 'tw:rounded-t-sm tw:bg-light-grey-bg tw:font-bold tw:hocus-visible:bg-light-grey tw:mb-1 tw:flex tw:items-center tw:justify-center tw:px-4 tw:py-3 tw:text-center tw:text-lg tw:text-black tw:transition-colors tw:focus:outline-none',
    },
    variants: {
      fullWidth: {
        true: {
          list: 'tw:w-full',
          listItem: 'tw:flex-1',
          link: 'tw:flex-1',
        },
        false: {
          list: 'tw:w-fit',
        },
      },
      active: {
        true: {
          link: 'tw:mb-0 tw:border-2 tw:border-yellow tw:bg-yellow tw:text-yellow-contrast tw:hocus-visible:bg-yellow',
        },
      },
    },
  });

  const { list, listItem, link: linkClasses } = navigation({ fullWidth });

  return (
    <nav {...rest}>
      <ul className={list()}>
        {links.map((link, index) => (
          <li className={listItem()} key={index}>
            <Component
              {...link.props}
              aria-current={link?.active ? 'page' : undefined}
              className={linkClasses({ active: link?.active })}
              href={link.href}
            >
              {link.text}
            </Component>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.displayName = 'Navigation';

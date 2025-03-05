import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const defaultElement = 'a';

type NavigationLinkElementType = ElementType<{ href?: string }, 'a'>;

export type NavigationLinkProps<T extends NavigationLinkElementType = typeof defaultElement> = PropsWithChildren<
  {
    /** The element to render the link as */
    as?: T;
    /** If true, the link will be styled as active */
    active?: boolean;
    /** The href of the link */
    href: string;
    /** Additional classes to add the link */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

export function NavigationLink<T extends NavigationLinkElementType = typeof defaultElement>({
  as,
  active,
  href,
  children,
  className,
  ...rest
}: NavigationLinkProps<T>) {
  const Component = as ?? defaultElement;

  const navigationLink = tv({
    slots: {
      listItem: 'tw:contents tw:flex-1',
      link: 'tw:rounded-t-sm tw:bg-light-grey-bg tw:font-bold tw:hocus-visible:bg-light-grey tw:mb-1 tw:flex tw:items-center tw:justify-center tw:px-4 tw:py-3 tw:text-center tw:text-lg tw:text-black tw:transition-colors tw:focus:outline-none tw:flex-1',
    },
    variants: {
      active: {
        true: {
          link: 'tw:mb-0 tw:border-2 tw:border-yellow tw:bg-yellow tw:text-yellow-contrast tw:hocus-visible:bg-yellow',
        },
      },
    },
  });

  const { listItem, link } = navigationLink({ active });

  return (
    <li className={listItem()}>
      <Component
        {...rest}
        href={href}
        className={`uofg-navigation-link ${twMerge(link(), className)}`}
        aria-current={active ? 'page' : undefined}
      >
        {children}
      </Component>
    </li>
  );
}

NavigationLink.displayName = 'NavigationLink';

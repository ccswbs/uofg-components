import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

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
      listItem: 'uog:contents uog:flex-1',
      link: 'uog:rounded-t-sm uog:bg-light-grey-bg uog:font-bold uog:hocus-visible:bg-light-grey uog:mb-1 uog:flex uog:items-center uog:justify-center uog:px-4 uog:py-3 uog:text-center uog:text-lg uog:text-black uog:transition-colors uog:focus:outline-none uog:flex-1',
    },
    variants: {
      active: {
        true: {
          link: 'uog:mb-0 uog:border-2 uog:border-yellow uog:bg-yellow uog:text-yellow-contrast uog:hocus-visible:bg-yellow',
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

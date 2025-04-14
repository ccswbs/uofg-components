import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'a';

type NavigationLinkElementType = ElementType;

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
      link: 'uog:mb-1 uog:flex uog:items-center uog:justify-center uog:rounded-t-sm uog:bg-grey-light-bg uog:px-4 uog:py-3 uog:text-center uog:text-lg uog:font-bold uog:text-black uog:transition-colors uog:hover:bg-grey-light uog:focus:bg-grey-light uog:focus:outline-hidden uog:flex-1',
    },
    variants: {
      active: {
        true: {
          link: 'uog:text-yellow-contrast uog:hocus-visible:bg-yellow uog:mb-0 uog:border-2 uog:border-yellow uog:bg-yellow uog:order-last uog:md:order-none',
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

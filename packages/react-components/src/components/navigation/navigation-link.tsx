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
      listItem: 'contents flex-1',
      link: 'mb-1 flex flex-1 items-center justify-center rounded-t-sm bg-grey-light-bg px-4 py-3 text-center text-lg font-bold text-black transition-colors hover:bg-grey-light focus:bg-grey-light focus:outline-hidden',
    },
    variants: {
      active: {
        true: {
          link: 'order-last mb-0 border-2 border-yellow bg-yellow text-yellow-contrast md:order-none hocus-visible:bg-yellow',
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

import { twMerge } from 'tailwind-merge';
import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'a';

type LinkElementType = ElementType<{ href?: string }, 'a'>;

type LinkPropsAs<T extends LinkElementType> = {
  as?: T;
};

type LinkPropsBase = {
  href: string;
  color?: 'base' | 'light' | 'dark';
  className?: string;
};

export type LinkProps<T extends LinkElementType = typeof defaultElement> = PropsWithChildren<
  LinkPropsAs<T> & ComponentPropsWithoutRef<T> & LinkPropsBase
>;

export function Link<T extends LinkElementType = typeof defaultElement>({
  as,
  href,
  color = 'base',
  children,
  className,
  ...rest
}: LinkProps<T>) {
  const LinkComponent = as ?? defaultElement;

  const linkClasses = tv({
    base: 'tw:inline-flex tw:gap-[1em] tw:underline tw:decoration-current tw:transition-colors tw:hover:decoration-transparent tw:focus:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none tw:text-body-copy-link',
    variants: {
      color: {
        base: 'tw:text-body-copy-link tw:focus-visible:ring-body-copy-link',
        light: 'tw:text-body-copy-link-on-light tw:focus-visible:ring-body-copy-link-on-light',
        dark: 'tw:text-body-copy-link-on-dark tw:focus-visible:ring-body-copy-link-on-light',
      },
    },
  });

  return (
    <LinkComponent {...rest} href={href} className={twMerge(linkClasses({ color }), className)}>
      {children}
    </LinkComponent>
  );
}

Link.displayName = 'Link';

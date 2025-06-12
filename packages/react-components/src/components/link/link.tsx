import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'a';

type LinkElementType = ElementType;

type LinkPropsAs<T extends LinkElementType> = {
  as?: T;
};

type LinkPropsBase = {
  href: string;
  className?: string;
};

export type LinkProps<T extends LinkElementType = typeof defaultElement> = PropsWithChildren<
  LinkPropsAs<T> & ComponentPropsWithoutRef<T> & LinkPropsBase
>;

export function Link<T extends LinkElementType = typeof defaultElement>({
  as,
  href,
  children,
  className,
  ...rest
}: LinkProps<T>) {
  const LinkComponent = as ?? defaultElement;

  const linkClasses = tv({
    base: 'uog:inline-flex uog:gap-[1em] uog:underline uog:decoration-current uog:transition-colors uog:hover:decoration-transparent uog:focus:ring-2 uog:focus-visible:ring-offset-2 uog:focus-visible:outline-none uog:text-body-copy-link uog:focus-visible:ring-body-copy-link uog:light:text-body-copy-link-on-light uog:light:focus-visible:ring-body-copy-link-on-light uog:dark:text-body-copy-link-on-dark uog:dark:focus-visible:ring-body-copy-link-on-light',
  });

  return (
    <LinkComponent {...rest} href={href} className={`uofg-link ${twMerge(linkClasses(), className)}`}>
      {children}
    </LinkComponent>
  );
}

Link.displayName = 'Link';

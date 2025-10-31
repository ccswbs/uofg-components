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
    base: 'text-body-copy-link underline decoration-current transition-colors hover:decoration-transparent focus:outline-2 focus-visible:outline-offset-2 focus-visible:outline-body-copy-link dark:text-body-copy-link-on-dark dark:focus-visible:outline-body-copy-link-on-light light:text-body-copy-link-on-light light:focus-visible:outline-body-copy-link-on-light',
  });

  return (
    <LinkComponent {...rest} href={href} className={`uofg-link ${twMerge(linkClasses(), className)}`}>
      {children}
    </LinkComponent>
  );
}

Link.displayName = 'Link';

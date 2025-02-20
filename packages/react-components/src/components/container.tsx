import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

const defaultElement = 'div';

type ContainerPropsAs<T extends ElementType> = {
  as?: T;
};

type ContainerPropsBase = {
  centered?: boolean;
  className?: string;
};

export type ContainerProps<T extends ElementType = typeof defaultElement> = PropsWithChildren<
  ContainerPropsAs<T> & ComponentPropsWithoutRef<T> & ContainerPropsBase
>;

export function Container<T extends ElementType = typeof defaultElement>({
  as,
  centered = false,
  children,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? defaultElement;

  const container = tv({
    base: 'tw:max-w-[--tw-max-content-width] tw:container tw:px-4 tw:pt-2 tw:pb-4',
    variants: {
      centered: {
        true: 'tw:mx-auto',
      },
    },
  });

  return (
    <Component {...rest} className={twMerge(container({ centered }), className)}>
      {children}
    </Component>
  );
}

Container.displayName = 'Container';

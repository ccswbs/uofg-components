import { ElementType, PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

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

  return (
    <Component
      {...rest}
      className={twMerge(twJoin('max-w-max-content container px-4 pt-2 pb-4', centered && 'mx-auto'), className)}
    >
      {children}
    </Component>
  );
}

Container.displayName = 'Container';

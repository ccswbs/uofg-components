import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultElement = 'div';

export type ContainerProps<T extends ElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element to render as.
     *
     * @default 'div'
     */
    as?: T;
    /** Additional classes to apply to the container */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;
/** The Container component is a layout component that wraps content and applies padding and max-width styles. */
export function Container<T extends ElementType = typeof defaultElement>({
  as,
  children,
  className,
  ...rest
}: ContainerProps<T>) {
  const Component = as ?? defaultElement;

  const classes = twMerge('mx-auto w-full max-w-(--tw-max-content-width) px-4 pt-2 pb-4', className);

  return (
    <Component {...rest} className={`uofg-container ${classes}`}>
      {children}
    </Component>
  );
}

Container.displayName = 'Container';

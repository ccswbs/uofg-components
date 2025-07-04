'use client';

import { ComponentPropsWithoutRef, PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { ListContext } from './list-context';
import { ListItem } from './list-item';

const defaultElement = 'ul';

type ListElementType = 'ul' | 'ol';

export type ListProps<T extends ListElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element-type to render as.
     *
     * @default 'ul'
     */
    as?: T;
    /** Additional classes to apply to the list. */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

/** A list component. */
export function List<T extends ListElementType = typeof defaultElement>({
  as,
  children,
  className,
  ...rest
}: ListProps<T>) {
  const Component = as ?? defaultElement;
  const context = useContext(ListContext);

  const list = tv({
    base: 'relative flex h-fit w-full list-inside flex-col gap-2',
    variants: {
      as: {
        ol: 'list-decimal',
        ul: 'list-disc',
      },
      nested: {
        true: 'ml-4',
      },
      level: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
    },
    compoundVariants: [
      {
        level: 1,
        as: 'ul',
        class: 'list-[square]',
      },
      {
        level: 1,
        as: 'ol',
        class: 'list-[lower-alpha]',
      },
      {
        level: 2,
        as: 'ul',
        class: 'list-[circle]',
      },
      {
        level: 2,
        as: 'ol',
        class: 'list-[lower-roman]',
      },
    ],
  });

  const classes = list({
    as: Component,
    level: context.parent === as ? ((context.level % 3) as 0 | 1 | 2 | 3) : 0,
    nested: context.level > 0,
  });

  return (
    <Component {...rest} className={`uofg-list ${twMerge(classes, className)}`}>
      <ListContext.Provider
        value={{
          parent: as ?? 'ul',
          level: context.level + 1,
        }}
      >
        {children}
      </ListContext.Provider>
    </Component>
  );
}

List.displayName = 'List';

export { ListItem };

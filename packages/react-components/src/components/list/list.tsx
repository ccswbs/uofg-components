import { ComponentPropsWithoutRef, PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { ListContext } from './list-context.ts';
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
    base: 'tw:flex tw:flex-col tw:relative tw:h-fit tw:w-full tw:list-inside tw:gap-2',
    variants: {
      as: {
        ol: 'tw:list-decimal',
        ul: 'tw:list-disc',
      },
      nested: {
        true: 'tw:ml-4',
      },
      nesting: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
    },
    compoundVariants: [
      {
        nesting: 1,
        as: 'ul',
        class: 'tw:list-[square]',
      },
      {
        nesting: 1,
        as: 'ol',
        class: 'tw:list-[lower-alpha]',
      },
      {
        nesting: 2,
        as: 'ul',
        class: 'tw:list-[circle]',
      },
      {
        nesting: 2,
        as: 'ol',
        class: 'tw:list-[lower-roman]',
      },
    ],
  });

  return (
    <Component
      {...rest}
      className={twMerge(
        list({ as: Component, nesting: (context?.nesting % 3) as 0 | 1 | 2, nested: context?.nesting > 0 }),
        className,
      )}
    >
      <ListContext.Provider value={{ nesting: (context.nesting + 1) % 4 }}>{children}</ListContext.Provider>
    </Component>
  );
}

List.displayName = 'List';

export { ListItem };

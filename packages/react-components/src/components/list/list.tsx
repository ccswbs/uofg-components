import { ComponentPropsWithoutRef, createContext, PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { ListItem } from './list-item';

const defaultElement = 'ul';

type ListElementType = 'ul' | 'ol';

export type ListProps<T extends ListElementType = typeof defaultElement> = PropsWithChildren<
  {
    /**
     * The element type to render as.
     *
     * @default 'ul'
     */
    as?: T;
    /** Additional classes to apply to the list. */
    className?: string;
  } & ComponentPropsWithoutRef<T>
>;

const ListContext = createContext<{ nested: boolean } | null>(null);

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
    },
  });

  return (
    <Component {...rest} className={twMerge(list({ as: Component, nested: context?.nested }), className)}>
      <ListContext.Provider value={{ nested: typeof context === 'object' }}>{children}</ListContext.Provider>
    </Component>
  );
}

List.displayName = 'List';

export { ListItem };

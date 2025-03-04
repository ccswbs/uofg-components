import { twMerge } from 'tailwind-merge';
import { useContext, createContext, PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';

const defaultElement = 'ul';

type ListElementType = 'ul' | 'ol';

type ListPropsAs<T extends ListElementType> = {
  as?: T;
};

type ListPropsBase = {
  className?: string;
};

export type ListProps<T extends ListElementType = typeof defaultElement> = PropsWithChildren<
  ListPropsAs<T> & ComponentPropsWithoutRef<T> & ListPropsBase
>;

const ListContext = createContext<{ nested: boolean } | null>(null);

export function List<T extends ListElementType = typeof defaultElement>({
  as,
  children,
  className,
  ...rest
}: ListProps<T>) {
  const Component = as ?? defaultElement;
  const context = useContext(ListContext);

  const list = tv({
    base: 'tw:flex tw:flex-col tw:gap-1 tw:relative tw:h-fit tw:w-full tw:list-inside',
    variants: {
      as: {
        ol: 'tw:gap-2 tw:list-decimal',
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

type ListItemProps = PropsWithChildren<{
  className?: string;
}> &
  ComponentPropsWithoutRef<'li'>;

export function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <li {...rest} className={twMerge('tw:relative tw:h-fit tw:w-full', className)}>
      {children}
    </li>
  );
}

List.displayName = 'List';
ListItem.displayName = 'ListItem';

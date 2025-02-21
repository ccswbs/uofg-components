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

const ListContext = createContext<{ as: ListElementType; nested: boolean } | null>(null);

export function List<T extends ListElementType = typeof defaultElement>({
  as,
  children,
  className,
  ...rest
}: ListProps<T>) {
  const Component = as ?? defaultElement;
  const context = useContext(ListContext);

  const list = tv({
    base: 'tw:flex tw:flex-col tw:gap-1 tw:pl-8 tw:relative tw:h-fit tw:w-full',
    variants: {
      as: {
        ol: 'tw:gap-2 tw:[counter-reset:list_1]',
        ul: '',
      },
      nested: {
        true: 'tw:mt-0',
      },
    },
  });

  return (
    <Component {...rest} className={twMerge(list({ as: context?.as, nested: context?.nested }), className)}>
      <ListContext.Provider value={{ as: Component, nested: typeof context === 'object' }}>
        {children}
      </ListContext.Provider>
    </Component>
  );
}

type ListItemProps = PropsWithChildren<{
  className?: string;
}> &
  ComponentPropsWithoutRef<'li'>;

export function ListItem({ className, children, ...rest }: ListItemProps) {
  const context = useContext(ListContext);

  const listItem = tv({
    base: 'tw:relative tw:h-fit tw:w-full tw:pl-8 tw:before:absolute tw:before:shrink-0 tw:before:items-center tw:before:justify-center tw:has-[ol]:before:content-none! tw:has-[ul]:before:content-none!',
    variants: {
      as: {
        ul: 'tw:before:top-[0.35rem] tw:before:left-[.5rem] tw:before:block tw:before:h-[1.8rem] tw:before:w-[1.1rem] tw:before:text-yellow tw:before:content-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48cGF0aCBmaWxsPScjZmZjNDI5JyBkPSJNMzEwLjYgMjMzLjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNsLTE5MiAxOTJjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zTDI0Mi43IDI1NiA3My40IDg2LjZjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBsMTkyIDE5MnoiLz48L3N2Zz4=)]',
        ol: 'tw:before:font-black tw:before:left-0 tw:before:inline-flex tw:before:h-6 tw:before:w-6 tw:before:bg-yellow tw:before:text-black tw:[counter-increment:list_1] tw:before:content-[counter(list)]',
      },
    },
  });

  return (
    <li {...rest} className={twMerge(listItem({ as: context?.as }), className)}>
      {children}
    </li>
  );
}

List.displayName = 'List';
ListItem.displayName = 'ListItem';

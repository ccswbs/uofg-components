import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type ListItemProps = PropsWithChildren<
  {
    /** Additional classes to apply to the list item. */
    className?: string;
  } & ComponentPropsWithoutRef<'li'>
>;

/** A list item component. */
export function ListItem({ className, children, ...rest }: ListItemProps) {
  return (
    <li {...rest} className={twMerge('uog:relative uog:h-fit uog:w-full', className)}>
      {children}
    </li>
  );
}

ListItem.displayName = 'ListItem';

import { HTMLAttributes, PropsWithChildren } from 'react';

export type HeaderMenuProps = PropsWithChildren<
  {
    /** The title of the header menu */
    title: string;
  } & HTMLAttributes<any>
>;

export function HeaderMenu({ title, children, ...rest }: HeaderMenuProps) {
  return (
    <ul data-title={title} {...rest}>
      {children}
    </ul>
  );
}

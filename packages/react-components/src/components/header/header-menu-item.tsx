import { HTMLAttributes, PropsWithChildren } from 'react';

export type HeaderMenuItemProps = PropsWithChildren<HTMLAttributes<any>>;

export function HeaderMenuItem({ children, ...rest }: HeaderMenuItemProps) {
  return <li {...rest}>{children}</li>;
}

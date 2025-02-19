import type { ElementType, FC, ReactNode, HTMLAttributes } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

export type ContainerProps = {
  as?: ElementType;
  centered?: boolean;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export const Container: FC<ContainerProps> = ({ as = 'div', centered = false, children, className, ...rest }) => {
  const Tag = as;

  return (
    <Tag
      {...rest}
      className={twMerge(twJoin('max-w-max-content container px-4 pt-2 pb-4', centered && 'mx-auto'), className)}
    >
      {children}
    </Tag>
  );
};

Container.displayName = 'Container';

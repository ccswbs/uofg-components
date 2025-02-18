import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { twJoin, twMerge } from 'tailwind-merge';

export type BlockquoteProps = {
  className?: string;
  children: ReactNode;
  color?: 'yellow' | 'red' | 'blue';
};

export const Blockquote: FC<BlockquoteProps> = ({ className, children, color = 'yellow' }) => {
  const markClasses = twJoin(
    'inline-block h-[1em]',
    color === 'yellow' && 'text-yellow',
    color === 'red' && 'text-red',
    color === 'blue' && 'text-light-blue',
  );

  return (
    <blockquote className={twMerge('font-light block w-full text-center text-3xl italic', className)}>
      <FontAwesomeIcon icon={faQuoteLeft} className={twJoin(markClasses, 'mr-[0.3em]')} />
      <span>{children}</span>
      <FontAwesomeIcon icon={faQuoteRight} className={twJoin(markClasses, 'ml-[0.25em]')} />
    </blockquote>
  );
};

Blockquote.displayName = 'Blockquote';

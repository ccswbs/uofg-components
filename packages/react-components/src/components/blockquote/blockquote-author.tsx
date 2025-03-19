import { useContext } from 'react';
import { tv } from 'tailwind-variants';
import { BlockquoteContext } from './blockquote-context';

export type BlockquoteAuthorProps = {
  /** The author of the blockquote. */
  name: string;
  /** The title of the author. */
  title?: string;
};

export function BlockquoteAuthor({ name, title }: BlockquoteAuthorProps) {
  const context = useContext(BlockquoteContext);

  const classes = tv({
    slots: {
      base: 'uog:border-l-3 uog:pl-4 uog:flex uog:flex-col uog:gap-1 uog:items-start uog:font-light',
      name: 'uog:text-base uog:not-italic uog:font-bold',
      title: 'uog:text-base uog:italic',
    },
    variants: {
      color: {
        yellow: {
          base: 'uog:border-yellow',
        },
        blue: {
          base: 'uog:border-blue',
        },
      },
    },
  });

  const { base, name: nameClasses, title: titleClasses } = classes({ color: context?.color ?? 'yellow' });

  return (
    <div className={`uofg-blockquote-author ${base()}`}>
      <cite className={`uofg-blockquote-author-name ${nameClasses()}`}>{name}</cite>
      {title && <span className={`uofg-blockquote-author-title ${titleClasses()}`}>{title}</span>}
    </div>
  );
}

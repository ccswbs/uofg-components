'use client';

import { PropsWithChildren, useContext } from 'react';
import { tv } from 'tailwind-variants';
import { Container } from '../container/container';
import { HeroContext } from './hero-context';

export type HeroContentProps = PropsWithChildren<{
  /**
   * The alignment of the content
   *
   * @default 'left'
   */
  alignment?: 'left' | 'center' | 'right' | 'fullWidth';
}>;

/** The HeroContent component is used to display the content of a hero. */
export function HeroContent({ children, alignment = 'left' }: HeroContentProps) {
  const context = useContext(HeroContext);

  const heroContent = tv({
    slots: {
      base: '',
      wrapper: 'uog:lg:bg-black/80 uog:lg:backdrop-blur uog:flex uog:w-full uog:bg-black uog:p-7 uog:text-white',
      container: 'uog:mx-auto uog:flex uog:flex-col uog:gap-5',
    },
    variants: {
      variant: {
        spotlight: {
          base: 'uog:w-full uog:lg:absolute uog:lg:bottom-0 uog:lg:left-1/2 uog:lg:max-w-[137rem] uog:lg:-translate-x-1/2 uog:lg:p-4 uog:flex uog:items-center',
        },
        basic: {
          base: 'uog:absolute uog:bottom-0 uog:left-1/2 uog:w-full uog:-translate-x-1/2 uog:p-0 uog:flex uog:h-full uog:items-end',
        },
      },
      alignment: {
        left: {
          wrapper: 'uog:mr-auto uog:lg:max-w-[50%]',
        },
        center: {
          wrapper: 'uog:mx-auto uog:lg:max-w-[50%]',
          container: 'uog:lg:text-center uog:lg:items-center',
          link: 'uog:lg:mx-auto',
        },
        right: {
          wrapper: 'uog:ml-auto uog:lg:max-w-[50%]',
          container: 'uog:lg:text-right uog:lg:items-end',
          link: 'uog:lg:ml-auto',
        },
        fullWidth: {
          wrapper: 'uog:mx-auto',
        },
      },
    },
  });

  const { base, wrapper, container } = heroContent({ alignment, variant: context?.variant });

  if (context?.variant === 'spotlight') {
    return (
      <div className={`uofg-hero-content ${base()}`}>
        <div className={`uofg-hero-content-wrapper ${wrapper()}`}>
          <div className={`uofg-hero-content-container ${container()}`}>{children}</div>
        </div>
      </div>
    );
  }

  return <Container className={`uofg-hero-content ${base()}`}>{children}</Container>;
}

HeroContent.displayName = 'HeroContent';

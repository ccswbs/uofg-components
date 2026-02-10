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
      wrapper: 'flex w-full bg-black p-7 text-white lg:bg-black/80 lg:backdrop-blur',
      container: 'mx-auto flex flex-col gap-5',
    },
    variants: {
      variant: {
        spotlight: {
          base: 'flex w-full items-center lg:absolute lg:bottom-0 lg:left-1/2 lg:max-w-[137rem] lg:-translate-x-1/2 lg:p-4',
        },
        basic: {
          base: 'flex h-full w-full items-end p-0 sm:absolute sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2',
        },
      },
      alignment: {
        left: {
          wrapper: 'mr-auto lg:max-w-[50%]',
        },
        center: {
          wrapper: 'mx-auto lg:max-w-[50%]',
          container: 'lg:items-center lg:text-center',
          link: 'lg:mx-auto',
        },
        right: {
          wrapper: 'ml-auto lg:max-w-[50%]',
          container: 'lg:items-end lg:text-right',
          link: 'lg:ml-auto',
        },
        fullWidth: {
          wrapper: 'mx-auto',
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

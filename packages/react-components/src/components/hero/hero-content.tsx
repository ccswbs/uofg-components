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
      wrapper: 'tw:lg:bg-black/80 tw:lg:backdrop-blur tw:flex tw:w-full tw:bg-black tw:p-7 tw:text-white',
      container: 'tw:container tw:mx-auto tw:flex tw:flex-col tw:gap-5',
    },
    variants: {
      variant: {
        spotlight: {
          base: 'tw:lg:container tw:lg:absolute tw:lg:bottom-0 tw:lg:left-1/2 tw:lg:max-w-max-content tw:lg:-translate-x-1/2 tw:lg:p-4 tw:flex tw:items-center',
        },
        basic: {
          base: 'tw:absolute tw:bottom-0 tw:left-1/2 tw:w-full tw:-translate-x-1/2 tw:p-0 tw:flex tw:h-full tw:items-end',
        },
      },
      alignment: {
        left: {
          wrapper: 'tw:mr-auto tw:lg:max-w-[50%]',
        },
        center: {
          wrapper: 'tw:mx-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-center tw:lg:items-center',
          link: 'tw:lg:mx-auto',
        },
        right: {
          wrapper: 'tw:ml-auto tw:lg:max-w-[50%]',
          container: 'tw:lg:text-right tw:lg:items-end',
          link: 'tw:lg:ml-auto',
        },
        fullWidth: {
          wrapper: 'tw:mx-auto',
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

  return (
    <Container centered className={`uofg-hero-content ${base()}`}>
      {children}
    </Container>
  );
}

HeroContent.displayName = 'HeroContent';

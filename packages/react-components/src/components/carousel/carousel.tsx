'use client';

import { faChevronLeft, faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { PropsWithChildren } from 'react';
import { Children, useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';
import { bezier, clamp, lerp, mod } from '../../utils/math-utils';

const scroll = (element: HTMLElement, to: number, duration: number) => {
  const from = element.scrollLeft;
  const start = performance.now();

  return new Promise<void>(resolve => {
    const step: FrameRequestCallback = timestamp => {
      const elapsed = timestamp - start;
      const delta = bezier(Math.min(elapsed / duration, 1), 0.25, 0, 0.25, 1);

      element.scrollLeft = lerp(from, to, delta);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(step);
  });
};

export type CarouselProps = PropsWithChildren<{
  /**
   * The number of items to display at once
   *
   * @default 1
   */
  display?: number;
  /**
   * The looping behavior of the carousel
   *
   * @default 'none'
   */
  loop?: 'jump' | 'continuous' | 'none';
}>;
/**
 * The Carousel component is used to display a series of items in a horizontal row, allowing the user to scroll through
 * them.
 */
export function Carousel({ children, display = 1, loop = 'none' }: CarouselProps) {
  const count = Children.count(children);
  const visibleItems = Math.max(display, 1);
  const ref = useRef<HTMLDivElement | null>(null);
  const previousIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const maxIndex = count - visibleItems;
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const width = ref.current?.offsetWidth / visibleItems;

    if (loop === 'jump' || loop === 'none') {
      isAnimating.current = true;

      scroll(ref.current, width * index, 250).then(() => {
        isAnimating.current = false;
      });
    }

    if (loop === 'continuous') {
      // TODO: Implement continuous looping
    }

    previousIndex.current = index;
  }, [index, loop, maxIndex, visibleItems]);

  const shift = (value: number) => {
    if (isAnimating.current) return;

    let idx: number;

    switch (loop) {
      case 'none':
        idx = clamp(index + value, 0, maxIndex);
        break;
      case 'jump':
        idx = mod(index + value, maxIndex + 1);
        break;
      case 'continuous':
        idx = mod(index + value, count);
        break;
      default:
        idx = 0;
    }

    setIndex(idx);
  };

  const carousel = tv({
    slots: {
      base: 'relative flex h-fit min-h-[7rem] w-full flex-col-reverse',
      contentContainer:
        'grid w-full flex-1 grid-cols-[repeat(var(--items),calc(100%/var(--display)))] overflow-x-hidden [&>*]:[grid-row:1]',
      controlContainer: 'flex h-16 w-full pt-8 md:contents',
      control:
        'flex h-full w-16 flex-1 items-center justify-center text-3xl text-blue transition-[transform,color,opacity,visibility] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:text-6xl md:absolute hocus-visible:text-blue-focus',
    },
    variants: {
      showControls: {
        true: {
          base: 'sm:px-16',
        },
        false: {
          control: 'pointer-events-none invisible opacity-0',
        },
      },
      direction: {
        left: {
          control: 'left-0 focus-visible:-translate-x-1 hocus-visible:-translate-x-1',
        },
        right: {
          control: 'right-0 focus-visible:translate-x-1 hocus-visible:translate-x-1',
        },
      },
    },
  });

  const showControls = count > visibleItems;
  const { base, contentContainer, controlContainer, control } = carousel({ showControls });

  return (
    <div className={`uofg-carousel ${base()}`}>
      {showControls && (
        <div className={`uofg-carousel-control-container ${controlContainer()}`}>
          {/* Left Button */}
          <button
            onClick={() => shift(-1)}
            className={`uofg-carousel-shift-left ${control({ showControls: !(loop === 'none' && index === 0), direction: 'left' })}`}
          >
            <span className="sr-only">Shift left</span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => shift(1)}
            className={`uofg-carousel-shift-right ${control({ showControls: !(loop === 'none' && index === maxIndex), direction: 'right' })}`}
          >
            <span className="sr-only">Shift right</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <div
        className={`uofg-carousel-content-container ${contentContainer()}`}
        ref={ref}
        style={{
          // Define CSS variables for the grid layout
          ['--items' as string]: count,
          ['--display' as string]: visibleItems,
        }}
      >
        {children}
      </div>
    </div>
  );
}

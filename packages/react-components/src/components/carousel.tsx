import type { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { Children, useEffect, useRef, useState } from 'react';
import { bezier, lerp, mod, clamp } from '../utils/math-utils';
import { tv } from 'tailwind-variants';

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
  display?: number;
  loop?: 'jump' | 'continuous' | 'none';
}>;

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
      base: 'tw:relative tw:flex tw:h-fit tw:min-h-[7rem] tw:w-full tw:flex-col-reverse',
      contentContainer:
        'tw:grid tw:w-full tw:flex-1 tw:grid-cols-[repeat(var(--items),calc(100%/var(--display)))] tw:overflow-x-hidden [&>*]:[grid-row:1]',
      controlContainer: 'tw:md:contents tw:flex tw:h-16 tw:w-full tw:pt-8',
      control:
        'tw:sm:text-6xl tw:md:absolute tw:flex tw:h-full tw:w-16 tw:flex-1 tw:items-center tw:justify-center tw:text-3xl tw:text-yellow tw:transition-[transform,color,opacity,visibility] tw:focus-visible:ring-2 tw:focus-visible:ring-offset-2 tw:focus-visible:outline-none tw:hocus-visible:text-black tw:focus-visible:text-black',
    },
    variants: {
      showControls: {
        true: {
          base: 'tw:sm:px-16',
        },
        false: {
          control: 'tw:pointer-events-none tw:invisible tw:opacity-0',
        },
      },
      direction: {
        left: {
          control: 'tw:left-0 tw:hocus-visible:-translate-x-1 tw:focus-visible:-translate-x-1',
        },
        right: {
          control: 'tw:right-0 tw:hocus-visible:translate-x-1 tw:focus-visible:translate-x-1',
        },
      },
    },
  });

  const showControls = count > visibleItems;
  const { base, contentContainer, controlContainer, control } = carousel({ showControls });

  return (
    <div className={base()}>
      {showControls && (
        <div className={controlContainer()}>
          {/* Left Button */}
          <button
            onClick={() => shift(-1)}
            className={control({ showControls: !(loop === 'none' && index === 0), direction: 'left' })}
          >
            <span className="tw:sr-only">Shift left</span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => shift(1)}
            className={control({ showControls: !(loop === 'none' && index === maxIndex), direction: 'right' })}
          >
            <span className="tw:sr-only">Shift right</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <div
        className={contentContainer()}
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

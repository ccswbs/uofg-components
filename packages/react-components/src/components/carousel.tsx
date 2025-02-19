import type { FC, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { twJoin } from 'tailwind-merge';
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

export type CarouselProps = {
  children: ReactNode;
  display?: number;
  loop?: 'jump' | 'continuous' | 'none';
};

export const Carousel: FC<CarouselProps> = ({ children, display = 1, loop = 'none' }) => {
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
      /*
      const column = mod(index + visibleItems, count);
      ref.current.scrollLeft = width * (column - 1);

      scroll(ref.current, width * column, 250).then(() => {
        isAnimating.current = false;
      });
       */
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

  const button = tv({
    base: 'sm:text-6xl md:absolute flex h-full w-16 flex-1 items-center justify-center text-3xl text-yellow transition-[transform,color,opacity,visibility] hover:text-black focus-visible:text-black',
    variants: {
      direction: {
        left: 'left-0 hover:-translate-x-1 focus-visible:-translate-x-1',
        right: 'right-0 hover:translate-x-1 focus-visible:translate-x-1',
      },
      hidden: { true: 'pointer-events-none invisible opacity-0' },
    },
  });

  return (
    <div
      className={twJoin('relative flex h-fit min-h-[7rem] w-full flex-col-reverse', count > visibleItems && 'sm:px-16')}
    >
      {count > visibleItems && (
        <div className="md:contents flex h-16 w-full pt-8">
          {/* Left Button */}
          <button
            onClick={() => shift(-1)}
            className={button({ direction: 'left', hidden: loop === 'none' && index === 0 })}
          >
            <span className="sr-only">Shift carousel left</span>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {/* Right Button */}
          <button
            onClick={() => shift(1)}
            className={button({ direction: 'left', hidden: loop === 'none' && index === maxIndex })}
          >
            <span className="sr-only">Shift carousel right</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}

      <div
        className="grid w-full flex-1 grid-cols-[repeat(var(--items),calc(100%/var(--display)))] overflow-x-hidden [&>*]:[grid-row:1]"
        //@ts-expect-error TypeScript doesn't know how to deal with CSS custom properties.
        style={{ '--display': visibleItems, '--items': count }}
        ref={ref}
      >
        {Children.map(children, (child, i) => (
          <div key={'key' in (child as any) ? (child as any).key : i}>{child}</div>
        ))}
      </div>
    </div>
  );
};

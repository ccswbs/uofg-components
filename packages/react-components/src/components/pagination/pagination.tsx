'use client';

import { faEllipsis } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { faChevronsLeft, faChevronsRight } from '@awesome.me/kit-7993323d0c/icons/duotone/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { clamp } from '../../utils/math-utils';
import { Button } from '../button/button';
import { NumberInput } from '../number-input/number-input';

export type PaginationProps = {
  /** The total number of pages. Must be a positive integer. */
  count: number;
  /** The number of pages that are displayed at once. This number will always be clamped between 3 and count. */
  visible: number;
  /** The currently selected page */
  page?: number;
  /** The selected page when this component is first rendered */
  defaultPage?: number;
  /** A callback for when the user has selected an item. */
  onChange: (page: number) => void;
  /**
   * The colour of the pagination controls
   *
   * @default 'yellow'
   */
  color?: 'red' | 'yellow' | 'blue' | 'green';
  /** Whether to hide the manual page selector */
  hideInput?: boolean;
  /** Whether to hide the list of pages */
  hideList?: boolean;
  /** Additional classes to apply to the component */
  className?: string;
};

export function Pagination({
  page,
  count,
  visible,
  defaultPage,
  onChange,
  color = 'yellow',
  hideInput = false,
  hideList = false,
  className,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(defaultPage ?? 0);
  const [inputPage, setInputPage] = useState(defaultPage ?? 0);
  const pages = [...Array(count).keys()];
  const visiblePages = Math.max(Math.ceil(visible), 3);
  const id = nanoid();

  useEffect(() => {
    updateCurrentPage(page ?? 0);
  }, [page]);

  const updateCurrentPage = (page: number) => {
    const newPage = clamp(page, 0, count - 1);
    onChange?.(newPage);
    setCurrentPage(newPage);
  };

  const toPaginationItem = (p: number) => {
    const isActivePage = currentPage === p;
    return (
      <button
        key={p}
        className={`uofg-pagination-item ${item({ active: isActivePage })}`}
        onClick={() => {
          updateCurrentPage(p);
        }}
      >
        <span className="sr-only">Page</span> {p + 1}{' '}
        {isActivePage ?
          <span className="sr-only">(Current Page)</span>
        : ''}
      </button>
    );
  };

  let start, end, showLeftEllipsis, showRightEllipsis;

  if (count <= visiblePages || count < 5) {
    start = 1;
    end = count - 1;
    showLeftEllipsis = false;
    showRightEllipsis = false;
  } else if (currentPage < visiblePages - 1) {
    start = 1;
    end = visiblePages;
    showRightEllipsis = true;
    showLeftEllipsis = false;
  } else if (currentPage > count - visiblePages) {
    start = count - visiblePages;
    end = count - 1;
    showLeftEllipsis = true;
    showRightEllipsis = false;
  } else {
    start = currentPage - Math.floor(visiblePages / 2);
    end = start + visiblePages;
    showLeftEllipsis = start > 1;
    showRightEllipsis = end < count;
  }

  const { base, list, seperator, control, item, inputWrapper, goTo, input } = tv({
    slots: {
      base: 'flex w-full flex-col items-center justify-center gap-4 md:flex-row',
      list: 'flex items-center justify-center gap-4',
      seperator: 'block h-1 w-1/2 md:h-12 md:w-1',
      control: 'cursor-pointer transition-colors disabled:cursor-default disabled:opacity-15',
      item: 'flex aspect-square h-[2em] cursor-pointer items-center justify-center bg-grey-light-bg p-1 text-body-copy-on-light transition-colors hover:bg-grey-dark-bg hover:text-body-copy-on-dark',
      inputWrapper: 'flex items-center justify-center gap-2',
      goTo: 'p-2 text-sm',
      input: 'w-fit [&_.uofg-number-input]:text-center',
    },
    variants: {
      active: {
        true: '',
      },
      color: {
        red: {
          seperator: 'bg-red',
        },
        yellow: {
          seperator: 'bg-yellow',
        },
        blue: {
          seperator: 'bg-blue',
        },
        green: {
          seperator: 'bg-green',
        },
      },
      hideList: {
        true: {
          list: 'hidden',
          seperator: 'hidden',
        },
      },
      hideInput: {
        true: {
          inputWrapper: 'hidden',
          seperator: 'hidden',
        },
      },
    },
    compoundVariants: [
      {
        active: true,
        color: 'red',
        class: {
          item: 'bg-red text-red-contrast',
        },
      },
      {
        active: true,
        color: 'yellow',
        class: {
          item: 'bg-yellow text-yellow-contrast',
        },
      },
      {
        active: true,
        color: 'blue',
        class: {
          item: 'bg-blue text-blue-contrast',
        },
      },
      {
        active: true,
        color: 'green',
        class: {
          item: 'bg-green text-green-contrast',
        },
      },
    ],
  })({
    color: color ?? 'yellow',
    hideList: hideList ?? false,
    hideInput: hideInput ?? false,
  });

  return (
    <div className={`uofg-pagination ${twMerge(base(), className)}`}>
      <a href={`#uofg-pagination-skip-${id}`} className="sr-only focus:not-sr-only">
        Skip Pagination
      </a>

      <div className={`uofg-pagination-list ${list()}`}>
        <button
          disabled={currentPage <= 0}
          className={`uofg-pagination-previous ${control()}`}
          onClick={() => updateCurrentPage(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faChevronsLeft} />
          <span className="sr-only">Previous Page</span>
        </button>

        {toPaginationItem(0)}

        {showLeftEllipsis && <FontAwesomeIcon icon={faEllipsis} />}

        {pages.slice(start, end).map(toPaginationItem)}

        {showRightEllipsis && <FontAwesomeIcon icon={faEllipsis} />}

        {toPaginationItem(count - 1)}

        <button
          disabled={currentPage >= count - 1}
          className={`uofg-pagination-next ${control()}`}
          onClick={() => updateCurrentPage(currentPage + 1)}
        >
          <FontAwesomeIcon icon={faChevronsRight} />
          <span className="sr-only">Next Page</span>
        </button>
      </div>

      <span className={`uofg-pagination-seperator ${seperator()}`}></span>

      <div className={`uofg-pagination-go-to-wrapper ${inputWrapper()}`}>
        <NumberInput
          color={color}
          min={1}
          max={count}
          value={currentPage + 1}
          onInput={value => {
            setInputPage(isNaN(value) ? 0 : clamp(value - 1, 0, count - 1));
          }}
          className={`uofg-pagination-go-to-input ${input()}`}
        >
          <span className="sr-only">Input Page Number</span>
        </NumberInput>

        <Button
          id={`uofg-pagination-skip-${id}`}
          color={color}
          className={`uofg-pagination-go-to-button ${goTo()}`}
          onClick={() => {
            updateCurrentPage(inputPage);
          }}
        >
          Go to page
        </Button>
      </div>
    </div>
  );
}

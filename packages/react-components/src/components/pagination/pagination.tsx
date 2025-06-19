import { faEllipsis } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { faChevronsLeft, faChevronsRight } from '@awesome.me/kit-7993323d0c/icons/duotone/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  useEffect(() => {
    updateCurrentPage(page ?? 0);
  }, [page]);

  const updateCurrentPage = (page: number) => {
    const newPage = clamp(page, 0, count - 1);
    onChange?.(newPage);
    setCurrentPage(newPage);
  };

  const toPaginationItem = (p: number) => {
    return (
      <li key={p} className="uog:contents">
        <button
          className={`uofg-pagination-item ${item({ active: currentPage === p })}`}
          onClick={() => {
            updateCurrentPage(p);
          }}
        >
          {p + 1}
        </button>
      </li>
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
      base: 'uog:flex uog:w-full uog:flex-col uog:md:flex-row uog:gap-4 uog:items-center uog:justify-center',
      list: 'uog:flex uog:gap-4 uog:items-center uog:justify-center',
      seperator: 'uog:md:w-1 uog:md:h-12 uog:h-1 uog:w-1/2 uog:block',
      control: 'uog:cursor-pointer uog:disabled:opacity-15 uog:disabled:cursor-default uog:transition-colors',
      item: 'uog:p-1 uog:aspect-square uog:flex uog:items-center uog:justify-center uog:h-[2em] uog:bg-grey-light-bg uog:text-body-copy-on-light uog:hover:bg-grey-dark-bg uog:hover:text-body-copy-on-dark uog:transition-colors uog:cursor-pointer',
      inputWrapper: 'uog:flex uog:items-center uog:justify-center uog:gap-2',
      goTo: 'uog:p-2 uog:text-sm',
      input: 'uog:w-fit uog:[&_.uofg-number-input]:text-center',
    },
    variants: {
      active: {
        true: '',
      },
      color: {
        red: {
          seperator: 'uog:bg-red',
        },
        yellow: {
          seperator: 'uog:bg-yellow',
        },
        blue: {
          seperator: 'uog:bg-blue',
        },
        green: {
          seperator: 'uog:bg-green',
        },
      },
      hideList: {
        true: {
          list: 'uog:hidden',
          seperator: 'uog:hidden',
        },
      },
      hideInput: {
        true: {
          inputWrapper: 'uog:hidden',
          seperator: 'uog:hidden',
        },
      },
    },
    compoundVariants: [
      {
        active: true,
        color: 'red',
        class: {
          item: 'uog:bg-red uog:text-red-contrast',
        },
      },
      {
        active: true,
        color: 'yellow',
        class: {
          item: 'uog:bg-yellow uog:text-yellow-contrast',
        },
      },
      {
        active: true,
        color: 'blue',
        class: {
          item: 'uog:bg-blue uog:text-blue-contrast',
        },
      },
      {
        active: true,
        color: 'green',
        class: {
          item: 'uog:bg-green uog:text-green-contrast',
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
      <ul className={`uofg-pagination-list ${list()}`}>
        <li className="uog:contents">
          <button
            disabled={currentPage <= 0}
            className={`uofg-pagination-previous ${control()}`}
            onClick={() => updateCurrentPage(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronsLeft} />
          </button>
        </li>

        <li className="uog:contents">{toPaginationItem(0)}</li>

        {showLeftEllipsis && <FontAwesomeIcon icon={faEllipsis} />}

        {pages.slice(start, end).map(toPaginationItem)}

        {showRightEllipsis && <FontAwesomeIcon icon={faEllipsis} />}

        <li className="uog:contents">{toPaginationItem(count - 1)}</li>

        <li className="uog:contents">
          <button
            disabled={currentPage >= count - 1}
            className={`uofg-pagination-next ${control()}`}
            onClick={() => updateCurrentPage(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faChevronsRight} />
          </button>
        </li>
      </ul>

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
        />

        <Button
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

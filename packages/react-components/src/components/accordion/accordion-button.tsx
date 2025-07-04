'use client';

import { faCircleMinus, faCirclePlus } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DisclosureButton } from '@headlessui/react';
import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { AccordionContext } from './accordion-context';

export type AccordionButtonProps = PropsWithChildren<{
  /** Additional classes to apply to the accordion button */
  className?: string;
}>;

/** The AccordionButton component is a button used to toggle the visibility of an accordion panel. */
export function AccordionButton({ children, className }: AccordionButtonProps) {
  const context = useContext(AccordionContext);

  const accordionButton = tv({
    slots: {
      button:
        'group mb-1 inline-flex w-full cursor-pointer items-center justify-between gap-2 p-2.5 px-5 text-left text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 hocus-visible:bg-blue hocus-visible:text-blue-contrast',
      icon: 'h-[1em] text-blue-on-light transition group-hocus-visible:text-blue-contrast',
    },
    variants: {
      open: {
        true: {
          button: 'bg-blue text-blue-contrast',
          icon: 'text-blue-contrast',
        },
        false: {
          icon: 'rotate-90',
          button: 'bg-grey-light-bg text-blue-on-light',
        },
      },
    },
  });

  const { button, icon } = accordionButton({ open: context?.isOpen });

  return (
    <DisclosureButton className={`uofg-accordion-button ${twMerge(className, button())}`}>
      <span className="uofg-accordion-button-content">{children}</span>
      <FontAwesomeIcon
        icon={context?.isOpen ? faCircleMinus : faCirclePlus}
        className={`uofg-accordion-button-icon ${icon()}`}
      />
    </DisclosureButton>
  );
}

AccordionButton.displayName = 'AccordionButton';

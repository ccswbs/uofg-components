import { faCircleMinus, faCirclePlus } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DisclosureButton } from '@headlessui/react';
import { PropsWithChildren, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { AccordionContext } from './accordion-context';

export type AccordionButtonProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the accordion button
   */
  className?: string;
}>;

/**
 * The AccordionButton component is a button used to toggle the visibility of an accordion panel.
 */
export function AccordionButton({ children, className }: AccordionButtonProps) {
  const context = useContext(AccordionContext);

  const accordionButton = tv({
    slots: {
      button:
        'tw:group tw:mb-1 tw:inline-flex tw:w-full tw:cursor-pointer tw:items-center tw:justify-between tw:gap-2 tw:p-2.5 tw:px-5 tw:text-left tw:text-xl tw:transition-colors tw:focus:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-blue tw:focus-visible:ring-offset-2 tw:hocus-visible:bg-blue tw:hocus-visible:text-blue-contrast',
      icon: 'tw:h-[1em] tw:text-blue-on-light tw:group-hocus-visible:text-blue-contrast tw:transition',
    },
    variants: {
      open: {
        true: {
          button: 'tw:bg-blue tw:text-blue-contrast',
          icon: 'tw:text-blue-contrast',
        },
        false: {
          icon: 'tw:rotate-90',
          button: 'tw:bg-light-grey-bg tw:text-blue-on-light',
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

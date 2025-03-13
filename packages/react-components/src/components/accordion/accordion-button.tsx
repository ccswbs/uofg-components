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
        'uog:group uog:mb-1 uog:inline-flex uog:w-full uog:cursor-pointer uog:items-center uog:justify-between uog:gap-2 uog:p-2.5 uog:px-5 uog:text-left uog:text-xl uog:transition-colors uog:focus:outline-none uog:focus-visible:ring-2 uog:focus-visible:ring-blue uog:focus-visible:ring-offset-2 uog:hocus-visible:bg-blue uog:hocus-visible:text-blue-contrast',
      icon: 'uog:h-[1em] uog:text-blue-on-light uog:group-hocus-visible:text-blue-contrast uog:transition',
    },
    variants: {
      open: {
        true: {
          button: 'uog:bg-blue uog:text-blue-contrast',
          icon: 'uog:text-blue-contrast',
        },
        false: {
          icon: 'uog:rotate-90',
          button: 'uog:bg-light-grey-bg uog:text-blue-on-light',
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

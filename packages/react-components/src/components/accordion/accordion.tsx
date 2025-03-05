import { Disclosure } from '@headlessui/react';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './accordion-context';

export type AccordionProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the accordion.
   */
  className?: string;
}>;

/**
 * The Accordion component is used for organizing information into collapsible sections which respond to user interaction.
 */
export function Accordion({ children, className }: AccordionProps) {
  const accordion = twMerge('tw:my-2 tw:[&_p:last-child]:mb-0', className);

  return (
    <Disclosure>
      {({ open }) => {
        return (
          <div className={`uofg-accordion ${accordion}`}>
            <AccordionContext.Provider value={{ isOpen: open }}>{children}</AccordionContext.Provider>
          </div>
        );
      }}
    </Disclosure>
  );
}
Accordion.displayName = 'Accordion';

export { AccordionButton } from './accordion-button';
export { AccordionContent } from './accordion-content';

import { DisclosurePanel } from '@headlessui/react';
import { PropsWithChildren, useContext } from 'react';
import { AccordionContext } from './accordion-context';
import { twMerge } from 'tailwind-merge';
import AnimateHeight from 'react-animate-height';

export type AccordionContentProps = PropsWithChildren<{
  /**
   * Additional classes to apply to the accordion button
   */
  className?: string;
}>;

export function AccordionContent({ children, className }: AccordionContentProps) {
  const context = useContext(AccordionContext);

  const accordionContent = twMerge('tw:border-l-4 tw:border-yellow tw:py-3 tw:pl-5', className);

  return (
    <AnimateHeight height={context?.isOpen ? 'auto' : 0} duration={200} easing={'ease-in-out'}>
      <DisclosurePanel static className={`uofg-accordion-content ${accordionContent}`}>
        {children}
      </DisclosurePanel>
    </AnimateHeight>
  );
}

AccordionContent.displayName = 'AccordionContent';

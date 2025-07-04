'use client';

import { DisclosurePanel } from '@headlessui/react';
import { PropsWithChildren, useContext } from 'react';
import AnimateHeight from 'react-animate-height';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './accordion-context';

export type AccordionContentProps = PropsWithChildren<{
  /** Additional classes to apply to the accordion button */
  className?: string;
}>;

export function AccordionContent({ children, className }: AccordionContentProps) {
  const context = useContext(AccordionContext);

  const accordionContent = twMerge('border-l-4 border-yellow py-3 pl-5', className);

  return (
    <AnimateHeight height={context?.isOpen ? 'auto' : 0} duration={200} easing={'ease-in-out'}>
      <DisclosurePanel static className={`uofg-accordion-content ${accordionContent}`}>
        {children}
      </DisclosurePanel>
    </AnimateHeight>
  );
}

AccordionContent.displayName = 'AccordionContent';

'use client';

import { Disclosure } from '@headlessui/react';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { AccordionContext } from './accordion-context';
import { useEffect, useRef } from 'react';

export type AccordionProps = PropsWithChildren<{
  id?: string;
  /** Additional classes to apply to the accordion. */
  className?: string;
}>;

/**
 * The Accordion component is used for organizing information into collapsible sections which respond to user
 * interaction.
 */
export function Accordion({ id, children, className }: AccordionProps) {
  const accordion = twMerge('my-2 [&_p:last-child]:mb-0', className);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  
  useEffect(() => {
    if (!id) return;

    const maybeOpenFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash !== id) return;

      const container = document.getElementById(id);
      if (!container) return;

      // Open-only: click only if currently closed
      const isOpen = container.querySelector('[data-open]') !== null;
      if (!isOpen) {
        buttonRef.current?.click();
      }

      container.scrollIntoView({ block: 'start' });
    };

    maybeOpenFromHash();
    window.addEventListener('hashchange', maybeOpenFromHash);
    return () => window.removeEventListener('hashchange', maybeOpenFromHash);
  }, [id]);

  return (
    <Disclosure>
      {({ open }) => {
        return (
          <div id={id} className={`uofg-accordion ${accordion}`}>
            <AccordionContext.Provider value={{ isOpen: open, buttonRef }}>{children}</AccordionContext.Provider>
          </div>
        );
      }}
    </Disclosure>
  );
}
Accordion.displayName = 'Accordion';

export { AccordionButton } from './accordion-button';
export { AccordionContent } from './accordion-content';

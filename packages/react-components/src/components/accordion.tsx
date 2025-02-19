import type { PropsWithChildren, ReactNode } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import AnimateHeight from 'react-animate-height';
import { twJoin } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@awesome.me/kit-7993323d0c/icons/classic/regular';

export type AccordionProps = PropsWithChildren<{
  title: string | ReactNode;
}>;

export function Accordion({ title, children }: AccordionProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="my-2 [&_p:last-child]:mb-0">
          <DisclosureButton
            className={twJoin(
              'mb-1 inline-flex w-full cursor-pointer items-center justify-between gap-2 p-2.5 px-5 text-left text-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 hocus:bg-blue hocus:text-blue-contrast',
              open ? 'bg-blue text-blue-contrast' : 'bg-grey-light-bg text-blue-on-light',
            )}
          >
            <span>{title}</span>
            <FontAwesomeIcon
              icon={open ? faCircleMinus : faCirclePlus}
              className={twJoin('h-[1em] text-yellow transition-transform', !open && 'rotate-90')}
            />
          </DisclosureButton>
          <AnimateHeight height={open ? 'auto' : 0} duration={200} easing={'ease-in-out'}>
            <DisclosurePanel static className="border-l-4 border-yellow py-3 pl-5">
              {children}
            </DisclosurePanel>
          </AnimateHeight>
        </div>
      )}
    </Disclosure>
  );
}

Accordion.displayName = 'Accordion';

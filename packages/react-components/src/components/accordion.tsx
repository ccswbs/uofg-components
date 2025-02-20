import type { PropsWithChildren, ReactNode } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import AnimateHeight from 'react-animate-height';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@awesome.me/kit-7993323d0c/icons/classic/regular';
import { tv } from 'tailwind-variants';

export type AccordionProps = PropsWithChildren<{
  title: string | ReactNode;
}>;

export function Accordion({ title, children }: AccordionProps) {
  const accordion = tv({
    slots: {
      base: 'tw:my-2 tw:[&_p:last-child]:mb-0',
      button:
        'tw:group tw:mb-1 tw:inline-flex tw:w-full tw:cursor-pointer tw:items-center tw:justify-between tw:gap-2 tw:p-2.5 tw:px-5 tw:text-left tw:text-xl tw:transition-colors tw:focus:outline-none tw:focus-visible:ring-2 tw:focus-visible:ring-blue tw:focus-visible:ring-offset-2 tw:hocus:bg-blue tw:hocus:text-blue-contrast',
      icon: 'tw:h-[1em] tw:text-blue-on-light tw:group-hocus:text-blue-contrast tw:transition',
      panel: 'tw:border-l-4 tw:border-yellow tw:py-3 tw:pl-5',
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

  return (
    <Disclosure>
      {({ open }) => {
        const { base, button, icon, panel } = accordion({ open });

        return (
          <div className={base()}>
            <DisclosureButton className={button()}>
              <span>{title}</span>
              <FontAwesomeIcon icon={open ? faCircleMinus : faCirclePlus} className={icon()} />
            </DisclosureButton>
            <AnimateHeight height={open ? 'auto' : 0} duration={200} easing={'ease-in-out'}>
              <DisclosurePanel static className={panel()}>
                {children}
              </DisclosurePanel>
            </AnimateHeight>
          </div>
        );
      }}
    </Disclosure>
  );
}

Accordion.displayName = 'Accordion';

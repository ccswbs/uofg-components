'use client';

import { faTimes } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

export type ModalProps = PropsWithChildren<{
  open: boolean;
  onClose?: () => void;
  role?: 'dialog' | 'alertdialog';
  labelledBy?: string;
  centered?: boolean;
}>;

export function Modal({ open, onClose = () => {}, role = 'dialog', labelledBy, centered, children }: ModalProps) {
  const modal = tv({
    slots: {
      base: 'uog:ease-out uog:relative uog:z-50 uog:transition uog:duration-300 uog:data-[closed]:opacity-0',
      backdrop:
        'uog:ease-out uog:fixed uog:inset-0 uog:bg-black/40 uog:transition uog:duration-300 uog:data-[closed]:opacity-0',
      wrapper: 'uog:fixed uog:inset-0 uog:flex uog:w-screen uog:justify-center uog:md:p-4',
      panelWrapper: 'uog:relative uog:w-full uog:flex uog:flex-col uog:items-center',
      panel: '',
      closeButton:
        'uog:bg-grey-dark-bg uog:md:absolute uog:border-b uog:border-white/40 uog:top-0 uog:right-0 uog:flex uog:h-9 uog:w-full uog:md:w-9 uog:items-center uog:justify-center uog:md:rounded-full uog:text-xl uog:text-white uog:transition-colors uog:hover:bg-red uog:gap-1',
    },
    variants: {
      centered: {
        true: {
          panelWrapper: 'uog:justify-center',
        },
      },
    },
  });

  const { base, backdrop, wrapper, panelWrapper, panel, closeButton } = modal({ centered });

  return (
    <Dialog
      transition
      open={open}
      role={role}
      onClose={onClose}
      className={`uofg-modal ${base()}`}
      aria-labelledby={labelledBy}
    >
      <DialogBackdrop transition className={`uofg-modal-backdrop ${backdrop()}`} />

      <div className={`uofg-modal-wrapper ${wrapper()}`}>
        <div className={`uofg-modal-panel-wrapper ${panelWrapper()}`}>
          <CloseButton onClick={onClose} className={`uofg-modal-close-button ${closeButton()}`}>
            <FontAwesomeIcon icon={faTimes} />
            <span className="uog:md:sr-only uog:text-base">Close Modal</span>
          </CloseButton>

          <DialogPanel className={`uofg-modal-panel ${panel()}`}>{children}</DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';

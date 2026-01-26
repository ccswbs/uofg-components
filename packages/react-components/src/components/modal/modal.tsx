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
      base: 'relative z-50 transition duration-300 ease-out data-[closed]:opacity-0',
      backdrop: 'fixed inset-0 bg-black/60 transition duration-300 ease-out data-[closed]:opacity-0',
      wrapper: 'fixed inset-0 flex w-screen justify-center md:p-6',
      panelWrapper: 'relative flex w-full flex-col items-center',
      panel: 'relative',
      closeButton:
        '-top-3.5 -right-3.5 flex h-9 w-full items-center justify-center gap-1 border border-white/40 bg-grey-dark-bg text-xl text-white transition-colors hover:bg-red md:absolute md:w-9 md:rounded-full',
    },
    variants: {
      centered: {
        true: {
          panelWrapper: 'justify-center',
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
          <DialogPanel className={`uofg-modal-panel ${panel()}`}>
            <CloseButton onClick={onClose} className={`uofg-modal-close-button ${closeButton()}`}>
              <FontAwesomeIcon icon={faTimes} />
              <span className="text-base md:sr-only">Close Modal</span>
            </CloseButton>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';

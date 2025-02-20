import { CloseButton, Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@awesome.me/kit-7993323d0c/icons/classic/solid';
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
      base: 'tw:ease-out tw:relative tw:z-50 tw:transition tw:duration-300 tw:data-[closed]:opacity-0',
      backdrop:
        'tw:ease-out tw:fixed tw:inset-0 tw:bg-black/40 tw:transition tw:duration-300 tw:data-[closed]:opacity-0',
      wrapper: 'tw:fixed tw:inset-0 tw:flex tw:w-screen tw:justify-center tw:p-4 tw:pt-6',
      panelWrapper: 'tw:relative tw:h-fit tw:w-fit',
      panel: 'tw:h-fit tw:w-fit',
      closeButton:
        'tw:bg-dark-grey-bg tw:md:-top-4 tw:md:-right-4 tw:absolute tw:top-0 tw:right-0 tw:flex tw:h-9 tw:w-9 tw:items-center tw:justify-center tw:rounded-full tw:text-xl tw:text-white tw:transition-colors tw:hover:bg-red',
    },
    variants: {
      centered: {
        true: {
          wrapper: 'tw:items-center',
        },
      },
    },
  });

  const { base, backdrop, wrapper, panelWrapper, panel, closeButton } = modal({ centered });

  return (
    <Dialog transition open={open} role={role} onClose={onClose} className={base()} aria-labelledby={labelledBy}>
      <DialogBackdrop transition className={backdrop()} />

      <div className={wrapper()}>
        <div className={panelWrapper()}>
          <DialogPanel className={panel()}>{children}</DialogPanel>

          <CloseButton onClick={onClose} className={closeButton()}>
            <span className="sr-only">Close</span>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </div>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';

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
      base: 'tw:ease-out tw:relative tw:z-50 tw:transition tw:duration-300 tw:data-[closed]:opacity-0',
      backdrop:
        'tw:ease-out tw:fixed tw:inset-0 tw:bg-black/40 tw:transition tw:duration-300 tw:data-[closed]:opacity-0',
      wrapper: 'tw:fixed tw:inset-0 tw:flex tw:w-screen tw:justify-center tw:md:p-4',
      panelWrapper: 'tw:relative tw:w-full tw:flex tw:flex-col tw:items-center',
      panel: '',
      closeButton:
        'tw:bg-dark-grey-bg tw:md:absolute tw:border-b tw:border-white/40 tw:top-0 tw:right-0 tw:flex tw:h-9 tw:w-full tw:md:w-9 tw:items-center tw:justify-center tw:md:rounded-full tw:text-xl tw:text-white tw:transition-colors tw:hover:bg-red tw:gap-1',
    },
    variants: {
      centered: {
        true: {
          panelWrapper: 'tw:justify-center',
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
          <CloseButton onClick={onClose} className={closeButton()}>
            <FontAwesomeIcon icon={faTimes} />
            <span className="tw:md:sr-only tw:text-base">Close Modal</span>
          </CloseButton>

          <DialogPanel className={panel()}>{children}</DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';

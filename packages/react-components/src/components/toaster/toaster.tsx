'use client';

import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTimes,
  faTriangleExclamation,
} from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactNode, type RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { twJoin } from 'tailwind-merge';
import { tv } from 'tailwind-variants';
import { type Toast, ToastContext } from './toaster-context';

export const useToaster = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToasterProvider component');
  }

  return context;
};

type ToastTransitionProps = {
  toast: Toast;
  onRemove: (id: string) => void;
  in?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
};

function ToastTransition({ toast, onRemove, ...transitionProps }: ToastTransitionProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition {...transitionProps} nodeRef={nodeRef} timeout={300} classNames="uofg-toast-transition">
      <Toast toast={toast} onRemove={onRemove} nodeRef={nodeRef} />
    </CSSTransition>
  );
}

function Toast({
  toast,
  onRemove,
  nodeRef,
}: {
  toast: Toast;
  onRemove: (id: string) => void;
  nodeRef: RefObject<HTMLButtonElement | null>;
}) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startedAt = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startedAt;
      const nextProgress = Math.max(0, 100 - (elapsed / toast.timeout) * 100);

      setProgress(nextProgress);

      if (nextProgress > 0) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [toast.timeout]);

  const classes = tv({
    slots: {
      toast: 'uofg-toast relative flex max-w-[50ch] gap-2 overflow-hidden p-6 text-left text-lg',
      progress: 'uofg-toast-progress absolute right-0 bottom-0 left-0 h-1 origin-left bg-current opacity-70',
      icon: 'uofg-toast-icon text-2xl',
      message: 'uofg-toast-message',
      close:
        'uofg-toast-close-button text-md absolute -top-3 -left-3 h-6 w-6 cursor-pointer rounded-full bg-black text-white',
    },
    variants: {
      type: {
        info: {
          toast: 'bg-blue text-blue-contrast',
        },
        success: {
          toast: 'bg-green text-green-contrast',
        },
        warning: {
          toast: 'bg-yellow text-yellow-contrast',
        },
        error: {
          toast: 'bg-red text-red-contrast',
        },
      },
    },
  })({ type: toast.type });

  return (
    <button onClick={() => onRemove(toast.id)} ref={nodeRef} className={classes.toast()}>
      {toast.type === 'info' && <FontAwesomeIcon className={classes.icon()} icon={faCircleInfo} />}
      {toast.type === 'success' && <FontAwesomeIcon className={classes.icon()} icon={faCircleCheck} />}
      {toast.type === 'warning' && <FontAwesomeIcon className={classes.icon()} icon={faTriangleExclamation} />}
      {toast.type === 'error' && <FontAwesomeIcon className={classes.icon()} icon={faCircleXmark} />}
      <span className={classes.message()}>{toast.message}</span>
      <span className={classes.progress()} style={{ width: `${progress}%` }} aria-hidden="true" />
    </button>
  );
}

export function ToasterProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Removes a toast from state based on its unique timestamp ID
  const removeToast = useCallback((id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  // Adds a toast and schedules its automatic dismissal after 3 seconds
  const addToast = useCallback(
    (message: Toast['message'], type: Toast['type'] = 'info', timeout: Toast['timeout'] = 3000) => {
      const id = Date.now().toString();

      console.log('Adding toast:', id, message, type, timeout);

      setToasts(prevToasts => [
        ...prevToasts,
        {
          id,
          message,
          type,
          timeout,
        },
      ]);

      setTimeout(() => {
        removeToast(id);
      }, timeout);
    },
    [removeToast],
  );

  const classes = twJoin(
    'uofg-toaster',
    'fixed',
    'right-4',
    'bottom-4',
    'z-1000',
    'flex',
    'w-fit',
    'flex-col',
    'items-end',
    'gap-3',
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <TransitionGroup component="div" className={classes}>
        {toasts.map(toast => (
          <ToastTransition key={toast.id} toast={toast} onRemove={removeToast} />
        ))}
      </TransitionGroup>
    </ToastContext.Provider>
  );
}

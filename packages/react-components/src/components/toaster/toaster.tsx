import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTriangleExclamation,
} from '@awesome.me/kit-7993323d0c/icons/classic/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { type RefObject, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { twJoin } from 'tailwind-merge';
import { tv } from 'tailwind-variants';

export type Toast = {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  id: string;
  timeout: number;
};

type ToastListener = () => void;

let toasts: Toast[] = [];
const listeners = new Set<ToastListener>();

function emitChange() {
  listeners.forEach(listener => listener());
}

function removeToast(id: string) {
  toasts = toasts.filter(toast => toast.id !== id);
  emitChange();
}

function addToast(message: Toast['message'], type: Toast['type'] = 'info', timeout: Toast['timeout'] = 3000) {
  const id = nanoid();

  toasts = [
    ...toasts,
    {
      id,
      message,
      type,
      timeout,
    },
  ];

  emitChange();

  window.setTimeout(() => {
    removeToast(id);
  }, timeout);
}

function subscribe(listener: ToastListener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return toasts;
}

export function useToaster() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export const toast = {
  add: addToast,
  remove: removeToast,
  info: (message: Toast['message'], timeout?: Toast['timeout']) => addToast(message, 'info', timeout),
  success: (message: Toast['message'], timeout?: Toast['timeout']) => addToast(message, 'success', timeout),
  warning: (message: Toast['message'], timeout?: Toast['timeout']) => addToast(message, 'warning', timeout),
  error: (message: Toast['message'], timeout?: Toast['timeout']) => addToast(message, 'error', timeout),
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
  const nodeRef = useRef<HTMLButtonElement>(null);

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

export function Toaster() {
  const toasts = useToaster();

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
    <TransitionGroup component="div" className={classes}>
      {toasts.map(toastItem => (
        <ToastTransition key={toastItem.id} toast={toastItem} onRemove={toast.remove} />
      ))}
    </TransitionGroup>
  );
}

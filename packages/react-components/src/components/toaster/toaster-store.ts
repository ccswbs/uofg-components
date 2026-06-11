import { nanoid } from 'nanoid';
import { useSyncExternalStore } from 'react';

export type Toast = {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  id: string;
  timestamp: number;
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
  const timestamp = Date.now();

  toasts = [
    ...toasts,
    {
      id,
      message,
      type,
      timeout,
      timestamp,
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

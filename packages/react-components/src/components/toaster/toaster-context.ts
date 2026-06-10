import { createContext } from 'react';

export type Toast = {
  message: string;
  type: 'error' | 'success' | 'info' | 'warning';
  id: string;
  timeout: number;
};

export type ToastContextValue = {
  addToast: (message: Toast['message'], type?: Toast['type'], timeout?: number) => void;
};

export const ToastContext = createContext<ToastContextValue | null>(null);

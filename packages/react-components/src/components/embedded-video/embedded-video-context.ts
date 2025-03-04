import { createContext } from 'react';

export type EmbeddedVideoContextType = {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export const EmbeddedVideoContext = createContext<EmbeddedVideoContextType | null>(null);

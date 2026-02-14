import { createContext, useContext } from 'react';
import type { TModalContext } from '../types';

export const ModalContext = createContext<TModalContext>({
  openModal: () => {},
  video: null,
  isOpen: false,
  closeModal: () => {},
});

export const useModalContext = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error(
      'useModalContext must be used within a ModalContextProvider',
    );
  }
  return ctx;
};

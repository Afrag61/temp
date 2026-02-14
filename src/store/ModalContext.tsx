import { useState } from 'react';
import type { TModalContext } from '../types';
import { ModalContext } from './useModalCtx';

interface Props {
  children: React.ReactNode;
}

const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState<TModalContext['media'] | null>(null);

  const handleOpenModal: TModalContext['openModal'] = (media) => {
    setIsOpen(true);
    setMedia(media);
  };

  const handleCloseModal: TModalContext['closeModal'] = () => {
    setMedia(null);
    setIsOpen(false);
  };

  const ctxValue: TModalContext = {
    isOpen,
    media,
    openModal: handleOpenModal,
    closeModal: handleCloseModal,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;

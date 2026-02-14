import { useState } from 'react';
import type { TModalContext, TVideo } from '../types';
import { ModalContext } from './useModalCtx';

interface Props {
  children: React.ReactNode;
}

const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState<TVideo | null>(null);

  const handleOpenModal: TModalContext['openModal'] = (video) => {
    setIsOpen(true);
    setVideo(video);
  };

  const handleCloseModal: TModalContext['closeModal'] = () => {
    setVideo(null);
    setIsOpen(false);
  };

  const ctxValue: TModalContext = {
    isOpen,
    video,
    openModal: handleOpenModal,
    closeModal: handleCloseModal,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;

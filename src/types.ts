export interface TVideo {
  src: string;
  thumb: string;
  name: string;
}

export interface TModalContext {
  isOpen: boolean;
  video: TVideo | null;
  openModal: (video: TVideo) => void;
  closeModal: () => void;
}

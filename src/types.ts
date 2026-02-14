export interface TVideo {
  src: string;
  thumb: string;
  name: string;
}

export interface TImage {
  src: string;
  name: string;
}

interface TMediaVideo {
  type: 'video';
  video: TVideo;
}

interface TMediaImage {
  type: 'image';
  image: TImage;
}

export type TMedia = TMediaVideo | TMediaImage;

export interface TModalContext {
  isOpen: boolean;
  media: TMedia | null;
  openModal: (media: TMedia) => void;
  closeModal: () => void;
}

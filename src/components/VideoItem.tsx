import { useModalContext } from '../store/useModalCtx';
import type { TVideo } from '../types';

interface Props {
  video: TVideo;
}

const VideoItem: React.FC<Props> = ({ video }) => {
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({ type: 'video', video });
  };

  return (
    <li
      key={video.name}
      onClick={handleClick}
      className='flex flex-col p-2.5 hover:scale-105 hover:border cursor-pointer border-[#ff47ac] rounded-md transition-all duration-300 ease-in-out object-center'
    >
      <div className='aspect-video overflow-hidden rounded-xl bg-black'>
        <img
          className='w-full h-full object-cover'
          src={video.thumb}
          alt={video.name}
        />
      </div>
      <p className='m-5 text-center text-base text-[#ff47ac]'>{video.name}</p>
    </li>
  );
};

export default VideoItem;

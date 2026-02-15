import { useGSAP } from '@gsap/react';
import { useModalContext } from '../store/useModalCtx';
import type { TVideo } from '../types';
import gsap from 'gsap';
import { useRef } from 'react';

interface Props {
  video: TVideo;
}

const VideoItem: React.FC<Props> = ({ video }) => {
  const vidItemRef = useRef<HTMLLIElement>(null);
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({ type: 'video', video });
  };

  useGSAP(() => {
    const vid = vidItemRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: vidItemRef.current,
          start: 'top 85%',
          end: 'bottom 99%',
          scrub: true,
        },
      })
      .fromTo(
        vid,
        { opacity: 0, y: 200, scale: 0.1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'back.inOut',
        },
      );
  }, []);

  return (
    <li
      ref={vidItemRef}
      key={video.name}
      onClick={handleClick}
      className='item flex flex-col p-2.5 hover:scale-105 hover:border cursor-pointer border-[#ff47ac] rounded-md transition-all duration-300 ease-in-out object-center'
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

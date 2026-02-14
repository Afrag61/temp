import { useGSAP } from '@gsap/react';
import { useModalContext } from '../store/useModalCtx';
import gsap from 'gsap';

const Modal = () => {
  const { isOpen, closeModal, video } = useModalContext();

  useGSAP(() => {
    gsap.from('.modal', {
      opacity: 0,
      y: -1000,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }, [isOpen]);

  return (
    <>
      {isOpen && video && (
        <div className='backdrop z-20 fixed w-full h-full top-0 left-0 bg-black/30 backdrop-blur-md transition-all duration-300 ease-in-out flex items-center justify-center'>
          <div onClick={closeModal} className='w-full h-full absolute' />
          <div className='modal z-20 w-auto max-w-[90%] md:w-auto md:max-w[90%] h-auto max-h-[90%] md:h-[90%] flex flex-col bg-[#242424] rounded-md justify-around items-center gap-5 p-5'>
            <h1 className='md:text-lg text-center'>{video.name}</h1>
            <video
              controls
              controlsList='nodownload noplaybackrate'
              disablePictureInPicture
              disableRemotePlayback
              className='size-auto max-h-[90%] rounded'
            >
              <source src={video.src} />
            </video>
            <div>
              <button
                className='absolute top-3 right-3 cursor-pointer w-10 h-10 text-center bg-[#ff47ac] rounded-full hover:bg-red-600 transition-all duration-300 ease-in-out font-sans font-bold'
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

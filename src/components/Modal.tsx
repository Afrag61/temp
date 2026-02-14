import { useGSAP } from '@gsap/react';
import { useModalContext } from '../store/useModalCtx';
import gsap from 'gsap';

const Modal = () => {
  const { isOpen, closeModal, media } = useModalContext();

  useGSAP(() => {
    gsap.from('.modal', {
      opacity: 0,
      y: -100,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className='backdrop z-20 fixed w-full h-full top-0 left-0 bg-black/30 backdrop-blur-md transition-all duration-300 ease-in-out flex items-center justify-center'>
          <div onClick={closeModal} className='w-full h-full absolute' />
          <div className='modal z-20 w-auto max-w-[90%] md:w-auto md:max-w[90%] h-auto max-h-[90%] md:h-[90%] flex flex-col bg-[#242424] rounded-md justify-around items-center gap-2.5 p-5'>
            {media?.type === 'video' && media.video && (
              <>
                <div className='w-full flex flex-row items-center justify-between'>
                  <h1 className='w-[95%] md:text-nowrap text-center text-pink-300'>
                    {media.video.name}
                  </h1>

                  <button
                    className='justify-self-end cursor-pointer w-8 h-8 text-center bg-pink-300 text-black rounded-lg hover:bg-red-600 transition-all duration-300 ease-in-out font-sans font-bold'
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <video
                  controls
                  controlsList='nodownload noplaybackrate'
                  disablePictureInPicture
                  disableRemotePlayback
                  className='size-auto max-h-[90%] rounded'
                >
                  <source src={media.video.src} />
                </video>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

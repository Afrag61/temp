import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import peachImg from '../assets/peach.svg';

const Header = () => {
  useGSAP(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 300) {
        gsap.to('.header', {
          y: -150,
          duration: 1,
        });
      } else {
        gsap.to('.header', {
          y: 0,
          duration: 1,
        });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    const titleSplit = SplitText.create('.header-title', {
      type: 'chars',
    });

    titleSplit.chars.forEach((char) => {
      char.classList =
        'bg-clip-text text-transparent bg-gradient-to-b from-pink-100 to-pink-700';
    });

    gsap.from(titleSplit.chars, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: 'bounce',
      stagger: 0.02,
    });
    gsap.from('.header-logo', {
      x: -100,
      duration: 0.8,
      opacity: 0,
      delay: 0.2,
      ease: 'back.out',
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header fixed top-0 left-0 right-0 z-10 flex items-center justify-center content-center gap-1.5 border-b-2 border-pink-300 backdrop-blur-md p-2.5'>
      <img
        src={peachImg}
        alt='Peach'
        className='header-logo size-12 md:size-14'
      />
      <div className='header-content'>
        <h1 className='header-title text-3xl md:text-4xl'>Peach Hub</h1>
      </div>
    </header>
  );
};

export default Header;

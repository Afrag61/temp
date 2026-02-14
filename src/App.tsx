import Header from './components/Header';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import VideoList from './components/VideoList';
import { useEffect } from 'react';
import Modal from './components/Modal';
import { useModalContext } from './store/useModalCtx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { isOpen } = useModalContext();

  useEffect(() => {
    document.body.classList = 'transition-all duration-300 ease-in-out';
  }, []);

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <VideoList />
    </>
  );
}
export default App;

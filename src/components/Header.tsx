import peachImg from '../assets/peach.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={peachImg} alt='Peach' className='header-logo' />
      <div className='header-content'>
        <h1 className='header-title'>Peach Hub</h1>
      </div>
    </header>
  );
};

export default Header;

import Header from './components/Header';
import data from './data.json';

function App() {
  return (
    <>
      <Header />
      <div className='videos'>
        {data.map((vid, index) => {
          const name = vid.split('/')[3];

          return (
            <li key={index}>
              <video
                controls
                muted
                controlsList='nodownload noplaybackrate'
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
              >
                <source src={vid} type='video/mp4' />
              </video>
              <p>{name}</p>
            </li>
          );
        })}
      </div>
    </>
  );
}
export default App;

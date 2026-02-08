import './App.css';
import { imagesList, videosList } from './videos';

function App() {
  return (
    <div className='videos'>
      {videosList.map((vid, index) => {
        return (
          <li key={index}>
            <video src={vid} controls muted />
          </li>
        );
      })}
      {imagesList.map((img, index) => {
        return (
          <li key={index}>
            <img src={img} />
          </li>
        );
      })}
    </div>
  );
}
export default App;

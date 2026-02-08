import './App.css';
// import { imagesList, videosList } from './videos';
import data from './data.json';

function App() {
  return (
    <div className='videos'>
      {data.map((vid, index) => {
        return (
          <li key={index}>
            <video src={vid} controls muted />
          </li>
        );
      })}
    </div>
  );
}
export default App;

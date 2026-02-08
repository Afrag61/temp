import data from './data.json';

function App() {
  console.log('data', data);

  return (
    <div className='videos'>
      {data.map((vid, index) => {
        return (
          <li key={index}>
            <video controls muted>
              <source src={vid} type='video/mp4' />
            </video>
          </li>
        );
      })}
    </div>
  );
}
export default App;

import data from "./data.json";

function App() {

    return (
        <div className="videos">
            {data.map((vid, index) => {
                return (
                    <li key={index}>
                        <video controls muted controlsList="nodownload noplaybackrate" disablePictureInPicture onContextMenu={(e) => e.preventDefault()} >
                            <source
                                src={vid}
                                type="video/mp4" />
                        </video>
                    </li>
                );
            })}
        </div>
    );
}
export default App;

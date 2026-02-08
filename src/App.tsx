import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { list } from "./videos.ts";

function App() {
    return (
        <div className="videos">
            {[].map((vid, index) => {
                console.log(vid);
                return (
                    <li key={index}>
                        <video src={vid} controls />
                    </li>
                );
            })}
        </div>
    );
}
export default App;

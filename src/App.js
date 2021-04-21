// import package
import { useState } from "react";

// import components
import ListMusic from "./components/ListMusic";
import MusicIsRunning from "./components/MusicIsRunning";
import Player from "./components/Player";

// import styles
import "./styles/app.scss";

// data
import DataListMusic from "./Data";

function App() {
  // useState
  const [musics, setMusics] = useState(DataListMusic());
  const [currentMusic, setCurrentMusic] = useState(musics[0]);

  return (
    <div className="app">
      <h1>Simple Player Music</h1>
      <ListMusic musics={musics} setMusics={setMusics} />
      <MusicIsRunning currentMusic={currentMusic} />
      <Player />
    </div>
  );
}

export default App;

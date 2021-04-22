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
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app">
      <h1>Simple Player Music</h1>
      <ListMusic musics={musics} setMusics={setMusics} />
      <MusicIsRunning currentMusic={currentMusic} />
      <Player
        musics={musics}
        currentMusic={currentMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;

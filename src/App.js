// import package
import { useState, useRef } from "react";

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
  const [musicInfo, setMusicInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // useRef pada react sama halnya dengan document.querySelector pada javascript biasa
  // digunakan untuk menseleksi component
  const audioRef = useRef(null);

  // function for component Player
  const handlerTimeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(e.target.duration);
    setMusicInfo({ ...musicInfo, currentTime: current, duration: duration });
  };

  // function for the music end
  const handlerMusicEnd = async () => {
    let currentIndexMusic = musics.findIndex(
      (music) => music.id === currentMusic.id
    );
    await setCurrentMusic(musics[(currentIndexMusic + 1) % musics.length]);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="app">
      <h1>Simple Player Music</h1>
      <ListMusic
        musics={musics}
        setMusics={setMusics}
        setCurrentMusic={setCurrentMusic}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <MusicIsRunning currentMusic={currentMusic} />
      <Player
        musics={musics}
        setMusics={setMusics}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        musicInfo={musicInfo}
        setMusicInfo={setMusicInfo}
      />
      <audio
        onLoadedMetadata={handlerTimeUpdate}
        onTimeUpdate={handlerTimeUpdate}
        ref={audioRef}
        src={currentMusic.audio}
        onEnded={handlerMusicEnd}
      ></audio>
    </div>
  );
}

export default App;

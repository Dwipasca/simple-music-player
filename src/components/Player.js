// import package
import { useState, useRef } from "react";

// import icon fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentMusic, isPlaying, setIsPlaying }) => {
  // useRef pada react sama halnya dengan document.querySelector pada javascript biasa
  // digunakan untuk menseleksi component
  const audioRef = useRef(null);

  // usestate
  const [musicInfo, setMusicInfo] = useState({
    currentTime: null,
    duration: null,
  });

  // function
  const handlerPlayMusic = () => {
    if (isPlaying) {
      // console.log("not playing");
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handlerTimeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    console.log(e.target.duration);
    setMusicInfo({ ...musicInfo, currentTime: current, duration: duration });
  };

  // function for get minute and second
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const handlerDragInputAudio = (e) => {
    audioRef.current.currentTime = e.target.value;
    setMusicInfo({ ...musicInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="duration-player">
        <p>{getTime(musicInfo.currentTime)}</p>
        <input
          value={musicInfo.currentTime}
          type="range"
          max={musicInfo.duration}
          min={0}
          onChange={handlerDragInputAudio}
        />
        <p>{getTime(musicInfo.duration)}</p>
      </div>
      <div className="control-player">
        <FontAwesomeIcon className="back" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={handlerPlayMusic}
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="forward" icon={faAngleRight} />
        <audio
          onLoadedMetadata={handlerTimeUpdate}
          onTimeUpdate={handlerTimeUpdate}
          ref={audioRef}
          src={currentMusic.audio}
        ></audio>
      </div>
    </div>
  );
};

export default Player;

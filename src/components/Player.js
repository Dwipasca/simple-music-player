// import icon fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  musics,
  currentMusic,
  isPlaying,
  setIsPlaying,
  audioRef,
  musicInfo,
  setMusicInfo,
}) => {
  // function to know is music playying or not
  const handlerPlayMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
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
          max={musicInfo.duration || 0}
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
      </div>
    </div>
  );
};

export default Player;

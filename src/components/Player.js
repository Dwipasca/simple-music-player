// import icon fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";

const Player = ({
  musics,
  setMusics,
  currentMusic,
  setCurrentMusic,
  isPlaying,
  setIsPlaying,
  audioRef,
  musicInfo,
  setMusicInfo,
}) => {
  // useEffect
  useEffect(() => {
    const newMusics = musics.map((music) => {
      // music.id here is representative from the state and the id here
      // is the music we selected now
      // so when the state id and music id same. then the active will be true
      // if not then will be false
      if (music.id === currentMusic.id) {
        return {
          ...music,
          active: true,
        };
      } else {
        return {
          ...music,
          active: false,
        };
      }
    });
    // renew the music list in state
    setMusics(newMusics);
  }, [currentMusic]);

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

  const handlerSkipMusic = (direction) => {
    // first know were we are now
    let currentIndexMusic = musics.findIndex(
      (music) => music.id === currentMusic.id
    );

    if (direction === "forward") {
      // pakai modulus disini karena kita ingin kembali ke index 0
      // ketika kita sudah sampai pada music index terakhir
      setCurrentMusic(musics[(currentIndexMusic + 1) % musics.length]);
      // console.log(`next music index : ${currentIndexMusic + 1}`);
      // console.log(`musics length : ${musics.length}`);
    }
    if (direction === "back") {
      // kondisi ini dibuat ketika dari music index 0 mau ke index terakhir music
      // kita tetapkan bahwa jumlah music -1 agar indexnya berubah ke index music terakhir
      if ((currentIndexMusic - 1) % musics.length === -1) {
        setCurrentMusic(musics[musics.length - 1]);
        return;
      }
      setCurrentMusic(musics[(currentIndexMusic - 1) % musics.length]);
    }
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
        <FontAwesomeIcon
          onClick={() => handlerSkipMusic("back")}
          className="back"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={handlerPlayMusic}
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => handlerSkipMusic("forward")}
          className="forward"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;

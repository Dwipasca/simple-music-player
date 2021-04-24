const Music = ({
  musics,
  setMusics,
  msc,
  setCurrentMusic,
  audioRef,
  isPlaying,
}) => {
  const handlerMusicSelect = () => {
    const selectedMusic = musics.filter((state) => state.id === msc.id);

    setCurrentMusic({ ...selectedMusic[0] });
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => console.log(error));
      }
    }
  };

  return (
    <div onClick={handlerMusicSelect} className="music selected">
      <img src={msc.cover} alt="example" />
      <div className="desc-music">
        <h4>{msc.name}</h4>
        <h4>{msc.artist}</h4>
      </div>
    </div>
  );
};

export default Music;

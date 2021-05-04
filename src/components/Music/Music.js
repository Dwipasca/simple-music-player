const Music = ({
  msc,
  id,
  musics,
  setMusics,
  setCurrentMusic,
  audioRef,
  isPlaying,
}) => {
  const handlerMusicSelect = async () => {
    const selectedMusic = musics.filter((state) => state.id === id);
    // console.log(selectedMusic);
    // why we have to spesific selectedMusic[0] ? because we use filter
    // filter will create array and then put the value in there
    // that's why we have to be spesific
    await setCurrentMusic({ ...selectedMusic[0] });

    // add active state
    const newMusics = musics.map((music) => {
      // music.id here is representative from the state and the id here
      // is the music we selected now
      // so when the state id and music id same. then the active will be true
      // if not then will be false
      if (music.id === id) {
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

    // check if the music playying
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={handlerMusicSelect}
      className={`music  ${msc.active ? "selected" : ""} `}
    >
      <img src={msc.cover} alt="example" />
      <div className="desc-music">
        <h4>{msc.name}</h4>
        <h4>{msc.artist}</h4>
      </div>
    </div>
  );
};

export default Music;

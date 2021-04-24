// import components
import Music from "./Music";

const ListMusic = ({
  musics,
  setMusics,
  setCurrentMusic,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className="list-music">
      <h3>List Music</h3>
      {musics.map((msc) => (
        <Music
          musics={musics}
          setMusics={setMusics}
          msc={msc}
          setCurrentMusic={setCurrentMusic}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
};

export default ListMusic;

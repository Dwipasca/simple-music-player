// import components
import Music from "../Music/Music";

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
          id={msc.id}
          key={msc.id}
          msc={msc}
          musics={musics}
          setMusics={setMusics}
          setCurrentMusic={setCurrentMusic}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
};

export default ListMusic;

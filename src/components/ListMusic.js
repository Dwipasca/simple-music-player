// import components
import Music from "./Music";

const ListMusic = ({ musics, setMusics }) => {
  return (
    <div className="list-music">
      <h3>List Music</h3>
      {musics.map((msc) => (
        <Music msc={msc} />
      ))}
    </div>
  );
};

export default ListMusic;

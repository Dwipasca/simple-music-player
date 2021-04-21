const MusicIsRunning = ({ currentMusic }) => {
  return (
    <div className="music-is-running">
      <img src={currentMusic.cover} alt={currentMusic.name} />
      <h2>{currentMusic.name}</h2>
      <h3>{currentMusic.artist}</h3>
    </div>
  );
};

export default MusicIsRunning;

const Player = () => {
  return (
    <div className="player">
      <div className="duration-player">
        <p>Start Time</p>
        <input type="range" />
        <p>Total duration</p>
      </div>
      <div className="control-player">
        <button>Back</button>
        <button>Play</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Player;

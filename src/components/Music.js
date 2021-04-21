const Music = ({ msc }) => {
  return (
    <div className="music selected">
      <img src={msc.cover} alt="example" />
      <div className="desc-music">
        <h4>{msc.name}</h4>
        <h4>{msc.artist}</h4>
      </div>
    </div>
  );
};

export default Music;

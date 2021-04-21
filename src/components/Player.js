// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player">
      <div className="duration-player">
        <p>0.0</p>
        <input type="range" />
        <p>3.27</p>
      </div>
      <div className="control-player">
        <FontAwesomeIcon className="back" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" icon={faPlay} />
        <FontAwesomeIcon className="forward" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;

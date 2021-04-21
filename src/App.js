// import components
import ListMusic from "./components/ListMusic";
import MusicIsRunning from "./components/MusicIsRunning";
import Player from "./components/Player";

// import styles
import "./styles/app.scss";

// impport icon fontAwesome

function App() {
  return (
    <div className="app">
      <h1>Simple Player Music</h1>
      <ListMusic />
      <MusicIsRunning />
      <Player />
    </div>
  );
}

export default App;

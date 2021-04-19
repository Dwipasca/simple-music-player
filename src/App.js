// import components
import ListMusic from "./components/ListMusic";
import MusicIsRunning from "./components/MusicIsRunning";
import Player from "./components/Player";

// import styles

// impport icon fontAwesome

function App() {
  return (
    <div className="App">
      <h1>Simple Player Music</h1>
      {/* <ListMusic /> */}
      <MusicIsRunning />
      <Player />
    </div>
  );
}

export default App;

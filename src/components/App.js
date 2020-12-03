import Links from "./Links";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Jokes from "./Jokes";
import MusicMaster from ".././projects/music-master";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
    <Links />
    <Header />
    <hr />
    <Portfolio />
    <hr />
    <Jokes />
    <hr />
  <MusicMaster />
 <hr />
 <Contact />
    </div>
  );
}

export default App;

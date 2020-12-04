import Links from "./Links";
import Header from "./Header";
import Portfolio from "./Portfolio";
import Jokes from "./Jokes";
import MusicMaster from ".././projects/music-master";
import SocialProfiles from "./SocialProfiles";

function App() {
  return (
    <div className="App">
    <Links />
    <Header />
    <hr />
    <Portfolio />
    <hr />
  <MusicMaster />
  <hr />
  <Jokes />
 <br />
 <SocialProfiles />
 <br />
    </div>
  );
}

export default App;

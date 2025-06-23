import HeroPage from "./pages/HeroPage";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import { useContext } from "react";
import { PlayerContext } from "./context/playerContext.jsx";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <>
      <div className="h-screen flex flex-col bg-black">
        <div className="flex flex-1  overflow-hidden">
          <SideBar />
          <HeroPage />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;

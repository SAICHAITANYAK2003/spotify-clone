import { useContext, useState } from "react";
import { assets, songsData } from "../assets/assets";
import { IoOptionsOutline } from "react-icons/io5";
import { PlayerContext } from "../context/playerContext";

const Player = () => {
  const [optionsBox, setOptionsBox] = useState(false);
  const { seekBar, seekBg, playStatus, play, pause, track, time ,prevSong,nextSong,seekSong} =
    useContext(PlayerContext);

  const handleOptionBox = () => setOptionsBox((prev) => !prev);
  return (
    <>
      <div className="h-20 w-full flex flex-row justify-between items-center gap-7 bg-[#242424] text-white px-4 relative">
        {/* ------------- current - song -----------  */}
        <div className="hidden lg:flex items-center gap-4">
          <img src={track.image} alt="song-image" className="w-15 rounded-md" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}</p>
          </div>
        </div>
        {/* ------------- player - controls -----------  */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <img
              src={assets.shuffle_icon}
              alt="shuffle-icon"
              className="w-6 cursor-pointer"
            />
            <img
              src={assets.prev_icon}
              alt="prev-icon"
              className="w-6 cursor-pointer"
              onClick={prevSong}
            />
            {playStatus ? (
              <img
                src={assets.pause_icon}
                alt="play-icon"
                className="w-6 cursor-pointer"
                onClick={pause}
              />
            ) : (
              <img
                src={assets.play_icon}
                alt="play-icon"
                className="w-6 cursor-pointer"
                onClick={play}
              />
            )}

            <img
              src={assets.next_icon}
              alt="next-icon"
              className="w-6 cursor-pointer"
              onClick={nextSong}
            />
            <img
              src={assets.loop_icon}
              alt="loop-icon"
              className="w-6 cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-3">
            <p>
              {time.currentTime.minute}:{time.currentTime.second}
            </p>
            <div
              ref={seekBg}
              onClick={seekSong}
              className="w-[60vw] max-w-[500px] h-[5px] bg-gray-300 rounded-full cursor-pointer"
            >
              <hr
                ref={seekBar}
                className="h-1 border-none w-0 bg-green-800 rounded-full"
              />
            </div>
            <p>
              {time.totalTime.minute}:{time.totalTime.second}
            </p>
          </div>
        </div>

        {/* ------------- other- options- controls -----------  */}
        <div
          className={`${
            optionsBox ? "flex" : "hidden"
          } absolute bottom-22 right-5 items-center  gap-6 bg-[#242424] rounded-2xl border-2 border-gray-500 px-3 py-5 z-50`}
        >
          <img
            src={assets.plays_icon}
            alt="plays-icon"
            className="w-6 cursor-pointer"
          />
          <img
            src={assets.mic_icon}
            alt="mic-icon"
            className="w-6 cursor-pointer"
          />
          <img
            src={assets.queue_icon}
            alt="queue-icon"
            className="w-6 cursor-pointer"
          />
          <img
            src={assets.speaker_icon}
            alt="speaker-icon"
            className="w-6 cursor-pointer"
          />
          <img
            src={assets.volume_icon}
            alt="volume-icon"
            className="w-6 cursor-pointer"
          />
          <div className="bg-slate-50 w-20 h-1 rounded-full"></div>
          <img
            src={assets.mini_player_icon}
            alt="mini-player-icon"
            className="w-6 cursor-pointer"
          />
          <img
            src={assets.zoom_icon}
            alt="zoom-icon"
            className="w-6 cursor-pointer "
          />
        </div>
        <button
          onClick={handleOptionBox}
          className="cursor-pointer hover:bg-[#444343] p-3 rounded-full"
        >
          <IoOptionsOutline size={30} />
        </button>
      </div>
    </>
  );
};

export default Player;

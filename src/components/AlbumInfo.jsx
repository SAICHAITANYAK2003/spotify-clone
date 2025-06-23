import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

const AlbumInfo = () => {
  const { playwithId } = useContext(PlayerContext);
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <div className={`bg-${albumData.bgColor}`}>
        <Navbar />
        {/* ---------ablum-details-section----------------- */}
        <div className="mt-7 flex  flex-col items-start sm:flex-row sm:items-center  gap-4 ">
          <img
            src={albumData.image}
            alt=""
            className="rounded-md  w-20 md:rounded-4xl md:w-[200px]"
          />
          <div className="flex flex-col items-start gap-5">
            <p>Playlist</p>
            <h1 className="text-4xl md:text-7xl font-semibold">
              {albumData.name}
            </h1>
            <p>{albumData.desc}</p>
            <span className="flex flex-col items-start md:flex-row md:items-center ">
              <img
                src={assets.spotify_logo}
                alt="spotify_logo"
                className="w-7"
              />
              <b className="ml-2">Spotify</b>
              <p className="ml-2">
                1,323, 154 likes • <b>50 songs</b> , about 2 hr 30 min
              </p>
            </span>
          </div>
        </div>
        {/* ---------songs----------------- */}
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-white ">
          <p>
            <b className="mr-2">#</b>Title
          </p>

          <p>Album</p>
          <p>Date Added</p>
          <p>
            <img src={assets.clock_icon} alt="" className="w-6" />
          </p>
        </div>
        <hr />
        {songsData.map((song, index) => (
          <div
            onClick={() => playwithId(song.id)}
            key={song.id}
            className="grid grid-cols-3 sm:grid-cols-4 mt-5  pl-4 text-white items-center hover:border-[0.5px] border-gray-400 py-3 rounded-2xl cursor-pointer"
          >
            <span className="flex items-center gap-5">
              <p>{index + 1}</p>
              <span className="flex flex-col items-center md:flex-row">
                <img
                  src={song.image}
                  alt=""
                  className="h-15 w-15 rounded-2xl"
                />
                <p className="md:ml-4">{song.name}</p>
              </span>
            </span>
            <p className="">{albumData.name}</p>
            <p className="hidden sm:block">{new Date().toLocaleDateString()}</p>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AlbumInfo;

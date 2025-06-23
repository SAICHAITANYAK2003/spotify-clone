import { useContext } from "react";
import { songsData } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

const BiggestHits = () => {
  const { playwithId } = useContext(PlayerContext);
  return (
    <>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">Today's Biggest Hits</h1>
        <div className="mt-5 flex items-center gap-5 overflow-x-auto py-2">
          {songsData.map((eachAlbum) => (
            <div
              onClick={() => playwithId(eachAlbum.id)}
              key={eachAlbum.id}
              className="min-w-[180px] cursor-pointer hover:bg-[#242424] p-3 rounded-2xl"
            >
              <img
                src={eachAlbum.image}
                alt="album-image"
                className="rounded-2xl"
              />
              <p className="text-[18px] font-semibold pt-2">{eachAlbum.name}</p>
              <p className="pt-2 text-gray-400">{eachAlbum.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BiggestHits;

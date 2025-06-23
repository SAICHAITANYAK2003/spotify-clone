import { albumsData } from "../assets/assets";
import AlbumCard from "./AlbumCard";

const FeaturedCharts = () => {
  return (
    <>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">Featured Charts</h1>
        <div className="mt-5 flex items-center gap-5 overflow-x-auto py-2">
          {albumsData.map((eachAlbum) => (
            <AlbumCard
              image={eachAlbum.image}
              desc={eachAlbum.desc}
              name={eachAlbum.name}
              id={eachAlbum.id}
              key={eachAlbum.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCharts;

import { useNavigate } from "react-router-dom";

const AlbumCard = ({ image, desc, name, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/album/${id}`)}
        key={id}
        className="min-w-[180px] cursor-pointer hover:bg-[#242424] p-3 rounded-2xl"
      >
        <img src={image} alt="album-image" className="rounded-2xl" />
        <p className="text-[18px] font-semibold pt-2">{name}</p>
        <p className="pt-2 text-gray-400">{desc}</p>
      </div>
    </>
  );
};

export default AlbumCard;

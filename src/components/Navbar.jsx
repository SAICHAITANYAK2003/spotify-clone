import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex justify-between font-semibold text-white">
        <div className="flex items-center gap-3">
          <img
            className="w-9 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_left}
            alt=""
            onClick={() => navigate(-1)}
          />
          <img
            className="w-9 p-2 bg-black rounded-full cursor-pointer"
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(1)}
          />
        </div>

        <div className="flex items-center gap-3">
          <p className="bg-white text-black px-3 py-1.5 rounded-3xl cursor-pointer hidden md:block ">
            Explore Premium
          </p>
          <p className="bg-blue-500 text-white px-3 py-1.5 rounded-3xl cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-300 w-10 h-10 text-black  rounded-full cursor-pointer flex items-center justify-center">
            G
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-white bg-black px-4 py-2 hover:text-black hover:bg-white rounded-2xl cursor-pointer">
          All
        </p>
        <p className="text-white bg-black px-4 py-2 hover:text-black hover:bg-white rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="text-white bg-black px-4 py-2 hover:text-black hover:bg-white rounded-2xl cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;

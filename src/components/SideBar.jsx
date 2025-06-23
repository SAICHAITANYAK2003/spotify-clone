import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[25%] gap-3  text-white  p-2 hidden lg:flex flex-col">
        <div className="flex flex-col w-full  gap-3 justify-around h-[15%]  ">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer bg-[#111111] h-13 px-3 rounded-md"
          >
            <img src={assets.home_icon} alt="home-icon" className="w-6" />
            <p className="font-semibold">Home</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer bg-[#111111] h-13 px-3 rounded-md">
            <img src={assets.search_icon} alt="search-icon" className="w-6" />
            <p className="font-semibold">Search</p>
          </div>
        </div>

        <div className="flex flex-col gap-3  bg-[#111111] p-2.5 h-full  rounded-md">
          {/* ---------------Library and buttons--------------------- */}
          <div className="flex flex-row justify-between">
            <div className="flex items-center gap-3 cursor-pointer  h-13 px-3 rounded-md">
              <img src={assets.stack_icon} alt="stack-icon" className="w-6" />
              <h2>Library</h2>
            </div>
            <div className="flex items-center gap-5">
              <img
                src={assets.arrow_right}
                alt="arrow-icon"
                className="w-6 h-6 cursor-pointer "
              />
              <img
                src={assets.plus_icon}
                alt="plus-icon"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
            {/* ---------Library - Cards ------ */}
          </div>
          <div className="bg-[#242424] p-3 rounded-md flex flex-col items-start gap-3">
            <h2>Create your first playlist</h2>
            <p className="text-[#c7c7c7] text-[14px]">
              It's easy we'll help you
            </p>
            <button className="px-2 py-1 bg-white text-black border-none outline-none rounded-md cursor-pointer">
              Create playlist
            </button>
          </div>
          <div className="bg-[#242424] p-3 rounded-md flex flex-col items-start gap-3">
            <h2>Let's find some podcasts to follow</h2>
            <p className="text-[#c7c7c7] text-[14px]">
              We'll keep you updated on new episodes
            </p>
            <button className="px-2 py-1 bg-white text-black border-none outline-none rounded-md cursor-pointer">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

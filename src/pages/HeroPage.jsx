import { Route, Routes, useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AlbumInfo from "../components/AlbumInfo";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const HeroPage = () => {
  const heroRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;
  console.log(bgColor);

  useEffect(() => {
    if (isAlbum) {
      heroRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      heroRef.current.style.background = `#121212`;
    }
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="w-[100%] m-2 px-6 pt-4 rounded-md text-white overflow-auto  bg-[#111111] lg:w-[90%]"
      >
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/album/:id" element={<AlbumInfo />} />
        </Routes>
      </div>
    </>
  );
  ``;
};

export default HeroPage;

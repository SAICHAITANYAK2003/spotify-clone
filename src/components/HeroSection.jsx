import Navbar from "./Navbar";
import FeaturedCharts from "./FeaturedCharts";
import BiggestHits from "./BiggestHits";

const HeroSection = () => {
  return (
    <>
      <div>
        <Navbar />
        <FeaturedCharts />
        <BiggestHits />
      </div>
    </>
  );
};

export default HeroSection;

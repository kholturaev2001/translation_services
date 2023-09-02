import { Outlet } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import YandexMap from "./YandexMap";

const Services = () => {
  return (
    <div className="">
      <div className="md:max-w-[1280px] m-auto">
        <Outlet />
        <YandexMap />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Services;

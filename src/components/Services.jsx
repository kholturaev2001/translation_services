import { Outlet } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import YandexMap from "./YandexMap";
import { consultModalAC } from "../app/slices/app";
import { useDispatch } from "react-redux";

const Services = () => {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(consultModalAC(true));
  };
  return (
    <div className="">
      <div className="md:max-w-[1280px] m-auto">
        <Outlet />
        <div className="w-full flex justify-center">
          <button
            onClick={showModal}
            className="my-2  border-2 rounded-3xl border-[#33a3ed] duration-500 ease-in-out  text-center md:py-3 py-2 px-6  hover:bg-[#33a3ed] bg-gray-100 hover:text-white font-semibold text-[#33a3ed] md:text-base text-sm"
          >
            Заказать услугу
          </button>
        </div>
        <YandexMap />
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Services;

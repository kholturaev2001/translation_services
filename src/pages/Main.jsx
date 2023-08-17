import { useState, useEffect, useRef } from "react";

import img1 from "../assets/images/main_bg/exp1.jpg";
import img2 from "../assets/images/main_bg/exp2.jpg";
import img3 from "../assets/images/main_bg/exp3.jpg";
import img4 from "../assets/images/main_bg/exp4.jpg";
import img5 from "../assets/images/main_bg/exp5.jpg";
import img6 from "../assets/images/main_bg/exp6.jpg";
import ScrollDown from "../components/ScrollDown/ScrollDown";
import Carousel from "../components/Carousel";
import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer";

const data = [
  {
    image: img6,
    title: "Строим мечты, творим будущее!",
  },
  {
    image: img2,
    title: "Качество, которому можно доверить свой дом!",
  },
  {
    image: img3,
    title: "Партнерство в каждой стадии строительства!",
  },
  {
    image: img4,
    title: "Строим не просто дома, а истории успеха!",
  },
  {
    image: img5,
    title: "Инновации в каждом доме, забота в каждом проекте!",
  },
];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 6000);
  };

  return (
    <>
      <div className="w-full h-screen overflow-hidden absolute top-0 -z-10  ">
        {data.map((el, index) => (
          <div
            key={index}
            className={`flex flex-col opacity-0 transition-opacity duration-[3000ms] ease-in-out  ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          >
            <img
              src={el.image}
              alt={`Main Image ${index}`}
              className={`w-full h-full object-cover absolute`}
            />
            <div className="md:max-w-[1280px] mx-auto w-screen left-0 right-0 m-auto absolute">
              <div className="relative h-screen flex items-center md:px-0 px-3">
                <div className="relative h-[400px] flex flex-col justify-center md:items-center items-start md:w-[700px] gap-2">
                  <h1 className="text-[#24201F]  md:text-[48px] text-[24px] md:w-[500px] w-[70vw] md:font-medium font-semibold z-10 text-center leading-9 md:leading-snug">
                    {el.title}
                  </h1>
                  <div className="shadow absolute top-0 rounded-full text-[48px] w-full h-[400px] "></div>
                </div>
              </div>
              <div className="relative bottom-[-70px]">
                <ScrollDown />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" left-0 right-0 absolute top-[100vh] flex flex-col align-center gap-[100px] ">
        <div className="mx-auto w-full flex flex-col gap-10">
          <Carousel />
          <Advantages />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;

import { useState, useEffect, useRef } from "react";

import img1 from "../../assets/images/bg_1.png";
import img2 from "../../assets/images/bg_2.png";
import img3 from "../../assets/images/bg_3.png";
import img4 from "../../assets/images/bg_4.png";
import img5 from "../../assets/images/bg_5.png";

const data = [
  {
    image: img1,
    title: "Строим мечты, творим будущее 1",
  },
  {
    image: img2,
    title: "Строим мечты, творим будущее 2",
  },
  {
    image: img3,
    title: "Строим мечты, творим будущее 3",
  },
  {
    image: img4,
    title: "Строим мечты, творим будущее 4",
  },
  {
    image: img5,
    title: "Строим мечты, творим будущее 5",
  },
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(
    "🚀 ~ file: Carousel.jsx:40 ~ Carousel ~ currentImageIndex:",
    currentImageIndex
  );
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
    }, 2000);
  };

  return (
    <div className="w-screen h-screen overflow-hidden absolute top-0 -z-10 m-auto ">
      {data.map((el, index) => (
        <div
          key={index}
          className={`flex flex-col opacity-0 transition-opacity duration-[3000ms] ease-in-out  ${
            index === currentImageIndex ? "opacity-100" : ""
          }`}
        >
          <img
            src={el.image}
            alt={`Carousel Image ${index}`}
            className={`w-full h-full object-cover absolute`}
          />
          <div className="container">
            <h1 className="text-[#24201F] absolute z-10 top-[40%] text-[48px] w-[500px] font-medium">
              {el.title}
            </h1>
            <button>Бесплатная консультация</button>
            <div className="shadow rounded-full absolute top-[25%] text-[48px] w-[700px] h-[400px] -ml-[100px]"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;

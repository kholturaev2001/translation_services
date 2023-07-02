import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

import img1 from "../../assets/images/image 1.jpg";
import img2 from "../../assets/images/image 2.jpg";
import img3 from "../../assets/images/image 3.jpg";
import img4 from "../../assets/images/image 4.jpg";

import ChavronLeft from "../../assets/icons/ChavronLeft";
import ChavronRight from "../../assets/icons/ChavronRight";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];
  const intervalRef = useRef();

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const handleButtonSelect = (index) => {
    setCurrentImageIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  return (
    <div className="w-[700px] h-[400px] overflow-hidden relative m-auto ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index}`}
          className={`w-full h-full object-cover absolute opacity-0 transition-opacity duration-1000 ease-in-out  ${
            index === currentImageIndex ? "opacity-100" : ""
          }`}
        />
      ))}
      <div className="absolute top-1/2 w-full flex justify-between  left_right px-3">
        <button
          className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f1f1f1]"
          onClick={handlePrevClick}
        >
          <ChavronLeft />
        </button>
        <button
          className="flex justify-center items-center rounded-full w-[35px] h-[35px] bg-[#f1f1f1]"
          onClick={handleNextClick}
        >
          <ChavronRight />
        </button>
      </div>
      <div className="absolute bottom-5 bg-[#3a3330] w-full flex justify-center items-center gap-6 ">
        {images.map((_, id) => {
          if (currentImageIndex === id) {
            return (
              <button
                key={id}
                className="w-[15px] h-[15px] bg-white rounded-full transition-bg duration-300 ease-in-out "
                onClick={() => handleButtonSelect(id)}
              ></button>
            );
          } else {
            return (
              <button
                className="p-[5px] text-white font-bold bg-transparent "
                key={id}
                onClick={() => handleButtonSelect(id)}
              >
                {id + 1}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;

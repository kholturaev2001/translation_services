import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

import img1 from "../../assets/images/bg_1.png";
import img2 from "../../assets/images/bg_2.png";
import img3 from "../../assets/images/bg_3.png";
import img4 from "../../assets/images/bg_4.png";
import img5 from "../../assets/images/bg_5.png";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5];
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
    }, 6000);
  };

  return (
    <div className="w-[700px] h-[400px] overflow-hidden relative m-auto ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index}`}
          className={`w-full h-full object-cover absolute opacity-0 transition-opacity duration-[3000ms] ease-in-out  ${
            index === currentImageIndex ? "opacity-100" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;

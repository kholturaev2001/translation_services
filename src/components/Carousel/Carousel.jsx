import { useState, useEffect, useRef } from "react";
import "./Carousel.css";

import img1 from "../Slider/images/image 1.jpg";
import img2 from "../Slider/images/image 2.jpg";
import img3 from "../Slider/images/image 3.jpg";
import img4 from "../Slider/images/image 4.jpg";

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
    <div className="carousel_container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className={`carousel-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
        <div className="left_right">
          <button onClick={handlePrevClick}>
            <ChavronLeft />
          </button>
          <button onClick={handleNextClick}>
            <ChavronRight />
          </button>
        </div>
      </div>
      <div className="buttons">
        {images.map((_, id) => (
          <button
            key={id}
            style={{ background: currentImageIndex === id ? "red" : "" }}
            onClick={() => handleButtonSelect(id)}
          >
            {id + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

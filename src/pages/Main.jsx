import { useState, useEffect, useRef } from "react";

import img1 from "../assets/images/bg_1.png";
import img2 from "../assets/images/bg_2.png";
import img3 from "../assets/images/bg_3.png";
import img4 from "../assets/images/bg_4.png";
import img5 from "../assets/images/bg_5.png";
import ScrollDown from "../components/ScrollDown/ScrollDown";
import PhoneIcon from "../assets/icons/PhoneIcon";
import EmailIcon from "../assets/icons/EmailIcon";
import Carousel from "../components/Carousel";
import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer";
import { Modal } from "antd";
import Consultation from "../components/Consultation/Consultation";

const data = [
  {
    image: img1,
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    }, 60000000);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
            <div className="md:container w-screen left-0 right-0 m-auto absolute">
              <div className="relative h-screen flex items-center md:px-0 px-3">
                <div className="relative h-[400px] flex flex-col justify-center md:items-center items-start md:w-[700px] gap-2">
                  <h1 className="text-[#24201F]  md:text-[48px] text-[28px] md:w-[500px] w-[70vw] md:font-medium font-semibold z-10 md:text-center leading-9 md:leading-snug">
                    {el.title}
                  </h1>
                  <button
                    onClick={showModal}
                    className="md:w-[320px] w-[185px] md:h-[50px] h-[30px]  bg-[#4D4948] font-medium text-white  md:text-base text-[10px] md:rounded-xl rounded-[5px] z-10 "
                  >
                    Бесплатная консультация
                  </button>
                  <div className="shadow absolute top-0 rounded-full text-[48px] w-full h-[400px] "></div>
                </div>
                <div className="items-center flex md:w-full md:h-full justify-end w-[40vw]">
                  <div className="gap-[200px] flex-col items-center flex md:text-md text-sm">
                    <a
                      href="mailto:addres@probuild.com"
                      className="flex p-1 gap-4 font-medium -rotate-90"
                    >
                      <div className="rotate-90">
                        <EmailIcon />
                      </div>
                      <p>addres@probuild.com</p>
                    </a>
                    <a
                      href="tel:+79224583465"
                      className="flex p-1 gap-4 font-medium -rotate-90"
                    >
                      <div className="rotate-90">
                        <PhoneIcon />
                      </div>
                      <p>+79224583465</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative bottom-[-70px]">
                <ScrollDown />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* THIS PART IS COMMENTED IN ORDER TO MAKE A RESPOSIVE DESIGN */}

      {/* <div className=" left-0 right-0 absolute top-[100vh] flex flex-col align-center gap-[100px]">
        <div className="container flex flex-col gap-10">
          <Carousel />
          <Advantages />
        </div>
        <Footer />
      </div> */}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="w-[80vw] max-w-[1440px]"
      >
        <Consultation />
      </Modal>
    </>
  );
};

export default Main;

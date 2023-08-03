import { useState } from "react";

import img1 from "../assets/images/service1.png";
import img2 from "../assets/images/service2.png";
import img3 from "../assets/images/service3.png";
import Card from "./Card/Card";
import BackBtn from "./BackBtn";

const data = [
  {
    img: img1,
    title: "Название услуги 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img2,
    title: "Название услуги 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img3,
    title: "Название услуги 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img1,
    title: "Название услуги 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img2,
    title: "Название услуги 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img3,
    title: "Название услуги 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img2,
    title: "Название услуги 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    img: img3,
    title: "Название услуги 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
];

const Services = () => {
  const [currentService, setCurrentService] = useState("all");

  function handleSelectService(el) {
    setCurrentService(el);
  }

  const serviceContent =
    currentService === "all" ? (
      <div className="flex flex-wrap md:gap-7 gap-4 justify-center">
        {data.map((elem, id) => (
          <Card
            img={elem.img}
            key={id}
            title={elem.title}
            elem={elem}
            onClick={() => handleSelectService(elem)}
          />
        ))}
      </div>
    ) : (
      <div className="flex flex-col gap-12">
        <BackBtn onClick={() => setCurrentService("all")}>
          Назад ко всем услугам
        </BackBtn>
        <div className="md:flex-row flex flex-col-reverse md:gap-[70px] gap-8 w-full">
          <div className="md:w-[60%] flex flex-col ">
            <p className="md:text-[35px] text-[28px] font-semibold my-4 md:text-start text-center">
              {currentService.title}
            </p>
            <p className="md:text-base text-sm md:text-start text-justify">{currentService.description}</p>
          </div>
          <img src={currentService.img} alt="icon" className="object-cover" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col md:gap-10 gap-4 md:mt-[100px] mt-[40px]">
      <h2 className="md:text-[30px] text-[28px] font-semibold md:text-start text-center">Наши Услуги</h2>
      {serviceContent}
    </div>
  );
};

export default Services;

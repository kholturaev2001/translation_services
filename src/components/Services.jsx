import { useState } from "react";

import img1 from "../assets/images/service1.png";
import img2 from "../assets/images/service2.png";
import img3 from "../assets/images/service3.png";
import Card from "./Card/Card";

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
  console.log(
    "🚀 ~ file: Services.jsx:61 ~ Services ~ currentService:",
    currentService
  );

  function handleSelectService(el) {
    setCurrentService(el);
  }

  const serviceContent =
    currentService === "all" ? (
      <div className="flex flex-wrap gap-7">
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
        <button
          className="w-[300px] border-2 border-[#EF6F2E] duration-500 ease-in-out text-base font-medium text-center py-3 hover:bg-[#EF6F2E] hover:text-white rounded-lg"
          onClick={() => setCurrentService("all")}
        >
          Назад ко всем услугам
        </button>
        <div className="flex gap gap-[70px] w-full">
          <div className="w-[60%] flex flex-col">
            <p className="text-[35px] font-semibold my-4">
              {currentService.title}
            </p>
            <p className="">{currentService.description}</p>
          </div>
          <img src={currentService.img} alt="icon" className="object-cover" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-10 mt-[100px]">
      <h2 className="text-[30px] font-semibold">Наши Услуги</h2>

      {serviceContent}
    </div>
  );
};

export default Services;

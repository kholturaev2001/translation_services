import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house5 from "../assets/images/house5.jpg";
import house6 from "../assets/images/bg_2.png";
import house7 from "../assets/images/bg_3.png";
import house8 from "../assets/images/house6.png";
import house9 from "../assets/images/house7.png";
import house10 from "../assets/images/house8.png";
import { useState } from "react";
import Card from "../components/Card/Card";
import BackBtn from "../components/BackBtn";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const data = [
  {
    swiperImages: [house1, house2, house3, house5, house6, house7], // ADD AT LEAST 3 IMAGES
    title: "Название проекта 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house3, house4, house5, house6, house7, house1, house2],
    title: "Название проекта 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house10, house6, house7, house1, house2, house3, house4],
    title: "Название проекта 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [
      house5,
      house6,
      house7,
      house1,
      house2,
      house3,
      house4,
      house8,
    ],
    title: "Название проекта 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house9, house8, house5, house6, house7, house1, house2],
    title: "Название проекта 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house1, house8, house5, house6, house7, house2],
    title: "Название проекта 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house2, house8, house5, house6, house7],
    title: "Название проекта 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
  {
    swiperImages: [house7, house1, house2, house3, house4, house8],
    title: "Название проекта 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum. \n Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa illum amet asperiores, voluptate quam omnis, delectus consequatur cupiditate optio deserunt vitae tempore? Autem laudantium delectus facilis consequatur nulla voluptatum.",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState("all");

  function handleSelectService(el) {
    setCurrentProject(el);
  }
  const serviceContent =
    currentProject === "all" ? (
      <div className="flex flex-wrap md:gap-7 gap-4 justify-center">
        {data.map((elem, id) => (
          <Card
            img={elem.swiperImages[0]}
            key={id}
            title={elem.title}
            elem={elem}
            onClick={() => handleSelectService(elem)}
          />
        ))}
      </div>
    ) : (
      <div className="flex flex-col gap-12">
        <BackBtn onClick={() => setCurrentProject("all")}>
          Назад ко всем проектам
        </BackBtn>
        <div className="flex flex-col">
          <Carousel data={currentProject.swiperImages} />
          <p className="md:text-[35px] text-[24px] font-semibold my-4">
            {currentProject.title}
          </p>
          <p className="md:text-base text-sm md:text-start text-justify">{currentProject.description}</p>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col md:text-start text-center">
      <div className="flex flex-col gap-10 mt-[50px] md:max-w-[1280px] md:mx-auto mx-3">
        <h2 className="md:text-[35px] text-[24px] font-semibold md:text-start text-center">Наши Проекты</h2>
        {serviceContent}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

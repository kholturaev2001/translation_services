import { useState, useEffect, useRef } from "react";

import img7 from "../assets/images/main_bg/exp7.jpeg";
import img2 from "../assets/images/main_bg/exp2.jpg";
import img3 from "../assets/images/main_bg/exp3.jpg";
import img4 from "../assets/images/main_bg/exp4.jpg";
import img5 from "../assets/images/main_bg/exp5.jpg";
import img6 from "../assets/images/main_bg/exp6.jpg";
import ScrollDown from "../components/ScrollDown/ScrollDown";
import Carousel from "../components/Carousel";
import Advantages from "../components/Advantages/Advantages";
import Footer from "../components/Footer";
import YandexMap from "../components/YandexMap";
import Description from "../components/Typography/Description";
import Title from "../components/Typography/Title";
import Title2 from "../components/Typography/Title2";
import LiColored from "../components/Typography/LiColored";
import Ul from "./../components/Typography/Ul";

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
  {
    image: img7,
    title: "Партнерство в каждой стадии строительства!",
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
          <div className="my-3">
            <Title>О нас</Title>
            <Description>
              <b> ООО АИС «ПЕРЕВОДЧИК» </b>на постоянной основе осуществляет
              взаимодействие с представителями следственных органов МВД РФ, ФСБ
              РФ, СК РФ, а также судебных органов на предмет проведения судебных
              экспертиз.
            </Description>
            <Description>
              С 2018 года ООО АИС «Переводчик» привлечены эксперты, имеющие
              значительный опыт в производстве судебных экспертиз, в том числе
              строительно-технических, пожарно-технических, судебно-медицинских,
              оценочных, товароведческих и иных востребованных видов
              исследований для сотрудников правоохранительных органов. При этом,
              срок производства судебных экспертиз не превышает 7 суток, что
              позволяет проводить предварительное расследование и дознание по
              уголовным делам в разумные сроки.
            </Description>
            <Description>
              Анализируя практику взаимодействия с представителями
              правоохранительных органов указанных учреждений, установлено, что
              следователи в процессе расследования уголовных дел сталкиваются с
              проблемой оценки имущества подозреваемых (обвиняемых) с целью
              наложения ареста.
            </Description>
            <Description>
              Вместе с тем, ООО АИС «Переводчик» проводит оценочное исследование
              на предмет установления стоимости имущества подозреваемых
              (обвиняемых), не связанное с производством судебной экспертизы,
              что учитывается судом при решении вопроса о разрешении наложения
              ареста на имущество.
            </Description>
            <Title2> Вы можете доверить нам решение ваших задач!</Title2>
            <LiColored>10 лет - средний стаж наших оценщиков.</LiColored>
            <LiColored>
              Все оценщики компании состоят в крупнейших профессиональных
              ассоциациях (СРО).
            </LiColored>
            <LiColored>
              15 000 000 руб. - сумма возмещения по персональным страховым
              полисам оценщиков.
            </LiColored>
            <LiColored>
              Система менеджмента качества сертифицирована по ISO 9001-2015.
            </LiColored>
            <LiColored>
              Лицензия ФСБ позволяет работать со сведениями, составляющими
              государственную тайну.
            </LiColored>
          </div>
          <div className="">
            <Title2>Принципы работы</Title2>
            <Ul>
              <li>
                <b> Легитимность.</b> Работаем в полном соответствии с
                требованиями законодательства, постоянно отслеживая его
                изменения. Составляем отчеты об оценке согласно Закону об
                оценочной деятельности и Федеральным стандартам оценки.
              </li>
              <li>
                <b> Комплексный подход.</b> Решаем сложные и разноплановые
                задачи, подключая все ресурсы для достижения целей клиента.
              </li>
              <li>
                <b> Гарантия качества.</b> Контролируем выполнение работ на
                каждом этапе. Защищаем результаты в судах, комиссиях,
                инспекциях, перед проверяющими или акционерами.
              </li>
              <li>
                <b> Соблюдение сроков.</b> Ценим время и доверие наших клиентов,
                поэтому строго соблюдаем согласованные сроки проведения работ.
              </li>
              <li>
                <b> Прогнозируемый итог.</b> Бесплатно делаем предварительный
                расчет стоимости объектов и работ на начальном этапе.
              </li>
              <li>
                <b> Справедливые цены.</b> Экономический эффект от
                сотрудничества для клиента всегда значительно превосходит
                стоимость реализованных нами решений.
              </li>
            </Ul>
          </div>

          <Carousel />
          <Advantages />
          <YandexMap />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;

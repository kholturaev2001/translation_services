import about_img from "../assets/images/about_img.png";
import Footer from "../components/Footer";
import Services from "../components/Services";

const About = () => {
  return (
    <>
      <div className="md:container md:px-0 px-3 flex flex-col">
        <div className=" flex min-h-[400px] items-center md:flex-row flex-col">
          <div className="relative flex items-center">
            <div className="flex items-center gap-4 transform md:-rotate-90 md:p-0 p-3">
              <span className="border-[1px] w-[100px]  "></span>
              <p className="md:text-2xl text-base text-[#cececd] font-semibold whitespace-nowrap">
                О Нас
              </p>
            </div>
          </div>
          <div className="flex md:gap-[40px] gap-[20px] md:flex-row flex-col items-center">
            <img
              src={about_img}
              alt="image"
              className="w-[390px] object-cover"
            />
            <div className="flex justify-center flex-col md:text-start text-justify">
              <h2 className="md:text-[32px] text-[28px] font-semibold md:text-start text-center">О компании</h2>
              <div className="flex flex-col gap-[20px] md:text-base text-sm ">
                <p className="">
                  Строительная компания Pro.Build — ваш надежный партнер в
                  создании уникальных пространств, где реализуются мечты. Мы с
                  гордостью смотрим на десятилетия опыта и творческого подхода,
                  которые мы прилагаем в каждый проект.
                </p>
                <p className="">
                  Наши основные ценности — качество, надежность и инновации. Мы
                  стремимся к совершенству в каждой детали, поэтому используем
                  только самые передовые технологии и материалы, гарантирующие
                  долговечность и функциональность наших строений.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default About;

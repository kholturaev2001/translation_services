import about_img from "../assets/images/about_img.png";
import Footer from "../components/Footer";
import Services from "../components/Services";

const About = () => {
  return (
    <>
      <div className="container flex flex-col">
        <div className=" flex h-[400px] items-center">
          <div className="relative flex items-center">
            <div className="flex items-center gap-4 transform -rotate-90 ">
              <span className="border-[1px] border-] w-[100px] "></span>
              <p className="text-2xl text-[#cececd] font-semibold whitespace-nowrap">
                О Нас
              </p>
            </div>
          </div>
          <div className="flex gap-[40px]">
            <img
              src={about_img}
              alt="image"
              className="w-[390px] object-cover"
            />
            <div className="flex justify-center flex-col">
              <h2 className="text-[35px] font-semibold">О компании</h2>
              <div className="flex flex-col gap-[20px]">
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

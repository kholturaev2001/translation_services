import { useEffect, useState } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import partner1 from "../assets/images/partners/Russia_MFA_emblem.png";
import partner2 from "../assets/images/partners/Investigative_Committee_Russia_Emblem.png";
import partner3 from "../assets/images/partners/fsb.jpg";
import partner4 from "../assets/images/partners/judical_department.png";
import partner5 from "../assets/images/partners/moscow_metropolitan.png";
import partner6 from "../assets/images/partners/Prosecutor_General_of_Russia.png";

const partners = [
  {
    img: partner1,
    title: "Министерство внутренних дел РФ",
  },
  {
    img: partner2,
    title: "Следственный коммитет РФ",
    scale: "scale-75",
  },
  {
    img: partner3,
    title: "Федеральная служба безопасности",
    scale: "scale-125",
  },
  {
    img: partner4,
    title: "Судебный департамент г. Москвы и МО",
    scale: "scale-75",
  },
  {
    img: partner5,
    title: "Прокуратура Московского метрополитена",
    scale: "scale-50",
  },
  {
    img: partner6,
    title: "Прокуратура г. Москвы",
    scale: 'scale-75',
  },
];

export default function Carousel({ data = partners }) {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slidesGap, setSlidesGap] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSlidesPerView(3);
        setSlidesGap(30);
      } else {
        setSlidesPerView(2);
        setSlidesGap(5);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:w-[900px] max-w-[95%]   mx-auto mb-4 mt-8">
      <p className="text-center md:text-2xl text-[24px] font-medium py-3">
        Наши Партнеры
      </p>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={slidesGap}
        slidesPerView={slidesPerView}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((el, id) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center justify-center shadow-xl overflow-hidden">
              <img
                className={`${
                  el.scale ? el.scale : "scale-100"
                } md:h-[330px] h-[200px] object-contain`}
                src={el.img}
                alt=""
              />
              <p className="text-[#33a3ed] text-center h-[120px] font-bold px-5 text-lg">
                {el.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

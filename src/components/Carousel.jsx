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

import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpg";
import house5 from "../assets/images/house5.jpg";
import house6 from "../assets/images/bg_2.png";
import house7 from "../assets/images/bg_3.png";

const houses = [house1, house2, house3, house4, house5, house6, house7];

export default function Carousel({data = houses}) {
  return (
    <div className="max-w-[900px] mx-auto mb-4 mt-8 ">
      <p className="text-center text-2xl font-medium py-3">Наши Работы</p>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((el, id) => (
          <SwiperSlide key={id}>
            <img className="h-[400px] object-cover" src={el} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

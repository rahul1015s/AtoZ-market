// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import fashion from '../assets/heroFashion.png';
import heroBags from "../assets/hero-bags.png";
import heroJwellery from "../assets/hero-jwellery.png";
import manFashion from "../assets/hero-m-fashion.png"
import mobiles from "../assets/hero-mobiles.png"
import shoes from "../assets/hero-shoes.png"
import watches from "../assets/hero-watches.png"



const HeroImgs = [
  {
    id: 1,
    name: "Fashions",
    img: fashion,
    url: "",
  },
  {
    id: 2,
    name: "heroBags",
    img: heroBags,
    url: "",
  },
  {
    id: 3,
    name: "heroJwellery",
    img: heroJwellery,
    url: "",
  },
  {
    id: 4,
    name: "Men Fashiopn",
    img: manFashion,
    url: ""
  },
  {
    id: 5,
    name: "Mobiles",
    img: mobiles,
    url: ""
  },
  {
    id: 6,
    name: "Shoes",
    img: shoes,
    url: ""
  },
  {
    id: 6,
    name: "Watches",
    img: watches,
    url: ""
  },

];

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      //navigation
      pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500, //2.5 seconds between slides
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {HeroImgs.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt={item.name} 
           className="w-full h-[200px] sm:h-[250px] md:h-[520px] object-cover rounded-xl"/>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

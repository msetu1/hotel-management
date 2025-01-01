// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import SubGallery1 from "./SubGallery1";
import SubGallery2 from "./SubGallery2";
import SubGallery3 from "./SubGallery3";
import SubGallery4 from "./SubGallery4";

export default function Gallery() {
  return (
    <div className="pt-[135px] mb-20">
      <div className="flex items-center gap-10">
        <div className="mx-10 w-[75%]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slide2 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide1 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide3 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide4 />
            </SwiperSlide>
            <SwiperSlide>
              <Slide5 />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[25%]"></div>
      </div>

      <div className="mx-10 mt-16">
        <SubGallery1 />
        <SubGallery2 />
        <SubGallery3 />
        <SubGallery4 />
      </div>
    </div>
  );
}

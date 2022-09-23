import React from "react";
import styles from "./Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.mySwiper}>
        <SwiperSlide>
          <img
            src="https://fptshop.com.vn/Uploads/Originals/2022/9/19/637991957822826217_190922_ip14-01.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fptshop.com.vn/Uploads/Originals/2022/9/19/637991958399093314_190922_ip14-02.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fptshop.com.vn/Uploads/Originals/2022/9/19/637991957822826217_190922_ip14-01.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

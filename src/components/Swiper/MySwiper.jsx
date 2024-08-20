import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./MySwiper.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function MySwiper() {
  return (
    <>
      <div id="swiper">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/public/certifications/chatgpt certification.png"
              alt="Slide 1"
              style={{ width: "100%", height: "auto", borderRadius: "18px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <embed
              src="/public/certifications/CertificateOfCompletion_Become-a-Programmer-Foundations.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ borderRadius: "18px" }}
            />
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

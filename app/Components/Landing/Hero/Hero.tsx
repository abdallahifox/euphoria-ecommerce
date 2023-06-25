"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";

function Hero() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        pagination={{ clickable: true }}
        allowSlideNext={true}
        allowSlidePrev={true}
        navigation={true}
        effect="fade"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="/Slide1.jpg"
              alt=""
              className="h-[85vh] w-full object-cover"
            />
            <div className="z-1 absolute left-0 top-0 h-full w-full bg-black/40" />
            <div className="appContainer z-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/4 md:top-1/4 md:translate-x-0  md:translate-y-0">
              <p className="mb-3 text-md text-white md:text-2xl">
                T-shirt / Tops
              </p>
              <h1 className="mb-3 text-2xl text-white md:text-4xl lg:text-6xl">
                Summer Value Pack
              </h1>
              <span className="mb-3 text-md text-white md:text-xl">
                Cool / Colorful / Comfy
              </span>
              <br />
              <button className="mt-10 rounded bg-light-gray px-4 py-2 text-black transition hover:bg-dark-gray hover:text-white">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="/Slide2.jpg"
              alt=""
              className="h-[85vh] w-full object-cover"
            />
            <div className="z-1 absolute left-0 top-0 h-full w-full bg-black/40" />
            <div className="appContainer z-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/4 md:top-1/4 md:translate-x-0  md:translate-y-0">
              <p className="mb-3 text-md text-white md:text-2xl">
                New Collections
              </p>
              <h1 className="mb-3 text-2xl text-white md:text-4xl lg:text-6xl">
                Summer Value Pack
              </h1>
              <span className="text-md text-white md:text-xl" role="button">
                What's New &gt;&gt;
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;

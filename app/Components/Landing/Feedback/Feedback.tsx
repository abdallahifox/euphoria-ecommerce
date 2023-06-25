"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

function Feedback() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Feedback
      </h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={50}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <img src="/Avatar1.png" alt="avatar-1" />
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </div>
            </div>
            <h1>Holy Moly</h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt, laboriosam nostrum incidunt iusto, pariatur soluta itaque iure doloribus temporibus rem illo numquam voluptates similique tempore ipsa quia dolorum mollitia!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <img src="/Avatar1.png" alt="avatar-1" />
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </div>
            </div>
            <h1>Abdallah Muhammed</h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt, laboriosam nostrum incidunt iusto, pariatur soluta itaque iure doloribus temporibus rem illo numquam voluptates similique tempore ipsa quia dolorum mollitia!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <img src="/Avatar2.png" alt="avatar-1" />
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </div>
            </div>
            <h1>Zeyad Hakim</h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt, laboriosam nostrum incidunt iusto, pariatur soluta itaque iure doloribus temporibus rem illo numquam voluptates similique tempore ipsa quia dolorum mollitia!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-row items-center justify-between">
              <img src="/Avatar3.png" alt="avatar-1" />
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  className="h-4 w-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </div>
            </div>
            <h1>Khames Kaka</h1>
            <p className="text-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt, laboriosam nostrum incidunt iusto, pariatur soluta itaque iure doloribus temporibus rem illo numquam voluptates similique tempore ipsa quia dolorum mollitia!</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Feedback;

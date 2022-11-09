import React from "react";
import "../styles/main.css";

const Venue = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-[13vw] font-bold text-center text-grey-secondary">
            VENUE
          </h1>
          <h1 className="text-white text-[5vw] font-bold text-center absolute top-[6vw] left-0 right-0 mx-auto">
            VENUE
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 py-10 lg:mx-28">
        <div className="col-span-3 rounded-xl items-center justify-center lg:px-0 px-10">
          <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div
              className="swiper-wrapper td-transform"
            >
              {/* images here for slider - can be looped */}
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev w-mr-30"
                data-swiper-slide-index="5"
              >
                <img
                  className="rounded-xl"
                  src="./DevFest Kolkata 2022_files/Slide 16_9 - 6.jpg"
                  width="100%"
                  alt="Taal Kutir Convention Centre"
                />
              </div>
              <div
                className="swiper-slide swiper-slide-duplicate-active w-mr-30"
                data-swiper-slide-index="0"
              >
                <img
                  className="rounded-xl"
                  src="./DevFest Kolkata 2022_files/Slide 16_9 - 4.jpg"
                  width="100%"
                  alt="Taal Kutir Convention Centre"
                />
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 items-center justify-center lg:mt-10 mt-5">
          <div className="flex items-center mb-10">
            <img
              src="./DevFest Kolkata 2022_files/marker--v1.png"
              className="lg:w-10 w-[6vw]"
            />
            <p className="text-white lg:text-2xl font-semibold pl-2">
              Taal Kutir Convention Centre, Kolkata
            </p>
          </div>
          {/* map here */}
          <iframe
            className="rounded-xl lg:w-full w-[80vw] lg:h-full h-[30vw] b0"
            src="./DevFest Kolkata 2022_files/embed.html"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Venue;

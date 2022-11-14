import React from "react";
import { ImgMarker } from "../images";
import "../styles/main.css";

const Venue = () => {
  const zeroBorder = {
    border: "0",
  };

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
            <div className="swiper-wrapper">
              {/* images here for slider - can be looped */}
              <div
                className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev w-mr-30"
                data-swiper-slide-index="5"
              >
                <img
                  className="rounded-xl"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Aiwan-e-Iqbal_Lahore.jpg"
                  width="100%"
                  alt="Aiwan-e-Iqbal Complex"
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
              src={ImgMarker}
              className="lg:w-10 w-[6vw]"
            />
            <p className="text-white lg:text-2xl font-semibold pl-2">
              Aiwan-e-Iqbal Complex, Egerton Rd, Garhi Shahu, Lahore
            </p>
          </div>
          {/* map here */}
          <iframe
            className="rounded-xl lg:w-full w-[80vw] lg:h-full h-[30vw]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.666151094016!2d74.32819431448402!3d31.560775552304904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b4b5bebb53%3A0x63df11461db81e7b!2sAiwan-e-Iqbal%20Complex!5e0!3m2!1sen!2s!4v1668409298097!5m2!1sen!2s"
            width="100%"
            height="300"
            frameBorder="0"
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Venue;

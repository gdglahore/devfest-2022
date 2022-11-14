import React from "react";
import { ImgExternalLink, ImgGoogleDevelopersLogo } from "../images";
import "../styles/main.css";

const Sponsor = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-[14vw] font-bold text-center text-grey-secondary">
          SPONSORS
        </h1>
        <h1 className="text-white text-[5vw] font-bold text-center absolute top-[6.5vw] left-0 right-0 mx-auto">
          SPONSORS
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pb-10">
        <a href="mailto:partners@gdglahore.com" target="_blank">
          <button className="bg-gold-secondary text-white lg:font-bold lg:py-4 py-2 lg:px-6 px-2 lg:-mt-4 mt-0 rounded-full">
            <p className="lg:text-base md:text-xs text-xs">Become a Sponsor</p>
          </button>
        </a>
        <a href="#" target="_blank">
          <div className="flex pl-6 inline-block">
            <p className="flex text-white mt-4 lg:text-base font-bold text-xs">
              Our Offerings &nbsp;
              <img src={ImgExternalLink} className="w-1/6 -mt-1" />
            </p>
          </div>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center pb-14 gap-3">
        <p className="text-gold-secondary lg:text-3xl md:text-lg">
          Diamond Sponsor
        </p>
        <img src={ImgGoogleDevelopersLogo} className="lg:w-1/5 w-1/3" />
      </div>
      <div className="flex flex-col items-center justify-center pb-14 gap-3">
        <p className="text-grey-primary lg:text-2xl md:text-lg">
          Silver Sponsor
        </p>
        <img
          src={ImgGoogleDevelopersLogo}
          className="lg:w-1/5 w-1/3 rounded-lg"
        />
      </div>
    </>
  );
};

export default Sponsor;

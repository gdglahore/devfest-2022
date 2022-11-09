import React from "react";
import { WebpBMCLogo, WebpGoogleLogo, WebpJetbrains } from "../images";
import "../styles/main.css";

const Partner = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-[14vw] font-bold text-center text-grey-secondary">
          PARTNERS
        </h1>
        <h1 className="text-white text-[5vw] font-bold text-center absolute top-[6.5vw] left-0 right-0 mx-auto">
          PARTNERS
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 content-start px-[10vw]">
        {/* can be set in loop */}
        <div className="flex flex-col items-center pb-14 gap-3">
          <a
            href="https://www.jetbrains.com/"
            className="flex items-center justify-center"
          >
            <img src={WebpJetbrains} className="lg:w-[15vw] w-1/3 rounded-lg" />
          </a>
        </div>
        <div className="flex flex-col items-center pb-14 gap-3">
          <a
            href="https://google.com"
            className="flex items-center justify-center"
          >
            <img
              src={WebpGoogleLogo}
              className="lg:w-[20vw] w-1/3 rounded-lg"
            />
          </a>
        </div>
        <div className="flex flex-col items-center pb-20 gap-3">
          <a
            href="https://bizmanagement.pk/"
            className="flex items-center justify-center"
          >
            <img
              src={WebpBMCLogo}
              className="lg:w-[20vw] w-1/3 rounded-lg"
              title="Biz Management"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Partner;

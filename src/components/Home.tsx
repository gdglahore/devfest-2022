import React from "react";
import { IconGdgLogo, IconDevfestH, ImgHero } from "../images/index";
import "../styles/main.css";

const Home = () => {
  return (
    <div id="home">
      <div className="md:container-md lg-1:container-lg md:flex">
        <div className="w-1/2 -mt-4 lg:inline hidden">
          <div className="ml-14 py-12">
            <img
              src={IconGdgLogo}
              className="gdg-logo md:mt-16 w-4/5"
              alt="Gdg logo"
            />
            <img
              src={IconDevfestH}
              className="devfest-logo w-11/12 "
              alt="Devfest Logo Horizontal"
            />
            <p className="text-2xl text-blue-grey font-mono font-semibold m-4">
              Saturday, 10th December <span className="font-black my-8">•</span>{" "}
              Aiwan-e-Iqbal Complex، Egerton Rd, Garhi Shahu Lahore{" "}
              <span className="font-black my-8">•</span> 9:00 AM PKT
            </p>
            <div className="flex items-center">
              <a className="" href="#registerationURLHere">
                <button className="bg-green-primary rounded-lg text-xs text-white w-32 h-16 m-2 py-2 px-4 lg-1:w-32 lg-1:text-base md:w-52 md:text-lg font-semibold">
                  Get Tickets
                </button>
              </a>
              <a className="" href="#applyAsASpeakerURLHere">
                <button className="bg-transparent w-32 h-16 m-2 md:text-lg text-gold-secondary font-semibold font-opensans rounded-lg py-1 px-2 border-2 border-primary md:w-52">
                  Apply to be a Speaker
                </button>
              </a>
              <div className="text-white m-2 py-2 px-4 text-xs md:py-0  md:px-0 md:text-sm">
                Got the tickets already?
                <br /> Flex on Socials
              </div>
            </div>
            <p className="text-white text-5xl lg-1:text-xl font-semibold drop-shadow-sm w-11/12 mt-20">
              Lahore’s Largest <br /> Developer Conference of 2022
            </p>
          </div>
        </div>
        <div className=" w-1/2">
          <img
            src={ImgHero}
            alt="Hero Image"
            className="hero-img w-full lg:inline hidden"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <div className=" container-lg ">
          <img src={ImgHero} alt="" className=" w-full" />
          <div className="flex flex-col items-center absolute md:top-60 top-8 p-4 pt-20 mb-10 md:mb-0 md:p-0 mt-5 mx-auto w-full">
            <img
              src={IconGdgLogo}
              className="gdg-logo w-4/5 mt-4"
              alt="Gdg logo"
            />
            <img
              src={IconDevfestH}
              className="devfest-logo w-11/12 "
              alt="Devfest Logo Horizontal"
            />
            <p className="text-xs text-blue-grey font-opensans m-4">
              Saturday, 10th December <span className="font-bold my-8">•</span>{" "}
              Aiwan-e-Iqbal Complex، Egerton Rd, Garhi Shahu Lahore{" "}
              <span className="font-black my-8">•</span> 9:00 AM PKT
            </p>
            <a className="" href="#register">
              <button className="bg-green-primary rounded-lg text-sm text-white w-52 h-12 m-2 py-1 px-10 lg-1:w-32 lg-1:text-base md:w-64 md:h-16 md:text-lg">
                Get Tickets
              </button>
            </a>
            <br />
            <a className="" href="#beASpeaker">
              <button className="bg-transparent w-52 h-12 m-2 text-sm text-gold-secondary font-semibold rounded-lg  py-2 px-4 border-4 border-primary md:h:16  md:w-64">
                Apply to be a Speaker
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

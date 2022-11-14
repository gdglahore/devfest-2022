import React from "react";
import { ImgArrow, ImgDevFest2022Mob } from "../images/index";
import "../styles/main.css";

const Header = () => {
  return (
    <header>
      <nav className="flex h-[13vh] md:h-[13vh] w-full">
        <div className="hidden md:flex h-full w-[30%] bgnavimg"></div>
        <ul className="bg-[#212025] md:bg-gradient-to-r from-[#fbbc04] to-[rgba(251,188,4,.31)] flex items-center justify-end md:justify-evenly text-white h-full w-[100%] md:w-[70%] gap-3">
          <img
            className="h-[11vh] hidden md:block"
            src={ImgArrow}
            alt="arrow"
          />
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a
              aria-current="page"
              className="active"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a className="" href="#schedule">
              Schedule
            </a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a href="#speakers">Speakers</a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a href="#team">Team</a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a href="#socials">Socials</a>
          </li>
          <li className="md:hidden max-w-[60vw]">
            <img
              className="h-[100%] ml-4 navbarImg"
              src={ImgDevFest2022Mob}
              alt=""
            />
          </li>
        </ul>
        <div className="h-[100vh] w-[70vw] fixed -translate-x-[100%] md:hidden duration-300 ease-in-out z-30">
          <ul className="flex flex-col items-start justify-start bg-[#212025] h-[100vh] w-[100%] pt-6">
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a
                aria-current="page"
                className="active"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a className="" href="#schedule">
                Schedule
              </a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a href="#speakers">Speakers</a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a href="#team">Team</a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full no-border">
              <a href="#socials">Socials</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

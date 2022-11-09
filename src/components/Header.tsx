import React from "react";
import { ImgArrow } from "../images/index";
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
              href="https://devfest.gdgkolkata.in/"
            >
              Home
            </a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a className="" href="https://devfest.gdgkolkata.in/schedule">
              Schedule
            </a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a>Speakers</a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a>Team</a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <a>Socials</a>
          </li>
          <li className="lg:text-2xl font-semibold cursor-pointer hover:underline hidden md:block">
            <p className="text-xl font-semibold cursor-pointer hover:underline hidden md:block px-4 py-2 border-2 border-white rounded-md">
              Sign In
            </p>
          </li>
          <li className="md:hidden max-w-[60vw]">
            <img
              className="h-[100%] ml-4 navbarImg"
              src="./DevFest Kolkata 2022_files/devFest2022mob.png"
              alt=""
            />
          </li>
          <li className="md:hidden mx-4 ml-auto">
            <div className="flex items-center gap-3">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <div className="text-xs font-semibold cursor-pointer px-2 py-1 border-2 border-white rounded-md">
                Sign In
              </div>
            </div>
          </li>
        </ul>
        <div className="h-[100vh] w-[70vw] fixed -translate-x-[100%] md:hidden duration-300 ease-in-out z-30">
          <ul className="flex flex-col items-start justify-start bg-[#212025] h-[100vh] w-[100%] pt-6">
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a
                aria-current="page"
                className="active"
                href="https://devfest.gdgkolkata.in/"
              >
                Home
              </a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a className="" href="https://devfest.gdgkolkata.in/schedule">
                Schedule
              </a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a>Speakers</a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full">
              <a>Team</a>
            </li>
            <li className="pt-6 px-4 pb-6 text-white text-xl border-b-2 border-opacity-5 border-white w-full no-border">
              <a>Socials</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

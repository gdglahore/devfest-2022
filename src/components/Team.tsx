import React from "react";
import { ImgBorder, ImgYellowRoundedBoarder } from "../images";
import "../styles/main.css";

const Team = () => {
  return (
    <div className="pb-6" id="team">
      <div className="relative">
        <h1 className="text-[16vw] font-bold text-center text-grey-secondary">
          OUR TEAM
        </h1>
        <h1 className="text-white text-[5vw] font-bold text-center absolute top-[9vw] left-0 right-0 mx-auto">
          OUR TEAM
        </h1>
      </div>
      {/* main team will go here */}
      <div className="grid lg:grid-row-1 lg:grid-flow-col lg:gap-0 gap-14 lg:py-5 lg:pb-20 pt-10 pb-10 px-[15%]">
        {/* can be done in loop - 3 person recommended here */}
        {/* 1st person */}
        <div className="">
          <div className="container h-[25vh]mt-10">
            <img
              className="image-1 mb-3 w-32 h-32 mr-1 rounded-full shadow-lg"
              src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Indranil%20Dutta.jpg"
              alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Indranil%20Dutta.jpg"
            />
            <img
              className="image-2 mb-3 w-48 h-48 rounded-full shadow-lg"
              src={ImgBorder}
              alt="frame"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Indranil Dutta
            </h5>
            <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Organizer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/iamindrad"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/indranil-dutta-06/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        {/* 2nd person */}
        <div className="">
          <div className="container h-[25vh]mt-10">
            <img
              className="image-1 mb-3 w-32 h-32 mr-1 rounded-full shadow-lg"
              src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg"
              alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg"
            />
            <img
              className="image-2 mb-3 w-48 h-48 rounded-full shadow-lg"
              src={ImgBorder}
              alt="frame"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Binit Kumar Mondal
            </h5>
            <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Co-Organizer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/i_ambinit"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/iambinit/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        {/* 3rd person */}
        <div className="">
          <div className="container h-[25vh]mt-10">
            <img
              className="image-1 mb-3 w-32 h-32 mr-1 rounded-full shadow-lg"
              src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/aindrilla.jpeg"
              alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/aindrilla.jpeg"
            />
            <img
              className="image-2 mb-3 w-48 h-48 rounded-full shadow-lg"
              src={ImgBorder}
              alt="frame"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Aindrila Das
            </h5>
            <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Co-Organizer
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/AindrilaDas11"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/aindrila-das24/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* other team members will go in carousel */}
      <div>
        <div className="react-multi-carousel-list" dir="ltr">
          <ul className="react-multi-carousel-track carousel-ul">
            {/* carousel to fill with the team members */}
            {/* li can be used here in loop */}
            <li
              data-index="0"
              aria-hidden="true"
              className="react-multi-carousel-item carousel-ul-li"
            >
              <div className="card select-none">
                <div className="container h-[25vh]mt-10">
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src="./DevFest Kolkata 2022_files/Supratim DHara.jpg"
                    alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg"
                  />
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src={ImgYellowRoundedBoarder}
                    alt="frame"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
                    Supratim Dhara
                  </h5>
                  <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                    Outreach
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6"></div>
                  <div className="buttons flex flex-row gap-4 items-center justify-center lg:pb-5">
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://twitter.com/supratimtwt"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/twitter--v1.png"
                        alt="twitter"
                      />
                    </a>
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://www.linkedin.com/in/supratim-dhara-392b31215/"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                        alt="Linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-index="1"
              aria-hidden="true"
              className="react-multi-carousel-item carousel-ul-li"
                          >
              <div className="card select-none">
                <div className="container h-[25vh]mt-10">
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src="./DevFest Kolkata 2022_files/SWEETY JHA.jpg"
                    alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/SWEETY%20JHA.jpg"
                  />
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src={ImgYellowRoundedBoarder}
                    alt="frame"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
                    Sweety Jha
                  </h5>
                  <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                    Web Dev
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6"></div>
                  <div className="buttons flex flex-row gap-4 items-center justify-center lg:pb-5">
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://twitter.com/SWEETYJ13171434?s=20&amp;t=eRJGtotuEQ-se69MrhqYAw"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/twitter--v1.png"
                        alt="twitter"
                      />
                    </a>
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://www.linkedin.com/in/sweety-jha-339116201"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                        alt="Linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li
              data-index="2"
              aria-hidden="true"
              className="react-multi-carousel-item carousel-ul-li"
            >
              <div className="card select-none">
                <div className="container h-[25vh] mt-10">
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Tithi%20B.jpg"
                    alt="https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Tithi%20B.jpg"
                  />
                  <img
                    className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                    src={ImgYellowRoundedBoarder}
                    alt="frame"
                    draggable="false"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
                    Tithi Bose
                  </h5>
                  <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                    Design
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6"></div>
                  <div className="buttons flex flex-row gap-4 items-center justify-center lg:pb-5">
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://twitter.com/TithiBose7?t=1H1wzpnhg5o_cKtIYAJbYg&amp;s=09"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/twitter--v1.png"
                        alt="twitter"
                      />
                    </a>
                    <a
                      className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                      href="https://www.linkedin.com/in/tithi-b-66b898179"
                      target="_blank"
                    >
                      <img
                        src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                        alt="Linkedin"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;

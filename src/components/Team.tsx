import React from "react";
import {
  IconLinkedin,
  IconTwitter,
  ImgBorder,
  ImgLinkedIn,
  ImgTwitter,
  ImgYellowRoundedBoarder,
} from "../images";
import "../styles/main.css";

const mainTeam = [
  {
    imgsrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Indranil%20Dutta.jpg",
    name: "Indranil Dutta",
    role: "Organizer",
    twitterHandle: "https://twitter.com/iamindrad",
    linkedinProfile: "https://www.linkedin.com/in/indranil-dutta-06/",
  },
  {
    imgsrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Indranil%20Dutta.jpg",
    name: "Indranil Dutta",
    role: "Organizer",
    twitterHandle: "https://twitter.com/iamindrad",
    linkedinProfile: "https://www.linkedin.com/in/indranil-dutta-06/",
  },
  {
    imgsrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Indranil%20Dutta.jpg",
    name: "Indranil Dutta",
    role: "Organizer",
    twitterHandle: "https://twitter.com/iamindrad",
    linkedinProfile: "https://www.linkedin.com/in/indranil-dutta-06/",
  },
];

const teamMembers = [
  {
    key: 0,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 1,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 2,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 3,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 4,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 5,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
  {
    key: 6,
    name: "Supratim Dhara",
    role: "Outreach",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/Supratim%20DHara.jpg",
    twitterHandle: "https://twitter.com/supratimtwt",
    linkedinProfile: "https://www.linkedin.com/in/supratim-dhara-392b31215/",
  },
];

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
        {mainTeam.map((mt) => (
          <div className="">
            <div className="container h-[25vh] mt-10">
              <img
                className="image-1 mb-3 w-32 h-32 mr-1 rounded-full shadow-lg"
                src={mt.imgsrc}
                alt={mt.imgsrc}
              />
              <img
                className="image-2 mb-3 w-48 h-48 rounded-full shadow-lg"
                src={ImgBorder}
                alt="frame"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
                {mt.name}
              </h5>
              <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                {mt.role}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6"></div>
              <div className="buttons flex flex-row gap-4 items-center justify-center">
                <a
                  className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                  href={mt.twitterHandle}
                  target="_blank"
                >
                  <img src={ImgTwitter} alt="twitter" />
                </a>
                <a
                  className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                  href={mt.linkedinProfile}
                  target="_blank"
                >
                  <img src={ImgLinkedIn} alt="Linkedin" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* other team members will go in carousel */}
      <div>
        <div className="react-multi-carousel-list" dir="ltr">
          <ul className="react-multi-carousel-track">
            {/* carousel to fill with the team members */}
            {/* li can be used here in loop */}
            {teamMembers.map((tm) => (
              <li
                data-index={tm.key}
                aria-hidden="true"
                className="react-multi-carousel-item carousel-ul-li"
              >
                <div className="card select-none">
                  <div className="container h-[25vh] mt-10">
                    <img
                      className="image mb-3 lg:w-36 w-28 lg:h-36 h-28 lg:mt-4 mt-10 rounded-full shadow-lg"
                      src={tm.imgSrc}
                      alt={tm.imgSrc}
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
                      {tm.name}
                    </h5>
                    <span className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                      {tm.role}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6"></div>
                    <div className="buttons flex flex-row gap-4 items-center justify-center lg:pb-5">
                      <a
                        className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                        href={tm.twitterHandle}
                        target="_blank"
                      >
                        <img src={ImgTwitter} alt="twitter" />
                      </a>
                      <a
                        className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                        href={tm.linkedinProfile}
                        target="_blank"
                      >
                        <img src={ImgLinkedIn} alt="Linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;

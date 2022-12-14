import React from "react";
import { ImgGithub, ImgLinkedIn, ImgTwitter } from "../images";
import "../styles/main.css";

const speakers = [
  {
    name: "Pawan Kumar",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg",
    role: "Head of Engineering, Frontier | GDE for Flutter",
    twitterHandle: "https://twitter.com/imthepk",
    linkedInProfile: "https://www.linkedin.com/in/imthepk/",
    gihubProfile: "https://github.com/iampawan",
  },
  {
    name: "Pawan Kumar",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg",
    role: "Head of Engineering, Frontier | GDE for Flutter",
    twitterHandle: "https://twitter.com/imthepk",
    linkedInProfile: "https://www.linkedin.com/in/imthepk/",
    gihubProfile: "https://github.com/iampawan",
  },
  {
    name: "Pawan Kumar",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg",
    role: "Head of Engineering, Frontier | GDE for Flutter",
    twitterHandle: "https://twitter.com/imthepk",
    linkedInProfile: "https://www.linkedin.com/in/imthepk/",
    gihubProfile: "https://github.com/iampawan",
  },
  {
    name: "Pawan Kumar",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg",
    role: "Head of Engineering, Frontier | GDE for Flutter",
    twitterHandle: "https://twitter.com/imthepk",
    linkedInProfile: "https://www.linkedin.com/in/imthepk/",
    gihubProfile: "https://github.com/iampawan",
  },
  {
    name: "Pawan Kumar",
    imgSrc:
      "https://cdn.statically.io/gh/devfestkolkata2022/assets/main/volunters/binit_kr_mondal.jpeg",
    role: "Head of Engineering, Frontier | GDE for Flutter",
    twitterHandle: "https://twitter.com/imthepk",
    linkedInProfile: "https://www.linkedin.com/in/imthepk/",
    gihubProfile: "https://github.com/iampawan",
  },
];

const Speakers = () => {
  const imgBorderStyle = {
    borderStyle: 'solid',
    borderWidth: '4px',
    borderColor: 'rgb(61, 130, 248) rgb(229, 68, 63) rgb(249, 185, 35) rgb(46, 169, 79)',
  };
  const mt10 = {
    marginTop: '10px'
  };

  return (
    <div className="pb-2" id="speakers">
      <div className="relative">
        <h1 className="text-[16vw] font-bold text-center text-grey-secondary">
          SPEAKERS
        </h1>
        <h1 className="text-white text-[5vw] font-bold text-center absolute top-[9vw] left-0 right-0 mx-auto">
          SPEAKERS
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 pt-10 pb-20 pl-10 pr-10 gap-10 lg:mx-28">
        {speakers.map((speaker) => (
          <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
            <div className="container h-[25vh]" style={mt10}>
              <img
                className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
                src={speaker.imgSrc}
                alt={speaker.name}
                  style={imgBorderStyle}
              />
            </div>
            <div className="flex flex-col items-center justify-center mb-5">
              <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
                {speaker.name}
              </h5>
              <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                {speaker.role}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6"></div>
              <div className="buttons flex flex-row gap-4 items-center justify-center">
                <a
                  className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                  href={speaker.twitterHandle}
                  target="_blank"
                >
                  <img src={ImgTwitter} alt="twitter" />
                </a>
                <a
                  className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                  href={speaker.linkedInProfile}
                  target="_blank"
                >
                  <img src={ImgLinkedIn} alt="Linkedin" />
                </a>
                <a
                  className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                  href={speaker.gihubProfile}
                  target="_blank"
                >
                  <img src={ImgGithub} alt="GitHub" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;

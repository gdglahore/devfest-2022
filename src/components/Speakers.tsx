import React from "react";
import "../styles/main.css";

const Speakers = () => {
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
        <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
          <div className="container h-[25vh] mt-10">
            <img
              className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
              src="./DevFest Kolkata 2022_files/Pawan Kumar.jpg"
              alt="Pawan Kumar"
            //   style="
            //   border-style: solid;
            //   border-width: 4px;
            //   border-color: rgb(61, 130, 248) rgb(229, 68, 63)
            //     rgb(249, 185, 35) rgb(46, 169, 79);
            // "
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Pawan Kumar
            </h5>
            <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Head of Engineering, Frontier | GDE for Flutter
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/imthepk"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/imthepk/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://github.com/iampawan"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/github.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
          <div className="container h-[25vh] mt-10">
            <img
              className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
              src="./DevFest Kolkata 2022_files/Sayak_Paul.jpg"
              alt="Sayak Paul"
              // style="
            //   border-style: solid;
            //   border-width: 4px;
            //   border-color: rgb(61, 130, 248) rgb(229, 68, 63)
            //     rgb(249, 185, 35) rgb(46, 169, 79);
            // "
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Sayak Paul
            </h5>
            <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Developer Advocate Engineer, Hugging Face | GDE for GCP &amp; ML
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/RisingSayak"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/sayak-paul/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://github.com/sayakpaul"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/github.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
          <div className="container h-[25vh] mt-10">
            <img
              className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
              src="./DevFest Kolkata 2022_files/Bhavik Makwana.jpg"
              alt="Bhavik Makwana"
            //   style="
            //   border-style: solid;
            //   border-width: 4px;
            //   border-color: rgb(61, 130, 248) rgb(229, 68, 63)
            //     rgb(249, 185, 35) rgb(46, 169, 79);
            // "
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Bhavik Makwana
            </h5>
            <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Software Engineer, Multipl.xyz | GDE for Flutter &amp; Dart
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://devfest.gdgkolkata.in/twitter.com/ibhavikmakwana"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/ibhavikmakwana"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://github.com/ibhavikmakwana"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/github.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
          <div className="container h-[25vh] mt-10">
            <img
              className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
              src="./DevFest Kolkata 2022_files/adit_lal.jpg"
              alt="Adit Lal"
            //   style="
            //   border-style: solid;
            //   border-width: 4px;
            //   border-color: rgb(61, 130, 248) rgb(229, 68, 63)
            //     rgb(249, 185, 35) rgb(46, 169, 79);
            // "
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Adit Lal
            </h5>
            <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Individual consultant | GDE for Android
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/aditlal"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/aditlal/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://github.com/aldefy/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/github.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-card-color max-h-[50vh] backdrop-blur-md rounded-lg lg:p-3 pt-5 px-3 min-w-[30%]">
          <div className="container h-[25vh] mt-10">
            <img
              className="image-1 mb-3 w-40 h-40 rounded-full shadow-lg"
              src="./DevFest Kolkata 2022_files/Dhananjay Kumar.jpg"
              alt="Dhananjay Kumar"
            //   style="
            //   border-style: solid;
            //   border-width: 4px;
            //   border-color: rgb(61, 130, 248) rgb(229, 68, 63)
            //     rgb(249, 185, 35) rgb(46, 169, 79);
            // "
            />
          </div>
          <div className="flex flex-col items-center justify-center mb-5">
            <h5 className="lg:text-sm text-xs mb-1 font-medium text-white dark:text-white">
              Dhananjay Kumar
            </h5>
            <span className="flex text-center lg:text-sm text-xs text-gray-500 dark:text-gray-400">
              Founder, ng-India | GDE for Angular
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6"></div>
            <div className="buttons flex flex-row gap-4 items-center justify-center">
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://twitter.com/debug_mode"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/twitter--v1.png"
                  alt="twitter"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://www.linkedin.com/in/dhananjaykumar07/"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/linkedin-2--v1.png"
                  alt="Linkedin"
                />
              </a>
              <a
                className="social-bt lg:w-1/2 lg:h-1/2 w-1/4 h-1/4"
                href="https://github.com/debugmodedotnet"
                target="_blank"
              >
                <img
                  src="./DevFest Kolkata 2022_files/github.png"
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;

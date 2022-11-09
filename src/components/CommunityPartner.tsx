import React from "react";
import { ImgArrow } from "../images/index";
import "../styles/main.css";

const CommunityPartner = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-[5vw] font-bold text-center pt-4 text-white">
          COMMUNITY PARTNERS
        </h1>
      </div>
      <div className="flex items-center justify-center pb-10">
        <div className="grid lg:grid-cols-10 grid-cols-4 lg:gap-4 gap-1 px-[10vw] py-20">
          {/* below div can be used in loop here */}
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://twitter.com/AlgozenithSIT" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/algozenith_SIT.png"
                title="Algozenith SIT	"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://www.clueless.tech/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/clueless.png"
                title="ClueLess"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://codechamp.tech/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/CodeChamp.png"
                title="CodeChamp	"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://codeincommunity.tech/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/CodeIN_Community.png"
                title="CodeIN Community"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://linktr.ee/codingreboot" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/Coding_Reboot.png"
                title="Coding Reboot"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a
              href="https://www.linkedin.com/company/connectnlearn1/"
              target="_blank"
            >
              <img
                src="./DevFest Kolkata 2022_files/Connect _ Learn.png"
                title="Connect &amp; Learn"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a
              href="https://gdsc.community.dev/cooch-behar-government-engineering-college-cooch-behar/"
              target="_blank"
            >
              <img
                src="./DevFest Kolkata 2022_files/GDSC_Cooch_Behar.png"
                title="Cooch Behar Government Engineering College - Cooch Behar"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a
              href="https://github.com/rohitg00/DevOpsCommunity"
              target="_blank"
            >
              <img
                src="./DevFest Kolkata 2022_files/DevOps_Community.png"
                title="DevOps Community"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://www.linkedin.com/company/devorld/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/devworld.jpeg"
                title="Devolrd"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://twitter.com/devs_dungeon" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/DEVs_Dungeon.png"
                title="DEVs Dungeon"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://twitter.com/devsincolab" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/devsincolab.jpeg"
                title="Devsincolab"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://eduhubcommunity.tech/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/Eduhub_Community.png"
                title="Eduhub Community"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a href="https://www.flutterkolkata.dev/" target="_blank">
              <img
                src="./DevFest Kolkata 2022_files/Flutter_Kolkata.jpg"
                title="Flutter Kolkata"
                className="rounded-lg"
              />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-110 transform transition duration-500">
            <a
              href="https://gdg.community.dev/gdg-cloud-kolkata/"
              target="_blank"
            >
              <img
                src="./DevFest Kolkata 2022_files/GDG_Cloud_Kolkata.png"
                title="GDG Cloud Kolkata"
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPartner;

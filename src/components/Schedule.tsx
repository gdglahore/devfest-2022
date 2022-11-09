import React from "react";
import "../styles/main.css";

const Schedule = () => {
  return (
    <div id="schedule">
      <div className="hidden lg:flex h-auto rounded drop-shadow-2xl p-10 mb-10 bg-gradient-to-b from-[#F9BB05] to-[#816617] text-white items-center gap-5 justify-between">
        <div className="w-2/5 px-5 font-semibold drop-shadow-3xl text-4xl">
          This in-person DevFest brings you the curated schedule
        </div>
        <div className="flex gap-14 justify-between">
          <div className="text-center">
            <h1 className="text-5xl font-bold">1</h1>
            <p className="text-xl font-bold">Day</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">8+</h1>
            <p className="text-xl font-bold">Technologies</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">20+</h1>
            <p className="text-xl font-bold">Speakers</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">22+</h1>
            <p className="text-xl font-bold">Sessions</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold">65+</h1>
            <p className="text-xl font-bold">Communities</p>
          </div>
        </div>
      </div>
      <div className="lg:hidden inline">
        <div className="container-lg bg-grey-secondary rounded-2xl m-4 mt-20 md:m-10 p-4 ">
          <p className="text-lg md:text-3xl md:font-bold font-semibold text-grey-primary relative">
            Lahore's Largest in-person Developer Conference of 2022 brings to
            you
          </p>
          <div className="flex flex-col justify-between relative px-8 my-10 gap-32">
            <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
              <div className="w-full flex justify-center">
                <div className="bg-primary h-1 w-full"></div>
              </div>
              <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
                <div className="bg-primary h-full w-1"></div>
              </div>
              <div className="absolute left-0 right-0 mx-auto flex items-center justify-center top-50 h-full w-full">
                <div className="bg-primary h-28 w-28 rounded-full flex flex-col items-center justify-center">
                  <div className="font-bold text-4xl">1</div>
                  <div className="font-bold text-2xl">Day</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-white">
                <p className="text-4xl font-semibold">8+</p>
                <span className="text-sm"> Technologies </span>
              </div>
              <div className="text-white">
                <p className="text-4xl font-semibold">20+</p>
                <span className="text-sm"> Speakers</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-white">
                <p className="text-4xl font-semibold">15+</p>
                <span className="text-sm"> Communities </span>
              </div>
              <div className="text-white">
                <p className="text-4xl font-semibold">22+</p>
                <span className="text-sm"> Sessions </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

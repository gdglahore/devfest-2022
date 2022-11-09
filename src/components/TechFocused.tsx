import React from "react";
import "../styles/main.css";

const TechFocused = () => {
  return (
    <div className="tech-focused container-lg lg:px-5 sm:container-sm">
      <div className="tech2 container-lg py-4 mx-12">
        <h1 className="tech-title text-white text-3xl font-semibold font-mono">
          Technologies to be focused
        </h1>
        <div className="flex items-center justify-center">
          <p className="text-white my-2 mt-6 text-base text-lg font-mono">
            The sessions that span from technical to visionary, let’s celebrate
            and discover what the technologies can enable: how product
            innovation, open source, and ML and AI can propel enterprises
            forward and solve the big problems that impact all of us.
          </p>
        </div>
      </div>
      <div className="pb-20">
        <div className="container-md grid grid-cols-4 gap-[5%] lg:flex border-white lg:mx-20 mx-4 items-center justify-center text-white">
          <div className="mt-5">
            <a href="https://www.android.com/intl/en_in/">
              <img
                src="./DevFest Kolkata 2022_files/android-logo.svg"
                alt="android logo"
                // href="https://www.android.com/intl/en_in/"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://www.google.com/chrome/">
              <img
                src="./DevFest Kolkata 2022_files/chrome-logo.svg"
                alt="chrome logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://firebase.google.com/">
              <img
                src="./DevFest Kolkata 2022_files/firebase-logo.svg"
                alt="firebase logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://flutter.dev/">
              <img
                src="./DevFest Kolkata 2022_files/flutter-logo.svg"
                alt="flutter logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://assistant.google.com/">
              <img
                src="./DevFest Kolkata 2022_files/googleassistant-logo.svg"
                alt="google assistant logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://cloud.google.com/">
              <img
                src="./DevFest Kolkata 2022_files/googlecloud-logo.svg"
                alt="Google cloud logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://maps.google.com/">
              <img
                src="./DevFest Kolkata 2022_files/googlemaps-logo.svg"
                alt="google maps logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full bg-white p-2"
              />
            </a>
          </div>
          <div className="mt-5">
            <a href="https://www.tensorflow.org/">
              <img
                src="./DevFest Kolkata 2022_files/machinelearning-logo.svg"
                alt="tensorflow logo"
                className="tech-img w-16 lg:w-20 mx-auto rounded-full border-4 bg-white p-2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechFocused;

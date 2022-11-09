import React from "react";
import { ImgArrow } from "../images/index";
import "../styles/main.css";

const Faq = () => {
  return (
    <div className="faq-bg text-white font-mono">
      <div
        className="grid mx-10 md:flex md:m-10 pt-8 pb-10"
        style="margin-top: 0px; margin-bottom: 0px"
      >
        <div className="lg:w-1/2 md:w-1/2">
          <p className="lg:text-4xl font-semibold text-2xl text-primary">FAQ</p>
          <p className="lg:text-lg text-sm my-4 font-semibold">
            Need Answers? <br />
            Find them here.
          </p>
          <div className="lg:text-lg text-sm font-semibold lg:w-3/5 md:w-3/5">
            For any queries related to sponsorship, please reach out to us at
            <a href="mailto:partners@gdgkolkata.in" className="text-primary">
              partners@gdgkolkata.in{" "}
            </a>
            . Any question related to participation can be asked at
            <a href="mailto:info@gdgkolkata.in" className="text-primary">
              info@gdgkolkata.in
            </a>
            .
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 font-medium lg:py-0 py-10 lg:text-xl text-xs">
          <div className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
            >
              <span className="text-white font-mono text-sm lg:text-xl font-medium">
                What is Devfest?
              </span>
              <span className="w-5 h-5 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="overflow-hidden" style="height: 0px">
              <div
                className="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                style="opacity: 0"
              >
                <span className="text-white text-left font-mono text-xs lg:text-base font-medium">
                  DevFest is an annual decentralized tech conference hosted by
                  the Google Developer Groups (GDG) community. GDGs host these
                  events around the globe.
                  <br />
                  <br />
                  DevFest 2022 marks the 11th year of DevFest and represents the
                  beginning of the second decade of the GDG community. Through
                  DevFest, you can continue to explore how Google's suite of
                  developer tools can expand the impact of local tech
                  professionals and developers like you around the world.
                  <br />
                  <br />
                  Whether you're passionate about finding new opportunities,
                  elevating your knowledge on the latest Google developer tools,
                  or exploring how to use Google technologies to generate social
                  and economic impact, DevFest offers an amazing platform for
                  developers to connect locally, learn, and build
                  on&nbsp;Google's&nbsp;tools.
                </span>
              </div>
            </div>
          </div>
          <div className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
            >
              <span className="text-white text-left font-mono text-sm lg:text-xl font-medium">
                What is Google Developer Groups (GDG)?
              </span>
              <span className="w-5 h-5 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="overflow-hidden" style="height: 0px">
              <div
                className="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                style="opacity: 0"
              >
                <p className="text-white text-left font-mono text-xs lg:text-base font-medium">
                  Google Developer Groups (GDG) is the largest developer
                  community in the world. Over 1000+ GDGs exist in 140+
                  countries around the globe. The program helps developers
                  connect with one another and learn about building products on
                  all Google platforms.
                  <br />
                  <br />
                  Each GDG is a local community hub of professional developers
                  who share expertise and passion for Google's developer
                  technology.
                  <br />
                  <br />
                  GDG communities coordinate community activities centered
                  around helping developers learn, connect, and grow while
                  building a strong sense of belonging to the local and global
                  Google Developer Groups&nbsp;community.
                </p>
              </div>
            </div>
          </div>
          <div className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
            >
              <span className="text-white text-left font-mono text-sm lg:text-xl font-medium">
                Who can register for DevFest?
              </span>
              <span className="w-5 h-5 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="overflow-hidden" style="height: 0px">
              <div
                className="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                style="opacity: 0"
              >
                <span className="text-white text-left font-mono text-xs lg:text-base font-medium">
                  Whether you're a student or a working professional, as long as
                  you are enthusiastic about learning through various hands-on
                  sessions or technical talks delivered in local languages by
                  experts all around the globe or simply meeting fellow local
                  developers, you're welcome to register for
                  DevFest&nbsp;at&nbsp;no&nbsp;cost.
                </span>
              </div>
            </div>
          </div>
          <div className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
            >
              <span className="text-white text-left font-mono text-sm lg:text-xl font-medium">
                What is unique about DevFest?
              </span>
              <span className="w-5 h-5 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="overflow-hidden" style="height: 0px">
              <div
                className="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                style="opacity: 0"
              >
                <span className="text-white text-left font-mono text-xs lg:text-base font-medium">
                  DevFest is the GDG program's annual globally distributed
                  conference. Different from a meetup or speaker session,
                  DevFests events cover multiple topics and offer a suite of
                  activities that aim to help local developers come together to
                  learn, build and understand the full suite of Google's
                  developer tools.
                  <br />
                  <br />
                  DevFest events happen during the second part of the year and
                  offer a way to engage with new content from various Google
                  product teams.
                </span>
              </div>
            </div>
          </div>
          <div className="block relative w-full">
            <button
              type="button"
              className="flex justify-between items-center w-full py-4 border-b border-b-blue-gray-100 text-blue-gray-700 antialiased font-sans text-xl font-semibold leading-snug select-none hover:text-blue-gray-900 transition-colors"
            >
              <span className="text-white text-left font-mono text-sm lg:text-xl font-medium">
                How can I stay informed?
              </span>
              <span className="w-5 h-5 ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="overflow-hidden" style="height: 0px">
              <div
                className="block w-full py-4 text-gray-700 antialiased font-sans text-sm font-light leading-normal"
                style="opacity: 0"
              >
                <span className="text-white text-left font-mono text-xs lg:text-base font-medium">
                  Follow Google Developer Groups Kolkata on our social media
                  platforms. The best way to stay updated is to search the
                  Google Developer Group Kolkata page and join for latest
                  updates.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

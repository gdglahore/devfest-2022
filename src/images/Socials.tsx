import React from "react";
import { ImgArrow } from "../images/index";
import "../styles/main.css";

const Socials = () => {
  return (
    <div
      id="socials"
      className="container-lg text-center py-10 sm:py-16 bg-grey font-mono"
    >
      <p className="title text-white text-xl sm:m-3 sm:text-3xl m-1">
        Keep in touch for latest announcements!
      </p>
      <p className="text-white text-sm sm:text-lg m-3">
        Let's get connected so that we can reachout to each other via socials.
        Stack out <span className="text-primary">@GDGLahore</span> for updates
        and news.
      </p>
      <div className="socials">
        <a href="https://twitter.com/GDGLahore">
          <img
            className="logo-socials"
            src="./DevFest Kolkata 2022_files/twitter.svg"
            alt="Twitter GDG Kolkata"
          />
        </a>
        <a href="http://www.linkedin.com/company/gdgkolkata">
          <img
            className="logo-socials"
            src="./DevFest Kolkata 2022_files/linkedin.svg"
            alt="LinkedIn GDG Kolkata"
          />
        </a>
        <a href="https://www.instagram.com/gdgkolkata/">
          <img
            className="logo-socials"
            src="./DevFest Kolkata 2022_files/instagram.svg"
            alt="Instagram GDG Kolkata"
          />
        </a>
        <a href="https://www.facebook.com/GDGKolkata">
          <img
            className="logo-socials"
            src="./DevFest Kolkata 2022_files/facebook.svg"
            alt="Facebook GDG Kolkata"
          />
        </a>
        <a href="https://t.me/gdgkolkata">
          <img
            className="logo-socials"
            src="./DevFest Kolkata 2022_files/telegram.svg"
            alt="Telegram GDG Kolkata"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;

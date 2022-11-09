import React from "react";
import { IconFacebook, IconInstagram, IconLinkedin, IconTelegram, IconTwitter, IconYoutube, ImgArrow } from "../images/index";
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
            src={IconTwitter}
            alt="Twitter GDG Lahore"
          />
        </a>
        <a href="https://www.linkedin.com/company/gdglahore/">
          <img
            className="logo-socials"
            src={IconLinkedin}
            alt="LinkedIn GDG Lahore"
          />
        </a>
        <a href="https://www.instagram.com/gdglahore/">
          <img
            className="logo-socials"
            src={IconInstagram}
            alt="Instagram GDG Lahore"
          />
        </a>
        <a href="https://www.facebook.com/GDGLahore">
          <img
            className="logo-socials"
            src={IconFacebook}
            alt="Facebook GDG Lahore"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCk7bFZhxnpqpRCXnlMUU0eA">
          <img
            className="logo-socials"
            src={IconYoutube}
            alt="Youtube GDG Lahore"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;

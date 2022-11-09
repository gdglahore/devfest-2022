import React from "react";
import "../styles/main.css";

const Footer = () => {
  return (
    <div className="container-lg bg-footer-gold py-4 font-mono px-4">
      <p className="text-2xl font-semibold text-white md:text-center">
        DevFest Lahore 2022
      </p>
      <div className="flex mt-4 gap-5 md:justify-center justify-start">
        <a href="https://youtu.be/senvjokZT-A">
          <p className="text-white mb-2 text-[11px]">
            Devfest Lahore 2019 Highlights
          </p>{" "}
        </a>
        <a href="https://gdg.community.dev/gdg-Lahore/">
          <p className="text-white mb-2 text-[11px]">About GDG Lahore</p>{" "}
        </a>
        <a href="https://developers.google.com/community-guidelines">
          <p className="text-white mb-2 text-[11px]">Community Guidelines</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

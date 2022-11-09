import React from "react";
import type { HeadFC } from "gatsby";

import Header from "../components/Header";
import Home from "../components/Home";
import Schedule from "../components/Schedule";
import TechFocused from "../components/TechFocused";
import Speakers from "../components/Speakers";
import Venue from "../components/Venue";
import Team from "../components/Team";
import Sponsor from "../components/Sponsor";
import CommunityPartner from "../components/CommunityPartner";
import Faq from "../components/Faq";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import Partner from "../components/Partner";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <main className="hero bg-black-primary font-mont">
        <Home />
        <Schedule />
        <TechFocused />
        <Speakers />
        <Venue />
        <Team />
        <Sponsor />
        <Partner />
        <CommunityPartner />
      </main>
      {/* <Faq /> */}
      <Socials />
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

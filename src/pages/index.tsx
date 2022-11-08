import React from "react";
import type { HeadFC } from "gatsby";

import Header from "../components/Header";

const IndexPage = () => {
  return (
    <div>
      <Header />

{/*
      <main>
        <Hero />
        <About />
        <Speakers />
        <Tickets />
        <Gallery />
      </main>

      <Footer /> */}
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

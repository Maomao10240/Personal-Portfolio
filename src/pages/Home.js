import React from "react";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;

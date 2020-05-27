import React from "react";
import Section from "../Home/Section";
import SectionSmall from "../Home/SectionSmall";
import SectionCards from "../Home/SectionCards";
import SectionBaner from "../Home/SectionBaner";
import SectionCarouseOwn from "../Home/SectionCarouseOwn/SectionCarouseOwn";

const Home = () => {
  return (
    <>
      <Section />
      <SectionSmall />
      <SectionCards />
      <SectionBaner/>
      <SectionCarouseOwn />
    </>
  );
};

export default Home;

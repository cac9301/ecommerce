import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionSmall from "./components/SectionSmall";
import SectionCards from "./components/SectionCards";
import SectionBaner from "./components/SectionBaner";
import SectionCarouseOwn from "./components/SectionCarouseOwn/SectionCarouseOwn";

function App() {
  return (
    <>
      <Header />
      <Section />
      <SectionSmall />
      <SectionCards />
      <SectionBaner />
      <SectionCarouseOwn/>
    </>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import SectionSmall from "./components/SectionSmall";
import SectionCards from "./components/SectionCards";
import SectionBaner from "./components/SectionBaner";
import SectionCarouseOwn from "./components/SectionCarouseOwn/SectionCarouseOwn";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Section />
      <SectionSmall />
      <SectionCards />
      <SectionBaner />
      <SectionCarouseOwn/>
      <Footer/>
    </>
  );
}

export default App;

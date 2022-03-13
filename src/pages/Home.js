import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Index";
import Info from "../components/Info/index";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  introduceObj,
} from "../components/Info/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObjOne} />
      <Services />
      <Info {...homeObjTwo} />
      {/* <Info {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;

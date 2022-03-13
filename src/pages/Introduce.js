import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Introduce from "../components/Introduce/introduce";
import Footer from "../components/Footer";
const IntroducePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Introduce />
      <Footer />
    </>
  );
};

export default IntroducePage;

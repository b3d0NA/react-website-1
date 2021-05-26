import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroArea from "../components/HeroArea";
import Info from "../components/Info";
import { InfoData } from "../components/Info/data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <HeroArea />
      <Info data={InfoData} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;

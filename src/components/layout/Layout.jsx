import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import MySwiper from "../Swiper/MySwiper";

export default function Layout() {
  return (
    <>
      <div id="home">
        <Navbar />
        <Hero />
        <Skills />
        <Portfolio />
        {/* <MySwiper /> */}
        <Footer />
      </div>
    </>
  );
}

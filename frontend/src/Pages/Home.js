import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="Home-page-section">
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

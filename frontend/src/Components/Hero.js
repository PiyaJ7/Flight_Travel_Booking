import React from "react";
import "./styles.css";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <div className="hero-section bg-red-500">
      <section className="hero">
        <h1 className="font-serif">
          Explore the World Together with Premium Travel
        </h1>
        <p>Get up to 50% Discount</p>
        <button className="flex">
          Book Now
          <div className="arrow-icon">
            <MdOutlineArrowOutward />
          </div>
        </button>
      </section>
    </div>
  );
}

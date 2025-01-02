import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import videoFile from "./videos/travel.mp4";
import { FaPlaneUp } from "react-icons/fa6";

export default function About() {
  return (
    <div className="about-section">
      <h1 className="font-mono">How it Works</h1>
      <p>
        These are the simple procedures that will make your purchasing process
        super easy and smooth. And will help you to get flight easily.
      </p>
      <div className="flex">
        <div className="steps-container">
          <div className="steps flex items-center">
            <RiNumber1 className="no_icon" />
            <div className="black-dot"></div>
            <p>Search Flights</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber2 className="no_icon" />
            <div className="black-dot"></div>
            <p>Fill Contact Form</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber3 className="no_icon" />
            <div className="black-dot"></div>
            <p>Choose your Airline</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber4 className="no_icon" />
            <div className="black-dot"></div>
            <p>Booking in 10 minutes!</p>
          </div>
          <FaPlaneUp className="plane-icon" />
        </div>
        <div className="about-video flex items-center justify-center">
          <video width="60%" controls>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

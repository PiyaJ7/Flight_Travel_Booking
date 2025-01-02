import React from "react";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import videoFile from "./videos/travel.mp4";
import { FaPlaneUp } from "react-icons/fa6";
import Booking from "./Booking";
import { IoSearch } from "react-icons/io5";
import { TbTransformFilled } from "react-icons/tb";
import { GiChoice } from "react-icons/gi";
import { MdBorderColor } from "react-icons/md";

export default function About() {
  return (
    <div className="about-section">
      <Booking />
      <h1 className="font-mono">How it Works</h1>
      <p>
        These are the simple procedures that will make your purchasing process
        super easy and smooth. And will help you to get flight easily.
      </p>
      <div className="about-step-container-div flex">
        <div className="steps-container">
          <div className="steps flex items-center">
            <RiNumber1 className="no_icon" />
            <IoSearch className="about-list-icon" />
            <p>Search Flights</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber2 className="no_icon" />
            <TbTransformFilled className="about-list-icon" />
            <p>Fill Contact Form</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber3 className="no_icon" />
            <GiChoice className="about-list-icon" />
            <p>Choose your Airline</p>
          </div>
          <div className="steps flex items-center">
            <RiNumber4 className="no_icon" />
            <MdBorderColor className="about-list-icon" />
            <p>Booking in 10 minutes!</p>
          </div>
          <FaPlaneUp
            style={{ transform: "rotate(180deg)", transition: "0.5s" }}
            className="plane-icon"
          />
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

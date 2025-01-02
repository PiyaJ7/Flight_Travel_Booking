import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import img1 from "./images/image 1.avif";
import img2 from "./images/image 2.webp";
import img3 from "./images/image 3.jpg";
import img4 from "./images/image 4.webp";
import img5 from "./images/image 5.webp";
import img6 from "./images/image 6.jpg";

export default function Footer() {
  return (
    <div>
      <div className="footer-section bg-black text-white flex">
        <div className="footer-left flex items-center justify-center">
          <div className="footer-left-icon w-3/4">
            <div className="flex items-center justify-between">
              <FaFacebookF className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <BsInstagram className="footer-icon" />
              <FaYoutube className="footer-icon" />
            </div>
            <p>
              ipsum dolor sit amet, consecteture adipiscing slit, sed do eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        <div className="footer-middle w-2/5 flex items-center justify-center">
          <div className="footer-middle-links w-2/5">
            <h1>Quick Links</h1>
            <p>Submit Airticale</p>
            <p>Blog</p>
            <p>Freebies</p>
            <p>Pricing</p>
          </div>
          <div className="footer-middle-contact w-3/5">
            <h1>Contact Us</h1>
            <div className="footer-contact-div flex items-center justify-start">
              <div className="footer-dot-icon">
                <FaCircle />
              </div>
              <p>(888) 231 4522 258</p>
            </div>
            <div className="footer-contact-div flex items-center justify-start">
              <div className="footer-dot-icon">
                <FaCircle />
              </div>
              <p>3129 Doctors Drive, Los Angeles, California, USA</p>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <h1>Gallery Showcase</h1>
          <div className="gallery-grid w-full">
            <div className="footer-image">
              <img src={img1} alt="image1" />
            </div>
            <div className="footer-image">
              <img src={img2} alt="image2" />
            </div>
            <div className="footer-image">
              <img src={img3} alt="image3" />
            </div>
            <div className="footer-image">
              <img src={img4} alt="image4" />
            </div>
            <div className="footer-image">
              <img src={img5} alt="image5" />
            </div>
            <div className="footer-image">
              <img src={img6} alt="image6" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line w-full"></div>
    </div>
  );
}

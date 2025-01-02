import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Booking() {
  const [tripType, setTripType] = useState("one-way");
  const [travelClass, setTravelClass] = useState("business");
  return (
    <div className="booking-container">
      <div className="class-tabs">
        <button
          className={`tab ${travelClass === "business" ? "active" : ""}`}
          onClick={() => setTravelClass("business")}
        >
          BUSINESS CLASS
        </button>
        <button
          className={`tab ${travelClass === "first" ? "active" : ""}`}
          onClick={() => setTravelClass("first")}
        >
          FIRST CLASS
        </button>
      </div>

      {/* Trip Type Options */}
      <div className="trip-types">
        <button
          className={`trip-type ${tripType === "one-way" ? "selected" : ""}`}
          onClick={() => setTripType("one-way")}
        >
          One Way
        </button>
        <button
          className={`trip-type ${tripType === "round-trip" ? "selected" : ""}`}
          onClick={() => setTripType("round-trip")}
        >
          Round Trip
        </button>
        <button
          className={`trip-type ${tripType === "multicity" ? "selected" : ""}`}
          onClick={() => setTripType("multicity")}
        >
          Multicity
        </button>
      </div>

      <div className="booking-fields">
        <div className="field">
          <label>Departure City</label>
          <input type="text" placeholder="Pakistan (Lahore International)" />
        </div>
        <div className="field">
          <label>Arrival City</label>
          <input type="text" placeholder="Dubai (Dubai International)" />
        </div>
        <div className="field">
          <label>Departure Date</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Arrival Date</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Passengers</label>
          <input type="number" min="1" defaultValue="2" />
        </div>
      </div>
      <div className="search-container">
        <button className="search-button">
          Search Flight
          <IoSearchSharp className="search-flight-icon" />
        </button>
      </div>
    </div>
  );
}

import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Comato</h1>
      <div className="header-container">
        <div className="location-container">
          <div className="location-wrapper">
            <div className="location-icon">
              <i className="fa-solid fa-location-dot center"></i>
              <div className="place-name">Banglore</div>
            </div>
            <div className="carret-icon">
              <i className="fa-solid fa-caret-down center"></i>
            </div>
          </div>
        </div>
        <div className="search-container">
          <i class="fa-solid fa-magnifying-glass center"></i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for a restaurant, cuisine or a dish"
          />
        </div>
      </div>
      <a href="#">Log in</a>
      <a href="#">Sign up</a>
    </div>
  );
};

export default Header;

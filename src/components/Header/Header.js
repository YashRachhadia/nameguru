import React from "react";
import "./Header.css";
import heroImage from "./heroImage.svg";

const Header = ({ headerExpanded }) => {
  return (
    <div className="header-container">
      <img
        src={heroImage}
        className={`hero-image ${
          headerExpanded ? "hero-image-expanded" : "hero-image-contracted"
        }`}
        alt="heroImage"
      />
      <h1
        className={`header-text ${
          headerExpanded ? "header-text-expanded" : "header-text-contracted"
        }`}
      >
        Name Guru !
      </h1>
    </div>
  );
};

export default Header;

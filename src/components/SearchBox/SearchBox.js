import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleInputChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Type keywords..."
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;

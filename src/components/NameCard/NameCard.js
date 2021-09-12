import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ name }) => {
  return (
    <a
      className="card-link"
      href={`${nameCheapUrl}${name}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="result-name-card">
        <p className="result-name">{name}</p>
      </div>
    </a>
  );
};

export default NameCard;

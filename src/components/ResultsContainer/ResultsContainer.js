import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ results }) => {
  return (
    <div className="results-container">
      {results.map((item) => {
        return <NameCard key={Math.random() * 1000} name={item} />;
      })}
    </div>
  );
};

export default ResultsContainer;

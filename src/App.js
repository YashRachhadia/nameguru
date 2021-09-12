import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ResultsContainer from "./components/ResultsContainer/ResultsContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import name from "@rstacruz/startup-name-generator";

const App = () => {
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [results, setResults] = useState([]);

  const handleInputChange = (inputText) => {
    setResults(inputText ? name(inputText) : []);
    setHeaderExpanded(!inputText);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultsContainer results={results} />
    </div>
  );
};

export default App;

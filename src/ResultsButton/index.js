import React from 'react';
import './ResultsButton.css';

const ResultsButton = ({ toggleResultsShown, areResultsShown }) => (
  <div className="ResultsButton-container">
    <button 
      type="button" 
      onClick={toggleResultsShown}
      className="ResultsButton-button"
    >
      {areResultsShown ? 'Hide Results' : 'Show Results'}
    </button>
  </div>
);

export default ResultsButton;

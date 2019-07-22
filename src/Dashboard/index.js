import React, { useState } from 'react';
import './Dashboard.css';
import MovieSelector from '../MovieSelector';
import ResultsButton from '../ResultsButton';
import Results from '../Results';

const nameOptions = [
  'Ginny',
  'Martin',
];

const renderButtons = (selectedName, setName) => nameOptions
  .map((nameOption) => {
    const isSelected = nameOption === selectedName;
    const chooseName = () => setName(nameOption);

    return (
      <button 
        key={nameOption} 
        onClick={chooseName}
        type="button"
        className={isSelected ? 'Dashboard-selected-button' : 'Dashboard-button'}
      >
        {nameOption}
      </button>
    );
  });

const Dashboard = () => {
  const [name, setName] = useState('Ginny');
  const [areResultsShown, setAreResultsShown] = useState(false);
  
  const toggleResultsShown = () => setAreResultsShown(!areResultsShown);

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-buttons-container">
        {renderButtons(name, setName)}
      </div>
      <MovieSelector name={name} />
      <ResultsButton areResultsShown={areResultsShown} toggleResultsShown={toggleResultsShown} />
      <Results areResultsShown={areResultsShown} />
    </div>
  );
};

// so much refactoring to be done

export default Dashboard;

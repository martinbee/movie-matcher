import React, { useState } from 'react';
import './Dashboard.css';
import MovieSelector from '../MovieSelector';

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

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-buttons-container">
        {renderButtons(name, setName)}
      </div>
      <MovieSelector name={name} />
    </div>
  );
};

export default Dashboard;

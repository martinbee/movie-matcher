import React from 'react';
import './NextYear.css';

const NextYear = ({ year, setYear }) => {
  const nextYear = year + 1;
  const goToNextYear = () => setYear(nextYear);

  return (
    <div>
      <button 
        type="button" 
        onClick={goToNextYear}
        className="NextYear-button"
      >
        Next year's movies ({nextYear})
      </button>
    </div>
  );
};

export default NextYear;

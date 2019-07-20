import React from 'react';

const NextYear = ({ year, setYear }) => {
  const nextYear = year + 1;
  const goToNextYear = () => setYear(nextYear);

  return (
    <div>
      <button type="button" onClick={goToNextYear}>
        {nextYear}
      </button>
    </div>
  );
};

export default NextYear;

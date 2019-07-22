import React from 'react';
import omit from 'lodash/omit';

const getResultsArray = () => {
  const jsonGinnyList = window.localStorage.getItem('Ginny');
  const ginnysListObject = JSON.parse(jsonGinnyList);
  const ginnysList = Object.keys(ginnysListObject);

  const jsonMartinList = window.localStorage.getItem('Martin');
  const martinsListObject = JSON.parse(jsonMartinList);
  const martinsList = Object.keys(martinsListObject);

  const bothList = ginnysList.reduce((both, movie) => {
    if (martinsListObject[movie]) both.push(movie);

    return both;
  }, []);

  const ginny = {
    title: "Ginny's List",
    movies: Object.keys(omit(ginnysListObject, bothList)),
  };

  const martin = {
    title: "Martin's List",
    movies: Object.keys(omit(martinsListObject, bothList)),
  };

  const both = {
    title: "Both List",
    movies: bothList,
  };

  return [both, ginny, martin];
};

const renderResultsArray = resultsArray => resultsArray.map(({ title, movies}) => (
  <div>
    <h2>{title}</h2>
    {movies.map(movie => <div>{movie}</div>)}
  </div>
));

const Results = ({ areResultsShown }) => {
  if (!areResultsShown) return null;

  const resultsArray = getResultsArray();

  return (
    <div>
      {renderResultsArray(resultsArray)}
    </div>
  );
}

export default Results;

// [
//    {
//   both: []
//   ginny: []
//   martin: []
// }

// ginny: {}
// martin: {}

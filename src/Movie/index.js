import React, { useContext } from 'react';
import NameContext from '../contexts/name-context';

import './Movie.css';

const posterUrlBase = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

const getPosterUrl = posterUrl => `${posterUrlBase}${posterUrl}`;

const Movie = ({ 
  poster_path,
  id,
  title,
  overview,
}) => { 
  const name = useContext(NameContext);
  const posterUrl = getPosterUrl(poster_path);
  const isInList = true;

  return (
    <div key={id} className="Movie-container">
      <img src={posterUrl} alt={title} title={overview} />
      <button
        type="button"
        onClick={() => console.log('added')}
        className="Movie-button"
      >
        {isInList ? 'Remove' : 'Add'}
      </button>
    </div>
  );
};

export default Movie;

// if we both have a movie in our lists then pump that to the top
// show 3 results at end:
// movies in both lists
// individual lists
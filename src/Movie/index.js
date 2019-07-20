import React from 'react';
import Switch from 'react-switch';

import './Movie.css';

const posterUrlBase = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

const getPosterUrl = posterUrl => `${posterUrlBase}${posterUrl}`;

const Movie = ({ 
  poster_path,
  id,
  title,
  overview,
}) => { 
  const posterUrl = getPosterUrl(poster_path);

  return (
    <div key={id} className="Movie-container">
      <img src={posterUrl} alt={title} title={overview} />
      <div className="MovieSelector-switch-container">
        <label>
          <span>Add</span>
          <Switch
            id=""
            onChange={() => console.log('add')}
            checked={false}
            className="MovieSelector-switch"
          />
        </label>
      </div>
    </div>
  );
};

export default Movie;

// if we both have a movie in our lists then pump that to the top
// show 3 results at end:
// movies in both lists
// individual lists
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MovieSelector.css';
import Movie from '../Movie';
import NextYear from '../NextYear';

const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie';

const MovieSelector = () => {
  const [year, setYear] = useState(1980);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(tmdbUrl, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          year,
          primary_release_year: year,
        },
      })

      const moviesForYear = response.data.results;

      setMovies(moviesForYear);
    };

    fetchData();
  }, [year]);

  return (
    <div className="MovieSelector-container">
      <div className="MovieSelector-year-message">
        Showing movies from {year}
      </div>
      <div className="MovieSelector-movies">
        {movies.map(movie => <Movie key={movie.id} {...movie} />)}
      </div>
      <NextYear year={year} setYear={setYear} />
    </div>
  );
};

export default MovieSelector;

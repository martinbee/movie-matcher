import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../Movie';
import NextYear from '../NextYear';

const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie';
const posterUrlBase = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

const getPosterUrl = posterUrl => `${posterUrlBase}${posterUrl}`;

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
          page: 1,
          language: 'en-US',
        },
      })

      const moviesForYear = response.data.results;

      console.log(movies);
      setMovies(moviesForYear);
    };

    fetchData();
  }, [year]);

  return (
    <div>
      <div>
        {movies.map(movie => <Movie {...movie} />)}
      </div>
      <NextYear year={year} setYear={setYear} />
    </div>
  );
};

export default MovieSelector;

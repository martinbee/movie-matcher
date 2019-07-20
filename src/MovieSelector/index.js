import React, { useEffect } from 'react';
import axios from 'axios';

const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie';
const posterUrlBase = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

const getPosterUrl = posterUrl => `${posterUrlBase}${posterUrl}`;

const MovieSelector = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(tmdbUrl, {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          year: 1984,
          page: 1,
          language: 'en-US',
        },
      })

      const movies = response.data.results;

      console.log(movies);
    };

    fetchData();
  }, []);

  return <div>Selector</div>;
};

export default MovieSelector;

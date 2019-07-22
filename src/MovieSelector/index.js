import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MovieSelector.css';
import Movie from '../Movie';
import NextYear from '../NextYear';

const tmdbUrl = 'https://api.themoviedb.org/3/discover/movie';

const MovieSelector = ({ name }) => {
  const [year, setYear] = useState(1980);
  const [movies, setMovies] = useState([]);

  const jsonMovieList = window.localStorage.getItem(name);
  const initialMovieList = jsonMovieList ? JSON.parse(jsonMovieList) : {};
  const [movieList, setMovieList] = useState(initialMovieList);

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

  useEffect(() => setMovieList(initialMovieList), [name]);

  useEffect(() => {
    const updateList = () => {
      const updatedJsonMovieList = JSON.stringify(movieList);
      window.localStorage.setItem(name, updatedJsonMovieList);
    };

    updateList();
  }, [movieList, name]);

  const addMovieToList = title => setMovieList({ ...movieList, [title]: true });
  const removeMovieFromList = (title) => {
    const updatedMovieList = { ...movieList };

    delete updatedMovieList[title];
    setMovieList(updatedMovieList);
  };

  const renderMovies = () => movies.map((movie) => {
    const { id, title } = movie;
    const isInList = movieList[title];

    return (
      <Movie 
        key={id} 
        isInList={isInList} 
        addOrRemoveMovieFromList={isInList ? removeMovieFromList : addMovieToList}
        {...movie}
      />
    );
  });

  return (
    <div className="MovieSelector-container">
      <div className="MovieSelector-year-message">
        Showing movies from {year}
      </div>
      <div className="MovieSelector-movies">
        {renderMovies()}
      </div>
      <NextYear year={year} setYear={setYear} />
    </div>
  );
};

export default MovieSelector;

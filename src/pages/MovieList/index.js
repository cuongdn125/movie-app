import React from 'react';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import Header from '../../components/Header';
import ListMovie from '../../components/ListMovie';

const keyQuery = ['getListMovies', movieType.top_rated];
const getListMovies = () => {
  return tmdbApi.getMoviesList(movieType.top_rated, {
    params: {
      page: 1,
    },
  });
};

export default function MovieList() {
  return (
    <>
      <Header getData={getListMovies} keyQuery={keyQuery} />
      <ListMovie />
    </>
  );
}

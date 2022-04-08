import { Box } from '@chakra-ui/react';
import React from 'react';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import Header from '../../components/Header';
import MovieTopRating from '../../components/MovieTopRating/MovieTopRating';
import Tv from '../../components/Tv';

export default function Home() {
  const keyQuery = ['getListMovies', movieType.top_rated];
  const getTopRatedMovie = () => {
    return tmdbApi.getMoviesList(movieType.top_rated, {
      params: {
        page: 1,
      },
    });
  };
  return (
    <Box bg="#141414">
      <Header getData={getTopRatedMovie} keyQuery={keyQuery} />
      <Tv />
      <MovieTopRating />
    </Box>
  );
}

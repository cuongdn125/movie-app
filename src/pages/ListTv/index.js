import React from 'react';
import tmdbApi, { tvType } from '../../api/tmdbApi';
import Header from '../../components/Header';
import ListMovieTv from '../../components/ListMovieTv';

const keyQuery = ['getListTv', tvType.popular];
const getListTv = () => {
  return tmdbApi.getTvList(tvType.popular, {
    params: {
      page: 1,
    },
  });
};

export default function ListTv() {
  return (
    <>
      <Header getData={getListTv} keyQuery={keyQuery} />
      <ListMovieTv />
    </>
  );
}

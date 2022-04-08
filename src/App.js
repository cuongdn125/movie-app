import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListTv from './pages/ListTv';
import DetailMovie from './components/DetailMovie';
import MovieList from './pages/MovieList';

const sizes = {
  sizes: {
    ...theme.space,
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    '8xl': '90rem',
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};

const queryClient = new QueryClient();

function App() {
  const theme = extendTheme({ sizes });
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<ListTv />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/:category/:id" element={<DetailMovie />} />
        </Routes>

        <Footer />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

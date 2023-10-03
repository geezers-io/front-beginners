import React, { useEffect, useState } from 'react';
import { getMovies } from '@/api/client';
import MovieCard from '@/components/MovieCard';
import styled from '@emotion/styled';

const MovieListPage = () => {
  const [movies, setMovies] = useState({
    loading: true,
    list: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const movies = await getMovies();
        setMovies(() => ({
          loading: false,
          list: movies.results,
        }));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (movies.loading) {
    return null;
  }
  return (
    <MovieList>
      {movies.list.map(item => (
        <MovieCard key={item.title} movie={item} />
      ))}
    </MovieList>
  );
};

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem 1.66rem;
  background-color: black;
`;

export default MovieListPage;

import React, { useEffect } from 'react';
import { MovieList } from '../../movie-list';
import styles from './styles.module.scss';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

interface wrapper {
  id: number;
  result: any[];
  loading: boolean;
  error: string;
}

export const Wrapper = () => {
  const {
    movies: { results },
    loading,
    error,
  } = useTypedSelector((state) => state.movies);

  const { fetchMovies } = useActions();
  const movieList = results as wrapper[];
  useEffect(() => {
    fetchMovies();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className={styles.wrapper}>
      <MovieList list={movieList} isLoading={loading} />
    </div>
  );
};

import React from 'react';
import cn from 'classnames';
import { Loader } from 'components/loader';
import { MovieListItem } from './movie-list-item';
import styles from './styles.module.scss';

export const MovieList = ({
  isLoading = false,
  list,
}: {
  isLoading?: boolean;
  list: any[];
}) => {
  const renderMovies = (arr: any[]) => (
    <ul className={styles.moviesList}>
      {arr.map((movie) => (
        <MovieListItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : list && list.length > 0 ? (
        renderMovies(list)
      ) : (
        <p className={cn(styles.fWidth, styles.fHeight, styles.listRmpty)}>
          No movie found
        </p>
      )}
    </>
  );
};

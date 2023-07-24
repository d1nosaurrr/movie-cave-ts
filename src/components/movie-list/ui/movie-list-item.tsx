import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './styles.module.scss';
interface Item {
  id: number;
  poster_path: string;
  original_title: string;
  title: string;
  release_date: number;
  vote_average: number;
}

export const MovieListItem = (props: Item) => {
  return (
    <>
      <li
        className={cn(
          styles.movieItem,
          styles.br15,
          styles.pRelative,
          styles.drawBorder,
        )}
      >
        <Link
          to={`/movie/${props.id}`}
          className={cn(styles.dFlex, styles.br15, styles.itemCard)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            alt={props.original_title + ' poster'}
            className={cn(
              styles.fWidth,
              styles.br15,
              styles.cardLogo,
              styles.skeleton,
            )}
            width='140'
            height='200'
            loading='lazy'
          />
          <div
            className={cn(
              styles.fWidth,
              styles.dFlex,
              styles.br15,
              styles.cardDescription,
            )}
          >
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={cn(styles.dFlex, styles.cardScore)}>
              {props.release_date
                ? new Date(props.release_date).getFullYear()
                : 'N/A'}
              <span className={styles.rate}>{props.vote_average}</span>
            </p>
          </div>
        </Link>
      </li>
    </>
  );
};

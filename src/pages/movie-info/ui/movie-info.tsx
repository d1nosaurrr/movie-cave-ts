import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchMovieInfo } from 'store/actions/movie-info';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { Loader } from 'components/loader';
import styles from './styles.module.scss';
import { MovieList } from 'components/movie-list';

interface MovieInfoInterface {
  id: number;
  movieInfo: any[] | undefined;
  loading: boolean;

  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  production_countries: any[];
  production_companies: any[];
  runtime: number;
  overview: string;
  vote_average: number;
  vote_count: number;
  key: string;
  images: any[];
  similar: any[];
}

type MovieID = {
  id: string;
};

export const MovieInfo = () => {
  const { id } = useParams<MovieID>();
  const navigate = useNavigate();
  const { movieInfo, loading }: MovieInfoInterface = useTypedSelector(
    (state) => state.movieInfo,
  );

  const { fetchMovieInfo } = useActions();

  const padTo2Digits = (num: number): string => num.toString().padStart(2, '0');

  const toHourConverter = (minutes: number | string): string =>
    typeof minutes === 'number' && !isNaN(minutes)
      ? `${padTo2Digits(Math.floor(minutes / 60))} : ${padTo2Digits(
          Math.round(minutes % 60),
        )}`
      : 'N/A';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id) fetchMovieInfo(id);
  }, [id]);

  // @ts-ignore
  const {
    title,
    original_title,
    poster_path,
    release_date,
    production_countries,
    production_companies,
    runtime,
    overview,
    vote_average,
    vote_count,
    key,
    images,
    similar,
  } = movieInfo?.[0] || {};

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        title && (
          <section>
            <FontAwesomeIcon
              className={styles.backArrow}
              onClick={() => navigate(-1)}
              icon={faArrowLeft}
            />
            <div className={cn(styles.dFlex, styles.header)}>
              <div className='title__block'>
                <h2 className={styles.movieTitle}>{title}</h2>
                <h3 className={styles.movieTitleOriginal}>{original_title}</h3>
              </div>
              <div
                className={cn(styles.dFlex, styles.pRelative, styles.rating)}
              >
                <div className={cn(styles.pRelative, styles.starOuter)}>
                  <div
                    className={styles.starInner}
                    style={{
                      width: `${Math.round((vote_average / 10) * 100)}%`,
                    }}
                  ></div>
                </div>

                <p className={styles.ratingVote}>
                  Rate{vote_average}({vote_count})
                </p>
              </div>
            </div>

            <div className={cn(styles.dFlex, styles.body)}>
              <img
                src={'https://image.tmdb.org/t/p/original/' + poster_path}
                alt={original_title + ' poster'}
                className={cn(styles.logo, styles.skeleton)}
                width='240'
                height='350'
              />
              <ul className={styles.productionInfo}>
                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <span className={styles.itemTitle}>Release date (US): </span>
                  {release_date}
                </li>
                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <span className={styles.itemTitle}>Country: </span>
                  {production_countries
                    .map(({ name }: { name: string }) => name)
                    .join(', ')}
                </li>
                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <span className={styles.itemTitle}>Companies: </span>
                  {production_companies
                    .map(({ name }: { name: string }) => name)
                    .join(', ')}
                </li>
                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <span className={styles.itemTitle}>Runtime: </span>
                  {`${runtime || 'N/A'} minutes (${toHourConverter(
                    runtime || 'N/A',
                  )})`}
                </li>

                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <span className={styles.itemTitle}>Overview: </span>
                  {overview || 'N/A'}
                </li>
                <li
                  className={cn(styles.fWidth, styles.pRelative, styles.item)}
                >
                  <ul
                    className={cn(
                      styles.dFlex,
                      styles.br15,
                      styles.moviePreview,
                    )}
                    onWheel={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {key && (
                      <li className={styles.previewItem}>
                        <iframe
                          allow='autoplay; encrypted-media'
                          allowFullScreen
                          title='video'
                          src={`https://www.youtube.com/embed/${key}`}
                          className={cn(styles.fWidth, styles.previewVideo)}
                        ></iframe>
                      </li>
                    )}
                    {images.map(({ file_path }: { file_path: string }) => (
                      <li key={file_path} className={styles.previewItem}>
                        <img
                          src={
                            'https://image.tmdb.org/t/p/original/' + file_path
                          }
                          alt={original_title + ' img'}
                          className={cn(styles.previewImg, styles.skeleton)}
                          width='220'
                          height='250'
                          loading='lazy'
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <svg style={{ display: 'none' }}>
              <defs>
                <symbol id='fivestars'>
                  <path
                    d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                    fillRule='evenodd'
                  />
                  <path
                    d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                    fillRule='evenodd'
                    transform='translate(24)'
                  />
                  <path
                    d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                    fillRule='evenodd'
                    transform='translate(48)'
                  />
                  <path
                    d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                    fillRule='evenodd'
                    transform='translate(72)'
                  />
                  <path
                    d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24'
                    fillRule='evenodd'
                    transform='translate(96)'
                  />
                </symbol>
              </defs>
            </svg>
            <div className={styles.movieSimilar}>
              <span className={styles.movieSimilarTitle}>Recommends</span>
              <MovieList list={similar} />
            </div>
          </section>
        )
      )}
    </>
  );
};

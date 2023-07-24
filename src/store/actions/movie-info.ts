import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from 'types/types';
import { MovieInfoAction } from 'types/movie-info';
import { headers } from './headers';

export const fetchMovieInfo = (id: string) => {
  let fullInfo: { [k: string]: any } = {};
  return (dispatch: Dispatch<MovieInfoAction>) => {
    dispatch({ type: ActionTypes.FETCH_MOVIE_INFO });
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, headers)
      .then(({ data }) => {
        fullInfo = { ...data };

        axios
          .get(`https://api.themoviedb.org/3/movie/${id}/videos`, headers)
          .then(({ data }) => {
            fullInfo.key = data.results[0].key;

            axios
              .get(`https://api.themoviedb.org/3/movie/${id}/images`, headers)
              .then(({ data }) => {
                fullInfo.images = data.backdrops.slice(0, 7);

                axios
                  .get(
                    `https://api.themoviedb.org/3/movie/${id}/similar`,
                    headers,
                  )
                  .then(({ data }) => {
                    fullInfo.similar = data.results;

                    dispatch({
                      type: ActionTypes.FETCH_MOVIE_INFO_SUCCESS,
                      payload: [fullInfo],
                    });
                  });
              });
          });
      })
      .catch((e: object) => {
        dispatch({
          type: ActionTypes.FETCH_MOVIE_INFO_FAILURE,
          payload: 'Error when fetch movies',
        });
      });
  };
};

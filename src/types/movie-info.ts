import { ActionTypes } from './types';

export interface MovieInfoState {
  movieInfo: any[];
  loading: boolean;
  error: null | string;
}

interface FetchMovieInfo {
  type: ActionTypes.FETCH_MOVIE_INFO;
}
interface FetchMovieInfoSuccess {
  type: ActionTypes.FETCH_MOVIE_INFO_SUCCESS;
  payload: any[];
}
interface FetchMovieInfoFailure {
  type: ActionTypes.FETCH_MOVIE_INFO_FAILURE;
  payload: string;
}

export type MovieInfoAction =
  | FetchMovieInfo
  | FetchMovieInfoSuccess
  | FetchMovieInfoFailure;

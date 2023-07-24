import { ActionTypes } from './types';
export interface MovieState {
  movies: any[];
  loading: boolean;
  error: null | string;
}

interface FetchMovie {
  type: ActionTypes.FETCH_MOVIE;
}
interface FetchMovieSuccess {
  type: ActionTypes.FETCH_MOVIE_SUCCESS;
  payload: any[];
}
interface FetchMovieFailure {
  type: ActionTypes.FETCH_MOVIE_FAILURE;
  payload: string;
}

export type MovieAction = FetchMovie | FetchMovieSuccess | FetchMovieFailure;

import { ActionTypes } from 'types/types';
import { MovieAction, MovieState } from 'types/movie';

const initialState = {
  movies: [],
  loading: false,
  error: null,
};
export const movieReducer = (
  state = initialState,
  action: MovieAction,
): MovieState => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE:
      return { loading: true, error: null, movies: [] };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return { loading: false, error: null, movies: action.payload };
    case ActionTypes.FETCH_MOVIE_FAILURE:
      return { loading: false, error: action.payload, movies: [] };
    default:
      return state;
  }
};

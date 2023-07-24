import { ActionTypes } from 'types/types';
import { MovieInfoAction, MovieInfoState } from 'types/movie-info';

const initialState = {
  movieInfo: [],
  loading: false,
  error: null,
};
export const movieInfoReducer = (
  state = initialState,
  action: MovieInfoAction,
): MovieInfoState => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_INFO:
      return { loading: true, error: null, movieInfo: [] };
    case ActionTypes.FETCH_MOVIE_INFO_SUCCESS:
      return { loading: false, error: null, movieInfo: action.payload };
    case ActionTypes.FETCH_MOVIE_INFO_FAILURE:
      return { loading: false, error: action.payload, movieInfo: [] };
    default:
      return state;
  }
};

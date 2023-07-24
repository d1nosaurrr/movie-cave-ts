import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { movieReducer } from './movie-reducer';
import { movieInfoReducer } from './movie-info-reducer';

export const rootReducer = combineReducers({
  movies: movieReducer,
  movieInfo: movieInfoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

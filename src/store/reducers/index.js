import { combineReducers } from "redux";
import movieReducer from './movie';
import movieScheduledReducer from './scheduledMovie';
import searchMovieReducer from './searchedMovie';
import errorReducer from './error';

const rootReducer = combineReducers({
  movies: movieReducer,
  scheduledMovies: movieScheduledReducer,
  searchedMovie: searchMovieReducer,
  error: errorReducer,
});

export default rootReducer;
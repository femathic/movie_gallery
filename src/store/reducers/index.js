import { combineReducers } from "redux";
import movieReducer from './movie';
import movieScheduledReducer from './scheduledMovie';
import errorReducer from './error';

const rootReducer = combineReducers({
  movies: movieReducer,
  scheduledMovies: movieScheduledReducer,
  error: errorReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import movieReducer from './movie';
import errorReducer from './error';

const rootReducer = combineReducers({
  movies: movieReducer,
  error: errorReducer,
});

export default rootReducer;
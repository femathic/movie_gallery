import useFetch from '../../utils/fetch';
import { GET_ALL_MOVIES, ADD_ERROR, GET_SCHEDULED_MOVIES, SEARCH_FOR_MOVIE } from '../actionTypes';
import moment from 'moment';


export const GetAllMovies = async (dispatch) => {
  try {
    const response = await useFetch('get', 'https://api.tvmaze.com/shows');
    if (response && response.data) {
      dispatch({
        type: GET_ALL_MOVIES,
        payload: response.data
          .filter(movie => {
            return (
              moment(movie.premiered).format('YYYY') !== "Invalid date"
              && movie.genres.length > 0
              && movie.rating.average > 0
              && movie.officialSite !== null
              && movie.externals.thetvdb !== 0
            )
          }),
      });
    } else if (response && response.data === undefined) {
      dispatch({
        type: ADD_ERROR,
        payload: response.message
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message
    });
  }
}

export const GetScheduledMovies = async (dispatch) => {
  try {
    const response = await useFetch('get', 'https://api.tvmaze.com/schedule');
    if (response && response.data) {
      dispatch({
        type: GET_SCHEDULED_MOVIES,
        payload: response.data
          .filter(movie => {
            return (
              moment(movie.show.premiered).format('YYYY') !== "Invalid date"
              && movie.show.genres.length > 0
              && movie.show.rating.average > 0
              && movie.show.officialSite !== null
              && movie.show.externals.thetvdb !== 0
            )
          }),
      });
    } else if (response && response.data === undefined) {
      dispatch({
        type: ADD_ERROR,
        payload: response.message
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message
    });
  }
}




export const SearchForMovie = async (dispatch, searchQuery) => {
  try {
    const response = await useFetch('get', `http://api.tvmaze.com/search/shows?q=${searchQuery}`);
    if (response && response.data) {
      dispatch({
        type: SEARCH_FOR_MOVIE,
        payload: response.data
          .filter(movie => {
            return (
              moment(movie.show.premiered).format('YYYY') !== "Invalid date"
              && movie.show.genres.length > 0
              && movie.show.rating.average > 0
              && movie.show.officialSite !== null
              && movie.show.externals.thetvdb !== 0
            )
          }),
      });
    } else if (response && response.data === undefined) {
      dispatch({
        type: ADD_ERROR,
        payload: response.message
      });
    }
  } catch (error) {
    dispatch({
      type: ADD_ERROR,
      payload: error.message
    });
  }
}
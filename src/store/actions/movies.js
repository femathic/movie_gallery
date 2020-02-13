import useFetch from '../../utils/fetch';
import { GET_ALL_MOVIES, ADD_ERROR, GET_SCHEDULED_MOVIES } from '../actionTypes';
import moment from 'moment';


const compareDates = (a, b) => {
  const bandA = moment(a.premiered).format('YYYY');
  const bandB = moment(b.premiered).format('YYYY');

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};
// const compareTimestamps = (a, b) => {
//   const bandA = moment(a.premiered).format('YYYY');
//   const bandB = moment(b.premiered).format('YYYY');

//   let comparison = 0;
//   if (bandA > bandB) {
//     comparison = -1;
//   } else if (bandA < bandB) {
//     comparison = 1;
//   }
//   return comparison;
// };
const compareRatings = (a, b) => {
  const bandA = a.show.rating.average;
  const bandB = b.show.rating.average;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};


export const GetAllMovies = async (dispatch) => {
  try {
    const response = await useFetch('get', 'https://api.tvmaze.com/shows');
    if (response && response.data) {
      dispatch({
        type: GET_ALL_MOVIES,
        payload: response.data.sort(compareDates)
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
        payload: response.data.sort(compareRatings)
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
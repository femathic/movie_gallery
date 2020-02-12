import useFetch from '../../utils/fetch';
import { GET_ALL_MOVIES, ADD_ERROR } from '../actionTypes';
import moment from 'moment';


const compare = (a, b) => {
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


export const GetAllMovies = async (dispatch) => {
  try {
    const response = await useFetch('get', 'https://api.tvmaze.com/shows');
    if (response && response.data) {
      dispatch({
        type: GET_ALL_MOVIES,
        payload: response.data.sort(compare).filter(movie => moment(movie.premiered).format('YYYY') !== "Invalid date"),
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
    console.log(error.message);
  }
}
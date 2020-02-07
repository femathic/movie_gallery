import useFetch from '../../utils/fetch';
import { GET_ALL_MOVIES, ADD_ERROR } from '../actionTypes';

export const GetAllMovies = async (dispatch) => {
  try {
    const response = await useFetch('get', 'https://api.tvmaze.com/shows');
    if (response && response.data) {
      dispatch({
        type: GET_ALL_MOVIES,
        payload: response.data,
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
import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

const initialState = {message: null};

export default (state = initialState, { type, payload}) => {
  switch (type) {
    case ADD_ERROR:
      return {...state, message: payload};
    case REMOVE_ERROR:
      return {...state, message: null};
    default:
      return state;
  }
}
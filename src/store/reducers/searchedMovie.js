import { SEARCH_FOR_MOVIE } from "../actionTypes";

const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_FOR_MOVIE:
      return { ...state, data: payload };
    default:
      return state;
  }
}
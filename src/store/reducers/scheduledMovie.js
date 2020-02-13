import { GET_SCHEDULED_MOVIES } from "../actionTypes";

const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SCHEDULED_MOVIES:
      return { ...state, data: payload };
    default:
      return state;
  }
}
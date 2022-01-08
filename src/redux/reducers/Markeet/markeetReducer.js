import {
  FETCH_MARKEET_REQUEST,
  FETCH_MARKEET_SUCCESS,
  FETCH_MARKEET_FAILURE,
  CHANGE_TAB,
} from "./markeetTypes";
const initialState = {
  loading: false,
  request: [],
  Total: 0,
  error: "",
};
const markeetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKEET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_TAB:
      return {
        request: [],
      };
    case FETCH_MARKEET_SUCCESS:
      return {
        ...state,
        loading: false,
        Total: action.payload.total,
        request: [...state.request, ...action.payload.data],
      };

    case FETCH_MARKEET_FAILURE:
      return {
        loading: false,
        request: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default markeetReducer;

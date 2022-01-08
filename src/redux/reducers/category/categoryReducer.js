import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORYT_FAILURE,
  CHANGE_TAB,
} from "./categoryTypes";
const initialState = {
  loading: false,
  category: [],
  error: "",
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
      };
    
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload.data,
      };

    case FETCH_CATEGORYT_FAILURE:
      return {
        loading: false,
        category: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;

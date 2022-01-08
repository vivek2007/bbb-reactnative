import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORYT_FAILURE,
} from "./categoryTypes";
import axios from "axios";
export const getCategories = () => {
  const apiUrl = "https://www.shareslate.com/apis/shop/categories.php";
  const formData = new FormData();
  formData.append("token", "bf4d4a6c471b2d4787be2e4f549a4e15");
  formData.append("action", "categories");
  return (dispatch) => {
    dispatch(fetchCategory());
    axios
      .post(apiUrl, formData)
      .then((responseJson) => {
        if (responseJson !== null && responseJson !== undefined) {
          const category = responseJson;
          dispatch(fetchCategorySuccess(category));
        }
      })
      .catch((error) => {
        dispatch(fetchCategoryFailure(error.message));
      });
  };
};
export const fetchCategory = () => {
  return {
    type: FETCH_CATEGORY_REQUEST,
  };
};
export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: category,
  };
};
export const fetchCategoryFailure = (error) => {
  return {
    type: FETCH_CATEGORYT_FAILURE,
    payload: error,
  };
};

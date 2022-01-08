import {
  FETCH_MARKEET_REQUEST,
  FETCH_MARKEET_SUCCESS,
  FETCH_MARKEET_FAILURE,
  CHANGE_TAB,
} from "./markeetTypes";
import axios from "axios";
export const getData = (checkStatus, categoryName, limit) => {
  const formData = new FormData();
  formData.append("token", "bf4d4a6c471b2d4787be2e4f549a4e15");
  formData.append("action", checkStatus);
  formData.append("category_name", categoryName);
  formData.append("limit", limit);
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .post("https://www.shareslate.com/apis/shop/productList.php", formData)
      .then((responseJson) => {
        if (responseJson !== null && responseJson !== undefined) {
          const request = responseJson.data;
          dispatch(fetchDataSuccess(request));
        }
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
export const fetchRequest = () => {
  return {
    type: FETCH_MARKEET_REQUEST,
  };
};
export const fetchDataSuccess = (request) => {
  return {
    type: FETCH_MARKEET_SUCCESS,
    payload: request,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_MARKEET_FAILURE,
    payload: error,
  };
};
export const changeTab = () => {
  return {
    type: CHANGE_TAB,
  };
};

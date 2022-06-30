//Actions for fetch categories
import * as types from "./types";
import axios from "axios";

export const fetchCategories = () => {
  return async (dispatch: any) => {
    dispatch(fetchCategoriesBegin());
    try {
      const response = await axios.get("http://localhost:3000/categories");
      const categories = response.data;
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error.message));
    }
  };
};

const fetchCategoriesBegin = () => ({
  type: types.FETCH_CATEGORIES_BEGIN,
});

const fetchCategoriesSuccess = (payload) => ({
  type: types.FETCH_CATEGORIES_SUCCESS,
  payload,
});

const fetchCategoriesFailure = (payload) => ({
  type: types.FETCH_CATEGORIES_FAILURE,
  payload,
});

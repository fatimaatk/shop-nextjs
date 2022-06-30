//Reducers for fetch categories
import * as types from "./types";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const categorieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORIES_BEGIN:
      return { ...state, loading: true };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };
    case types.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

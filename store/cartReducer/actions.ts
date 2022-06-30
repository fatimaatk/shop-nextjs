//Actions for cart reducer
import * as types from "./types";

export const addToCart = (payload) => ({
  type: types.ADD_TO_CART,
  payload,
});
export const removeToCart = (payload) => ({
  type: types.REMOVE_TO_CART,
  payload,
});
export const remove = (payload) => ({ type: types.REMOVE, payload });

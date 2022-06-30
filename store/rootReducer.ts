import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer/cartReducer";
import { categorieReducer } from "./categoryReducer/categoryReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categorieReducer,
});

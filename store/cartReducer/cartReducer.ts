import ProductsType from "../../models/productType";
import * as types from "./types";

export interface ItemType {
  id?: number;
  price: number;
  totalQty: number;
  totalPrice: number;
  qty: number;
  name: string;
  imageName: string;
  product?: ProductsType[];
  exist: any;
}

export interface CartState {
  totalAmount: number;
  totalqty: number;
  items: ItemType[];
}

const initialState = {
  totalAmount: 0,
  totalqty: 0,
  items: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_CART:
      let newItem = payload;
      const exist = state.items.findIndex((x) => x.id === newItem.id);

      if (exist >= 0) {
        return {
          totalAmount: (state.totalAmount += newItem.price),
          totalqty: state.totalqty + 1,
          items: [
            ...state.items,

            { ...(state.items[exist].qty = state.items[exist].qty + 1) },
          ],
        };
      } else {
        return {
          totalAmount: (state.totalAmount += newItem.price),
          totalqty: state.totalqty + 1,
          items: [...state.items, { ...newItem, qty: 1 }],
        };
      }
    case types.REMOVE_TO_CART:
      const itemToRemove = state.items.findIndex((x) => x.id === payload.id);

      if (state.items[itemToRemove].qty === 1) {
        return {
          items: state.items.filter((x) => x.id !== payload.id),
          totalqty: state.totalqty - 1,
          totalAmount: (state.totalAmount -= payload.price),
        };
      } else {
        return {
          items: [
            ...state.items,
            {
              ...(state.items[itemToRemove].qty =
                state.items[itemToRemove].qty - 1),
            },
          ],
          totalqty: state.totalqty - 1,
          totalAmount: (state.totalAmount -= payload.price),
        };
      }
    case types.REMOVE:
      const itemToDelete = state.items.findIndex((x) => x.id === payload.id);
      const qtyToDelete = state.items.map((x) => x.qty);

      if (itemToDelete >= 0) {
        return {
          items: state.items.filter((x) => x.id !== payload.id),
          totalqty: state.totalqty - qtyToDelete[itemToDelete],
          totalAmount: (state.totalAmount -=
            payload.price * qtyToDelete[itemToDelete]),
        };
      }
    default:
      return state;
  }
};

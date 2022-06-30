import ProductsType from "./productType";

export interface CartType {
  id: number;
  total: number;
  subTotal: number;
  tax: number;
  item: [];
  qty: number;
  product: ProductsType[];
}

export default CartType;

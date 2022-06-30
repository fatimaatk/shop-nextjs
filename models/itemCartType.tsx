import ProductsType from "./productType";

export interface ItemCartType {
  id?: number;
  price: number;
  totalQty: number;
  totalPrice: number;
  qty: number;
  name: string;
  imageName: string;
  product?: any;
  exist: any;
}

export default ItemCartType;

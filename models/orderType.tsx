import ProductsType from "./productType";

export interface OrderType {
  cartData: {};
  total: number;
  subTotal: number;
  tax: number;
  item: [];
  product: ProductsType[];
  id: number;
  name: string;
  imageName: string;
  image: string;
  price: number;
  discountRate: number;
  review: number;
  cartId: string[];
  email: string;
  phone: string;
  note: string;
  billingAdress: {};
  civility: string;
  firstName: string;
  lastName: string;
  zipCode: string;
  street: string;
  companyName: string;
  country: string;
  city: string;
  payment_method: string;
}

export default OrderType;

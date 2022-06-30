export interface ProductsType {
  productId: number;
  id: number;
  name: string;
  imageName: string;
  image: string;
  price: number;
  discountRate: number;
  review: number;
  description: string;
  item: [];
  brand: string;
  productListId: number;
  brandName: string;
  loading: boolean;
  product: {};
  products: [];
  pid: number;
}

export default ProductsType;

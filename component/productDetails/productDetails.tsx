import React, { useEffect, useState } from "react";
import ProductsType from "../../models/productType";
import productImage1 from "./../../assets/img/product-thumb-1.jpg";
import productImage2 from "./../../assets/img/product-thumb-2.jpg";
import productImage3 from "./../../assets/img/product-thumb-3.jpg";
import { FolderTitle } from "../common/folderTitle";
import Recent from "../recent/Recent";
import CookiesType from "../../models/cookiesType";
import Image from "next/image";
import Link from "next/link";
import { useCookies } from "react-cookie";
import category from "../common/categoryName";
import categoryById from "../common/categoryById";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartReducer/actions";

const ProductDetails: React.FC<{ product: ProductsType }> = (props) => {
  const [mounted, setMounted] = useState(false);
  const [cookies, setCookies] = useCookies(["products"]);
  const { product } = props;

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const imageLink = FolderTitle(product.name);
  let discountAmount: number = (product.price * product.discountRate) / 100;
  const categoryName: string = category(product.name)!;

  const setProductCookies = async (product: CookiesType) => {
    const previousProducts = cookies["products"];
    //gestion des doublons
    const exist = (await previousProducts)
      ? previousProducts.find((x: CookiesType) => x.id === product.id)
      : "";
    if (!exist) {
      const newProducts = previousProducts
        ? [
            ...previousProducts,
            {
              id: product.id,
              name: product.name,
              image: product.imageName,
              imageName: product.imageName,
              price: product.price,
              discountRate: product.discountRate,
              review: product.review,
            },
          ]
        : [
            {
              id: product.id,
              name: product.name,
              image: product.imageName,
              imageName: product.imageName,
              price: product.price,
              discountRate: product.discountRate,
              review: product.review,
            },
          ];
      setCookies("products", newProducts, { path: "/" });
    }
  };
  const myCookies = cookies.products && Object.values(cookies.products);

  useEffect(() => {
    setProductCookies(product);
    setMounted(true);
  }, [product.id]);

  return (
    mounted && (
      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                {myCookies && (
                  <h2 className="sidebar-title">Recently Viewed</h2>
                )}
                {myCookies &&
                  myCookies
                    .filter((value: any) => Object.keys(value).length !== 0)
                    .splice(-3)
                    .map((cookie: any, items: any) => (
                      <Recent cookie={cookie} key={items} />
                    ))}
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Others brands</h2>
                <ul>
                  {/* {categories
                  .filter((x: any) => x.name !== categoryName)
                  .splice(0, 3)
                  .map((brand: any, i: number) => (
                    <OtherBrands
                      key={i}
                      brand={brand}
                      categoryName={categoryName}
                    />
                  ))} */}
                </ul>
              </div>
            </div>

            <div className="col-md-8">
              <div className="product-content-right">
                <div className="product-breadcroumb">
                  <Link href={`/`} className="text-capitalize">
                    Home
                  </Link>

                  <Link
                    href={`/products/${categoryById(product.name)}`}
                    className="text-capitalize"
                  >
                    {categoryName}
                  </Link>
                  <Link
                    href={`/product/${product.id}`}
                    className="text-capitalize"
                  >
                    {product.name}
                  </Link>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="product-images">
                      <div className="product-main-img">
                        <Image
                          src={`/${imageLink}/${product.imageName}`}
                          alt=""
                          layout="fixed"
                          width={195}
                          height={243}
                        />
                      </div>

                      <div className="product-gallery">
                        <Image
                          src={productImage1}
                          alt=""
                          layout="fixed"
                          width={76}
                          height={76}
                        />
                        <Image
                          src={productImage2}
                          alt=""
                          layout="fixed"
                          width={76}
                          height={76}
                        />
                        <Image
                          src={productImage3}
                          alt=""
                          layout="fixed"
                          width={76}
                          height={76}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="product-inner">
                      <h2 className="product-name text-capitalize">
                        {product.name}
                      </h2>
                      <div className="product-inner-price">
                        <ins>{product.price.toFixed(2)}€</ins>
                        <del>{discountAmount.toFixed(2)}€</del>
                      </div>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="quantity">
                          <input
                            type="number"
                            // size="4"
                            className="input-text qty text"
                            title="Qty"
                            defaultValue="1"
                            name="quantity"
                            min="1"
                            step="1"
                          />
                        </div>
                        <button
                          className="add_to_cart_button"
                          onClick={handleAddToCart}
                        >
                          Add to cart
                        </button>
                      </form>

                      <div className="product-inner-category">
                        <h2>Product Description</h2>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;

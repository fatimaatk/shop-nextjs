import React from "react";
import { useState } from "react";
import ProductCard from "../../../component/products/productCard";
import ProductsType from "../../../models/productType";
import Pagination from "../../../component/common/Pagination";

const TopSellersList: React.FC<{
  products: ProductsType[];
}> = (props) => {
  const { products } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts: ProductsType[] = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2 className="text-capitalize">Top Sellers Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area ">
        <div className="zigzag-bottom "></div>
        <div className="container ">
          <div className="row ">
            {currentProducts.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {currentPage > 1 && (
            <Pagination
              productPerPage={productPerPage}
              totalProducts={products.length}
              currentPage={currentPage}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellersList;

export const getServerSideProps = async () => {
  const resNew = await fetch("http://localhost:3000/top-sellers-products");
  const products = await resNew.json();

  return {
    props: {
      products: products,
    },
  };
};

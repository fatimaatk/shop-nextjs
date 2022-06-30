import React from "react";
import { useState } from "react";
import ProductCard from "../products/productCard";
import Pagination from "../common/Pagination";
import { useCookies } from "react-cookie";

const RecentList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  const [cookies] = useCookies(["products"]);
  const myCookies = cookies.products && Object.values(cookies.products);

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const currentProducts =
    cookies.products &&
    cookies.products
      .filter((value: any) => Object.keys(value).length !== 0)
      .slice(indexOfFirstProduct, indexOfLastProduct);

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
                <h2 className="text-capitalize">Recently Viewed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area ">
        <div className="zigzag-bottom "></div>
        <div className="container ">
          <div className="row ">
            {currentProducts
              ? currentProducts.map((product: any, i: number) => (
                  <ProductCard product={product} key={i} />
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {cookies.products ? (
            <Pagination
              productPerPage={productPerPage}
              totalProducts={cookies.products.length}
              currentPage={currentPage}
              paginate={paginate}
              setCurrentPage={setCurrentPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RecentList;

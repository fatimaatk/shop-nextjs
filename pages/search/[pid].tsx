import { GetServerSideProps } from "next";
import React, { useState } from "react";
import Pagination from "../../component/common/Pagination";
import ProductCard from "../../component/products/productCard";
import ProductsType from "../../models/productType";
import { useRouter } from "next/router";

const ProductsListSearch = (props) => {
  const { products } = props;
  const router = useRouter();
  const { pid } = router.query;

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  const filteredData: ProductsType[] = products.filter((value) => {
    return value.name.toLowerCase().includes(pid.toLowerCase());
  });

  // Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts: ProductsType[] = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // //change page
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
                <h2 className="text-capitalize">Your research : {pid}</h2>
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
          <Pagination
            productPerPage={productPerPage}
            totalProducts={filteredData.length}
            currentPage={currentPage}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsListSearch;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/products`);
  const products = (await res.json()) as ProductsType;

  return {
    props: {
      products: products,
    },
  };
};

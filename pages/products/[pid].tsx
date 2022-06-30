import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ProductsType from "../../models/productType";
import ProductCard from "../../component/products/productCard";
import Pagination from "../../component/common/Pagination";
export interface ArrayOfProducts {
  products: ProductsType[];
  name: string;
  items: [];
}

const Products: React.FC<{ products: ArrayOfProducts }> = (props) => {
  const { products } = props;
  const [productsBrand, setProductsBrand] = useState(products.items);
  const [brandName, setBrandName] = useState(products.name);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);

  //Méthode pagination
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = productsBrand.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Head>
        <title>{brandName} products</title>
        <meta name="description" content="Store online off mobile phone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <div className="product-big-title-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-bit-title text-center">
                    <h2 className="text-capitalize">{brandName}</h2>
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
                  <ProductCard
                    product={product}
                    key={i}
                    brandName={brandName}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Pagination
                productPerPage={productPerPage}
                totalProducts={productsBrand.length}
                currentPage={currentPage}
                paginate={paginate}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;

export const getStaticProps: GetStaticProps = async (context) => {
  const { pid }: any = context.params;
  const res = await fetch(`http://localhost:3000/products-lists/${pid}`);
  const products = (await res.json()) as ProductsType;

  return {
    props: {
      products,
    },
  };
};

//cette méthode permet de générer au max 50
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: 50 }, (_, index) => ({
    params: {
      pid: (index + 1).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

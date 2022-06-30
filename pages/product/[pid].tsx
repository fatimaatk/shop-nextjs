import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import ProductsType from "../../models/productType";
import ProductDetails from "../../component/productDetails/productDetails";

const Product: React.FC<{ product: ProductsType }> = (props) => {
  const { product } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Store online off mobile phone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductDetails product={product} />
      </main>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params }: number | any = context;
  const productId = params.pid;
  const res = await fetch(`http://localhost:3000/products/${productId}`);
  const product = (await res.json()) as ProductsType;

  return {
    props: {
      product: { ...product },
    },
  };
};

export default Product;

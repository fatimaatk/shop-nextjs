import Head from "next/head";
import BrandsArea from "../component/homeMain/BrandArea";
import PromoArea from "../component/homeMain/PromoArea";
import Slider from "../component/homeMain/Swiper";
import WidgetArea from "../component/widget/WidgetArea";
import ProductsType from "../models/productType";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC<{
  topProducts: ProductsType[];
  newProducts: ProductsType[];
}> = (props) => {
  const { topProducts, newProducts } = props;

  return (
    <div>
      <Head>
        <meta name="description" content="Store online off mobile phone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Store</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <Slider />
          <PromoArea />
          <BrandsArea />
          <WidgetArea topProducts={topProducts} newProducts={newProducts} />
        </>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const resTop = await fetch("http://localhost:3000/top-sellers-products");
  const resNew = await fetch("http://localhost:3000/top-new-products");
  const topProducts = await resTop.json();
  const newProducts = await resNew.json();

  return {
    props: {
      topProducts: topProducts,
      newProducts: newProducts,
    },
  };
};

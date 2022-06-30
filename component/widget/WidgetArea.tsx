import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import WidgetNew from "./WidgetNew";
import WidgetsRecents from "./WidgetsRecents";
import WidgetsTop from "./WidgetsTop";
import ProductsType from "../../models/productType";

const WidgetArea: React.FC<{
  topProducts: ProductsType[];
  newProducts: ProductsType[];
}> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { topProducts, newProducts } = props;
  const [cookies] = useCookies(["products"]);
  const myCookies = cookies.products && Object.values(cookies.products);

  useEffect(() => {
    setMounted(true);
  }, [topProducts, newProducts]);

  return (
    mounted && (
      <div className="product-widget-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top Sellers</h2>
                <Link href={`/products/top-sellers`} className="wid-view-more ">
                  View All
                </Link>
                {topProducts.splice(0, 3).map((product, i) => (
                  <WidgetsTop product={product} key={i} />
                ))}
              </div>
            </div>
            {myCookies && (
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Recently Viewed</h2>

                  <Link href={`/products/recents`} className="wid-view-more">
                    View All
                  </Link>
                  {myCookies &&
                    myCookies
                      .filter((value: any) => Object.keys(value).length !== 0)
                      .splice(-3)
                      .map((cookie: any, items: any) => (
                        <WidgetsRecents cookie={cookie} key={items} />
                      ))}
                </div>
              </div>
            )}

            <div className="col-md-4">
              <div className="single-product-widget">
                <h2 className="product-wid-title">Top New</h2>
                <Link href={`/products/new-sellers`} className="wid-view-more">
                  View All
                </Link>

                {newProducts.splice(0, 3).map((product, i) => (
                  <WidgetNew product={product} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WidgetArea;

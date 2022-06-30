import React from "react";
import Link from "next/link";
import ProductsType from "../../models/productType";

const OtherBrands: React.FC<{ brand: ProductsType; categoryName: string }> = (
  props
) => {
  const { brand, categoryName } = props;

  return (
    <div>
      {" "}
      <li>
        <Link
          href={`/products/${brand.productListId}`}
          className="text-capitalize text-decoration-none"
        >
          {brand.name}
        </Link>
      </li>
    </div>
  );
};

export default OtherBrands;

import React from "react";
import Link from "next/link";
export interface CategoryProps {
  id: number;
  name: string;
  productListId: string;
}

const CategoriesList: React.FC<{ category: CategoryProps }> = (props) => {
  const { category } = props;

  return (
    <li className="active">
      <Link href={`/products/${category.productListId}`}>{category.name}</Link>
    </li>
  );
};

export default CategoriesList;

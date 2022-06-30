import React from "react";
import Link from "next/link";
import { FolderTitle } from "../common/folderTitle";
import CookiesType from "../../models/cookiesType";
import Image from "next/image";

const Recent: React.FC<{ cookie: CookiesType }> = (props) => {
  const { cookie } = props;

  const imageLink = FolderTitle(cookie.name);

  let discountAmount: number = (cookie.price * cookie.discountRate) / 100;
  return (
    <div>
      {" "}
      <div className="thubmnail-recent">
        <Image
          src={`/${imageLink}/${cookie.imageName}`}
          className="recent-thumb"
          alt=""
          layout="fixed"
          width={100}
          height={100}
        />
        <h2>
          <Link
            href={`/product/${cookie.id}`}
            className="text-capitalize text-decoration-none"
          >
            {cookie.name}
          </Link>
        </h2>
        <div className="product-sidebar-price">
          <ins>{cookie.price.toFixed(2)} € </ins>{" "}
          <del>{discountAmount.toFixed(2)} €</del>
        </div>
      </div>
    </div>
  );
};

export default Recent;

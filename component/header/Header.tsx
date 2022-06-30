import React from "react";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo" style={{ width: "100px", height: "100px" }}>
                <h1>
                  <Link href="/">
                    <Image src={logo} alt="logo" role="button" />
                  </Link>
                </h1>
              </div>
            </div>
            <SearchBar />
            <CartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

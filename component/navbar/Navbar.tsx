import Link from "next/link";
import { useEffect, useState } from "react";
import CategoriesList from "../common/categoriesList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCategories } from "../../store/categoryReducer/actions";

const Navbar = () => {
  const categories = useSelector((state) => ({ ...state.categories }));

  const dispatch = useDispatch();

  useEffect(() => {
    categories.categories.length === 0 && dispatch(fetchCategories());
  }, []);

  return (
    <div className="mainmenu-area">
      <div className="container ">
        <div className="row">
          <div className="navbar navbar-expand" style={{ height: "56px" }}>
            <ul className="nav navbar-nav ">
              <li className="active">
                <Link href={`/`}>Home</Link>{" "}
              </li>

              {!categories.loading &&
                categories.categories.map((category: any, i: number) => (
                  <CategoriesList category={category} key={i} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

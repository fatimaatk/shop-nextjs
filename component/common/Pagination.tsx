import React from "react";
import Link from "next/link";

const Pagination: React.FC<{
  productPerPage: number;
  totalProducts: number | any;
  paginate: Function;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}> = (props) => {
  const {
    totalProducts,
    productPerPage,
    paginate,
    currentPage,

    setCurrentPage,
  } = props;
  const totalPage = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    totalPage.push(i);
  }

  const prevPage = (pageNumber: number) => {
    if (pageNumber > 1) {
      setCurrentPage(pageNumber - 1);
    }
  };

  const nextPage = (pageNumber: number) => {
    if (pageNumber < totalPage.length) {
      setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link href={"#!"}>
            <a onClick={() => prevPage(currentPage)} className="page-link">
              Prev
            </a>
          </Link>
        </li>
        {totalPage.map((number) => (
          <li className="page-item" key={number}>
            <Link href={"#!"}>
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link href={"#!"} onClick={() => nextPage(currentPage)}>
            <a
              className="page-link"
              onClick={() => nextPage(currentPage)}
              type="button"
            >
              Next
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

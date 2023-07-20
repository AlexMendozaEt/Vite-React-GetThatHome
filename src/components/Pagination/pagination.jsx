import PropTypes from "prop-types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import { NavBox } from "./styles";

export default function Pagination({
  productsPerpage,
  setCurrentPage,
  totalProducts,
}) {
  const currentPage = parseInt(sessionStorage.getItem("seekerCurrentPage"));
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerpage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
    sessionStorage.setItem("seekerCurrentPage", currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
    sessionStorage.setItem("seekerCurrentPage", currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
    sessionStorage.setItem("seekerCurrentPage", n);
  };

  return (
    <NavBox>
      {currentPage === 1 ? (
        <span className="null"></span>
      ) : (
        <a className="button-list" onClick={onPreviusPage}>
          <GrFormPrevious />
        </a>
      )}
      <ul className="page-list">
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a
              className={`button-list ${
                currentPage === noPage ? "is-current" : ""
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
      {currentPage >= pageNumbers.length ? (
        <span className="null"></span>
      ) : (
        <a className="button-list" onClick={onNextPage}>
          <GrFormNext />
        </a>
      )}
    </NavBox>
  );
}

Pagination.propTypes = {
  productsPerpage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalProducts: PropTypes.number,
};

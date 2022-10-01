import React from "react";
import { useNavigate } from "react-router-dom";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  isInfinite = false,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const navigate = useNavigate();

  if (isInfinite === false) {
    return (
      <>
        <nav>
          <ul className="pagination">
            {pageNumbers.map((item) => (
              <li
                key={item}
                className={`page-item${currentPage === item ? " active" : ""}`}
              >
                <a
                  className="page-link "
                  href="#"
                  onClick={() => setCurrentPage(item)}
                  style={{
                    backgroundColor: "rgba(29, 35, 51, 0.952",
                    color: "#dedede",
                    border: "none",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a
                className="page-link "
                href="#"
                onClick={() => navigate(+1)}
                style={{
                  backgroundColor: "rgba(29, 35, 51, 0.952",
                  color: "#dedede",
                  border: "none",
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav style={{ cursor: "progress", userSelect: "none" }}>
          <ul style={{ pointrEvents: "none", opacity: "0.5" }}></ul>
        </nav>
      </>
    );
  }
};

// Pagination.defaultProps = {
//   nPages,
//   currentPage,
//   setCurrentPage,
//   isInfinite: false,
// };

export default Pagination;

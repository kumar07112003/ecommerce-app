import React from "react";
import "./Pagination.css"
const Pagination = ({ totalPost, postPerPage,setCurrentPage,currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((pages, i) => {
        return (
          <div className="page" key={i}>
            <button  key={i} onClick={()=>
                setCurrentPage(pages)
            } className={currentPage === pages ? "active" : ""}>{pages}</button>
          </div>
            
         
        );
      })}
    </div>
  );
};

export default Pagination;

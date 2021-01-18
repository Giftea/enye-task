import React, { useState } from "react";

function Pagination({ usersPerPage, users, Loading, paginate, click }) {
  const pageNumbers = [];

  if (Loading) {
    return <div></div>;
  } else if (!Loading) {
    for (
      let i = 1;
      i <= Math.ceil(users.records.profiles.length / usersPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <button
                  onClick={() => {
                    paginate(number);
                  }}
                  href="!#"
                  className ="paginateBtn"
                >
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Pagination;

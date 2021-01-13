import React from "react";

function Pagination({ usersPerPage, users, Loading , paginate}) {
  const pageNumbers = [];

  if (Loading) {
    return <h1>...</h1>;
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
        <ul className = "pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number}>
                <a onClick = {() =>{
                    paginate(number)
                }} href="!#">{number}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Pagination;

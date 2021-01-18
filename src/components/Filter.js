import React from "react";
import FilterByPayementMethod from "./FilterByPayementMethod";
import FilterByGender from "./FilterByGender";
import Pagination from "./Pagination";
import "./Search.css";

function Filter({
  Loading,
  gender,
  setGender,
  paymentMethod,
  setPaymentMethod,
  usersPerPage,
  users,
  paginate,
}) {
  return (
    <div className="filterAndPaginateSection">
      <div className="filterSection">
        <FilterByGender
          Loading={Loading}
          gender={gender}
          setGender={setGender}
        />
        <FilterByPayementMethod
          Loading={Loading}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </div>
    </div>
  );
}

export default Filter;

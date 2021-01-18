import React from "react";
import Filter from "../Filter.js";
import Search from "../Search.js";

function Hero({
  Loading,
  searchTerm,
  setSearchTerm,
  gender,
  setGender,
  paymentMethod,
  setPaymentMethod,
}) {
  return (
    <div className="hero">
      <Search
        Loading={Loading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Filter
        Loading={Loading}
        gender={gender}
        setGender={setGender}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </div>
  );
}

export default Hero;

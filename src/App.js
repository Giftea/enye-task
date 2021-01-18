import React, { useEffect, useState } from "react";
import "./App.css";
import UserItem from "./components/UserItem.js";

import Hero from "./components/layout/Hero";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  

  const getUser = async () => {
    const res = await fetch("https://api.enye.tech/v1/challenge/records");
    const data = await res.json();
    setUser(data);
    setLoading(false);
    setGender("");
    setPaymentMethod("");
  };
  useEffect(() => {
    getUser();
  }, []);

  //change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    
  };

  return (
    <div className="main">
      <Hero
        Loading={loading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        gender={gender}
        setGender={setGender}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      <UserItem
        users={user}
        usersPerPage={usersPerPage}
        Loading={loading}
        currentPage={currentPage}
        searchTerm={searchTerm}
        setUser={setUser}
        gender={gender}
        getUser={getUser}
        paginate={paginate}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        getUser={getUser}
      />
    </div>
  );
}

export default App;

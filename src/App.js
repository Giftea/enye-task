import React, { useEffect, useState } from "react";
import "./App.css";
import UserItem from "./components/UserItem.js";
import Pagination from "./components/Pagination.js";
import Search from "./components/Search";
import FilterByGender from "./components/FilterByGender";
import FilterByPayementMethod from "./components/FilterByPayementMethod";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const [gender, setGender] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const getUser = async () => {
    const res = await fetch("http://api.enye.tech/v1/challenge/records");
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
      <Search
        users={user}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <button onClick={getUser} className="btn">
        Refresh
      </button>
      <FilterByGender
        Loading={loading}
        users={user}
        setUser={setUser}
        gender={gender}
        setGender={setGender}
      />
      <FilterByPayementMethod
        Loading={loading}
        users={user}
        setUser={setUser}
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
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <Pagination
        usersPerPage={usersPerPage}
        users={user}
        Loading={loading}
        paginate={paginate}
      />
    </div>
  );
}

export default App;

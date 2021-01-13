import React, { useEffect, useState } from "react";
import "./App.css";
import UserItem from "./components/UserItem.js";
import Pagination from "./components/Pagination.js";
import Search from "./components/Search";
import FilterByGender from "./components/FilterByGender";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("http://api.enye.tech/v1/challenge/records");
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };
    getUser();
  }, []);

  // filter

  // const filterItems = (gender) => {
  //   if(gender === 'Female'){
  //     const filteredUsers = user.records.profiles.filter((user) => user.Gender === gender)
  //    return setUser(filteredUsers);

  //   } else   if(gender === 'Male'){
  //     const filteredUsers = user.records.profiles.filter((user) => user.Gender === gender)
  //    return setUser(filteredUsers);

  //   }

  // }

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
      <FilterByGender Loading={loading} users={user}  setUser={setUser}/>
      <UserItem
        users={user}
        usersPerPage={usersPerPage}
        Loading={loading}
        currentPage={currentPage}
        searchTerm={searchTerm}
        setUser={setUser}
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

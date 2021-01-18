import React from "react";
import "./UserItem.css";
import "./Search";
import "./FilterByGender";
import "./FilterByPayementMethod";
import Pagination from "./Pagination";
import RefreshBtn from "./RefreshBtn";
import './Spinner-1s-200px.svg'


function UserItem({
  users,
  Loading,
  usersPerPage,
  currentPage,
  searchTerm,
  gender,
  paymentMethod,
  paginate,
  getUser,
}) {
  if (Loading) {

    return (
      <div className ='spinner'>
    
    <div class="loadingio-spinner-eclipse-mbm8xhj15uq"><div class="ldio-x6bhdfzgddh">
    <div></div>
    </div></div></div>
    )
    ;
  } else {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.records.profiles.slice(
      indexOfFirstUser,
      indexOfLastUser
    );

    return (
      <div className="mainContainer">
        <div>
          <table className="tableContent">
            <thead>
              <tr>
                {/* <th>S/n</th> */}
                <th>Name</th>
                <th>Username</th>

                <th>Email</th>
                <th>Gender</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              
              {!Loading &&
                currentUser
                  .filter((searchUser) => {
                    if (searchTerm === "") {
                      return searchUser;
                    } else if (
                      searchUser.FirstName.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      ) ||
                      searchUser.LastName.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      )
                    ) {
                      return searchUser;
                    }
                  })
                  .filter((filterUser) => {
                    if (gender === "") {
                      return filterUser;
                    } else if (filterUser.Gender.toLowerCase() === gender) {
                      return filterUser;
                    }
                  })
                  .filter((filterUser) => {
                    if (paymentMethod === "") {
                      return filterUser;
                    } else if (
                      filterUser.PaymentMethod.toLowerCase() === paymentMethod
                    ) {
                      return filterUser;
                    }
                  })
                  .map((user, index) => {
                    return (
                      <tr key={index}>
                        {/* <th>{index}</th> */}
                        <td data-label="Name">
                          {user.FirstName} {user.LastName}
                        </td>
                        <td data-label="Username">{user.UserName}</td>

                        <td data-label="Email">{user.Email}</td>
                        <td data-label="Gender">{user.Gender} </td>
                        <td data-label="Payment Method">
                          {user.PaymentMethod}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination
            usersPerPage={usersPerPage}
            users={users}
            Loading={Loading}
            paginate={paginate}
          />
        </div>

        <div>
          <RefreshBtn getUser={getUser} />
        </div>
      </div>
    );
  }
}

export default UserItem;

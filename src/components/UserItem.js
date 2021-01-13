import React from "react";
import "./UserItem.css";
import "./Search";
import "./FilterByGender";
import "./FilterByPayementMethod";

function UserItem({
  users,
  Loading,
  usersPerPage,
  currentPage,
  searchTerm,
  setUser,
  gender,
  paymentMethod,
  setPaymentMethod,
}) {
  if (Loading) {
    return <h1>Loading...</h1>;
  } else {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.records.profiles.slice(
      indexOfFirstUser,
      indexOfLastUser
    );

    return (
      <div className="container">
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
                <div>
                  <div className="card">
                    <div className="top">
                      <div className="circle">
                        <p>{user.UserName}</p>
                      </div>
                      <div className="visible">
                        <p className="name">
                          {" "}
                          {user.FirstName} {user.LastName}{" "}
                        </p>
                        <p> Gender: {user.Gender} </p>
                        <p> Mobile Number:{user.PhoneNumber} </p>
                        <p> Email: {user.Email} </p>
                        <p>
                          {" "}
                          Website: {user.DomainName} {user.URL}
                        </p>
                        <p> {user.PaymentMethod} </p>
                      </div>
                    </div>

                    <div className="hidden">
                      <p>
                        {" "}
                        {user.CreditCardNumber} {user.CreditCardType}{" "}
                      </p>
                      <p> {user.PaymentMethod} </p>

                      {/* <p> {user.DomainName} {user.URL} </p> */}
                      <p> {user.CreditCardType} </p>
                      <p> {user.PaymentMethod} </p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    );
  }
}

// CreditCardNumber: "4485726554922584"
// CreditCardType: "VISA"
// PaymentMethod: "cc"

// DomainName: "HFKbdUD.biz"
// URL: "http://dgoJEqo.ru/"

// LastLogin: "1985-03-23 18:22:37"
// MacAddress: "9b:9d:27:8e:2d:c5"

// Latitude: -66.565475
// Longitude: 150.03503

// UserName: "UMOTkYe"
// FirstName: "Mia"  // LastName: "Powlowski"
// PhoneNumber: "946-810-2571"
// Gender: "Prefer to skip"
// Email: "OZfSIVZ@Sgavrgw.com"

{
  /* <p>
{" "}
{user.FirstName} {user.LastName}
</p>
<p> {user.Email} </p>
<p> {user.PhoneNumber} </p>
<p> {user.Gender} </p>
<p>
{" "}
{user.Latitude} {user.Longitude}
</p>
<p>
{" "}
{user.CreditCardNumber} {user.CreditCardType}
</p>
<p>
{" "}
{user.MacAddress} {user.LastLogin}{" "}
</p>
<p> {user.PaymentMethod} </p>
<p className="small">
{user.DomainName} {user.URL}{" "}
</p> */
}

export default UserItem;

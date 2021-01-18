import React from "react";
import "./Search.css";

function Search({ Loading, searchTerm, setSearchTerm }) {
  return (
    <div className="searchContainer">
     
      {!Loading ? (
        <div>
<i className ='fa fa-search search'></i>
        <input
          type="text"
          placeholder="Search By Name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        </div>


      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Search;

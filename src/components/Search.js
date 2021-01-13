import React from "react";

function Search({ users, searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;

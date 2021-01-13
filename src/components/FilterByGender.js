import React from "react";

function FilterByGender({ Loading, users, setUser, gender, setGender }) {
  return (
    <div>
      <p>Gender :</p>
     <form>
     <label>female</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => {
          setGender('female');
        }}
      />
      <label>male</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => {
          setGender('male');
        }}
      />

<label>prefer to skip</label>
      <input
        type="radio"
        name="gender"
        id="gender"
        value={gender}
        onChange={(e) => {
          setGender('prefer to skip');
        }}
      />
     </form>

<button>refresh</button>
    
    </div>
  );
}

export default FilterByGender;

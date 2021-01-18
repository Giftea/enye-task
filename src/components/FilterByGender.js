import React from "react";
import "./UserItem.css";

function FilterByGender({ Loading, gender, setGender }) {
  return (
    <div>
      {!Loading ? (
        <div className="dropdown">
          <button className="dropBtn">Gender  <i class="fa fa-caret-down"></i></button>
          <div className="dropdownContent">
            <div className="select">
              <label>Female</label>

              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={(e) => {
                  setGender("female");
                }}
              />
            </div>
            <div className="select">
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={(e) => {
                  setGender("male");
                }}
              />
            </div>

            <div className="select">
              <label>Prefer to skip</label>
              <input
                type="radio"
                name="gender"
                value={gender}
                onChange={(e) => {
                  setGender("prefer to skip");
                }}
              />
            </div>
          </div>

          {/* <form>
            <label>Gender:</label>
       <div>
       <label>female</label>
        
        <input
          type="radio"
          name="gender"
          
          value={gender}
          onChange={(e) => {
            setGender("female");
          }}
        />
       </div>
       <div>
       <label>male</label>
        <input
          type="radio"
          name="gender"
         
          value={gender}
          onChange={(e) => {
            setGender("male");
          }}
        />
       </div>

       <div>
       <label>prefer to skip</label>
        <input
          type="radio"
          name="gender"
          
          value={gender}
          onChange={(e) => {
            setGender("prefer to skip");
          }}
        />
       </div>
      </form>   */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FilterByGender;

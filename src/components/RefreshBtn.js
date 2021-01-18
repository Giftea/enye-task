import React from "react";
import "./UserItem.css";

function RefreshBtn({ getUser }) {
  return (
    <div>
      <button onClick={getUser} className="refreshBtn">
        Refresh
      </button>
    </div>
  );
}

export default RefreshBtn;

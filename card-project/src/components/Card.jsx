import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9ufGVufDB8fDB8fHww"
          alt=""
        />
        <button>
          Save
          <Bookmark />
        </button>
      </div>
      <div className="center">
        <h2>{props.name}</h2>
        <h4>{props.position}</h4>
        <div className="time">
          <p>{props.type}</p>
          <p>Senior level</p>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <h4>{props.salary}</h4>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;

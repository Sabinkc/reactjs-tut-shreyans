import React from "react";
import Lefttext from "./Lefttext";
import ImageContainer from "./ImageContainer";

const Center = (props) => {
  return (
    <div className="flex flex-row  justify-between  px-10 py-10">
      <Lefttext />
      <ImageContainer users={props.users}/>
    </div>
  );
};

export default Center;

import React from "react";
import RightCard from "./RightCard";

const ImageContainer = (props) => {
  return (
    <div className=" w-[60%] h-[80vh]  flex items-start flex-nowrap gap-10 overflow-x-auto">
      {
        props.users.map((user, index)=>{
          return <RightCard key={index} user={user}/>
        })
      }
  
    </div>
  );
};

export default ImageContainer;

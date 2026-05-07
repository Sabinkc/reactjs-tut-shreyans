import React from "react";
import { ArrowRight } from "lucide-react";

const RightCard = (props) => {
  return (
    <div className=" h-[80%] w-[40%] object-cover rounded-2xl relative shrink-0">
      <img
        className="w-full h-full object-cover rounded-2xl"
        src={props.user.img}
        alt=""
      />
      <div className="absolute top-1 left-0 flex flex-col justify-between h-full w-full p-5">
        <div className="bg-white rounded-full p-5 w-12 h-12 flex justify-center items-center">
          <h1 className="text-2xl font-bold ">1</h1>
        </div>
        <div>
          <p className="text-sm text-white py-5">{props.user.desc}</p>
          <div className="flex justify-between">
            <button className="bg-blue-500 px-4 py-0.5 text-white  rounded-2xl">
              {props.user.tag}
            </button>
            <div className="bg-blue-500 flex items-center justify-center h-8 w-8 rounded-full">
              <ArrowRight color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;

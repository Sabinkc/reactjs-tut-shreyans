import React from "react";
import { useParams } from "react-router-dom";

const Coursedetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="flex justify-center items-center h-[80vh] w-full">
      <h1>Course detail of {params.id}</h1>
    </div>
  );
};

export default Coursedetail;

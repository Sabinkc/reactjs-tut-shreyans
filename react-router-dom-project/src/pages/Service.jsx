import React from "react";
import { Link, Outlet } from "react-router-dom";

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] w-full gap-30">
      <div className="flex gap-10 underline text-blue-500">
        <Link to="/service/men">
          <h1>Men</h1>
        </Link>
        <Link to="/service/women">
          <h1>Women</h1>
        </Link>
      </div>
      {/* <h1>Service</h1> */}
      <Outlet />
    </div>
  );
};

export default Service;

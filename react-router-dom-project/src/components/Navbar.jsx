import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-gray-500 px-10 py-7 justify-between">
      <h2 className="">Sabin</h2>

      <div className="flex gap-5">
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/about">
          <h1>About</h1>
        </Link>

        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
        <Link to="/service">
          <h1>Service</h1>
        </Link>
        <Link to="/courses">
          <h1>Courses</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

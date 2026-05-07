import React from "react";

const Navbar = () => {
  return (
    <div className="flex px-10 py-5 justify-between">
      <button className="bg-black rounded-2xl text-white px-5 py-1">
        Target Audience
      </button>
      <button className="bg-gray-400 rounded-2xl text-white px-5 py-1">
        Digital banking platform
      </button>
    </div>
  );
};

export default Navbar;

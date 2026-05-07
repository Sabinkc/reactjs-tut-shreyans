import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar2 = (props) => {
  const [theme, settheme] = useContext(ThemeDataContext);

  return (
    <div
      className={`flex justify-between  px-10 py-5 ${theme == "dark" ? "bg-black text-white" : "bg-blue-500 text-black"} `}
    >
      <h1>Sabin</h1>
      <div className="flex gap-10">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact</h1>
        <h1>Theme:{theme}</h1>
      </div>
    </div>
  );
};

export default Navbar2;

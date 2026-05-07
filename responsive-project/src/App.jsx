import React, { useState } from "react";
import { Menu } from "lucide-react";

const App = () => {
  const navValues = ["Home", "Contact", "About"];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between p-5 bg-gray-300">
      <div>
        <h1>Navbar</h1>
      </div>
      <div className="hidden md:flex flex-row gap-5">
        {navValues.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </div>
      <div className="flex justify-end flex-col md:hidden">
        <div
          onClick={function () {
            setOpen(!open);
          }}
        >
          <Menu />
        </div>
        {open ? (
          <div>
            {navValues.map((value, index) => {
              return (
                <p className="bg-gray-300 py-1 px-5 border-white border">
                  {value}
                </p>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default App;

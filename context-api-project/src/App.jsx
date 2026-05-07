import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import ThemeContext, { ThemeDataContext } from "./context/ThemeContext";

const App = () => {
  const data = useContext(ThemeDataContext);
  const theme = data[0];
  const setTheme = data[1];
  return (
    <div>
      <Navbar />
      <button
        onClick={() => {
          if (theme === "light") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
        className="bg-red-500 px-5 py-1 rounded mt-10 ml-10"
      >
        Change Theme
      </button>
    </div>
  );
};

export default App;

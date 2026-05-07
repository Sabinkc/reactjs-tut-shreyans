import React from "react";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

const Lefttext = () => {
  return (
    <div className="h-[80vh] w-[30%] flex flex-col justify-between px-5">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default Lefttext;

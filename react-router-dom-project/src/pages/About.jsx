import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-[80vh] w-full">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-500 rounded px-3 py-1"
      >
        Go to home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-red-500 rounded px-3 py-1"
      >
        Back
      </button>
      <h1>About</h1>
    </div>
  );
};

export default About;

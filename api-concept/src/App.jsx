import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  }

  const [data, setdata] = useState([]);

  async function getUser() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    setdata(response.data);
    console.log("data", data);
  }

  const [count, setcount] = useState(0);

  function increaseCount() {
    setcount(count + 1);
  }

  const [name, setname] = useState("Sabin");
  function toogleName() {
    if (name == "Sabin") {
      setname("Ronaldo");
    } else {
      setname("Sabin");
    }
  }

  useEffect(
    function () {
      console.log("Use effect is running");
    },
    [count, name],
  );

  return (
    <div>
      {/* <button onClick={getUser}>Get data</button>
      {data.map((elem, index) => {
        return <h1>{elem.name}</h1>;
      })} */}
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <h1>{name}</h1>
      <button onClick={toogleName}>Toogle</button>
    </div>
  );
};

export default App;

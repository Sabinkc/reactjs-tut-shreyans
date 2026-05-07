import React from "react";

const App = () => {
  function ButtonClicked() {
    console.log("Button clicked");
  }

  function InputChanged(val) {
    console.log(val);
  }
  return (
    <div>
      <button onClick={ButtonClicked}>Click me</button>
      <br />
      <input
        onChange={function (elem) {
          InputChanged(elem.target.value);
        }}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default App;

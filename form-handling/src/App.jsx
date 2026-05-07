import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted", name);
          setName("");
        }}
      >
        <input
          type="text"
          value={name}
          onChange={function (e) {
            setName(e.target.value);
            console.log(name);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;

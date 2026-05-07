import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ name: "Ronaldo", age: 38 });

  function updateUser() {
    setUser((prev) => {
      return { ...prev, name: "Messi" };
    });
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={updateUser}>Update array</button>
    </div>
  );
};

export default App;

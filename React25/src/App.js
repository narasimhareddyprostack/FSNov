import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Hooks/Counter";
import Login from "./Hooks/Login";
let App = () => {
  return (
    <>
      <Counter />
      <Login />
    </>
  );
};

export default App;

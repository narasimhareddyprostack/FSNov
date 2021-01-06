import React from "react";

import CompA from "./ContextAPI/CompA";
import UserContext from "./ContextAPI/userContext";
let App = () => {
  let userName = "Narasimha";
  return (
    <>
      <UserContext.Provider value={userName}>
        <CompA />
      </UserContext.Provider>
    </>
  );
};

export default App;

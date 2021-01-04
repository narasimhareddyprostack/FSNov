import React, { Provider } from "react";

import CompA from "./ContextAPI/CompA";
import userContext from "./ContextAPI/userContext";
let App = () => {
  let userName = "Narasimha";
  return (
    <>
      <userContext.Provider user={userName}>
        <CompA />
      </userContext.Provider>
    </>
  );
};

export default App;

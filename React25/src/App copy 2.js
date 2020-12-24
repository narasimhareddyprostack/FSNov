import React from "react";
import Message from "./Props/Message";
let App = () => {
  let message = "Good Morning";
  let money = 100;

  let assets = {
    house: "2bhk",
    car: "Mahindra Thar",
    cash: 1000000,
  };

  let details = ["fair", 6];

  let goodName = () => {
    console.log("Good Name....");
  };
  return (
    <React.Fragment>
      <h1>Parent Component : App , property: {message}</h1>
      <Message
        one={message}
        two={money}
        assets={assets}
        three={goodName}
        details={details}
      />
    </React.Fragment>
  );
};
export default App;

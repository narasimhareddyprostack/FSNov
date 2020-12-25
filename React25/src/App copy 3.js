import React from "react";
import Message from "./Props/Message";
class App extends React.Component {
  message = "Good Morning";
  money = 100;

  assets = {
    house: "2bhk",
    car: "Mahindra Thar",
    cash: 1000000,
  };

  details = ["fair", 6];

  goodName = () => {
    console.log("Good Name....");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Parent Component : App </h1>
        <Message
          one={this.message}
          two={this.money}
          assets={this.assets}
          three={this.goodName}
          details={this.details}
        />
      </React.Fragment>
    );
  }
}
export default App;

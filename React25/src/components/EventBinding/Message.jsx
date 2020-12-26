import React, { Component } from "react";
class Message extends Component {
  state = {
    messaage: "Hello",
  };

  changeMessage() {
    console.log("inside changeMessage Class Method");
    this.setState({
      messaage: "Good Mornig",
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.messaage} </h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={this.changeMessage.bind(this)}
        >
          Change Messaage
        </button>
      </div>
    );
  }
}

export default Message;

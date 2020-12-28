import React, { Component } from "react";
class Message extends Component {
  state = {
    messaage: "Hello",
  };

  changeMessage(message) {
    console.log("inside changeMessage Class Method");
    this.setState({
      messaage: message,
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.messaage} </h1>
        <button
          className="btn btn-success btn-sm mr-4"
          onClick={() => {
            this.changeMessage("GM");
          }}
        >
          Change Messaage
        </button>
        <button
          className="btn btn-danger btn-sm mr-4"
          onClick={this.changeMessage.bind(this, "Good Afternoon")}
        >
          Change Messaage
        </button>
        <button
          className="btn btn-primary btn-sm mr-4"
          onClick={this.changeMessage.bind(this, "Good Night")}
        >
          Change Messaage
        </button>
      </div>
    );
  }
}

export default Message;

import React, { Component } from "react";

class Christmas extends Component {
  price = 500;
  state = {
    message: "Hello......",
    menu: {
      food: "Breack Fast",
      price: "50 INR",
    },
  };
  christmasHandler = () => {
    console.log("inside class method");
    this.setState({
      message: "Happy Chrismas",
      menu: {
        food: "Biryani",
        price: "200 INR",
      },
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-5">
            <div className="card">
              <div className="card-header">
                <h1>{this.state.message}</h1>
                <h2>
                  {this.state.menu.food} Price : {this.state.menu.price}
                </h2>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-success btn-sm"
                  type="submit"
                  onClick={this.christmasHandler}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Christmas;

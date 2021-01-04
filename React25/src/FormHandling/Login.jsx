import React, { Component } from "react";

class Login extends Component {
  state = {
    email: ".....@gmail.com",
    password: "",
  };
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="col-md-4 mt-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Email"
                    value={this.state.email}
                    onChange={this.inputHandler}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Please Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.inputHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;

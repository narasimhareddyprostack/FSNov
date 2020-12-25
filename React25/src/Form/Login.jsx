import React, { Component } from "react";

class Login extends Component {
  result = true;
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="user name"
                  />
                </div>
                {this.result ? (
                  <small className="text-danger"> Please Enter User Name</small>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email name"
                  />
                </div>
                {this.result ? (
                  <small className="text-danger"> Please Enter User Name</small>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-success btn-sm"
                    placeholder="password"
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            Navbar
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Products">Product</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </React.Fragment>
      </div>
    );
  }
}
export default Navbar;

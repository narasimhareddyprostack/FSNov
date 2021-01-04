import React, { Component, Consumer } from "react";

import userContext from "./userContext";
function CompC(props) {
  return (
    <React.Fragment>
      <userContext.Consumer>{props.user}</userContext.Consumer>
    </React.Fragment>
  );
}

export default CompC;

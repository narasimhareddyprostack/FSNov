import React from "react";

import UserContext from "./userContext";

function CompC(props) {
  return (
    <React.Fragment>
      <UserContext.Consumer>
        {(user) => {
          return <span>{JSON.stringify(user)}</span>;
        }}
      </UserContext.Consumer>
    </React.Fragment>
  );
}

export default CompC;

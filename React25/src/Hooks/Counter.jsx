import React, { useState } from "react";
let Counter = () => {
  let [counter, setCouter] = useState(5);
  let counterHandler = () => {
    setCouter(counter + 1);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1> Counter: {counter} </h1>
            <button onClick={counterHandler}>Counter</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;

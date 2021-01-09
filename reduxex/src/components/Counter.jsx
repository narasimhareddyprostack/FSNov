import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrAction, decrAction } from "../redux/counter/counter.actions";
let Counter = () => {
  let dispatch = useDispatch();
  let x = useSelector((state) => {
    return state;
  });
  let incrHandler = () => {
    dispatch(incrAction());
  };
  let decrHandler = () => {
    dispatch(decrAction());
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <pre>{JSON.stringify(x)}</pre>
                <h1> Counter : {x.counterNumber} </h1>
              </div>
              <div className="card-body">
                <button className="btn btn-success" onClick={incrHandler}>
                  Incrment
                </button>
                <button className="btn btn-primary ml-5" onClick={decrHandler}>
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;

/*
How to update state property?
with out .setState({}) and useState(..) Hooks
*/

/*
Only best option is state management Tools

Redux has been pretty much no. 1 when it comes to state management libraries

what are other alternatives?
https://areknawo.com/top-5-react-state-management-libraries-in-late-2020/

Redux   -- best state managent library
mobx    -- ?
akita
recoil
hookstate

*/

/*
redux is not part of react JS?

Its 3rd party library
How to use 3rd lib?


what are the required packages for implementing redux?
redux
react-redux


*/

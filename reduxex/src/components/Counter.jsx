import React from "react";
let Counter = () => {

  return (
    <React.Fragment>
      <h1> Counter : {store.counter}</h1>
      <button>Incrment </button>
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


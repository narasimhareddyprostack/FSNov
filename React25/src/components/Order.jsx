/*
import React from "react";
let Order = () => {
  return <></>;
};
export default Order;
*/

// How to create Class Comp?
/*
class extends React.Component
render(){}
return one element 
*/
import React, { Component } from "react";

class Order extends Component {
  render() {
    return <h4> Order Devlivered Successfully</h4>;
  }
}
export default Order;

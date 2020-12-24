import React from "react";

let Message = (props) => {
  return (
    <>
      <h1> Hello, {props.one} </h1>
      <h5> Money : {props.two}</h5>
      <h1> {props.assets.house}</h1>
      <h1> {props.assets.car}</h1>
      <h1> {props.assets.cash}</h1>
      <h4> {JSON.stringify(props)}</h4>
      <p>{props.three()}</p> 
    </>
  );
};
export default Message;

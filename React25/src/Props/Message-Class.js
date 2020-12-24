import React from "react";

class Message extends React.Component {
  render() {
    let { one, two, three, assets, details } = this.props;
    return (
      <>
        <h1>{one}</h1>
        <h1>{two}</h1>

        <h1>{three()}</h1>
        <h1>{assets.car}</h1>
        <h3>{details}</h3>
      </>
    );
  }
}
export default Message;

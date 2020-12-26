import React from "react";

function Simple() {
  let time = "12 AM";

  let changeTime = () => {
    console.log("Testing");
  };
  function gmMessage() {
    console.log("Good Morning");
  }

  return (
    <div>
      <h1>...</h1>
      <button className="btn btn-secondary btn-sm mr-5" onClick={changeTime}>
        Test
      </button>
      <button className="btn btn-success btn-sm" onClick={gmMessage.bind(this)}>
        Good Morning
      </button>
    </div>
  );
}

export default Simple;

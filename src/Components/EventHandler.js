import React, { Component } from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}
export default FunctionClick;

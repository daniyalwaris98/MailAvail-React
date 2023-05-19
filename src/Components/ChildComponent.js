import React, { Component } from "react";

export function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet</button>
    </div>
  );
}

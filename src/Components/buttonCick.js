import React, { Component } from "react";

class ClassClick extends Component {
  eventHandler() {
    console.log("CLICKED");
  }
  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>CLICK</button>
      </div>
    );
  }
}

export default ClassClick;

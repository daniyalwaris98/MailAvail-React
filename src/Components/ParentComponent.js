import React, { Component } from "react";
import { ChildComponent } from "./ChildComponent";

export class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      ParentName: "Parent",
    };
    this.GreetPrents = this.GreetPrents.bind(this);
  }
  GreetPrents = () => {
    alert(`Hello ${this.state.ParentName}`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.GreetPrents} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./styles.css";

import Fill from "./Fill";

export default class App extends Component {
  state = {
    percentage: 6,
    progress: 6
  };

  // handleClick = () => {
  //   let progress = setInterval(async () => {
  //     await frame();
  //   }, 100);
  //   function frame() {
  //     if (this.state.percentage === 100) {
  //       clearInterval(progress);
  //     } else {
  //       this.setState({ percentage: this.state.percentage + 1 });
  //     }
  //   }
  // };

  handleClear = () => {
    console.log("mokkx");
    console.log(this.state.percentage);

    clearInterval(this.state.percentage);
  };

  handleClick = () => {
    if (this.state.percentage === 100) {
      this.handleClear();
    } else {
      const progress = setInterval(() => {
        this.setState({ percentage: this.state.percentage + 1 });
      }, 1000);
      this.setState({ progress: progress });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="barFrame">
          <Fill percentage={this.state.percentage} />
        </div>
        <button onClick={this.handleClick}>Click here to start</button>
      </div>
    );
  }
}

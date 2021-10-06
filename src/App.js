import React, { Component } from "react";
import Board from "./Board/Board";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-board">
          <Board />
        </div>
        <div className="App-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

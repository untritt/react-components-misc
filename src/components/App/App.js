import React, { Component } from "react";
import "./App.css";
import Collapse from "../Collapse/Collapse";

class App extends Component {
  render() {
    const hiddenText = "Hidden text is getting apparent...";
    return (
      <div>
        <Collapse text={hiddenText} />
      </div>
    );
  }
}

export default App;

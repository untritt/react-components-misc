import React, { Component } from "react";
import "./App.css";
import Collapse from "../Collapse/Collapse";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";

class App extends Component {
  render() {
    const hiddenText = "Hidden text is getting apparent...";
    return (
      <div>
        <Collapse text={hiddenText} />
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
      </div>
    );
  }
}

export default App;

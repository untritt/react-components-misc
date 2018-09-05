import React, { Component } from "react";
import "./App.css";
import Collapse from "../Collapse/Collapse";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";
import Carousel from "../Carousel/Carousel";
import getImagePaths from "../../utils/getImagePaths";

class App extends Component {
  state = {
    paths: []
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    getImagePaths().then(paths => {
      this._isMounted &&
        this.setState({
          paths
        });
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const hiddenText = "Hidden text is getting apparent...";
    return (
      <div>
        <Collapse text={hiddenText} />
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <Carousel paths={this.state.paths} />
      </div>
    );
  }
}

export default App;

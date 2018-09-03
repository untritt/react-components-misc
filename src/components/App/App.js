import React, { Component } from "react";
import "./App.css";
import Collapse from "../Collapse/Collapse";
import CheckboxWithLabel from "../CheckboxWithLabel/CheckboxWithLabel";
import Carousel from "../Carousel/Carousel";
import getImagePaths from "../../utils/getImagePaths";

class App extends Component {
  state = {
    images: []
  };

  async componentDidMount() {
    this.setState({
      images: await getImagePaths()
    });
  }

  render() {
    const hiddenText = "Hidden text is getting apparent...";
    return (
      <div>
        <Collapse text={hiddenText} />
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <Carousel images={this.state.images} />
      </div>
    );
  }
}

export default App;

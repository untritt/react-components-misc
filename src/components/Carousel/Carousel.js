import React from "react";
import cn from "classnames";

export default class Carousel extends React.Component {
  state = {
    activeItemIndex: 0
  };

  onClickPrev = e => {
    e.preventDefault();
    const { length } = this.props.paths;
    const prevIndex = (this.state.activeItemIndex + (length - 1)) % length;
    this.setState({
      activeItemIndex: prevIndex
    });
  };

  onClickNext = e => {
    e.preventDefault();
    const { length } = this.props.paths;
    const nextIndex = (this.state.activeItemIndex + 1) % length;
    this.setState({
      activeItemIndex: nextIndex
    });
  };

  renderImages() {
    return this.props.paths.map((image, index) => (
      <div
        className={cn({
          "carousel-item": true,
          active: this.state.activeItemIndex === index
        })}
        key={index}
      >
        <img alt="" className="d-block w-100" src={image} />
      </div>
    ));
  }

  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{this.renderImages()}</div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
          onClick={this.onClickPrev}
        >
          <span className="carousel-control-prev-icon" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
          onClick={this.onClickNext}
        >
          <span className="carousel-control-next-icon" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

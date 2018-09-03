import React from "react";
import cn from "classnames";

export default class Collapse extends React.Component {
  static defaultProps = {
    opened: false
  };

  state = { opened: this.props.opened };

  onClick = e => {
    e.preventDefault();
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <div>
        <p>
          <a className="btn btn-primary" href="#" onClick={this.onClick}>
            Click me
          </a>
        </p>
        <div className={cn({ collapse: true, show: this.state.opened })}>
          <div className="card card-body">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

import _ from "lodash";
import React from "react";

export default class Counter extends React.Component {
  state = {
    log: []
  };

  getFnHandler = fn => e => {
    e.preventDefault();

    this.setState(({ log }) => {
      const newValue = log[0] ? fn(log[0].value) : fn(0);
      const newItem = {
        value: newValue,
        key: _.uniqueId()
      };
      return {
        log: [newItem, ...log]
      };
    });
  };

  onInc = this.getFnHandler(x => x + 1);
  onDec = this.getFnHandler(x => x - 1);

  getClickHandler = key => e => {
    e.preventDefault();
    this.setState(({ log }) => ({
      log: log.filter(item => item.key !== key)
    }));
  };

  renderLog() {
    if (this.state.log.length === 0) {
      return null;
    }
    return (
      <ul className="list-group">
        {this.state.log.map(({ key, value }) => (
          <li
            key={key}
            className="list-group-item"
            onClick={this.getClickHandler(key)}
          >
            <a href="#">{value}</a>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group" role="group">
          <button className="btn btn-secondary inc" onClick={this.onInc}>
            +
          </button>
          <button className="btn btn-secondary dec" onClick={this.onDec}>
            -
          </button>
        </div>
        {this.renderLog()}
      </div>
    );
  }
}

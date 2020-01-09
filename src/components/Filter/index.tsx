//core
import React, { Component } from "react";
import moment from "moment";

// Types
import { IListProps, Colors } from "./types";

// Instruments
import Styles from "./style.module.scss";

export default class Filter extends Component<IListProps> {
  state = {
    didThrow: false
  };

  __didCatch = () => {
    this.setState({
      didThrow: true
    });
  };

  __genColor(count: number = 0): Colors {
    const isInRange = (from: number, to?: number) =>
      count >= from && (!to || count <= to);

    switch (true) {
      case isInRange(0, 2):
        return Colors.gray;
      case isInRange(3, 6):
        return Colors.blue;
      case isInRange(7, 10):
        return Colors.green;
      case isInRange(11):
        return Colors.red;
      default:
        return Colors.white;
    }
  }

  render() {
    const { users, selectMonth } = this.props;
    const { didThrow } = this.state;

    if (didThrow) {
      throw new Error("YOLO");
    }

    const monthsJSX = moment.months().map((month: string, id: number) => {
      const usersGroup = users.get(id);
      const size = usersGroup ? usersGroup.size : 0;
      const color = this.__genColor(size);
      const onMouseOver = () => {
        selectMonth(id);
      };
      const onMouseOut = () => {
        selectMonth(void 0);
      };
      return (
        <li
          className={size === 0 ? Styles["-disabled"] : ""}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          key={`month${id}`}
        >
          <mark style={{ background: color }}></mark>
          <span>
            {month} ({size})
          </span>
        </li>
      );
    });

    return (
      <>
        <ul className={Styles.list}>{monthsJSX}</ul>
        <button onClick={this.__didCatch}>
          Did Catch<span aria-labelledby="" role="img">🚨</span>
        </button>
      </>
    );
  }
}
